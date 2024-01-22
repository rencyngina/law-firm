// Lawyer.js
import React from "react";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
import LawyerCard from "../components/LawyerCard";

const Lawyer = () => {
  const teamData = [
    {
      id: 1,
      name: "Nkonge Royford Mwenda",
      bio: "",
      image: "/images/JKTK.webp",
      work: "Senior advocate",
      email: "royford@example.com",
      phone: "+123456789",
      facebook: "https://www.facebook.com/royford",
      twitter: "https://www.twitter.com/royford",
      instagram: "https://www.instagram.com/royford",
    },
    {
      id: 2,
      name: "Jackline Waceke Njenga",
      bio: "",
      image: '/images/lawyers/lawyer1.jpeg',
      work: 'Senior advocate',
      email: 'jackline@example.com',
      phone: "+987654321",
      facebook: 'https://www.facebook.com/jackline',
      twitter: 'https://www.twitter.com/jackline',
      instagram: 'https://www.instagram.com/jackline',
    },
  ];

  return (
    <>
      <Head />
      <LandingNavBar />
      <div
          className="h-52 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/Parliament.webp)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-xl font-bold lg:text-2xl xl:text-5xl text-white">Our Lawyers</h1>
          <p className="text-white text-sm lg:text-xl xl:text-2xl mt-4">
            Meet Our Lawyers
          </p>
        </div>
      <div className="bg-white min-h-screen py-16">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Our Lawyers</h1>
          {teamData.map((lawyer) => (
            <LawyerCard key={lawyer.id} lawyer={lawyer} />
          ))}
        </div>
      </div>
      <FooterLinks />
    </>
  );
};

export default Lawyer;
