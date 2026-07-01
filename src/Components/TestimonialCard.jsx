// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { MdVerified } from "react-icons/md";

const TestimonialCard = () => {
  const testimonial = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Verified Buyer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150", // Replace with your local path/avatar
      rating: 5,
      text: "Amazing quality and fast delivery. NexCart is my go-to store now!",
    },
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Verified Buyer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150", // Replace with your local path/avatar
      rating: 5,
      text: "Amazing quality and fast delivery. NexCart is my go-to store now!",
    },
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Verified Buyer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150", // Replace with your local path/avatar
      rating: 5,
      text: "Amazing quality and fast delivery. NexCart is my go-to store now!",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Verified Buyer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150", // Replace with your local path/avatar
      rating: 5,
      text: "Amazing quality and fast delivery. NexCart is my go-to store now!",
    },
  ];

  return (
    <>
      <div className="max-w-[var(--container-max)] mx-auto px-12 mt-12 mb-12 relative group">
        <div class="flex items-center justify-center mb-6">
          <h2 class="text-h2 font-bold text-text-primary">
            What Our Customer Say
          </h2>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testimonial.map((item) => {
            return (
              <SwiperSlide>
                <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm max-w-md flex flex-col sm:flex-row items-center sm:items-start gap-4 select-none min-h-[160px]">
                  {/* Left Column: Avatar & Name */}
                  <div className="flex flex-col items-center text-center sm:text-left min-w-[100px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover border border-gray-50 shadow-sm"
                    />
                    <h4 className="text-xs font-bold text-gray-900 mt-3 whitespace-nowrap">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-1 mt-0.5 text-blue-600">
                      <span className="text-[10px] font-semibold tracking-wide">
                        {item.role}
                      </span>
                      <MdVerified className="w-3 h-3 fill-current" />
                    </div>
                  </div>

                  {/* Right Column: Rating & Review Content */}
                  <div className="flex flex-col items-center sm:items-start flex-1 mt-1">
                    {/* Stars */}
                    {/* <div className="flex text-amber-400 gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div> */}

                    {/* Review Text */}
                    <p className="text-xs text-gray-500 font-medium mt-3 leading-relaxed text-center sm:text-left">
                      {item.text}
                    </p>
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

export default TestimonialCard;
