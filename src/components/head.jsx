import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Head = () => {
  return (
    <div className="bg-gray-500 w-full h-12">
      <div className="flex justify-between w-3/4 mx-auto">
        <div className="flex mt-3">
          <div className="flex items-center text-white text-sm">
            <FaPhone />
            <p className="ml-2 text-sm">+234 803 000 0000</p>
          </div>
          <div className="flex items-center text-white ml-4">
            <MdEmail />
            <p className="ml-2 text-sm">
            legal@oraro.co.ke
              <a
                href="mailto:
                legal@araro.co.ke"
              ></a>
            </p>
          </div>
          <div className="flex items-center text-white ml-4">
            <IoLocationSharp />
            <p className="ml-2 text-sm">ACK Garden Annex, 6th Floor, 1st Ngong Avenue</p>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="flex items-center text-white">
            <BsTwitterX />
            <p className="ml-2 text-sm">Twitter</p>
          </div>
          <div className="flex items-center text-white ml-4">
            <FaLinkedin />
            <p className="ml-2 text-sm">LinkedIn</p>
          </div>
          <div className="flex items-center text-white ml-4">
            <FaYoutube />
            <p className="ml-2 text-sm">YouTube</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
