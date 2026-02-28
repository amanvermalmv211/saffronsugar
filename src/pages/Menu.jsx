import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../features/menu/menuSlice";
import { useEffect } from "react";

const Menu = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const { items, categories, activeCategory } = useSelector(
    (state) => state.menu
  );

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-cream min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading text-primary mb-4">
          Our Collection
        </h1>
        <p className="text-gray-600 text-lg">
          Crafted fresh every morning using traditional recipes and premium ingredients.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => dispatch(setCategory(category))}
            className={`px-6 py-2 rounded-full text-sm font-medium transition 
              ${activeCategory === category
                ? "bg-primary text-white shadow-md"
                : "bg-white text-secondary hover:bg-accent hover:text-secondary"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden flex flex-col lg:flex-row h-full"
          >
            {item.image && (
              <div className="h-48 lg:w-2/5 shrink overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
            )}

            <div className="p-3 flex flex-col justify-between lg:w-3/5">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-heading text-secondary leading-snug">
                    {item.name}
                  </h3>

                  <span className="text-primary font-semibold whitespace-nowrap">
                    ₹{item.price}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 min-h-8">
                  {item.description}
                </p>
              </div>

              {item.tag && (
                <div className="flex w-full justify-end mt-4">
                  <span className="text-xs bg-cream text-secondary px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center mt-20 text-gray-500">
          No items available in this category.
        </div>
      )}
    </div>
  );
};

export default Menu;