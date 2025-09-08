//! Pictures
import airPods from "../assets/categories/AirPods Pro.webp";
import appleTV from "../assets/categories/Apple TV HD.webp";
import appleWatch from "../assets/categories/Apple Watch 7 Front.webp";
import homePod from "../assets/categories/HomePod mini.webp";
import magSageAdapter from "../assets/categories/MagSafe Power Adapter.webp";
import iPad from "../assets/categories/iPad Pro Back.webp";
import iPhone from "../assets/categories/iPhone 13 Pro Back.webp";

//! Data
const mockCategoriesData = [
  {
    title: "اپل واچ",
    src: appleWatch,
  },
  {
    title: "ایرپاد",
    src: airPods,
  },
  {
    title: "آیپد",
    src: iPad,
  },
  {
    title: "آیفون",
    src: iPhone,
  },
  {
    title: "شارژر مگ سیف",
    src: magSageAdapter,
  },
  {
    title: "هوم پاد",
    src: homePod,
  },
  {
    title: "اپل تی وی",
    src: appleTV,
  },
];

function Categories() {
  //! JSX

  return (
    <main className="container m-auto flex flex-wrap justify-center md:justify-between gap-x-3 gap-y-5 mt-8 md:bg-lightGray rounded-2xl md:py-7 md:px-10 lg:px-36">
      {mockCategoriesData.map((category, index) => (
        <a
          key={index}
          href="#"
          className="w-20 h-20 md:w-fit flex flex-col items-center justify-center gap-2 bg-lightGray rounded-lg"
        >
          <img src={category.src} alt="" className="w-8 md:w-11" />
          <span className="text-xs md:text-base font-medium">
            {category.title}
          </span>
        </a>
      ))}
    </main>
  );
}

export default Categories;
