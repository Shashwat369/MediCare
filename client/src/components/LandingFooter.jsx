import { Facebook, Instagram, Twitter } from "lucide-react";

export default function LandingFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 lg:px-20 py-16">

      <div className="grid md:grid-cols-4 gap-10">

        {/* Brand */}

        <div>

          <h2 className="text-2xl font-bold text-white mb-4">
            Medicare
          </h2>

          <p className="text-gray-400">
            Order medicines online, upload prescriptions and get
            fast delivery from nearby pharmacies.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">

            <li className="hover:text-white cursor-pointer">
              Home
            </li>

            <li className="hover:text-white cursor-pointer">
              Medicines
            </li>

            <li className="hover:text-white cursor-pointer">
              Categories
            </li>

            <li className="hover:text-white cursor-pointer">
              Upload Prescription
            </li>

          </ul>

        </div>

        {/* Company */}

        <div>

          <h3 className="text-white font-semibold mb-4">
            Company
          </h3>

          <ul className="space-y-2">

            <li className="hover:text-white cursor-pointer">
              About Us
            </li>

            <li className="hover:text-white cursor-pointer">
              Contact
            </li>

            <li className="hover:text-white cursor-pointer">
              Privacy Policy
            </li>

            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>

          </ul>

        </div>

        {/* Social */}

        <div>

          <h3 className="text-white font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <Facebook className="cursor-pointer hover:text-white" />

            <Instagram className="cursor-pointer hover:text-white" />

            <Twitter className="cursor-pointer hover:text-white" />

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">

        © {new Date().getFullYear()} Medicare. All rights reserved.

      </div>

    </footer>
  );
}