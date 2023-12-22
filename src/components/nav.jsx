import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { RiArrowRightUpLine } from "react-icons/ri";
import { BsArrowRightShort } from "react-icons/bs";
// import { signIn } from "next-auth/react";

const LandingNavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-gray-100 w-full md:h-20 flex items-center justify-between px-6 md:px-12 sticky top-0 shadow-emerald-950">
      <div className="flex items-center">
        <Link href="/">
          <img
            src="/images/favicon.ico"
            alt="Logo"
            className="h-15"
          />
        </Link>
      </div>

      {/* Desktop Navigation (Centered) */}
      <ul className="hidden md:flex justify-items-center items-center space-x-4">
        <li>
          <Link
            href="/features"
            className="text-base text-gray-700 hover:underline"
          >
            Home
          </Link>
        </li>
        <li>
          <Link href="/faq" className="text-base text-gray-700 hover:underline">
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/recipes"
            className="text-base text-gray-700 hover:underline"
          >
            Expertise
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-base text-gray-700 hover:underline"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/pricing"
            className="text-base text-gray-700 hover:underline"
          >
            Our Lawyers
          </Link>
        </li>
        <Link href="/signin">
          <button
            // onClick={() => {
            //   signIn();
            // }}
            className="px-4 py-2 text-base font-semibold text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none shadow-md focus:shadow-lg focus:bg-yellow-600 transform hover:scale-105 transition-transform flex items-center"
          >
            Get Started
            <BsArrowRightShort size={20} className="ml-2" />
          </button>
        </Link>
      </ul>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center space-x-4">
        <button
          className="text-2xl text-gray-700"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 flex flex-col items-center justify-center bg-gray-300">
          {/* ... Your mobile navigation links ... */}
          <ul className="space-y-4">
            <li>
              <Link href="/" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/features" onClick={toggleMobileMenu}>
                Features
              </Link>
            </li>
            <li>
              <Link href="/faq" onClick={toggleMobileMenu}>
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/recipes" onClick={toggleMobileMenu}>
                Recipes
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/pricing" id="pricing" onClick={toggleMobileMenu}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

// export default Navigation;

export default LandingNavBar;