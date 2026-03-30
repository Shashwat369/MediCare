import { motion as Motion } from "framer-motion";
 import {ArrowRight} from "lucide-react";

import Dolo from "../../assets/Images/MedImages/Dolo.webp";
import Paracetamol from "../../assets/Images/MedImages/Paracetamol.jpg";
import Crocin from "../../assets/Images/MedImages/Crocin.webp";
import Azithromycin from "../../assets/Images/MedImages/Azithromycin.jpg";
import VitaminC from "../../assets/Images/MedImages/VitaminC.jpg";
import Cetirizine from "../../assets/Images/MedImages/Cetirizine.jpg";

const medicines = [
  {
    name: "Dolo 650",
    price: "₹30",
    image: Dolo,
  },
  {
    name: "Paracetamol",
    price: "₹25",
    image: Paracetamol,
  },
  {
    name: "Crocin",
    price: "₹28",
    image: Crocin,
  },
  {
    name: "Azithromycin",
    price: "₹120",
    image: Azithromycin,
  },
  {
    name: "Vitamin C",
    price: "₹80",
    image: VitaminC,
  },
  {
    name: "Cetirizine",
    price: "₹20",
    image: Cetirizine,
  },
];

export default function PopularMedicines() {
  return (
    <section className="px-6 lg:px-20 py-24 flex flex-col items-center gap-14">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">
          Popular <span className="text-green-600">Medicines</span>
        </h2>

        <p className="text-gray-600">
          Frequently purchased medicines from nearby pharmacies
        </p>
      </div>
      {/* Medicines Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {medicines.map((med, index) => (
          <Motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition relative"
          >
            <img
              src={med.image}
              className="mx-auto mb-4 h-24 object-contain"
              alt={med.name}
            />

            <h3 className="font-semibold">{med.name}</h3>

            <p className="text-green-600 font-bold mt-2">{med.price}</p>

            <button className="mt-4 cursor-pointer bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              Add to Cart
            </button>
          </Motion.div>
        ))}
      </div>
      {/* View All Button */}
     
      <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center gap-2 group">
        View All Medicines
        <ArrowRight
          size={18}
          className="group-hover:translate-x-1 transition"
        />
      </button>
    </section>
  );
}
