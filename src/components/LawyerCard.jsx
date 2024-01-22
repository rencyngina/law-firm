import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const LawyerCard = ({ lawyer }) => {
  return (
    <div className="mb-8 md:flex bg-gradient-to-r from-blue-200 to-blue-300 p-6 md:p-8 rounded-md shadow-md border border-gray-200 hover:shadow-lg transition duration-300">
      <div className="md:w-1/2 md:mr-4">
        <Image
            width={1000}
            height={980}
          src={lawyer.image}
          alt={lawyer.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">{lawyer.name}</h2>
        <p className="text-gray-600 mb-4">{lawyer.work}</p>
        <div className="flex items-center mb-4">
          <FaPhone className="text-gray-500 mr-2" />
          <p className="text-gray-700">{lawyer.phone}</p>
        </div>
        <div className="flex items-center mb-4">
          <FaEnvelope className="text-gray-500 mr-2" />
          <p className="text-gray-700">{lawyer.email}</p>
        </div>
        <div className="flex space-x-4">
          <a
            href={lawyer.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition duration-300 focus:outline-none focus:underline"
          >
            <FaFacebook />
          </a>
          <a
            href={lawyer.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition duration-300 focus:outline-none focus:underline"
          >
            <FaTwitter />
          </a>
          <a
            href={lawyer.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 transition duration-300 focus:outline-none focus:underline"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LawyerCard;
