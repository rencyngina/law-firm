/* eslint-disable react/no-unescaped-entities */
import React from "react";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
import Image from "next/image";
import familyContent from "../pages/content/familyContent.json";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";



const Family = () => {
  const { bannerText} = familyContent;
  const keyContacts = [
    {
      id: 1,
      name: "Nkonge R. Mwenda",
      position: "Managing Partner",
      email: "mwenda@royfordlaw.com",
      imageSrc: "/images/Mwenda2.jpg",
      twitterHandle: "#",
      linkedinHandle: "#",
    },
    {
      id: 2,
      name: "Annet A. Otago",
      position: "Partner",
      email: "annet@royfordlaw.com",
      imageSrc: "/images/lawyers/lawyer1.jpeg",
      twitterHandle: "#",
      linkedinHandle: "#",
    },
  ];
  
  const experience = [
    {
      id: 1,
      content:
        "In a recent legal odyssey, our firm fearlessly embarked on a riveting international adoption case, deftly unraveling complexities to secure joyous family unions. As legal virtual sos, we orchestrated a gripping custody dispute, crafting a favorable arrangement that reverberated with the harmonious cadence of a child's best interests.",
    },
    {
      id: 2,
      content:
        "In the arena of high-stakes divorce, we wielded our legal prowess like a finely honed sword, navigating treacherous property divisions, negotiating spousal support, and artfully resolving child custody matters. This multifaceted experience illuminates our mastery in the diverse realms of Child and Family Law—a testament to our unwavering commitment to securing triumphant resolutions for clients amid the intricate tapestry of family-related legal challenges.",
    },
  ];

  return (
    <>
      <LandingNavBar />
      <div className="bg-white h-auto w-full" id="family">
        <div
          className="h-52 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/familylaw.jpg)`,
            backgroundPosition: "center",
            objectFit: "cover",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-5xl text-white">{bannerText}</h1>
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center xl:justify-center lg:justify-center lg:gap-8 xl:gap-10 p-2 xl:p-24 lg:p-16 border-b">
        <Image
            src="/images/familylaw.jpg"
            width={500}
            height={300}
            className="w-full lg:w-82 h-42 mt-6 lg:hidden xl:hidden"
            alt=""
          />
          <div className="lg:mb-6 xl:mb-8">
            <h1 className="text-3xl text-left lg:text-left mt-10 font-bold mb-6">
              Overview
            </h1>
            <div className="w-28 h-1 bg-[#A65A2A] mb-8"></div>
            <p className="text-orange-500 text-md leading-normal lg:text-lg xl:text-lg lg:text-left">
              Child and family law encompasses a wide range of legal issues
              related to familial relationships, children, and the
              responsibilities and rights of individuals within a family unit.
            </p>
            <br />
            <p className="text-gray-500 leading-normal text-md lg:text-lg xl:text-lg lg:text-left">
              Journey with our firm through the heart-wrenching and triumphant
              landscapes of child and family law. As trailblazers, we navigate
              the intricate tapestry of Local and International adoptions,
              offering a lifeline to families seeking to expand their love
              across borders. Brace yourself for the legal theatrics as we
              provide sagacious consultation and fierce litigation
              representation in the realms of Adoptions, Guardianships, Custody
              battles, and the emotional terrain of Divorce. Witness our prowess
              in orchestrating fair Maintenance settlements and championing
              diverse Family Law Applications, where every case is a compelling
              chapter in the epic tale of familial justice and harmony.
            </p>
          </div>
        </div>
        {/* Experience and key Contacts to be added */}
        <div className="container mx-auto p-10 xl:p-22 lg:p-14 border-b lg:mb-10">
          <div className="block lg:grid lg:grip-col-2 xl:grid-cols-2 lg:gap-8 mt-6">
            <div className="gap-4 mt-0 grid grid-cols-1 lg:grid-cols-3 lg:mb-40 xl:mt-50">
              <div className="lg:col-span-3">
                <h1 className="text-xl lg:text-3xl xl:text-4xl mb-4">
                  Key Contacts
                </h1>
                <div className="w-28 h-1 bg-[#A65A2A] mb-8"></div>
              </div>

               {keyContacts.map((contact) => (
                <div className="lg:col-span-1 mb-8" key={contact.id}>
                  <div className="flex flex-col items-center border p-4 rounded-md transition duration-300 transform hover:scale-105 hover:shadow-xl">
                    <Image
                      src={contact.imageSrc}
                      width={500}
                      height={300}
                      className="w-82 h-42 mt-6 rounded-md"
                      alt={contact.name}
                    />
                    <h1 className="text-lg lg:text-xl xl:text-xl mt-6 mb-2 font-semibold">
                      {contact.name}
                    </h1>
                    <p className="text-sm lg:text-base xl:text-base mb-2 text-gray-500">
                      {contact.position}
                    </p>
                    <p className="text-sm lg:text-base xl:text-base mb-2 text-gray-500">
                      {contact.email}
                    </p>
                    <div className="flex gap-4 mt-4">
                      {contact.twitterHandle && (
                        <a
                          href={`https://twitter.com/${contact.twitterHandle}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaTwitter size={20} />
                        </a>
                      )}
                      {contact.linkedinHandle && (
                        <a
                          href={`https://linkedin.com/in/${contact.linkedinHandle}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin size={20} />
                        </a>
                      )}
                      <a
                        href={`mailto:${contact.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaEnvelope size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              <h1 className="text-xl lg:text-2xl xl:text-3xl mb-4">
                Experience
              </h1>
              <div className="w-28 h-1 bg-[#A65A2A] mb-8"></div>
              {/* Experience*/}
              <p className="text-lg lg:text-xl xl:text-2xl mb-6">
                Recently, we have been involved in:
              </p>
              <ul className="list-disc p-2 lg:text-lg xl:text-lg mt-4 mb-2 lg:ml-4 xl:ml-6">
                <li className="leading-normal text-md lg:text-lg xl:text-lg">
                  In a recent legal odyssey, our firm fearlessly embarked on a
                  riveting international adoption case, deftly unraveling
                  complexities to secure joyous family unions. As legal virtual
                  sos, we orchestrated a gripping custody dispute, crafting a
                  favorable arrangement that reverberated with the harmonious
                  cadence of a child's best interests.
                </li>
                <li className="leading-normal text-md">
                  In the arena of high-stakes divorce, we wielded our legal
                  prowess like a finely honed sword, navigating treacherous
                  property divisions, negotiating spousal support, and artfully
                  resolving child custody matters. This multifaceted experience
                  illuminates our mastery in the diverse realms of Child and
                  Family Law—a testament to our unwavering commitment to
                  securing triumphant resolutions for clients amid the intricate
                  tapestry of family-related legal challenges.
                </li>
              </ul>
              <Link href="/Our-lawyer" className="inline-block font-extrabold text-white py-3 px-6 bg-yellow-500 hover:bg-yellow-600 transition duration-300">
              Get a Lawyer
          </Link>
            </div>
          </div>
        </div>
      </div>
      <Head />
    </>
  );
};

export default Family;
