// Lawyer.js
import React from "react";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
import LawyerCard from "../components/LawyerCard";
import Foot from "../components/foot";

const Lawyer = () => {
  const teamData = [
    {
      id: 1,
      name: "Nkonge R. Mwenda",
      bio: "Nkonge Royford Mwenda, a legal luminary and visionary leader, is the driving force behind Mwenda Royford and Company Advocates. Admitted to the Kenya Bar in 2016, he boasts expertise in Civil and Commercial Law, Litigation, Environmental Law, Election Petitions, Arbitration, and more. With an LL.B from ANU, a Diploma from the Kenya School of Law, and ongoing LLM studies at UON, Mr. Mwenda's academic prowess seamlessly blends with practical acumen. As an Advocate of the High Court, he shapes legal landscapes with finesse, making Mwenda Royford a beacon of innovation and success.",
      bioPoints: [
        "Legal luminary and visionary leader behind Mwenda Royford and Company Advocates.",
        "Admitted to the Kenya Bar in 2016.",
        "Expertise in Civil and Commercial Law, Litigation, Environmental Law, Election Petitions, Arbitration, and more.",
        "LL.B from ANU.",
        "Diploma from the Kenya School of Law.",
        "Ongoing LLM studies at UON.",
        "Academic prowess seamlessly blends with practical acumen.",
        "Advocate of the High Court.",
        "Shapes legal landscapes with finesse.",
        "Makes Mwenda Royford a beacon of innovation and success.",
      ],
      image: "/images/mwends3.jpg",
      work: "Managing Partner",
      email: "mwenda@royfordlaw.com",
      phone: "+254 701 331176",
      facebook: "https://www.facebook.com/royford",
      linkedin: "royfordmwenda",
      twitter: "https://www.twitter.com/royford",
      instagram: "https://www.instagram.com/royford",
    },
    {
      id: 2,
      name: "Annet A. Otago",
      bio: `Annet A. Otago, an Advocate at the High Court of Kenya, possesses extensive expertise in various legal domains. She earned her LL.B degree from the University of Nairobi and holds a PGDip in Law from the Kenya School of Law. Currently pursuing an LL.M in Corporate and Financial Law at the University of Nairobi, her research focuses on the impact of Insider Trading Regulations.

Annet excels in corporate and commercial litigation, securities law, banking, intellectual property, public procurement, and more. With a background in the private sector and previous experience at Wanyaga & Njaramba Advocates, she specializes in corporate and commercial practice. Annet is a dedicated legal professional, upholding values of integrity, professionalism, and quality in client services`,
      bioPoints: [
        "An accomplished Advocate of the High Court of Kenya with expertise in various legal domains.",
        "Holds a Bachelor of Laws (LL.B) degree from the University of Nairobi.",
        "Postgraduate Diploma in Law (PGDip) from the Kenya School of Law.",
        "Currently pursuing a Master of Laws (LL.M) with a specialization in Corporate and Financial Law at the University of Nairobi.",
        "Research focus on the Impact of Insider Trading Regulations on Financial Market Integrity and Investor Confidence.",
        "Legal acumen extends to corporate and commercial litigation, securities law, banking, intellectual property, public procurement, and more.",
        "Diverse background in both the private sector and as an associate.",
        "Upholds values of integrity, professionalism, and quality in delivering legal services.",
        "Envisions the future of law intertwined with technology, navigating the complexities of litigation.",
        "Finds joy in recreational running, mountaineering, experimenting with food recipes, and writing contemporary fiction.",
        "Novice in realist painting, actively engages in community volunteering, and passionately supports the Chelsea Football Club.",
        "Embodies a multifaceted professional committed to excellence in law and a vibrant personal life.",
      ],
      image: "/images/lawyers/lawyer1.jpeg",
      work: "Associate",
      email: "annet@royfordlaw.com",
      phone: "+254 724 113017",
      linkedin: "https://www.linkedin.com/in/annetotago",
      facebook: "https://www.facebook.com/annetotago",
    },
    {
      id: 3,
      name: "Fredrick Agwel",
      bio: `Mr. Fredrick Agwel is a Principal Associate at Royford Mwenda & Company Advocates. he is a Master of Laws (LLM)Candidate at the University of Nairobi, he holds a Bachelor of Laws (LL.B.) from the University of Nairobi and a Postgraduate Diploma in Law from Kenya School of Law. He is a member of the Law Society of Kenya, Mr. Agwel is a legal and policy expert with a focus on Environment and Natural Resources , Constitutional Litigation, Oil and gas and Climate Change Law.`,
      bioPoints: [
        "Seasoned legal professional with expertise in corporate and commercial law, conveyancing, and litigation.",
        "Holds an LL.B from the University of Nairobi and a Diploma from the Kenya School of Law.",
        "Passion for corporate and commercial law.",
        "Honed skills at Mwenda Royford and Company Advocates.",
        "Specializes in corporate governance, mergers and acquisitions, and intellectual property law.",
      ],
      image: "/images/lawyers/Fredrick.webp",
      work: "Associate",
      email: "#",
      phone: "#",
      linkedin: "#",
      facebook: "#",
    },
    {
      id: 4,
      name: "Nguku daisy wacuka",
      bio: `Nguku Daisy Wacuka is an Associate at Royford Mwenda & Company Advocates. She holds a Bachelor of Laws (LL.B) from the University of Nairobi and a Diploma from the Kenya School of Law. She is a member of the Law Society of Kenya. She has a passion for corporate and commercial law. She honed her skills at Mwenda Royford and Company Advocates. She specializes in corporate governance, mergers and acquisitions, and intellectual property law. She is a seasoned legal professional with expertise in corporate and commercial law, conveyancing, and litigation. She is a legal and policy expert with a focus on Environment and Natural Resources, Constitutional Litigation, Oil and gas and Climate Change Law. Daisy is a Master of Laws (LLM) Candidate at the University of Nairobi. She is a member of the Law Society of Kenya. She is a legal and policy expert with a focus on Environment and Natural Resources, Constitutional Litigation, Oil and gas and Climate Change Law.`,
      bioPoints: [
        "Seasoned legal professional with expertise in corporate and commercial law, conveyancing, and litigation.",
        "Holds an LL.B from the University of Nairobi and a Diploma from the Kenya School of Law.",
        "Passion for corporate and commercial law.",
        "Honed skills at Mwenda Royford and Company Advocates.",
        "Specializes in corporate governance, mergers and acquisitions, and intellectual property law.",
      ],
      image: "/images/lawyers/Daisy.webp",
      work: "Associate",
      email: "wacuka1992@gmail.com",
      phone: "+25472431985",
      linkedin: "#",
      facebook: "#",
    },
    {
      id: 5,
      name: "Erick Munene",
      bio: `Munene, a distinguished alumnus of The University of Nairobi, graduated with a Bachelor of Laws (LLB) with Honours in 2014. His journey led him to become an advocate of the High Court of Kenya in June 2018. Joining our firm in 2021, Munene quickly established himself as a beacon of excellence, showcasing expertise in Civil, Criminal, Insurance, Family, and Employment Law. Renowned for his courtroom prowess and unwavering dedication, Munene commands respect in both prosecuting and defending cases. Leading our Insurance and Criminal Litigation Department, Munene's dynamic approach and visionary leadership continue to shape the legal landscape, embodying integrity, competence, and unwavering determination.`,
      bioPoints: [
        "Seasoned legal professional with expertise in corporate and commercial law, conveyancing, and litigation.",
        "Holds an LL.B from the University of Nairobi and a Diploma from the Kenya School of Law.",
        "Passion for corporate and commercial law.",
        "Honed skills at Mwenda Royford and Company Advocates.",
        "Specializes in corporate governance, mergers and acquisitions, and intellectual property law.",
      ],
      image: "/images/lawyers/munene.webp",
      work: "Associate",
      email: "#",
      phone: "#",
      linkedin: "#",
      facebook: "#",
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
      <div className="lg:mt-6 lg:mb-8">
        <p className="text-center text-gray-600 textbase mt-9">
          Want to reach Out? {""}
          <a href="mailto:info@royfordlawlaw.com">
            <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
              Contact our support info@royfordlawlaw.com
            </span>
          </a>
        </p>
      </div>
      <FooterLinks />
      <Foot />
    </>
  );
};

export default Lawyer;
