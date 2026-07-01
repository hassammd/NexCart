import earbudsImage from "../assets/earbudsImage.png"; // Aap neechay di gayi link se image download kar k yahan link kar sakte hain

const OfferBanner = () => {
  return (
    <div className="max-w-[var(--container-max)] mx-auto px-4 mt-8">
      {/* Banner Container with Blue Gradient and Wave Glow effects */}
      <div className="relative w-full bg-gradient-to-r from-[#0066ff] to-[#0052cc] rounded-sm overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 md:p-0 md:pl-12 min-h-[160px] md:h-[180px] shadow-md group">
        {/* Absolute Background Blur Waves for Image_ba3c5b.png abstract look */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent opacity-70 pointer-events-none"></div>
        <div className="absolute right-[20%] top-[-20%] w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

        {/* LEFT SIDE - Promotional Text Content */}
        <div className="relative z-10 text-white w-full md:w-2/3 text-center md:text-left flex flex-col justify-center">
          <span className="text-xs md:text-sm font-medium text-blue-100 tracking-wide opacity-90">
            Special Offer
          </span>
          <h2 className="text-3xl text-white md:text-4xl font-bold tracking-tight mt-1 md:mt-2 leading-none">
            Up to 30% Off
          </h2>
          <p className="text-sm md:text-base text-blue-100/90 font-normal mt-2 md:mt-3 tracking-wide">
            On selected items across all categories
          </p>
        </div>

        {/* RIGHT SIDE - Separate Earbuds Image */}
        <div className="relative z-10 w-full md:w-1/3  md:h-full flex items-end justify-center md:justify-end self-end mt-4 md:mt-0 pr-0 md:pr-12">
          <img
            src={earbudsImage}
            alt="Premium Earbuds Offer"
            className=" absolute top-6 object-contain block drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 origin-bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
