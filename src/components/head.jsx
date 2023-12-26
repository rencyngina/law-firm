import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";

const Head = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 w-full">
      <div className="container mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center text-white text-sm">
          <Link
            href="tel:+2348030000000"
            className="flex items-center mt-2 mb-3 sm:mb-0"
          >
            <FaPhone className="mr-2" />
            <p className="mr-4 hidden sm:block">+254 701331176</p>
          </Link>
          <div className="flex items-center mt-2 mb-3 sm:mb-0">
            <MdEmail className="mr-2" />
            <p className="mr-4 hidden sm:block">
              info@mwendaroyfordadvocates.co.ke
              <a href="mailto:legal@araro.co.ke"></a>
            </p>
          </div>
          <div className="flex items-center mt-2 mb-3 sm:mb-0">
            <IoLocationSharp className="mr-2" />
            <p className="hidden sm:block">
             5TH AVENUE OFFICE SUITES 4TH FLOOR SUITE 4 – 15 OFF NGONG ROAD
            </p>
          </div>
          <div className="flex items-center mt-2 mb-3 sm:mb-0">
            <BsTwitterX className="mr-2" />
            <p className="mr-4 hidden sm:block">Twitter</p>
          </div>
          <div className="flex items-center mt-2 mb-3 sm:mb-0">
            <FaLinkedin className="mr-2" />
            <p className="mr-4 hidden sm:block">LinkedIn</p>
          </div>
          <div className="flex items-center mt-2 mb-3 sm:mb-0">
            <FaYoutube className="mr-2" />
            <p className="hidden sm:block">YouTube</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
