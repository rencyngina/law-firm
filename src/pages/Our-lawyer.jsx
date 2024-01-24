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
      name: "Nkonge R. Mwenda",
      bio: "Nkonge Royford Mwenda, a legal luminary and visionary leader, is the driving force behind Mwenda Royford and Company Advocates. Admitted to the Kenya Bar in 2016, he boasts expertise in Civil and Commercial Law, Litigation, Environmental Law, Election Petitions, Arbitration, and more. With an LL.B from ANU, a Diploma from the Kenya School of Law, and ongoing LLM studies at UON, Mr. Mwenda's academic prowess seamlessly blends with practical acumen. As an Advocate of the High Court, he shapes legal landscapes with finesse, making Mwenda Royford a beacon of innovation and success.",
      image: "/images/Mwenda2.jpg",
      work: "Senior advocate",
      email: "mwenda@royfordlaw.com",
      phone: "+123456789",
      facebook: "https://www.facebook.com/royford",
      linkedin: "royfordmwenda",
      twitter: "https://www.twitter.com/royford",
      instagram: "https://www.instagram.com/royford",
    },
    {
      id: 2,
      name: "Annet A. Otago",
      bio: `
        Annet A. Otago is an accomplished Advocate of the High Court of Kenya, distinguished by her profound expertise across various legal domains. Holding a Bachelor of Laws (LL. B) degree from the University of Nairobi and a Postgraduate Diploma in Law (PGDip) from the Kenya School of Law, Annet is currently pursuing a Master of Laws (LL.M) with a specialization in Corporate and Financial Law at the University of Nairobi.
As a legal scholar, her research focus delves into the Impact of Insider Trading Regulations on Financial Market Integrity and Investor Confidence. Annet's legal acumen extends to corporate and commercial litigation, securities law, banking, intellectual property, public procurement, and more.
With a diverse background in both the private sector and as an associate at Wanyaga & Njaramba Advocates, Annet exemplifies a highly driven and competent legal practitioner. She upholds values of integrity, professionalism, and quality in delivering legal services. Annet envisions the future of law intertwined with technology, navigating the complexities of litigation.
Beyond her legal pursuits, Annet finds joy in recreational running, mountaineering, experimenting with food recipes, and writing contemporary fiction. A novice in realist painting, she actively engages in community volunteering and passionately supports the Chelsea Football Club. Annet A. Otago embodies a multifaceted professional committed to excellence in law and a vibrant personal life
      `,
      image: "/images/lawyers/lawyer1.jpeg",
      work: "Corporate and Commercial Law",
      email: "annet@royfordlaw.com",
      phone: "+123456789",
      linkedin: "https://www.linkedin.com/in/annetotago",
      facebook: "https://www.facebook.com/annetotago",
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
        <h1 className="text-xl font-bold lg:text-2xl xl:text-5xl text-white">
          Our Lawyers
        </h1>
        <p className="text-white text-sm lg:text-xl xl:text-2xl mt-4">
          Meet Our Lawyers
        </p>
      </div>
      <div className="bg-white min-h-screen py-16">
        <div className="container mx-auto">
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
