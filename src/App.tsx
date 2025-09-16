//! Components
import AmazingOffer from "./components/amazingOffer/AmazingOffer";
import BannerSlider from "./components/BannerSlider";
import Categories from "./components/Categories";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Categories />
      <BannerSlider />
      <AmazingOffer />
    </>
  );
}

export default App;
