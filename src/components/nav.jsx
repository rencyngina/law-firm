import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { RiArrowRightUpLine } from "react-icons/ri";
import { BsArrowRightShort } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";

const LandingNavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gray-100 w-full md:h-20 flex items-center justify-between px-6 md:px-12 sticky top-0 shadow-emerald-950 z-10">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image
            src="/images/logo1.png"
            alt="Logo"
            className=""
            height={90}
            width={90}
          />
        </Link>
        <p className="font-bolder text-gray-500 font-extrabold">
          Oraro & Company Advocates
        </p>
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
        <li className="relative">
          <div
            onClick={toggleDropdown}
            className="text-base text-gray-700 hover:underline cursor-pointer"
          >
            About Us{" "}
            <RiArrowDropDownLine
              className="inline"
              style={{
                fontSize: "1.8rem",
              }}
            />
          </div>
          {dropdownOpen && (
            <ul className="absolute top-full left-0 bg-white shadow-md p-2 rounded-sm w-96 gap-8 h-62">
              {/* Dropdown content */}
              <li>
                <Link
                  href="/about-us"
                  className="block border-b py-2 px-4 text-gray-800 hover:text-orange-500 transition duration-300"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="block py-2  border-b px-4 text-gray-800 hover:text-orange-500 transition duration-300"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="block py-2 border-b px-4 text-gray-800 hover:text-orange-500 transition duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="block  border-b py-2 px-4 text-gray-800 hover:text-orange-500 transition duration-300"
                >
                  News
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="relative">
          <div
            onClick={toggleDropdown}
            className="text-base text-gray-700 hover:underline cursor-pointer"
          >
            Expertise{" "}
            <RiArrowDropDownLine
              className="inline"
              style={{
                fontSize: "1.8rem",
              }}
            />
          </div>
          {dropdownOpen && (
            <ul className="absolute top-full left-0 bg-white shadow-md p-2 rounded-sm w-96 gap-8 h-62">
              <li>
                <Link
                  href="/about-us"
                  className="block border-b py-2 px-4 text-gray-800 hover:text-orange-500 transition duration-300"
                >
                  Practise Area
                </Link>
              </li>
              <li>
              <Link
                  href="/about-us"
                  className="block border-b py-2 px-4 text-gray-800 hover:text-orange-500 transition duration-300"
                >
                  Sectors
                </Link>
              </li>
              <li>
              <Link
                  href="/about-us"
                  className="block border-b py-2 px-4 text-gray-800 hover:text-orange-500 transition duration-300"
                >
                  Brochures
                </Link>
              </li>
            </ul>
          )}
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
          <button className="px-4 py-2 text-base font-semibold text-white bg-[#A65A2A] hover:bg-yellow-600 focus:outline-none shadow-md focus:shadow-lg focus:bg-yellow-600 transform hover:scale-105 transition-transform flex items-center">
            Contact Us
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

export default LandingNavBar;
