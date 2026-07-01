// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const NewArrivalsSlider = () => {
  const newArrivals = [
    {
      id: 1,
      title: "Samsung Galaxy Note 20",
      price: "$699.00",
      rating: "4.44",
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400",
    },
    {
      id: 2,
      title: "Calvin Klein CK One",
      price: "$49.99",
      rating: "4.44",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
    },
    {
      id: 3,
      title: "Essence Mascara Lash Princess",
      price: "$9.99",
      rating: "4.71",
      image:
        "https://images.unsplash.com/photo-1631214503051-a7e88da4f452?w=400",
    },
    {
      id: 4,
      title: "Annibale Colombo Bed",
      price: "$1899.99",
      rating: "4.19",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400",
    },
    {
      id: 5,
      title: "Mens Casual Slim Fit",
      price: "$23.99",
      rating: "4.24",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
    },
    {
      id: 6,
      title: "Aviator Sunglasses",
      price: "$15.99",
      rating: "4.45",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
    },
    {
      id: 6,
      title: "Aviator Sunglasses",
      price: "$15.99",
      rating: "4.45",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
    },
    {
      id: 6,
      title: "Aviator Sunglasses",
      price: "$15.99",
      rating: "4.45",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
    },
    {
      id: 6,
      title: "Aviator Sunglasses",
      price: "$15.99",
      rating: "4.45",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
    },
    {
      id: 6,
      title: "Aviator Sunglasses",
      price: "$15.99",
      rating: "4.45",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
    },
    {
      id: 6,
      title: "Aviator Sunglasses",
      price: "$15.99",
      rating: "4.45",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
    },
    {
      id: 6,
      title: "Aviator Sunglasses",
      price: "$15.99",
      rating: "4.45",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
    },
    {
      id: 6,
      title: "Aviator Sunglasses",
      price: "$15.99",
      rating: "4.45",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
    },
    {
      id: 6,
      title: "Aviator Sunglasses",
      price: "$15.99",
      rating: "4.45",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
    },
    {
      id: 6,
      title: "Aviator Sunglasses",
      price: "$15.99",
      rating: "4.45",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
    },
    {
      id: 6,
      title: "Aviator Sunglasses",
      price: "$15.99",
      rating: "4.45",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
    },
  ];
  return (
    <>
      <div className="max-w-[var(--container-max)] mx-auto px-12 mt-12 relative group">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl md:text-2xl font-bold text-gray-900">
            New Arrivals
          </h2>
          <a
            href="#"
            class="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1 transition-colors"
          >
            View All Products <span class="text-base">→</span>
          </a>
        </div>
        {/* Custom Left Arrow Button */}
        <button className="custom-prev absolute left-5 top-1/2 -translate-y-1/2 z-30 bg-white border border-gray-200 shadow-md hover:bg-primary hover:text-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer">
          <FiChevronLeft className="w-6 h-6" />
        </button>

        {/* Custom Right Arrow Button */}
        <button className="custom-next absolute right-5 top-1/2 -translate-y-1/2 z-30 bg-white border border-gray-200 shadow-md hover:bg-primary hover:text-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer">
          <FiChevronRight className="w-6 h-6" />
        </button>
        <Swiper
          //   navigation={true}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            480: { slidesPerView: 2 }, // Mobile/Small screens par 2 cards
            768: { slidesPerView: 3 }, // Tablets par 3 cards
            1024: { slidesPerView: 6 }, // Laptops aur Desktops par fixed 4 cards show honge
          }}
          className="mySwipe"
        >
          {newArrivals.map((item) => {
            return (
              <SwiperSlide className="">
                <div className="border border-gray-100 rounded-xl p-4 bg-white shadow-sm flex flex-col justify-between items-center text-center h-[340px] hover:border-blue-200 transition-all duration-300">
                  {/* Image Wrapper */}
                  <div className="w-full h-40 flex items-center justify-center overflow-hidden mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="w-full flex flex-col items-center flex-1 justify-end">
                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[40px]">
                      {item.title}
                    </h3>

                    <span className="text-base font-bold text-gray-900 mt-2 block">
                      {item.price}
                    </span>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-2 justify-center">
                      <div className="flex text-amber-400 gap-0.5">
                        {/* {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className="w-3.5 h-3.5 fill-current"
                          />
                        ))} */}
                      </div>
                      <span className="text-xs text-gray-400 font-medium ml-1">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default NewArrivalsSlider;
