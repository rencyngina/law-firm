import React from "react";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Lawyer = () => {
  const teamData = [
    {
      id: 1,
      name: "Nkonge Royford Mwenda",
      image: "/images/JKTK.webp",
      work: "Senior advocate",
      email: "royford@example.com",
      facebook: "https://www.facebook.com/royford",
      twitter: "https://www.twitter.com/royford",
      instagram: "https://www.instagram.com/royford",
    },
    {
      id: 2,
      name: "Jackline Waceke Njenga",
      image: '/images/lawyers/lawyer1.jpeg',
      work: 'Senior advocate',
      email: 'royford@example.com',
      facebook: 'https://www.facebook.com/royford',
      twitter: 'https://www.twitter.com/royford',
      instagram: 'https://www.instagram.com/royford',
    },
    
  ];

  return (
     <>
      <Head />
      <LandingNavBar />
      <div
        className="bg-white"
        id="contact"
        style={{
          minHeight: "100vh",
        }}
      >
        <div
          className="h-52 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/Parliament.webp)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // backgroundAttachment: "fixed",
          }}
        >
          <h1 className="text-xl font-bold lg:text-2xl xl:text-5xl text-white">Our Lawyers</h1>
          <p className="text-white text-sm lg:text-xl xl:text-2xl mt-4">
            Meet Our Lawyers
          </p>
        </div>
        {/* Team Goes here with social links*/}
        <div className="container mx-auto py-8 px-4">
        <h1 className="text-xl lg:text-2xl xl:text-4xl font-semibold text-gray-800 mb-6">
            Our Lawyers
          </h1>
           <div className="w-28 h-1 bg-[#A65A2A] mb-8"></div>
          <p className="text-gray-600 mb-12 text-md lg:text-xl">
            Our lawyers are highly qualified and experienced in their respective
            fields. They are dedicated to providing the best legal services to
            our clients.
            </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                style={{
            background: ''
          }}
              >
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="responsive"
                    width={300}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h2 className="text-xl font-semibold text-black">
                      {member.name}
                    </h2>
                    <p className="text-gray-200">{member.work}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <MdEmail className="text-gray-500 mr-2" />
                    <p>{member.email}</p>
                  </div>
                  <div className="flex space-x-2">
                    {member.facebook && (
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600"
                      >
                        <FaFacebook />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600"
                      >
                        <FaXTwitter />
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
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
            ))}
          </div>
        </div>
      </div>
      <FooterLinks />
    </>
  );
};

export default Lawyer;