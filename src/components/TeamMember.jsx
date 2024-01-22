// TeamMember.js
import React from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa";

const Member = ({ member }) => {
  const { name, image, work, email, facebook, twitter, instagram } = member;

  return (
    <div
      className="rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105"
      style={{
        background: "#D0B216",
      }}
    >
      <div className="relative">
        <Image
          src={image}
          alt={name}
          layout="responsive"
          width={300}
          height={300}
          className="object-cover w-full h-48 transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 p-4">
          <h2 className="text-xl font-semibold text-white">{name}</h2>
          <p className="text-gray-200">{work}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <MdEmail className="text-gray-500 mr-2" />
          <p>{email}</p>
        </div>
        <div className="flex space-x-2">
          {facebook && (
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              <FaFacebook />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              <FaXTwitter />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              <FaInstagram />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Member;
