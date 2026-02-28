import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const brand = useSelector((state) => state.brand);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out. We’ll get back to you soon.");
  };

  return (
    <div className="bg-cream pt-32 pb-24 px-6 min-h-screen text-secondary">

      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-heading text-primary mb-4">
          Come Say Hello
        </h1>
        <p className="text-lg text-gray-600">
          Whether you're planning a celebration or just craving something sweet —
          our doors are always open.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Visit Our Shop
            </h2>
            <p className="mb-2">{brand.location}</p>
            <p className="mb-2">{brand.phone}</p>
            <p>{brand.email}</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Opening Hours
            </h2>
            <p className="mb-2 font-medium">Monday – Saturday</p>
            <p className="mb-4">{brand.hours.weekdays}</p>
            <p className="mb-2 font-medium">Sunday</p>
            <p>{brand.hours.sunday}</p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=Indiranagar%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64"
              loading="lazy"
            ></iframe>
          </div>

        </div>

        <div className="bg-white rounded-2xl p-10 px-6 lg:px-10 shadow-sm hover:shadow-xl transition">

          <h2 className="text-2xl font-heading text-primary mb-6">
            Send Us a Note
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block mb-2 text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Contact Number
              </label>
              <input
                type="text"
                name="phone"
                required
                placeholder="Enter your contact number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email-address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Address
              </label>
              <input
                type="text"
                name="address"
                required
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write message for us!"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-full font-semibold hover:bg-secondary transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>

      <div className="max-w-3xl mx-auto text-center mt-24">
        <p className="text-xl italic text-gray-700 leading-relaxed">
          “The sweetest conversations begin over a box of freshly made mithai.”
        </p>
      </div>

    </div>
  );
};

export default Contact;