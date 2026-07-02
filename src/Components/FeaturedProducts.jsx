import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

// Dummy Data array bilkul image jaisa card dynamic karne ke liye
const products = [
  {
    id: 1,
    title: "Apple iPhone 9 (64GB)",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500", // Replace with your local path/assets
    discount: "Save 12%",
    price: "$549.00",
    oldPrice: "$624.00",
    rating: "4.69",
    reviews: "884",
  },
  {
    id: 2,
    title: "Apple MacBook Pro 17",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    discount: "Save 15%",
    price: "$1749.00",
    oldPrice: "$2050.00",
    rating: "4.65",
    reviews: "558",
  },
  {
    id: 3,
    title: "Chanel Coco Mademoiselle",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
    discount: "Save 19%",
    price: "$97.99",
    oldPrice: "$120.00",
    rating: "4.78",
    reviews: "425",
  },
  {
    id: 4,
    title: "The Ordinary Niacinamide 10%",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500",
    discount: "Save 13%",
    price: "$5.90",
    oldPrice: "$6.80",
    rating: "4.62",
    reviews: "236",
  },
];

const FeaturedProducts = () => {
  return (
    <div className="max-w-[var(--container-max)] mx-auto px-4 mt-12">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          Featured Products
        </h2>
        <a
          href="#"
          className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1 transition-colors"
        >
          View All Products <span className="text-base">→</span>
        </a>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-100 rounded-xl p-4 bg-white flex flex-col justify-between group relative"
          >
            <div>
              {/* Top Action Tags */}
              <div className="flex items-center justify-between">
                <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                  {product.discount}
                </span>
                <button className="text-gray-400 hover:text-red-500 p-1.5 rounded-full transition-colors bg-gray-50">
                  <FiHeart className="w-4 h-4" />
                </button>
              </div>

              {/* Product Image Wrapper */}
              <div className="w-full h-48 flex items-center justify-center my-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[40px]">
                {product.title}
              </h3>

              {/* Price Row */}
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-base font-bold text-gray-900">
                  {product.price}
                </span>
                <span className="text-xs text-gray-300 line-through font-medium">
                  {product.oldPrice}
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
                  {product.rating} ({product.reviews})
                </span>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-1.5 mt-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span className="text-xs text-emerald-600 font-medium">
                  In Stock
                </span>
              </div>
            </div>

            {/* Add To Cart Button */}
            <button className="w-full bg-primary hover:bg-primary-hover cursor-pointer text-white text-xs font-semibold py-2.5 px-4 rounded-sm mt-5 flex items-center justify-center gap-2 transition-colors">
              <FiShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
