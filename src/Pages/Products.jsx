import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;

  const productsList = [
    {
      id: 1,
      title: "iPhone 15 Pro",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
    },
    {
      id: 2,
      title: "Samsung Galaxy S24",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
    },
    {
      id: 3,
      title: "MacBook Air M3",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=500",
    },
    {
      id: 4,
      title: "Sony WH-1000XM5",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 5,
      title: "Apple Watch Series 9",
      price: 429,
      image:
        "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500",
    },
    {
      id: 6,
      title: "Nike Air Max",
      price: 159,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 7,
      title: "Canon EOS R50",
      price: 749,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    },
    {
      id: 8,
      title: "Gaming Mechanical Keyboard",
      price: 89,
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    },
    {
      id: 9,
      title: "Dell 27-inch Monitor",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    },
    {
      id: 10,
      title: "JBL Flip 6 Speaker",
      price: 129,
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
    },
    {
      id: 11,
      title: "Leather Office Chair",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1505843490701-5be5d3fd8019?w=500",
    },
    {
      id: 12,
      title: "Modern Table Lamp",
      price: 49,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500",
    },
  ];
  const buttonCount = Math.ceil(productsList.length / productsPerPage);
  console.log("this is btn count", buttonCount);
  const visibalProducts = productsList.slice(start, end);
  const buttonHandler = (id) => {
    setCurrentPage(id);
  };

  return (
    <>
      <div className="max-w-[var(--container-max)] mx-auto px-4 md:px-12 py-6">
        {/* Breadcrumbs Row (e.g., Home > Smartphones) */}
        <div className="text-xs text-gray-400 mb-6">
          <span>Home</span>
          <span className="text-gray-600 font-medium">Smartphones</span>
        </div>

        {/* 2. Parent Container: Sidebar aur Grid ko sath jorhne ke liye flex ya grid wrapper */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* ========================================================
            CHILD 1: LEFT SIDEBAR (Filters Section)
            Note: Mobile par hidden rahega, desktop ('lg') par wapis aayega
           ======================================================== */}
          <aside className="w-full lg:w-[280px] shrink-0 border border-gray-100 rounded-2xl p-6 bg-white shadow-sm hidden lg:block">
            {/* Filters content (Brand, Price Range, Rating, etc.) yahan aayega */}
            <div className="font-bold text-gray-900 mb-4 text-lg">Filters</div>
            <div className="space-y-6">
              {/* Filter Group Placeholders */}
              <div className="border-b pb-4">Brand Filter</div>
              <div className="border-b pb-4">Price Range Slider</div>
              <div className="border-b pb-4">Rating Stars Filter</div>
            </div>
          </aside>

          {/* ========================================================
            CHILD 2: RIGHT CONTENT AREA (Header + Product Grid)
           ======================================================== */}
          <main className="flex-1 w-full">
            {/* Main Sub-Header Row: Title, Result Count, and Sorting Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Smartphones
                </h1>
                <p className="text-xs text-gray-400 font-medium mt-1">
                  Showing 1–12 of 22 products
                </p>
              </div>

              {/* Sort & Grid Toggle Controls */}
              <div className="flex items-center gap-3 self-end sm:self-auto">
                {/* Sort Dropdown */}
                <div className="text-xs text-gray-500 flex items-center gap-2">
                  <span>Sort by:</span>
                  <select className="border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-800 font-medium outline-none">
                    <option>Popularity</option>
                    <option>Price: Low to High</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* PRODUCT GRID: Responsive columns spacing loop ke liye */}
            {/* Mobile: 1, Tablet: 2, Large Tablet: 3, Desktop: 4 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Product Card Loop Starts Here */}
              {visibalProducts.map((product, index) => (
                <ProductCard product={product} />
              ))}
              {/* Product Card Loop Ends Here */}
            </div>

            <div className="w-full mt-8 text-center">
              <div className="join gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="join-item btn"
                >
                  <FaAngleLeft />
                </button>
                {[...new Array(buttonCount)].map((_, index) => (
                  <button
                    onClick={() => buttonHandler(index + 1)}
                    className="join-item btn"
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  disabled={currentPage === buttonCount}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="join-item btn"
                >
                  <FaAngleRight />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Products;
