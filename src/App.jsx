import "./App.css";
import Banner from "./Components/Banner";
import CategorySection from "./Components/CategorySection";
import FeaturedProducts from "./Components/FeaturedProducts";
import FeaturesSection from "./Components/FeaturesSection";
import Navbar from "./Components/Navbar";
import NewArrivalsSlider from "./Components/NewArrivalsSlider";
import NewsletterBanner from "./Components/NewsletterBanner";
import OfferBanner from "./Components/OfferBanner";
import TestimonialCard from "./Components/TestimonialCard";

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
      <TestimonialCard />
      <NewsletterBanner />
    </>
  );
}

export default App;
