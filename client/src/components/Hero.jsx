import { motion } from "framer-motion";
import Image1 from "../assets/Images/Image1.png";

export default function HeroSection() {
  return (
    <section className="bg-green-50 px-20 py-16 overflow-hidden">
      <div className="flex items-center justify-between">
        {/* LEFT CONTENT */}

        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: -120, opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="max-w-xl"
        >
          <h1 className="text-5xl font-bold leading-tight mb-6 ">
            Order Medicines
            <span className="text-green-600"> Anytime</span>
            <br />
            From Your Home
          </h1>

          <p className="text-gray-600 mb-8">
            Search medicines or upload your prescription and get fast delivery
            from trusted pharmacies.
          </p>

          {/* SEARCH BAR */}
          <div className="flex bg-white rounded-full shadow-lg overflow-hidden w-[420px] focus-within:ring-2 focus-within:ring-green-500">
            <input
              type="text"
              placeholder="Search medicines..."
              className="flex-1 px-6 py-3 outline-none"
            />

            <button className="bg-green-600 text-white px-6 cursor-pointer hover:bg-green-700 transition">Search</button>
          </div>

          {/* POPULAR SEARCH */}

          <p className="text-sm text-gray-500 mt-4">
            Popular: Paracetamol, Dolo 650, Crocin
          </p>

          {/* CTA BUTTON */}

          <button className="mt-6 border border-green-600 px-6 py-3 cursor-pointer rounded-lg hover:bg-green-100 transition">
            Upload Prescription
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: 120, opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <img src={Image1} className="w-[520px]" />
        </motion.div>
      </div>
    </section>
  );
}
