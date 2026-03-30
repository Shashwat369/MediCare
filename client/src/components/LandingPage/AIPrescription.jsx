import { motion as Motion } from "framer-motion";
import { useRef } from "react";

export default function AIPrescription() {

  const fileInputRef = useRef(null);

  return (
    <section className="px-6 lg:px-20 py-24 bg-gray-50">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}

        <Motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-4xl font-bold mb-6">
            Scan Prescription with <span className="text-green-600">AI</span>
          </h2>

          <p className="text-gray-600 mb-6">
            Upload your doctor's prescription and our AI will automatically
            detect medicines and show available options instantly.
          </p>

          <ul className="space-y-4 text-gray-600">
            <li>📄 Upload prescription image</li>
            <li>🤖 AI detects medicine names</li>
            <li>💊 Shows available medicines instantly</li>
            <li>🔁 Suggests alternatives if unavailable</li>
          </ul>

        </Motion.div>

        {/* RIGHT UPLOAD CARD */}

        <Motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >

          <div className="bg-white shadow-xl rounded-2xl p-12 text-center border   hover:shadow-2xl transition border-gray-200">

            <div className="text-6xl mb-4">🤖</div>

            <h3 className="text-lg font-semibold mb-2">
              Upload Prescription
            </h3>

            <p className="text-sm text-gray-500 mb-6">
              AI will scan and detect medicines
            </p>

            <button
              onClick={() => fileInputRef.current.click()}
              className="bg-green-600 text-white px-6 py-3 cursor-pointer rounded-lg hover:bg-green-700 transition"
            >
              Upload Image
            </button>

            <input
              type="file"
              ref={fileInputRef}
              accept="image/*,.pdf"
              className="hidden"
            />

          </div>

        </Motion.div>

      </div>

    </section>
  );
}
