//! React
import { useState } from "react";

//! Icons
import { Menu, Heart, ShoppingCart, Search } from "lucide-react";

//! Shadcn
import { IconButton } from "../ui/shadcn-io/icon-button";

//! Pictures
import appStorePic from "../../assets/header/App Store.webp";

function Navbar() {
  //! States
  const [liked, setLiked] = useState(false);

  return (
    <>
      <nav className="h-14 md:h-[70px] bg-site flex items-center justify-center">
        <p className="text-white text-sm md:text-lg font-bold">
          تا ۷۰٪ تخفیف برای لوازم جانبی اورجینال آیفون
        </p>
      </nav>
      <header className="max-lg:shadow-[0_0_20px_-5_#0000001A] lg:border border-[#E6E6E6]">
        <div className="container m-auto p-6 sm:px-2 sm:py-8 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            {/* Mobile Menu */}
            <span className="md:hidden">
              <Menu />
            </span>
            {/* Site Logo */}
            <div className="flex items-center gap-1 md:gap-5 text-site font-semibold">
              <img
                className="w-8 md:w-13"
                src={appStorePic}
                alt="apple store"
              />
              <p className="w-5 leading-4 md:w-fit md:text-[30px]">اپل استور</p>
            </div>
            {/* Search Input & Products */}
            <div className="hidden lg:flex gap-2">
              {/* Products */}
              <button className="w-35 h-11 flex items-center justify-center gap-3 bg-site rounded-full">
                <Menu className="text-white" />
                <span className="text-white">محصولات</span>
              </button>
              {/* Search Input */}
              <div className="w-90 flex justify-between gap-3 bg-[#FBFBFB] py-2.5 px-4 rounded-full">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="جستجو کنید"
                  className="placeholder:text-[#282828] placeholder:font-light focus:outline-0"
                />
                <Search />
              </div>
            </div>
            {/* Buttons */}
            <div className="flex gap-3">
              <button className="relative cursor-pointer">
                <ShoppingCart />
                <span className="block w-4 h-4 text-center text-[10px] bg-site rounded-full text-white absolute top-1 -right-1">
                  0
                </span>
              </button>
              <div className="relative">
                {/* Heart with red particles */}
                <IconButton
                  icon={Heart}
                  active={liked}
                  color={[239, 68, 68]} // red-500
                  size="md"
                  className="relative"
                  onClick={() => setLiked(!liked)}
                />
                <span className="block w-3 h-3 text-center text-[10px] bg-black rounded-full text-white absolute top-1 right-1">
                  0
                </span>
              </div>
            </div>
          </div>
          {/* Mobile Search Input */}
          <div className="w-full flex lg:hidden justify-between bg-[#F1F1F1] py-2.5 px-4 rounded-full">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="جستجو کنید"
              className="placeholder:text-[#282828] placeholder:font-light focus:outline-0"
            />
            <Search />
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
