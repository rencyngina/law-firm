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
import Link from "next/link";


const Team = () => {
  const teamData = [
    {
      id: 1,
      name: "Nkonge Royford Mwenda",
      image: "/images/mwends3.jpg",
      work: "Managing partner",
      email: "royford@royfordlaw.com",
      facebook: "https://www.facebook.com/royford",
      twitter: "https://www.twitter.com/royford",
      instagram: "https://www.instagram.com/royford",
      sector: "Nkongerm",
      linkTo: "/Nkongerm",
    },
    {
      id: 2,
      name: "Annet Otago",
      image: '/images/Anett1.jpg',
      work: 'Associate',
      email: 'otago@royfordlaw.com',
      facebook: 'https://www.facebook.com/royford',
      twitter: 'https://www.twitter.com/royford',
      instagram: 'https://www.instagram.com/royford',
      sector:"Lisper",
      linkTo: "/Lisper",
    },
    {
      id: 3,
      name: "Morris Mureti",
      image: '/images/Moris1.jpg',
      work: 'Cybersecurity & IT specialist.',
      email: 'morris@royfordlaw.com',
      facebook: 'https://www.facebook.com/royford',
      twitter: 'https://www.twitter.com/royford',
      instagram: 'https://www.instagram.com/royford',
      sector: "Ngava",
      linkTo: "/Ngava",
    },
    {
      id: 4,
      name: "Nicholas Wambua Robert",
      image: '/images/Nicholus1.jpg',
      work: 'Legal Clerk/Paralegal',
      email: 'nicholas@royfordlaw.com',
      facebook: 'https://www.facebook.com/royford',
      twitter: 'https://www.twitter.com/royford',
      instagram: 'https://www.instagram.com/royford',
      sector: "Nicholas",
      linkTo: "/Nicholas",
    },
   
    {
      id: 5,
      name: "Mystry Nalisi Mmbaka",
      image: '/images/secritary1.jpg',
      work: 'Secretary/Receptionist',
      email: 'nalisi@royfordlaw.com',
      facebook: 'https://www.facebook.com/royford',
      twitter: 'https://www.twitter.com/royford',
      instagram: 'https://www.instagram.com/royford',
      sector:"Boaz",
      linkTo: "/Boaz",
    },
    {
      id: 6,
      name: "Fredrick Agwel",
      image: '/images/lawyers/Fredrick.webp',
      work: 'Associate',
      email: '',
      facebook: 'https://www.facebook.com/royford',
      twitter: 'https://www.twitter.com/royford',
      instagram: 'https://www.instagram.com/royford',
      sector: "Boaz",
      linkTo: "/Boaz",
    },
    {
      id: 7,
      name: "Nguku Daisy Wacuka",
      image: '/images/lawyers/Daisy.webp',
      work: 'Associate',
      email: 'wacuka1992@gmail.com',
      facebook: 'https://www.facebook.com/royford',
      twitter: 'https://www.twitter.com/royford',
      instagram: 'https://www.instagram.com/royford',
      sector: "Boaz",
      linkTo: "/Boaz",
    },{
      id: 8,
      name: "Jackline W Njenga",
      image: '/images/lawyers/Jackline.webp',
      work: 'Associate',
      email: 'jnjenga1@gmail.com'
    }
    // {
    //   id: 8,
    //   name: "Erick Munene",
    //   image: '',
    //   work: 'Associate',
    //   email: '',
    //   facebook: 'https://www.facebook.com/royford',
    //   twitter: 'https://www.twitter.com/royford',
    //   instagram: 'https://www.instagram.com/royford',
    //   sector: "Boaz",
    //   linkTo: "/Boaz",
    // }
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
        <div className="container mx-auto py-6 px-4">
        <h1 className="text-xl lg:text-2xl xl:text-4xl font-semibold text-gray-800 mb-6">
            Our Team
          </h1>
          <p className="text-gray-600 mb-12">
          This hardworking and passionate group truly embodies dedication and
           teamwork. Their enthusiasm creates a dynamic and collaborative environment
            where each member, with their unique skills, contributes to shared goals.
             Together, their collective efforts and unwavering commitment drive them 
             towards achieving remarkable success.
            </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                style={{
            background: ''
          }}
              >
              <div className="relative">
              <div className="bg-gradient-to-b from-[rgba(21, 21, 21, 0.6)] to-[rgba(30, 29, 29, 0.6)] inset-0"></div>
              <Image
                src={member.image}
                alt={member.name}
                layout="responsive"
                width={300}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="absolute bottom-0 left-0 p-4 w-full bg-black bg-opacity-50">
                <h2 className="text-xl font-semibold text-white">
                  {member.name}
                </h2>
                <p className="text-yellow-500">{member.work}</p>
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
