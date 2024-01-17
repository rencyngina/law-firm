/* eslint-disable react/no-unescaped-entities */
import React from "react";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Commercial = () => {
  const keyContacts = [
    {
      id: 1,
      name: "Pamella Ager",
      position: "Partner",
      email: "pamella@example.com",
      imageSrc: "/images/JKTK.webp",
      twitterHandle: "pamella_twitter",
      linkedinHandle: "pamella-linkedin",
    },
    {
      id: 2,
      name: "John Mbaluto",
      position: "Partner",
      email: "john@example.com",
      imageSrc: "/images/John-Mbaluto.webp",
      twitterHandle: "john_twitter",
      linkedinHandle: "john-linkedin",
    },
    {
      id: 3,
      name: "Jane Wangoi",
      position: "Title",
      email: "another@example.com",
      imageSrc: "/images/NLC.webp",
      twitterHandle: "another_twitter",
      linkedinHandle: "another-linkedin",
    },
  ];

  return (
    <>
      <LandingNavBar />
      <div className="bg-white h-auto w-full" id="contact">
        <div
          className="h-52 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/coporate.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed", // Modified this line for background attachment
          }}
        >
          <h1 className="text-5xl text-white">Commercial Law</h1>
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center xl:justify-center lg:justify-center lg:gap-8 xl:gap-10 p-2 xl:p-24 lg:p-16 border-b">
          <Image
            src="/images/coporate.png"
            width={500}
            height={300}
            className="w-82 h-42 mt-6"
            alt=""
          />
          <div className="lg:mb-6 xl:mb-8">
            <h1 className="text-3xl text-left lg:text-left mt-10 font-bold mb-6">
              Overview
            </h1>
            <div className="w-28 h-1 bg-[#A65A2A] mb-8"></div>
            <p className="text-orange-500 text-md leading-normal lg:text-lg xl:text-xl lg:text-left">
              Dive into the heart of commerce with our Corporate & Commercial
              practice, where each transaction is a pulsating journey. Armed
              with a reservoir of sector-specific wisdom, we propel businesses
              to unprecedented heights, merging strategic vision with profound
              legal acumen and an intimate grasp of business dynamics.
            </p>
            <br />
            {/*  Querry data using json from a file*/}
            <p className="text-black leading-normal text-md lg:text-lg xl:text-xl lg:text-left">
              Our Corporate & Commercial practice seamlessly intertwines
              competition law, employment intricacies, financial finesse,
              regulatory astuteness, and taxation wizardry. Picture our recent
              conquests a breathtaking saga featuring intricate mergers, daring
              acquisitions, visionary joint ventures, and contracts that
              redefine industry landscapes. Our prowess is not just
              acknowledged, it's revered.
              <br />
              Join us in the epicenter of corporate law, where each legal stroke
              is a strategic masterpiece, propelling businesses into realms of
              unparalleled growth. In the intricate dance of commerce, we are
              the choreographers, crafting success stories that resonate with
              the pulse of business brilliance.
            </p>
          </div>
        </div>
        {/* Experience and key Contacts to be added */}
        <div className="container mx-auto p-10 xl:p-22 lg:p-14 border-b lg:mb-10">
          <div className="block lg:grid lg:grip-col-2 xl:grid-cols-2 lg:gap-8">
            <div className="gap-4 mt-0 grid grid-cols-1 lg:grid-cols-3 lg:mb-40 xl:mt-50">
              <div className="lg:col-span-3">
                <h1 className="text-2xl lg:text-3xl xl:text-4xl mb-4">
                  Key Contacts
                </h1>
                <div className="w-28 h-1 bg-[#A65A2A] mb-8"></div>
              </div>

              {/* Contact 1 */}
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
                <li className="leading-normal text-md">
                  Mwenda Royford and Company Advocates elevate the practice of
                  Commercial and Business Law through a sensational blend of
                  creativity and efficiency, leaving an indelible mark on the
                  legal landscape. They have orchestrated a diverse range of
                  custom-made commercial and business agreements, tailoring
                  solutions to meet the unique needs of both local and foreign
                  corporate clients.
                  <br />
                   Their expertise extends to advising on the
                  intricate structuring of local and international companies,
                  including for-profit and non-profit entities, showcasing their
                  versatility in navigating complex business landscapes.
                </li>
                <li className="leading-normal text-md">
                  An exemplary experience lies in their adept formation and
                  registration of Trusts and Foundations, attesting to their
                  commitment to comprehensive legal solutions. Mwenda Royford
                  and Company Advocates also stand out in conducting due
                  diligence for companies, providing invaluable insights into
                  institutional, governance, and ownership structures. The
                  firm's offering of company secretarial services for corporate
                  clients further underscores their dedication to facilitating
                  seamless business operations, making them unparalleled leaders
                  in the realm of Commercial and Business Law.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Head />
    </>
  );
};

export default Commercial;
