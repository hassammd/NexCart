import { FaStar, FaRegStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="border border-gray-100 rounded-xl p-4 bg-white flex flex-col justify-between group relative"
    >
      <div>
        {/* Top Action Tags */}
        <div className="flex items-center justify-between">
          <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
            {/* {product.discount} */}
          </span>
          <button className="text-gray-400 hover:text-red-500 p-1.5 rounded-full transition-colors bg-gray-50">
            <FiHeart className="w-4 h-4" />
          </button>
        </div>

        {/* Product Image Wrapper */}
        <div className="w-full  flex items-center justify-center my-4 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2  ">
          {product.title}
        </h3>

        {/* Price Row */}
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-base font-bold text-gray-900">
            {product.price}
          </span>
          <span className="text-xs text-gray-300 line-through font-medium">
            {/* {product.oldPrice} */}
          </span>
        </div>

        {/* Ratings Row */}
        <div className="flex items-center gap-1 mt-2">
          <div className="flex text-amber-400 gap-0.5">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="text-xs text-gray-400 font-medium ml-1">
            {/* {product.rating} ({product.reviews}) */}
          </span>
        </div>

        {/* Stock Status */}
        <div className="flex items-center gap-1.5 mt-3">
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          <span className="text-xs text-emerald-600 font-medium">In Stock</span>
        </div>
      </div>

      {/* Add To Cart Button */}
      <button className="w-full bg-primary hover:bg-primary-hover cursor-pointer text-white text-xs font-semibold py-2.5 px-4 rounded-sm mt-5 flex items-center justify-center gap-2 transition-colors">
        {/* <FiShoppingCart className="w-4 h-4" /> */}
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
