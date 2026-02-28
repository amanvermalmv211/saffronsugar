import { useEffect } from "react";
import { useSelector } from "react-redux";

const About = () => {
  const brand = useSelector((state) => state.brand);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-cream text-secondary pt-32 pb-24 px-6 min-h-screen">

      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-heading text-primary mb-4">
          Our Story
        </h1>
        <p className="text-lg text-gray-600">
          A small kitchen in 1994. A family recipe. A neighbourhood tradition.
        </p>
      </div>

      <div className="max-w-4xl mx-auto leading-relaxed text-lg text-gray-700 space-y-6 mb-24">
        <p>
          {brand.name} began as a humble family dream in the heart of
          Indiranagar. In 1994, our father opened a small sweet shop with just
          a handful of recipes passed down through generations.
        </p>

        <p>
          There were no marketing campaigns, no grand openings — just the aroma
          of slow-cooked sugar and roasted nuts drifting through the street.
          Word spread not because we advertised, but because neighbours kept
          coming back.
        </p>

        <p>
          Today, three decades later, we still prepare every batch with the
          same patience. We believe sweetness isn’t rushed — it’s crafted,
          stirred slowly, and shared warmly.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-heading text-center text-primary mb-12">
          Our Philosophy
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-cream p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M5 21c14 0 14-14 14-14S5 7 5 21z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading">Freshness</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Made fresh every morning in small, carefully monitored batches.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-cream p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 3v6m0 0l3-3m-3 3L9 6m3 6v6m0 0l3-3m-3 3l-3-3" />
                </svg>
              </div>
              <h3 className="text-xl font-heading">Sourcing</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We choose premium ingredients from trusted suppliers without compromise.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-cream p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M17 20h5v-2a4 4 0 00-4-4h-1m-4 6H6m0 0H1v-2a4 4 0 014-4h1m0 6v-6a4 4 0 118 0v6" />
                </svg>
              </div>
              <h3 className="text-xl font-heading">Community</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Proudly serving generations of families through traditions.
            </p>
          </div>

        </div>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-24">

        <img
          src="https://t4.ftcdn.net/jpg/04/96/99/95/360_F_496999541_pQj2mZBL888MtJ49W0TF6sirIE0P73U9.jpg"
          alt="Founder"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-heading text-primary mb-6">
            Meet The Founder
          </h2>

          <p className="text-gray-700 mb-4">
            Rajesh Sharma started Saffron & Sugar with a single stove and a
            belief — that sweets should taste like home.
          </p>

          <p className="text-gray-700">
            Even today, you’ll find him in the kitchen every morning, tasting
            each batch personally before it reaches the counter.
          </p>

          <p className="mt-6 font-medium text-secondary">
            — Founder & Master Sweet Maker
          </p>
        </div>

      </div>

      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xl italic text-gray-700 leading-relaxed">
          “Sweetness is not just sugar. It’s memory, patience, and the joy of
          sharing.”
        </p>
      </div>

    </div>
  );
};

export default About;