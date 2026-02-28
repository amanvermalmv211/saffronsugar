import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const brand = useSelector((state) => state.brand);

  return (
    <footer className="bg-secondary text-cream pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          <div>
            <h2 className="text-2xl font-heading mb-6 tracking-wide">
              {brand.name}
            </h2>
            <p className="text-sm leading-relaxed text-cream/80">
              Handcrafted sweets made with patience, tradition,
              and a touch of saffron. Serving celebrations
              in Bangalore since 1994.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-heading mb-6">
              Explore
            </h3>

            <div className="flex flex-col gap-3 text-sm text-cream/80">
              <Link to="/" className="hover:text-accent transition">
                Home
              </Link>
              <Link to="/menu" className="hover:text-accent transition">
                Menu
              </Link>
              <Link to="/about" className="hover:text-accent transition">
                Our Story
              </Link>
              <Link to="/contact" className="hover:text-accent transition">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading mb-6">
              Visit Us
            </h3>

            <div className="text-sm space-y-3 text-cream/80">
              <p>{brand.location}</p>
              <p>{brand.phone}</p>
              <p>{brand.email}</p>

              <div className="pt-4">
                <p className="font-medium">Hours</p>
                <p>{brand.hours.weekdays}</p>
                <p>{brand.hours.sunday}</p>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-cream/20 pt-6 text-center text-xs text-cream/60">
          © {new Date().getFullYear()} {brand.name}. Crafted with warmth and tradition.
        </div>

      </div>

    </footer>
  );
};

export default Footer;