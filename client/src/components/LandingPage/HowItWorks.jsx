import { motion as Motion } from "framer-motion";

const steps = [
  {
    title: "Upload Prescription",
    desc: "Upload your doctor's prescription or medicine image.",
    icon: "📄",
  },
  {
    title: "AI Detects Medicines",
    desc: "Our AI scans the prescription and detects medicine names instantly.",
    icon: "🤖",
  },
  {
    title: "Fast Delivery",
    desc: "Order medicines from nearby pharmacies and get delivery in minutes.",
    icon: "🚚",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 lg:px-20 py-24 bg-gray-50 flex flex-col items-center gap-14">

      {/* Heading */}

      <div className="text-center">

        <h2 className="text-4xl font-bold mb-4">
          How <span className="text-green-600">It Works</span>
        </h2>

        <p className="text-gray-600">
          Order medicines in just a few simple steps
        </p>

      </div>

      {/* Steps */}

      <div className="grid md:grid-cols-3 gap-10">

        {steps.map((step, index) => (

          <Motion.div
            key={index}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition"
          >

            <div className="text-5xl mb-4">{step.icon}</div>

            <h3 className="text-xl font-semibold mb-2">
              {step.title}
            </h3>

            <p className="text-gray-600">
              {step.desc}
            </p>

          </Motion.div>

        ))}

      </div>

    </section>
  );
}
