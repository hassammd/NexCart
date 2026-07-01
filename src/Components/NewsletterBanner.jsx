import { useState } from "react";

const NewsletterBanner = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="max-w-[var(--container-max)] mx-auto px-4 md:px-12 mt-12 mb-12">
        {/* Main Banner Container with soft gradient and light border */}
        <div className="w-full bg-gradient-to-br from-[#f8faff] to-[#f1f5f9] border border-slate-100 rounded-[24px] px-6 py-12 md:py-14 flex flex-col items-center text-center shadow-sm">
          {/* Main Heading */}
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            Stay Updated with NexCart
          </h2>

          {/* Subtitle description */}
          <p className="text-xs md:text-sm text-slate-400 font-medium mt-2 max-w-md md:max-w-xl leading-relaxed">
            Subscribe to our newsletter for exclusive deals, new arrivals &
            more.
          </p>

          {/* Subscription Input Form */}
          <form className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-3 mt-6 md:mt-8">
            {/* Input field */}
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.value)}
              placeholder="Enter your email address"
              className="w-full sm:flex-1 bg-white border border-slate-200/80 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-primary  transition-all"
            />

            {/* Action button */}
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#0f67ff] hover:bg-blue-600 active:scale-[0.98] text-white text-xs font-semibold tracking-wide rounded-xl px-8 py-3.5 shadow-md shadow-blue-500/10 transition-all cursor-pointer whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewsletterBanner;
