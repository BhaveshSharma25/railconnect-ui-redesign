import {
  FaUtensils,
  FaHotel,
  FaTaxi,
  FaBus,
  FaSubway,
  FaSuitcase,
  FaMapMarkedAlt,
  FaBoxOpen,
} from "react-icons/fa";

const services = [
  { icon: <FaUtensils size={20} />, title: "Food Delivery", desc: "Order meals directly to your train seat." },
  { icon: <FaHotel size={20} />, title: "Hotels", desc: "Book hotels near your destination." },
  { icon: <FaTaxi size={20} />, title: "Cab Booking", desc: "Instant pickup from railway stations." },
  { icon: <FaBus size={20} />, title: "Bus Booking", desc: "Continue your journey easily." },
  { icon: <FaSubway size={20} />, title: "Metro", desc: "Find nearby metro routes." },
  { icon: <FaSuitcase size={20} />, title: "Lounge", desc: "Premium waiting lounges." },
  { icon: <FaMapMarkedAlt size={20} />, title: "Tour Packages", desc: "Explore destinations with ease." },
  { icon: <FaBoxOpen size={20} />, title: "Parcel Service", desc: "Track and book parcel deliveries." },
];

function TravelServices() {
  return (
    <section className="bg-[var(--bg)] py-16 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="font-serif text-3xl font-semibold text-center text-[var(--text)]">
          Travel Services
        </h2>

        <p className="text-center text-[var(--text-muted)] mt-2 mb-12">
          Everything you need for a complete travel experience.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 text-center hover:border-[var(--border)] transition"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-emerald-400 mx-auto mb-5">
                {service.icon}
              </div>

              <h3 className="text-base font-semibold text-[var(--text)]">
                {service.title}
              </h3>

              <p className="text-[var(--text-muted)] text-sm mt-2">{service.desc}</p>

              <button className="mt-5 bg-[#3E5C99] hover:bg-[#34508A] text-white px-5 py-2.5 rounded-xl transition text-sm font-medium">
                Explore
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default TravelServices;
