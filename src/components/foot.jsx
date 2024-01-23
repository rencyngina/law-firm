import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

const Foot = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 w-full">
      <div className="container mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center text-white text-sm">
          <Link href="tel:+254701331176 flex items-center mt-2 mb-3 sm:mb-0">
              <FaPhone className="mr-2" />
              <p className="mr-4 hidden sm:block"></p>
          </Link>
          <p className="mr-4 hidden sm:block">|</p>
          <p className="mr-4 hidden sm:block">mwendaroyfordadvocates.co.ke</p>
          <p className="mr-4 hidden sm:block">|</p>
          <Link href="mailto:wendaandroyfordadvocates@example.com" className="flex items-center mt-2 mb-3 sm:mb-0">
              <MdEmail className="mr-2" />
              <p className="mr-4 hidden sm:block">info@royfordlaw.com</p>
          </Link>
          <p className="mr-4 sm:block">© {currentYear}. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Foot;