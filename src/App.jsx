import "./App.css";
import Banner from "./Components/Banner";
import CategorySection from "./Components/CategorySection";
import FeaturedProducts from "./Components/FeaturedProducts";
import FeaturesSection from "./Components/FeaturesSection";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <FeaturesSection />
      <CategorySection />
      <FeaturedProducts />
    </>
  );
}

export default App;
