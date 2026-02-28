import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, } from "react-router-dom";
import { homeItem, testimonials } from "../data/testimonialsData";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const brand = useSelector((state) => state.brand);

  return (
    <div className="bg-cream text-secondary font-body">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/4110006/pexels-photo-4110006.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Indian sweets"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative text-center text-white px-8 py-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-heading mb-6 tracking-wide">
            Saffron & Sugar
          </h1>

          <p className="text-lg md:text-2xl mb-8 leading-relaxed">
            Handmade sweets crafted with tradition, patience, and warmth.
          </p>

          <Link to="/menu" className="bg-accent text-secondary px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
            View Our Collection
          </Link>
        </div>

      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-heading text-primary mb-6">
            Three Decades of Sweet Memories
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 max-lg:text-justify">
            Tucked away in the heart of Indiranagar, Saffron & Sugar began in
            1994 as a small family-run kitchen. What started with just two trays
            of laddoos slowly grew into a neighbourhood ritual. Weddings,
            festivals, birthdays — every celebration carried a box of our
            sweets. Today, the recipes remain untouched, slow-cooked and
            hand-rolled, just as they were thirty years ago.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-heading text-center text-primary mb-16">
            Signature Creations
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            {homeItem.map((item, index) => (
              <div
                key={index}
                className="bg-cream rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300 overflow-hidden"
              >

                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full hover:scale-110 object-cover transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://lmbsweets.com/wp-content/uploads/2022/06/LMB-2-1-67-e1657889889767.jpg"
            alt="Seasonal Sweet"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-4xl font-heading text-primary mb-6">
              This Season’s Special
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-lg:text-justify">
              Our limited-edition Dry Fruit Ghewar is handcrafted only during
              festive months. Infused with cardamom and layered with premium
              nuts, it disappears from the shelves faster than we can make it.
            </p>

            <Link
              to="/menu"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition"
            >
              See Seasonal Menu
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-white py-24">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-heading text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600">
            Stories shared by families who trust us for their celebrations.
          </p>
        </div>

        <div className='flex overflow-hidden py-8 w-full'>
          <div className='flex space-x-10 md:space-x-16 animate-scrollani px-5 md:px-8'>
            {testimonials.map((review) => (
              <div
                key={review.id}
                className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between min-h-40 w-80"
              >
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  “{review.quote}”
                </p>

                <div className="text-sm text-secondary font-medium">
                  — {review.name}, {review.location}
                </div>
              </div>
            ))}
          </div>

          <div className='flex space-x-10 md:space-x-16 animate-scrollani px-5 md:px-8' aria-hidden="true">
            {testimonials.map((review) => (
              <div
                key={review.id}
                className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between min-h-40 w-80"
              >
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  “{review.quote}”
                </p>

                <div className="text-sm text-secondary font-medium">
                  — {review.name}, {review.location}
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>

      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-heading text-primary mb-8">
            Visit Us
          </h2>

          <p className="text-lg mb-2">{brand.location}</p>
          <p className="mb-2">{brand.phone}</p>
          <p className="mb-8">{brand.email}</p>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=Indiranagar%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-72"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;