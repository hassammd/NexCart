import "./App.css";
import Banner from "./Components/Banner";
import CategorySection from "./Components/CategorySection";
import FeaturedProducts from "./Components/FeaturedProducts";
import FeaturesSection from "./Components/FeaturesSection";
import Navbar from "./Components/Navbar";
import NewArrivalsSlider from "./Components/NewArrivalsSlider";
import OfferBanner from "./Components/OfferBanner";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <FeaturesSection />
      <CategorySection />
      <FeaturedProducts />
      <OfferBanner />
      <NewArrivalsSlider />
    </>
  );
}

export default App;
