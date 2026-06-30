const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Smartphones",
      slug: "smartphones",
      image:
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%209/1.webp",
    },
    {
      id: 2,
      name: "Fragrances",
      slug: "fragrances",
      image:
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.webp",
    },
    {
      id: 3,
      name: "Skincare",
      slug: "skincare",
      image:
        "https://cdn.dummyjson.com/products/images/skincare/Essence%20Mascara%20Lash%20Princess/1.webp",
    },
    {
      id: 4,
      name: "Furniture",
      slug: "furniture",
      image:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.webp",
    },
    {
      id: 5,
      name: "Mens Shirts",
      slug: "mens-shirts",
      image:
        "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20Slim%20Fit%20Shirt/1.webp",
    },
    {
      id: 6,
      name: "Sunglasses",
      slug: "sunglasses",
      image:
        "https://cdn.dummyjson.com/products/images/sunglasses/Eyewear%20Collection/1.webp",
    },
  ];
  return (
    <>
      <section className="py-12">
        <div className="max-w-[var(--container-max)] mx-auto  ">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-h2 font-bold text-text-primary">
              Shop by Category
            </h2>
            {/* <Link
              to="/products"
              className="text-primary font-semibold text-body-sm hover:underline"
            >
              View All Categories →
            </Link> */}
          </div>

          {/* Category Cards Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <div className="group flex flex-col items-center">
                {/* Image Box */}
                <div className="w-full aspect-square bg-bg-secondary border border-gray-200 rounded-lg overflow-hidden flex items-center justify-center p-4 group-hover:border-primary group-hover:shadow-md transition-all duration-300">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Name */}
                <span className="text-body-sm font-medium text-text-primary mt-2 text-center">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategorySection;
