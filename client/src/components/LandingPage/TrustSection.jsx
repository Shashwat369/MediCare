import { motion as Motion } from "framer-motion";

export default function TrustSection() {
  return (
    <section className="px-6 lg:px-20 mt-16">
      <Motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white shadow-xl rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-10 p-8"
      >

        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
          <div className="text-4xl">🚚</div>
          <div>
            <h3 className="font-semibold text-lg">Fast Delivery</h3>
            <p className="text-sm text-gray-500">
              Get medicines delivered within 10 minutes
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
          <div className="text-4xl">💊</div>
          <div>
            <h3 className="font-semibold text-lg">Genuine Medicines</h3>
            <p className="text-sm text-gray-500">
              100% authentic medicines from verified pharmacies
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
          <div className="text-4xl">👨‍⚕️</div>
          <div>
            <h3 className="font-semibold text-lg">Doctor Approved</h3>
            <p className="text-sm text-gray-500">
              Pharmacists verify your prescription before delivery
            </p>
          </div>
        </div>

      </Motion.div>
    </section>
  );
}
