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
          <Link href="/" className="text-base text-gray-700 hover:underline">
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
                  Booklets
                </Link>
              </li>
            </ul>
          )}
        </li>
        {/* Centered Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo2.png"
              alt="Logo"
              className="cursor-pointer"
              height={90}
              width={90}
            />
          </Link>
        </div>
        <li>
          <Link
            href="/team"
            className="text-base text-gray-700 hover:underline"
          >
            Our Lawyers
          </Link>
        </li>
        <li>
          <Link
            href="/publication"
            className="text-base text-gray-700 hover:underline"
          >
            Publication
          </Link>
        </li>
        <Link href="/contact">
          <button
            className="px-4 py-2 text-base font-semibold text-white bg-gradient-to-b from-gray-800 to-gray-900 hover:bg-yellow-600 focus:outline-none shadow-md focus:shadow-lg focus:bg-yellow-600 transform hover:scale-105 transition-transform flex items-center"
            style={{
              background: `radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
              radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)`,
            }}
          >
            Contact Us
            <GoArrowUpRight size={20} className="ml-2" />
          </button>
        </Link>
        <Link href="/">
          <button
            className="px-4 py-2 text-base font-semibold text-white border-r:bg-gradient-to-b from-gray-800 to-gray-900 hover:bg-yellow-600 focus:outline-none rounded-sm focus:bg-yellow-600 transform hover:scale-105 transition-transform flex items-center"
            style={{
              background: `radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
              radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)`,
            }}
          >
            LogIn
          </button>
        </Link>
      </ul>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center space-x-4 h-[55px]">
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
        <div className="md:hidden fixed inset-0 flex flex-col p-8 bg-gray-300">
          {/* ... mobile navigation links ... */}
          <ul className="space-y-5">
            <li className="border-b w-full">
              <Link
                href="/"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="relative z-10 border-b w-full">
              <div
                onClick={toggleAboutDropdown}
                className="text-base text-gray-700 cursor-pointer mb-4"
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
            <li className="border-b w-full">
              <Link
                href="/team"
                onClick={toggleMobileMenu}
                className="mb-4"
              >
                Our Lawyers
              </Link>
            </li>
            <li className="relative z-10 border-b w-full">
              <div
                onClick={toggleExpertiseDropdown}
                className="text-base text-gray-700 cursor-pointer mb-4"
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
            <li className="border-b w-full">
              <Link href="/contact">
                <button
                  className="px-4 py-2 text-base font-semibold text-white bg-gradient-to-b from-gray-800 to-gray-900  focus:outline-none shadow-md focus:shadow-lg focus:bg-yellow-600 transform hover:scale-105 transition-transform flex items-center mb-4"
                  style={{
                    background: `radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
              radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)`,
                  }}
                >
                  Contact Us
                  <GoArrowUpRight size={20} className="ml-2" />
                </button>
              </Link>
            </li>
            <li className="border-b w-full">
              <Link href="/">
                <button
                  className="px-4  mb-4 py-2 text-base font-semibold text-white border-r:bg-gradient-to-b from-gray-800 to-gray-900 hover:bg-yellow-600 focus:outline-none rounded-sm focus:bg-yellow-600 transform hover:scale-105 transition-transform flex items-center"
                  style={{
                    background: `radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
              radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)`,
                  }}
                >
                  LogIn
                </button>
              </Link>
            </li>
          </ul>
          <div className="flex items-center">
            {/*<Link href="/">
              <Image
                src="/images/logo1.png"
                alt="Logo"
                className="cursor-pointer"
                height={90}
                width={90}
              />
        </Link>*/}

            <button
              className="text-2xl text-gray-700 mt-4"
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
