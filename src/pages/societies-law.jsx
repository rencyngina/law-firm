/* eslint-disable react/no-unescaped-entities */
import React from "react";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const SocietiesLaw = () => {
  const keyContacts = [
    {
      id: 1,
      name: "Nkonge R. Mwenda",
      position: "Managing partner",
      email: "royford@royfordlaw.com",
      imageSrc: "/images/mwends3.jpg",
      twitterHandle: "#",
      linkedinHandle: "#",
    },
    {
      id: 2,
      name: "Annet A. Otago",
      position: "Associate",
      email: "otago@royfordlaw.com",
      imageSrc: "/images/Anett1.jpg",
      twitterHandle: "#",
      linkedinHandle: "#",
    },
  ];

  const experienceList = [
    "Acted for a leading Kenyan investments and real estate company\
                  in the sale of 10 high- end villas worth USD 100 million in a\
                  gated community in Karen. We advised the parties on the joint\
                  venture arrangement and facilitated the negotiation of the\
                  joint venture agreement and the transfer of the land to the\
                  joint venture reference...",
    "Acted for a leading Kenyan investments and real estate company\
                  in the acquisition of a 10-acre piece of land in Ridgeways,\
                  Kiambu worth USD 92.5 Million. We advised on all aspects of\
                  the acquisition, conducting legal due diligence and\
                  negotiating the sale and purchase agreement",
    "Acting for a leading Kenyan real estate and investments firm\
                  in the acquisition of a property worth USD 13 million.",
    "Advisor to a Pan-African financial institution with offices in\
                  several African countries, in the acquisition of a property in\
                  Nairobi worth USD 12 million",
    "Acting for a leading Kenyan real estate and investments firm\
                  in the acquisition of a property worth USD 13 million",
    " Acting a leading Turkish construction company in partnership\
                  with a German investment firm in a joint venture project with\
                  landowners for the development of a multi-million dollar\
                  mixed-use project in Nairobi.",
  ];

  return (
    <>
      <LandingNavBar />
      <div className="bg-white h-auto w-full" id="contact">
        <div
          className="h-52 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/coprate1.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed", // Modified this line for background attachment
          }}
        >
          <h1 className="text-5xl text-white">Societies Law</h1>
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center xl:justify-center lg:justify-center lg:gap-8 xl:gap-10 p-2 xl:p-24 lg:p-16 border-b">
          <Image
            src="/images/service_01.jpg"
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
              Picture a scenario where legal expertise meets the cooperative
              movement, and strategic guidance transforms regulatory challenges
              into triumphs. Our firm proudly represents and guides various
              co-operative societies across the country, with a special focus on
              the vibrant agricultural sector, including the pivotal coffee and
              tea industries. In a trailblazing initiative, we played a key role
              in disseminating and interpreting the compulsory registration of
              public service vehicles into cooperative societies, providing
              invaluable advice on compliance and implementation of this
              groundbreaking policy.
            </p>
            <br />
            <p className="text-gray-500 leading-normal text-md lg:text-lg xl:text-lg lg:text-left">
              But our commitment doesn't stop there; we've navigated cooperative
              societies disputes through established tribunal mechanisms,
              ensuring a seamless resolution process. Mwenda Royford and Company
              Advocates redefine Co-operative Societies Law, offering not just
              legal services but a thrilling journey of strategic guidance and
              transformative advocacy in the dynamic world of cooperative
              governance. Trust us to not just represent but to orchestrate
              legal strategies that redefine industry standards.
            </p>
          </div>
        </div>
        <div className="container mx-auto p-10 xl:p-22 lg:p-14 border-b lg:mb-10">
          <div className="block lg:grid lg:grip-col-2 xl:grid-cols-2 lg:gap-8">
            <div className="gap-4 mt-0 grid grid-cols-1 lg:grid-cols-3 lg:mb-40 xl:mt-50">
              <div className="lg:col-span-3">
                <h1 className="text-2xl lg:text-3xl xl:text-4xl mb-4">
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
                {experienceList.map((experience, index) => (
                  <li key={index} className="leading-normal text-md lg:mt-2 lg:mb-2  lg:text-lg xl:text-lg">
                    {experience}
                  </li>
                ))}
              </ul>
              <Link
                href="/Our-lawyer"
                className="inline-block font-extrabold text-white py-3 px-6 bg-yellow-500 hover:bg-yellow-600 transition duration-300"
              >
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

export default SocietiesLaw;
