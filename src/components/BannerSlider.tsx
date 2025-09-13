//! Swiper

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCreative } from "swiper/modules";

//! Swiper Styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

//! Pictures

import appleVision from "../assets/banner/Apple Vision Pro 2024 1.webp";
import appleVisionFront from "../assets/banner/apple-vision-front.webp";
import appleVisionBack from "../assets/banner/apple-vision-back.webp";
import appleVisionLeft from "../assets/banner/apple-vision-left.webp";
import appleVisionRight from "../assets/banner/apple-vision-right.webp";
import appleVisionUp from "../assets/banner/apple-vision-up.webp";
import appleVisionUp2 from "../assets/banner/apple-vision-up2.webp";

//! Slides

const slides = [
  { src: appleVisionFront, alt: "Front View" },
  { src: appleVisionBack, alt: "Back View" },
  { src: appleVisionLeft, alt: "Left View" },
  { src: appleVisionRight, alt: "Right View" },
  { src: appleVisionUp, alt: "Up View 1" },
  { src: appleVisionUp2, alt: "Up View 2" },
];

export default function BannerSidebar() {
  return (
    <main className="my-16 md:my-24">
      <div className="flex flex-col items-center gap-2 mb-6">
        <img className="w-40" src={appleVision} alt="apple vision" />
        <p className="font-medium">اولین نفری باشید که ویژن پرو می‌خرید</p>
        <button className="bg-site w-28 lg:w-35 h-9 lg:h-9 text-sm text-white rounded lg:rounded-lg md:mt-4 lg:shadow-[0_0_15px_3px_#ff510b66] cursor-pointer">
          خرید کنید
        </button>
      </div>

      <div
        className="swiper-wrapper-container"
        style={{
          margin: "0 auto",
          perspective: 1400,
        }}
      >
        <Swiper
          modules={[Pagination, Autoplay, EffectCreative]}
          effect={"creative"}
          creativeEffect={{
            // تنظیمات افکت: این اعداد رو تغییر بدی شدت 3D عوض میشه
            prev: {
              // shadow: true,
              translate: ["-120%", 0, -700],
              rotate: [0, 40, 0],
              scale: 0.85,
            },
            next: {
              // shadow: true,
              translate: ["120%", 0, -700],
              rotate: [0, -40, 0],
              scale: 0.85,
            },
          }}
          slidesPerView={1.25} // یک اسلاید کامل + بخشی از اسلاید بعدی
          centeredSlides={true}
          loop={true}
          spaceBetween={24}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1.05, spaceBetween: 8 },
            640: { slidesPerView: 1.15, spaceBetween: 12 },
            1024: { slidesPerView: 1.25, spaceBetween: 20 },
            1280: { slidesPerView: 1.4, spaceBetween: 24 }, // دسکتاپ بزرگ‌تر: مقدار بیشتر برای دیدن اسلایدهای اطراف
          }}
          className="mySwiper"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="slide-inner rounded-2xl overflow-hidden"
                style={{
                  width: 1200,
                  height: 386,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.02))",
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  style={{
                    width: "1200px",
                    height: "386px",
                    objectFit: "contain",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
