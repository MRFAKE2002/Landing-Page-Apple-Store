//! Pictures

import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import productPic from "../../assets/offer/Iphone 14.webp";

function AdvertisingBanner() {
  return (
    <div className="container m-auto px-6 my-18">
      <div className="flex flex-col lg:flex-row px-4 lg:mr-12 pb-4 bg-lightGray rounded-2xl">
        {/* Image */}
        <img
          src={productPic}
          alt="عکس محصول"
          className="h-68 w-full lg:w-107 lg:h-107 object-cover rounded-3xl relative bottom-12 lg:-right-12"
        />
        <div className="flex flex-col justify-center lg:gap-6">
          {/* Name */}
          <h2 className="font-semibold text-xl lg:text-4xl ">
            خرید آیفون ۱۴ پرومکس ۲۵۶ گیگ
          </h2>
          {/* Price */}
          <div className="flex flex-col lg:flex-row lg:justify-start lg:gap-8 mt-4">
            <span className="line-through text-[#00000045] lg:text-2xl">
              قیمت : ۶۲/۰۰۰/۰۰۰
            </span>
            <span className="font-bold text-site text-xl lg:text-3xl">
              قیمت : ۶۰/۵۰۰/۰۰۰
            </span>
          </div>
          {/* Color */}
          <div className="flex gap-2 lg:gap-4 my-2">
            <div className="bg-[#A848DE] rounded-full w-4 h-4 lg:w-7 lg:h-7"></div>
            <div className="bg-[#ECECEC] rounded-full w-4 h-4 lg:w-7 lg:h-7"></div>
            <div className="bg-[#828282] rounded-full w-4 h-4 lg:w-7 lg:h-7"></div>
          </div>
          {/* Buy */}
          <div className="flex items-center gap-2 mt-2">
            <p className="text-site text-xs lg:text-xl font-semibold lg:ml-4">
              با گارانتی الماس پایتخت همانند گارانتی اپل
            </p>
            <button className="w-23 h-9 lg:h-11 lg:w-41 bg-site text-white rounded-sm font-medium lg:text-xl">
              خرید کنید
            </button>
            <a
              href="#"
              className="w-6 h-7 lg:w-11 lg:h-11 flex items-center justify-center bg-site opacity-50 rounded-lg "
            >
              <ArrowLeft className="lg:w-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertisingBanner;
