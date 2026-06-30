import { BiSupport } from "react-icons/bi";
import { BsArrowRepeat } from "react-icons/bs";
import { FiTruck, FiShield, FiRefreshCw, FiPhoneCall } from "react-icons/fi";

const FeaturesSection = () => {
  return (
    <div className="max-w-[var(--container-max)] mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-100 rounded-xl bg-white p-6 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
        {/* Free Shipping */}
        <div className="flex items-center gap-4 py-4 sm:p-4 justify-center sm:justify-start lg:justify-center first:pt-0 last:pb-0 sm:first:pt-4 sm:last:pb-4">
          <FiTruck className="w-8 h-8 text-primary stroke-[1.5]" />
          <div>
            <h4 className=" font-bold text-gray-900">Free Shipping</h4>
            <p className=" text-gray-400 mt-0.5">On orders over $49</p>
          </div>
        </div>

        {/* Secure Payment */}
        <div className="flex items-center gap-4 py-4 sm:p-4 justify-center sm:justify-start lg:justify-center">
          <FiShield className="w-8 h-8 text-primary stroke-[1.5]" />
          <div>
            <h4 className=" font-bold text-gray-900">Secure Payment</h4>
            <p className=" text-gray-400 mt-0.5">100% secure checkout</p>
          </div>
        </div>

        {/* Easy Returns */}
        <div className="flex items-center gap-4 py-4 sm:p-4 justify-center sm:justify-start lg:justify-center">
          <BsArrowRepeat className="w-9 h-9 text-primary" />

          <div>
            <h4 className=" font-bold text-gray-900">Easy Returns</h4>
            <p className=" text-gray-400 mt-0.5">30-day return policy</p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="flex items-center gap-4 py-4 sm:p-4 justify-center sm:justify-start lg:justify-center">
          <BiSupport className="w-9 h-9 text-primary" />
          <div>
            <h4 className=" font-bold text-gray-900">24/7 Support</h4>
            <p className=" text-gray-400 mt-0.5">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
