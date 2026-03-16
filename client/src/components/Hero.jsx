import { motion } from "framer-motion";
import { useRef } from "react";
import Image1 from "../assets/Images/Image1.png";

export default function HeroSection() {

  const fileInputRef = useRef(null);

  const openUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Prescription Selected:", file);
    }
  };

  return (
    <section className="bg-green-50 px-6 lg:px-20 py-16 overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Order Medicines
            <span className="text-green-600"> Anytime</span>
            <br />
            From Your Home
          </h1>

          <p className="text-gray-600 mb-8 text-lg">
            Search medicines or upload your prescription and get fast delivery
            from trusted pharmacies.
          </p>

          {/* SEARCH BAR */}

          <div className="flex bg-white rounded-full shadow-md overflow-hidden w-full max-w-lg focus-within:ring-2 focus-within:ring-green-500">

            <input
              type="text"
              placeholder="Search medicines..."
              className="flex-1 px-6 py-4 outline-none"
            />

            <button className="bg-green-600 text-white px-8 hover:bg-green-700 transition">
              Search
            </button>

          </div>

          {/* POPULAR SEARCH */}

          <p className="text-sm text-gray-500 mt-4">
            Popular: Paracetamol, Dolo 650, Crocin
          </p>

          {/* CTA BUTTONS */}

          <div className="flex gap-4 mt-6 flex-wrap">

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Shop Medicines
            </button>

            <button
              onClick={openUpload}
              className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-100 transition"
            >
              Upload Prescription
            </button>

          </div>

          {/* hidden input for upload */}

          <input
            type="file"
            accept="image/*,.pdf"
            capture="environment"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />

          {/* TRUST BADGES */}

          <div className="flex gap-6 mt-8 text-sm text-gray-600 flex-wrap">

            <span>🚚 Fast Delivery</span>
            <span>💊 100% Genuine Medicines</span>
            <span>👨‍⚕️ Verified Pharmacies</span>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <img
            src={Image1}
            alt="Doctor holding medicines"
            className="w-[380px] sm:w-[450px] lg:w-[520px] object-contain"
          />

        </motion.div>

      </div>
    </section>
  );
}