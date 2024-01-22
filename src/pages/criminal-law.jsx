/* eslint-disable react/no-unescaped-entities */
import React from "react";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const CriminalLaw = () => {
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
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/brief.jpeg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed", // Modified this line for background attachment
          }}
        >
          <h1 className="lg:text-5xl text-xl text-white">Criminal Law</h1>
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center xl:justify-center lg:justify-center lg:gap-8 xl:gap-10 p-2 xl:p-24 lg:p-16 border-b">
          <Image
            src="/images/brief.jpeg"
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
              Picture a scenario where legal defenses transcend the ordinary,
              weaving a narrative of resilience and strategic acumen. In the
              heart of our practice, we navigate the complexities of criminal
              law, handling defenses with an unparalleled commitment to justice.
              Whether it's fraud, traffic violations, theft, or other criminal
              matters, our firm stands as a bastion of legal prowess, turning
              each defense into a thrilling legal saga.
            </p>
            <br />
            <p className="text-gray-500 leading-normal text-md lg:text-lg xl:text-lg lg:text-left">
              But our commitment doesn't end with defense; we actively watch
              brief for clients, ensuring their interests are safeguarded in the
              outcome of criminal prosecutions. Mwenda Royford and Company
              Advocates redefine Criminal Law, offering not just legal services
              but immersive experiences marked by resilience, strategic
              brilliance, and the thrill of navigating the challenging landscape
              of criminal defense. Trust us to not just handle cases but to
              craft legal narratives that transcend expectations in the dynamic
              realm of Criminal Law.
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
                  Our firm stood as a formidable legal force, handling defenses
                  across the spectrum of criminal law, from fraud to traffic
                  violations and theft.
                </li>
                <li className="leading-normal text-md lg:text-lg xl:text-lg">
                  Imagine a scenario where legal battles are not just fought but
                  strategically navigated, each case a thrilling saga of
                  resilience and acumen.
                </li>
                <li className="leading-normal text-md lg:mt-4 lg:text-lg xl:text-lg">
                  Our commitment goes beyond traditional defense; we actively
                  engage in watch briefs for clients, ensuring their interests
                  are championed in criminal prosecutions. Mwenda Royford and
                  Company Advocates redefine Criminal Law, offering not just
                  legal representation but immersive experiences marked by
                  strategic brilliance, resilience, and the thrill of navigating
                  the complex landscape of criminal defense. Trust us to not
                  just handle cases but to craft legal narratives that transcend
                  expectations in the dynamic realm of Criminal Law.
                </li>
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

export default CriminalLaw;
