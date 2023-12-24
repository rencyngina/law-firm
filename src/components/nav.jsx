import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const LandingNavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [expertiseDropdownOpen, setExpertiseDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
    if (expertiseDropdownOpen) {
      setExpertiseDropdownOpen(false);
    }
  };

  const toggleExpertiseDropdown = () => {
    setExpertiseDropdownOpen(!expertiseDropdownOpen);
    if (aboutDropdownOpen) {
      setAboutDropdownOpen(false);
    }
  };

  return (
     <nav className="bg-gray-100 w-full md:h-20 flex items-center justify-between px-6 md:px-12 sticky top-0 shadow-emerald-950 z-10">
      {/* Desktop Navigation (Centered) */}
      <ul className="hidden md:flex justify-center items-center gap-8 space-x-4 flex-grow">
        <li>
          <Link
            href="/"
            className="text-base text-gray-700 hover:underline"
          >
            Home
          </Link>
        </li>
        <li className="relative">
          <div
            onClick={toggleAboutDropdown}
            className="text-base text-gray-700 cursor-pointer"
          >
            About Us{" "}
            <RiArrowDropDownLine
              className="inline"
              style={{
                fontSize: "1.8rem",
              }}
            />
          </div>
          {aboutDropdownOpen && (
            <ul className="absolute top-full left-0 bg-white shadow-md p-2 rounded-sm w-96 gap-8 h-62">
              {/* Dropdown content */}
              <li>
                <Link
                id="about"
                  href="/about"
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
                  className="block py-2 px-4 text-gray-800 hover:text-orange-500 transition duration-300"
                >
                  News
                </Link>
              </li>
            </ul>
          )}
        </li>
        
        {/* Centered Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo1.png"
              alt="Logo"
              className="cursor-pointer"
              height={90}
              width={90}
            />
          </Link>
        </div>
        
        <li className="relative">
          <div
            onClick={toggleExpertiseDropdown}
            className="text-base text-gray-700 cursor-pointer"
          >
            Expertise{" "}
            <RiArrowDropDownLine
              className="inline"
              style={{
                fontSize: "1.8rem",
              }}
            />
          </div>
          {expertiseDropdownOpen && (
            <ul className="absolute top-full left-0 bg-white shadow-md p-2 rounded-sm w-96 gap-8 h-62">
              <li>
                <Link
                  href="/practice-areas"
                  id="practice-areas"
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
                  className="block py-2 px-4 text-gray-800 hover:text-orange-500 transition duration-300"
                >
                  Brochures
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link
            href="/pricing"
            className="text-base text-gray-700 hover:underline"
          >
            Our Lawyers
          </Link>
        </li>
        <Link href="/contact">
          <button className="px-4 py-2 text-base font-semibold text-white bg-gradient-to-b from-gray-800 to-gray-900 hover:bg-yellow-600 focus:outline-none shadow-md focus:shadow-lg focus:bg-yellow-600 transform hover:scale-105 transition-transform flex items-center">
            Contact Us
            <GoArrowUpRight size={20} className="ml-2" />
          </button>
        </Link>
      </ul>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center space-x-4 h-24">
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
          {/* ... mobile navigation links ... */}
          <ul className="space-y-4">
            <li>
              <Link href="/" className="border-b mt-4" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/features" className="border-b mt-4" onClick={toggleMobileMenu}>
               About Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="border-b mt-4" onClick={toggleMobileMenu}>
                Expertise
              </Link>
            </li>
            <li>
              <Link href="/recipes" className="border-b mt-4" onClick={toggleMobileMenu}>
                Our Lawyers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="border-b mt-4" onClick={toggleMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
          {/* ... Your logo goes here ... */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/logo1.png"
                alt="Logo"
                className="cursor-pointer"
                height={90}
                width={90}
              />
            </Link>
            <button
              className="text-2xl text-gray-700"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              <HiX size={26} /> 
            </button>
            </div>
        </div>
      )}
    </nav>
  );
};

export default LandingNavBar;

