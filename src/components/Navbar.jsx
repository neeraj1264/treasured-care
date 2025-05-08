import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react';

export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="bg-light py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link  
            to="/" 
            className="text-black text-2xl font-bold tracking-tight hover:text-blue-200 transition-colors duration-200"
          >
            Treasured Care For You
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="text-black hover:text-blue-200 px-3 py-2 rounded-md text-1xl font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/vision"
              className="text-black hover:text-blue-200 px-3 py-2 rounded-md text-1xl font-medium transition-colors duration-200"
            >
              Vision Mission
            </Link>
            <Link
              to="/values"
              className="text-black hover:text-blue-200 px-3 py-2 rounded-md text-1xl font-medium transition-colors duration-200"
            >
              Company Values
            </Link>
            <Link
              to="/different"
              className="text-black hover:text-blue-200 px-3 py-2 rounded-md text-1xl font-medium transition-colors duration-200"
            >
              Treasured Care For You
            </Link>
            <Link
              to="/contact"
              className="text-black hover:text-blue-200 px-3 py-2 rounded-md text-1xl font-medium transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button (hidden on desktop) */}
          <div className="md:hidden">
          <button 
              onClick={() => setMobileMenuOpen(true)}
              className="text-black hover:text-blue-200 inline-flex items-center justify-center p-2 rounded-md"
            >
              {/* Hamburger icon */}
            </button>
          </div>
        </div>
      </div>

  {/* Mobile Menu with Dialog */}
  <Dialog
        as="div"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="md:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/25" />
        <div className="fixed inset-0 z-50 flex justify-start">
          <Dialog.Panel className="w-3/4 bg-[#2A5C85] p-4">
            {/* Mobile menu content */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-black absolute top-4 right-4"
            >
              ×
            </button>

        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="text-black hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-black hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-black hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </Link>
          <Link
            to="/team"
            className="text-black hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            Team
          </Link>
          <Link
            to="/contact"
            className="text-black hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>

        </Dialog.Panel>
        </div>
      </Dialog>

    </nav>
  );
}