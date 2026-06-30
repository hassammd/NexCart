import bannerImage from "../assets/bannerImage.png";

const Banner = () => {
  return (
    <>
      <section className="bg-[#EFF6FF] bg-[url(bannerImage)] max-w-[var(--container-max)] mx-auto rounded-xl mt-6  pt-8">
        <div className="px-4 flex items-center">
          {/* LEFT SIDE - Text (HTML se) */}
          <div className="w-1/2 pl-8">
            <span className="text-primary font-semibold text-sm">
              NEW ARRIVALS
            </span>
            <h1 className="text-h1 font-bold text-text-primary leading-20 mt-2">
              Discover Premium <br /> Products at Best Prices
            </h1>
            <p className="text-xl text-text-secondary mt-4">
              Shop from top categories including smartphones, fragrances,
              <br />
              skincare, furniture & more. Quality you love, deals you trust.
            </p>
            <button className="bg-primary text-white px-6 py-3 cursor-pointer rounded-md mt-6">
              Shop Now →
            </button>
          </div>

          {/* RIGHT SIDE  */}
          <div className="w-1/2 flex items-center justify-end relative">
            <img src={bannerImage} alt="hero" className="w-[60%]" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
