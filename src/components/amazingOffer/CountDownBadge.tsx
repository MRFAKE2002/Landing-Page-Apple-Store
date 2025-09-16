//! React

// اگر این کامپوننت را در Next.js استفاده می‌کنی و صفحه‌ات Server Component است،
// یا این فایل را با dynamic import و ssr: false بارگذاری کن، یا در خط اول "use client" بگذار.
import React, { useEffect, useRef, useState } from "react";

//! Types

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownProps = {
  /** زمان پایان؛ می‌تواند Date یا رشتهٔ قابل تبدیل به Date باشد */
  endAt: string | Date;

  /** تنظیمات ظاهری (اختیاری) */
  highlightBgClass?: string; // مثال: "bg-orange-500"
  highlightTextClass?: string; // مثال: "text-white"
  mutedBgClass?: string; // مثال: "bg-white"
  mutedTextClass?: string; // مثال: "text-orange-500"

  /** آیا زیر هر عدد برچسب نمایش داده شود (روز/ساعت/دقیقه/ثانیه) */
  showLabels?: boolean;

  /** اگر true باشد و days === 0، کارت روز کاملاً مخفی می‌شود */
  hideZeroDays?: boolean;

  /** کلاس‌های اضافی wrapper */
  className?: string;
};

//! Custom Functions

/** محاسبهٔ زمان باقیمانده تا endAt به ثانیه و تبدیل به روز/ساعت/دقیقه/ثانیه */
function calculateTimeLeft(endAt: string | Date): TimeLeft {
  const endDate = endAt instanceof Date ? endAt : new Date(endAt);

  // اگر تاریخ نامعتبر باشد، مقدار صفر برمی‌گردانیم
  if (Number.isNaN(endDate.getTime())) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const now = new Date();

  // diffSeconds = تعداد ثانیه‌های بین endDate و now
  // Math.floor چون می‌خواهیم تعداد کامل ثانیه را داشته باشیم
  // Math.max با 0 تضمین می‌کند که عدد منفی (زمان گذشته) را به صفر تبدیل کنیم
  let diffSeconds = Math.max(
    0,
    Math.floor((endDate.getTime() - now.getTime()) / 1000)
  );

  const days = Math.floor(diffSeconds / (24 * 3600)); // 1 روز = 24 * 3600 ثانیه = 86400
  diffSeconds -= days * 24 * 3600;

  const hours = Math.floor(diffSeconds / 3600);
  diffSeconds -= hours * 3600;

  const minutes = Math.floor(diffSeconds / 60);
  diffSeconds -= minutes * 60;

  const seconds = diffSeconds;

  return { days, hours, minutes, seconds };
}

/** فرمت دو رقمی برای ساعت/دقیقه/ثانیه */
function formatTwoDigits(n: number) {
  return String(n).padStart(2, "0");
}

//! Component

export default function CountdownBadgeClean({
  endAt,
  highlightBgClass = "bg-site",
  highlightTextClass = "text-[#FFF1EB]",
  mutedBgClass = "bg-[#FFF1EB]",
  mutedTextClass = "text-site",
  showLabels = true,
  hideZeroDays = false,
  className = "",
}: CountdownProps) {
  //! States

  // state: زمان باقیمانده (روز/ساعت/دقیقه/ثانیه)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(endAt)
  );

  //! Ref

  // نگهداری id مربوط به setInterval تا بتوانیم آن را پاک کنیم
  const intervalIdRef = useRef<number | null>(null);

  //! UseEffect

  useEffect(() => {
    // آپدیت فوری (مهم اگر endAt از props تغییر کرده باشد)
    setTimeLeft(calculateTimeLeft(endAt));

    // هر ثانیه زمان را آپدیت کن
    intervalIdRef.current = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft(endAt));
    }, 1000);

    // cleanup هنگام unmount یا وقتی endAt تغییر کند
    return () => {
      if (intervalIdRef.current !== null) {
        window.clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    };
  }, [endAt]);

  // تشخیص واحد فعال (های‌لایت) با اولویت: days > hours > minutes > seconds
  function determineActiveUnit(): keyof TimeLeft {
    if (timeLeft.days > 0) return "days";
    if (timeLeft.hours > 0) return "hours";
    if (timeLeft.minutes > 0) return "minutes";
    return "seconds";
  }

  const activeUnit = determineActiveUnit();

  // آرایهٔ واحدهای زمانی برای map کردن در JSX
  const timeUnits: Array<{
    key: keyof TimeLeft;
    label: string;
    numericValue: number;
    displayValue: string;
  }> = [
    {
      key: "seconds",
      label: "ثانیه",
      numericValue: timeLeft.seconds,
      displayValue: formatTwoDigits(timeLeft.seconds),
    },
    {
      key: "minutes",
      label: "دقیقه",
      numericValue: timeLeft.minutes,
      displayValue: formatTwoDigits(timeLeft.minutes),
    },
    {
      key: "hours",
      label: "ساعت",
      numericValue: timeLeft.hours,
      displayValue: formatTwoDigits(timeLeft.hours),
    },
    {
      key: "days",
      label: "روز",
      numericValue: timeLeft.days,
      displayValue: String(timeLeft.days),
    },
  ];

  return (
    <div
      className={`inline-flex items-center gap-3 rounded-lg ${className}`}
      role="region"
      aria-label="تایمر شمارش معکوس"
    >
      <div
        className="inline-flex items-center gap-3"
        role="timer"
        aria-live="polite"
      >
        {timeUnits
          // اگر بخواهیم روز صفر را مخفی کنیم، ابتدا فیلتر می‌کنیم
          .filter(
            (unit) =>
              !(hideZeroDays && unit.key === "days" && unit.numericValue === 0)
          )
          .map((unit) => {
            const isActive = activeUnit === unit.key;

            const baseClasses = "container flex flex-col items-center justify-center w-8 lg:w-17 py-2 px-3 rounded-lg border transition-all duration-200 select-none";
            const activeClasses = `${highlightBgClass} ${highlightTextClass} border-transparent`;
            const inactiveClasses = `${mutedBgClass} ${mutedTextClass} border-orange-200`;

            const containerClass = `${baseClasses} ${
              isActive ? activeClasses : inactiveClasses
            }`;

            return (
              <div
                key={unit.key}
                className={containerClass}
              >
                <span className="block w-8 h8 lg:w-16 lg:h-16 text-center leading-8 lg:leading-16 rounded-lg text-xl md:text-2xl font-semibold">
                  {unit.displayValue}
                </span>
                {showLabels && (
                  <span
                    className={`text-xs lg:text-base text-center font-medium mt-1 ${
                      isActive ? "opacity-90" : "opacity-80"
                    }`}
                  >
                    {unit.label}
                  </span>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
