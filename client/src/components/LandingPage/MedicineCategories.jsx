import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Pain Relief", icon: "💊" },
  { name: "Cold & Cough", icon: "🤧" },
  { name: "Diabetes", icon: "🩸" },
  { name: "Vitamins", icon: "🍊" },
  { name: "Skin Care", icon: "🧴" },
  { name: "Baby Care", icon: "🍼" },
];

export default function MedicineCategories() {
  return (
    <section className="px-6 lg:px-20 py-24 bg-gray-50 flex flex-col items-center gap-15">
      <div className="text-center ">
        <h2 className="text-4xl font-bold mb-4">
          Browse <span className="text-green-600">Medicine Categories</span>
        </h2>

        <p className="text-gray-600">
          Explore medicines by category and find what you need quickly.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer hover:shadow-xl transition"
          >
            <div className="text-4xl mb-3">{cat.icon}</div>

            <h3 className="font-semibold">{cat.name}</h3>
          </motion.div>
        ))}
      </div>

      <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center gap-2 group">
        View All Categories
        <ArrowRight
          size={18}
          className="group-hover:translate-x-1 transition"
        />
      </button>
    </section>
  );
}
