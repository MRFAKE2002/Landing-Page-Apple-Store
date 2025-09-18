//! Icons
import { ArrowLeft } from "lucide-react";

//! Pictures
import appleWatch from "../assets/product/Apple Watch.webp";
import ipad from "../assets/product/Ipad.webp";
import laptop from "../assets/product/Laptop.webp";
import headset from "../assets/product/Headset.webp";

//! Data

const productData = [
  {
    src: laptop,
    name: "مک بوک ایر 13.6 اینچ M2 ظرفیت 8/256 گیگ مدل 2022",
    color: ["#828282", "#ECECEC", "#FFDA79"],
    price: "۷۵/۰۰۰/۰۰۰ تومان",
  },
  {
    src: ipad,
    name: "آیپد پرو 11 اینچ M2 ظرفیت 128 گیگ",
    color: ["#828282", "#ECECEC"],
    price: "۴۵/۰۰۰/۰۰۰ تومان",
  },
  {
    src: appleWatch,
    name: "اپل واچ اولترا تیتانیومی با بند لوپ اورنج آلپاین",
    color: ["#E24C21"],
    price: "۴۱/۲۰۰/۰۰۰ تومان",
  },
  {
    src: headset,
    name: "ایرپاد مکس هدفون بلوتوث اپل",
    color: ["#ECECEC"],
    price: "۲۷/۳۰۰/۰۰۰ تومان",
  },
];

function Product() {
  return (
    <>
      <div className="container m-auto flex justify-between items-center ">
        <p className="font-semibold text-lg lg:text-3xl text-[#020202]">
          پرفروشترین محصولات
        </p>
        <a
          href="#"
          className="flex items-center gap-3 text-xs lg:text-3xl lg:font-semibold leading-3"
        >
          مشاهده همه <ArrowLeft className="text-site w-5 h-5 lg:w-12 lg:h-12" />
        </a>
      </div>
      <div className="flex gap-4 md:gap-10 overflow-x-auto pr-6 my-6 no-scrollbar md:container md:m-auto md:my-14">
        {productData.map((product, index) => (
          <div
            key={index}
            className="bg-[#F6F6F6] h-82 min-w-50 md:min-w-80 md:h-135 rounded-xl p-2 md:p-3"
          >
            {/* Image & Color */}
            <div className="bg-white h-45 md:h-75 w-full flex flex-col justify-evenly items-center rounded-lg">
              <div className="flex justify-center gap-2">
                {product.color.map((color, index) => (
                  <div
                    key={index}
                    className="w-3 h-3 md:w-5 md:h-5 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
              <img src={product.src} alt="" className="w-40 md:w-65" />
            </div>
            {/* Name & Price */}
            <div className="flex flex-col divide-y divide-[#E4E4E4] mt-2">
              <h3 className="text-sm md:text-lg text-center font-semibold px-3 md:px-8 md:leading-9 py-2 md:py-5">
                {product.name}
              </h3>
              <p className="text-center py-2 md:text-xl md:py-4">
                {product.price}
              </p>
            </div>
            {/* Button */}
            <div className="flex justify-end items-end">
              <button className="w-6 h-6 md:w-10 md:h-10 leading-6 md:leading-10 text-white text-2xl md:text-4xl bg-site rounded-md md:rounded-lg">
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
