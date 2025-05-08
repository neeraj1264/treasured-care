import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* Top links */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="col-span-1 flex flex-col items-center lg:items-start">
          <img
            src="/dummy.png"
            alt="Tcare for you"
            className="h-16 w-auto mb-4"
          />
          <span className="text-xl font-semibold">care for you</span>
        </div>

        {/* Column 1 */}
        <div>
          <h4 className="font-semibold mb-3">Tcare for you</h4>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:underline">
                About us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold mb-3">Our services</h4>
          <ul className="space-y-2">
            <li>
              <a href="/services/disability-support" className="hover:underline">
                Disability support
              </a>
            </li>
            <li>
              <a href="/services/aged-care" className="hover:underline">
                Aged care
              </a>
            </li>
            <li>
              <a href="/services/social-support" className="hover:underline">
                Social support
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold mb-3">Contact us</h4>
          <ul className="space-y-2">
            <li>
              <a href="/contact" className="hover:underline">
                Contact us
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:underline">
                Career
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold mb-3">Follow us on</h4>
          <ul className="flex space-x-4">
            <li>
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-600">
                <FaFacebookF size={20} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-500">
                <FaInstagram size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300" />

      {/* Copyright & Links */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-sm text-gray-600 space-y-4 sm:space-y-0">
        <span>© 2025 Tcare for you</span>
        <div className="flex space-x-4">
          <a href="/privacy-policy" className="hover:underline">
            Privacy policy
          </a>
          <a href="/legal-disclaimer" className="hover:underline">
            Legal disclaimer
          </a>
        </div>
      </div>

      {/* Acknowledgement */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0">
        <img
          src="/dummy.png"
          alt="Aboriginal flag"
          className="h-12 w-16 flex-shrink-0"
        />
        <p className="text-gray-700 text-sm leading-relaxed">
          Tcare for you upholds the principle of equal opportunity employment, ensuring that individuals are treated fairly and without bias, irrespective of race, hue, faith, gender, sexual orientation, gender identity, nationality, age, marital condition, genetic traits, disabilities, veteran status, or decisions related to advance directives. Tcare for you pays respect to the indigenous custodians of this land, the Aboriginal and Torres Strait Islander peoples, and their continuing connection to land, sea, and community. We acknowledge and honor their rich cultures, histories, and traditions, and recognize their enduring contributions to this nation.
        </p>
      </div>
    </footer>
  );
}
