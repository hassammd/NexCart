import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaApplePay,
  FaGooglePay,
} from "react-icons/fa6"; // Standard payment icons ke liye

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-[var(--container-max)] mx-auto px-4 md:px-12">
        {/* Top Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 pb-12">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col md:col-span-1">
            <h3 className="text-xl font-bold text-slate-900">
              NexCart<span className="text-blue-600">.</span>
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-4 leading-relaxed max-w-[200px]">
              Your one-stop destination for premium products at the best prices.
              Quality you can trust.
            </p>
            {/* Social Icons Row */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-sm hover:opacity-90 transition-opacity"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center text-sm hover:opacity-90 transition-opacity"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center text-sm hover:opacity-90 transition-opacity"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center text-sm hover:opacity-90 transition-opacity"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                "Shop All",
                "Categories",
                "Deals & Offers",
                "New Arrivals",
                "Best Sellers",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-slate-400 font-medium hover:text-blue-600 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Customer Service
            </h4>
            <ul className="space-y-2.5">
              {[
                "Contact Us",
                "Track Order",
                "Returns & Refunds",
                "Shipping Info",
                "FAQ",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-slate-400 font-medium hover:text-blue-600 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                "About Us",
                "Careers",
                "Privacy Policy",
                "Terms of Service",
                "Blog",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-slate-400 font-medium hover:text-blue-600 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Payment Gateways */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              We Accept
            </h4>
            <div className="flex flex-wrap gap-2 mt-4">
              {/* Visa */}
              <div className="border border-slate-100 rounded px-2 py-1 bg-white shadow-sm text-[#1A1F71] text-2xl flex items-center justify-center h-8 w-12">
                <FaCcVisa />
              </div>
              {/* Mastercard */}
              <div className="border border-slate-100 rounded px-2 py-1 bg-white shadow-sm text-[#EB001B] text-2xl flex items-center justify-center h-8 w-12">
                <FaCcMastercard />
              </div>
              {/* Paypal */}
              <div className="border border-slate-100 rounded px-2 py-1 bg-white shadow-sm text-[#003087] text-2xl flex items-center justify-center h-8 w-12">
                <FaCcPaypal />
              </div>
              {/* Apple Pay */}
              <div className="border border-slate-100 rounded px-2 py-1 bg-white shadow-sm text-black text-2xl flex items-center justify-center h-8 w-12">
                <FaApplePay />
              </div>
              {/* Google Pay */}
              <div className="border border-slate-100 rounded px-2 py-1 bg-white shadow-sm text-slate-700 text-2xl flex items-center justify-center h-8 w-12">
                <FaGooglePay />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-slate-100 pt-8 text-center">
          <p className="text-[11px] text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} NexCart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
