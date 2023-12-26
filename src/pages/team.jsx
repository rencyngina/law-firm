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

const Team = () => {
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
      image: '/images/JKTK.webp',
      work: 'Senior advocate',
      email: 'royford@example.com',
      facebook: 'https://www.facebook.com/royford',
      twitter: 'https://www.twitter.com/royford',
      instagram: 'https://www.instagram.com/royford',
    },
    {
      id: 3,
      name: "Lisper Njeri",
      image: '/images/JKTK.webp',
      work: 'Senior advocate',
      email: 'royford@example.com',
      facebook: 'https://www.facebook.com/royford',
      twitter: 'https://www.twitter.com/royford',
      instagram: 'https://www.instagram.com/royford',
    },
    {
      id: 4,
      name: " Boaz Amoro Nyakeri",
      image: '/images/John-Mbaluto.webp',
      work: 'Senior advocate',
      email: 'royford@example.com',
      facebook: 'https://www.facebook.com/royford',
      twitter: 'https://www.twitter.com/royford',
      instagram: 'https://www.instagram.com/royford',
    },
    {
      id: 5,
      name: "Ngava Joy Kaaria",
      image: '/images/John-Mbaluto.webp',
      work: 'Senior advocate',
      email: 'royford@example.com',
      facebook: 'https://www.facebook.com/royford',
      twitter: 'https://www.twitter.com/royford',
      instagram: 'https://www.instagram.com/royford',
    },
    {
      id: 6,
      name: "Ngava Joy Kaaria",
      image: '/images/John-Mbaluto.webp',
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
            backgroundAttachment: "fixed",
          }}
        >
          <h1 className="text-2xl font-bold lg:text-2xl xl:text-5xl text-white">Our Team</h1>
          <p className="text-white text-lg lg:text-xl xl:text-2xl mt-4">
            Meet the team behind the scenes
          </p>
        </div>
        {/* Team Goes here with social links*/}
        <div className="container mx-auto py-8 px-4">
        <h1 className="text-xl lg:text-2xl xl:text-4xl font-semibold text-gray-800 mb-6">
            Our Team
          </h1>
          <p className="text-gray-600 mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quos modi, fugiat dolorum vero ex voluptatum, voluptate, quibusdam
            quia voluptas quae. Quisquam quos modi, fugiat dolorum vero ex
            voluptatum, voluptate, quibusdam quia voluptas quae.
            </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                style={{
            background: `radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
              radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)`,
          }}
              >
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="responsive"
                    width={300}
                    height={300}
                    className="object-cover w-full h-48 transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h2 className="text-xl font-semibold text-white">
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

export default Team;
