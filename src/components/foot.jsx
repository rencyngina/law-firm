import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

const Foot = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#343434] w-full">
  <div className="container mx-auto py-3 px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col sm:flex-row justify-between items-center text-white text-sm">
      <div className="flex items-center mt-2 mb-3 sm:mb-0">
        <p className="mr-4 hidden sm:block">|</p>
        <Link href="mailto:wendaandroyfordadvocates@example.com">
          <p className="mr-4 sm:mr-8 text-xs lg:text-sm">info@royfordlaw.com</p>
        </Link>
      </div>
      <div className="flex items-center mt-2 mb-3 sm:mb-0">
        <p className="mr-4 sm:mr-8 text-xs lg:text-sm">© {currentYear}. All rights reserved</p>
        <p className="mr-4 hidden sm:block">|</p>
        <a href="https://my-portfolio-sand-ten-81.vercel.app/"
        rel="noreferrer"
        target="_blank"
        className="mr-4 sm:mr-8 text-xs lg:text-sm">Developed by Erick Adikah</a>
        <p className="mr-4 hidden sm:block">|</p>
        <a href="mailto:rencyngina@gmail.com"
        rel="noreferrer"
        target="_blank"
        className="text-xs lg:text-sm">Designed by Rency Ngina</a>
      </div>
    </div>
  </div>
</div>
  );
};

export default Foot;