import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-pink text-white">
      {/* Top links */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="col-span-1 flex flex-col items-center lg:items-start">
          <img
            src="/dummy.png"
            alt="Tcare for you"
            className="h-16 w-auto mb-4"
          />
          <span className="text-xl font-extrabold text-lightYellow">care for you</span>
        </div>

        {/* Column 1 */}
        <div>
          <h4 className="font-extrabold mb-3 text-2xl text-lightYellow">Tcare for you</h4>
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
          <h4 className="font-extrabold mb-3 text-2xl text-lightYellow">Our services</h4>
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
          <h4 className="font-extrabold mb-3 text-2xl text-lightYellow">Contact us</h4>
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
          <h4 className="font-extrabold mb-3 text-2xl text-lightYellow">Follow us on</h4>
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
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-center items-center text-sm text-white space-y-4 sm:space-y-0 ">
        <span className="text-center font-extrabold text-1xl">© 2025 Tcare for you</span>

      </div>

    </footer>
  );
}
