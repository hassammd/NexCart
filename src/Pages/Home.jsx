import Banner from "../Components/Banner";
import CategorySection from "../Components/CategorySection";
import FeaturedProducts from "../Components/FeaturedProducts";
import FeaturesSection from "../Components/FeaturesSection";
import NewArrivalsSlider from "../Components/NewArrivalsSlider";
import NewsletterBanner from "../Components/NewsletterBanner";
import OfferBanner from "../Components/OfferBanner";
import TestimonialCard from "../Components/TestimonialCard";

const Home = () => {
  return (
    <>
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
};

export default Home;
