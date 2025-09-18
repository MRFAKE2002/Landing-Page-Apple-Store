//! Components
import AmazingOffer from "./components/amazingOffer/AmazingOffer";
import BannerSlider from "./components/BannerSlider";
import Categories from "./components/Categories";
import Navbar from "./components/layout/Navbar";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Navbar />
      <Categories />
      <BannerSlider />
      <AmazingOffer />
      <Product />
    </>
  );
}

export default App;
