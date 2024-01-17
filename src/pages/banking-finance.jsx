/* eslint-disable react/no-unescaped-entities */
import React from "react";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const BankingFinance = () => {
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
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/service_01.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // backgroundAttachment: "fixed", // Modified this line for background attachment
          }}
        >
          <h1 className="text-5xl text-white">BankingFinance</h1>
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center xl:justify-center lg:justify-center lg:gap-8 xl:gap-10 p-2 xl:p-24 lg:p-16 border-b">
          <Image
            src="/images/service_01.jpg"
            width={500}
            height={300}
            className="w-82 h-42 mt-6"
            alt="BankingFinance"
          />
          <div className="lg:mb-6 xl:mb-8">
            <h1 className="text-3xl text-left lg:text-left mt-10 font-bold mb-6">
              Overview
            </h1>
            <div className="w-28 h-1 bg-[#A65A2A] mb-8"></div>
            <p className="text-orange-500 text-md leading-normal lg:text-lg xl:text-xl lg:text-left">
              Our firm stands as a beacon of financial expertise, navigating the
              intricacies of significant transactions with precision and flair.
            </p>
            <br />
            <p className="text-black leading-normal text-md lg:text-lg xl:text-xl lg:text-left">
              In our dynamic portfolio, we specialize in debt and equity issues,
              ensuring compliance with local regulations. Beyond mere adherence,
              we craft innovative financial strategies. One notable instance
              involved providing legal opinions on Kenyan law to lenders, the
              Kenyan Government, and global rating agencies. Our role extended
              beyond routine advice to active involvement in netting,
              derivatives, security, and crafting intricate documents for swaps,
              options, foreign exchange transactions, and stock lending. At
              Mwenda Royford and Company Advocates, Banking and Finance isn't
              just a practice area; it's an immersive experience marked by
              strategic insight and precision. Trust us not only to advise but
              to orchestrate financial transactions that surpass industry
              standards.
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
                  In a remarkable experience, our firm played a pivotal role in
                  significant financial transactions, guiding the structuring of
                  debt and equity issues with finesse. Compliance with the local
                  regulatory regime wasn't just a requirement; it was an
                  opportunity to redefine financial strategies. We provided
                  opinions on Kenyan law to lenders, the Kenyan Government, and
                  global rating agencies, offering a nuanced understanding that
                  transcends borders.
                </li>
                <li className="leading-normal text-md">
                  At Mwenda Royford and Company Advocates, Banking and Finance
                  isn't just a service; it's an immersive experience marked by
                  strategic insight, precision, and the thrill of navigating the
                  dynamic landscape of financial transactions. Trust us to not
                  just advise but to orchestrate financial dealings that
                  redefine industry norms.
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

export default BankingFinance;
