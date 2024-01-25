import React from "react";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
// import FooterLinks from "../components/Footer/FooterLinks";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const EmploymentLaw = () => {
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
  
  return (
    <>
      <LandingNavBar />
      <div className="bg-white h-auto w-full" id="contact">
        <div
          className="h-52 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/11r.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed", // Modified this line for background attachment
          }}
        >
          <h1 className="text-5xl text-white">Employment Law</h1>
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center xl:justify-center lg:justify-center lg:gap-8 xl:gap-10 p-2 xl:p-24 lg:p-16 border-b">
          <Image
            src="/images/11r.jpg"
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
              Our comprehensive services redefine the employment legal
              landscape. Our firm stands as a stalwart, offering employers,
              employees, and the self-employed unparalleled expertise in
              employment policies, contract terminations, wages and benefits,
              collective bargaining agreements, workplace safety, workmen’s
              compensation, pensions, and adept resolution of employment-related
              disputes.
            </p>
            <br />
            <p className="text-gray-500 leading-normal text-md lg:text-lg xl:text-lg lg:text-left">
              What sets us apart is our commitment to guiding companies through
              Employment Audits, ensuring strict compliance with legal
              requirements. Mwenda Royford and Company Advocates excel in not
              only providing legal counsel but also fostering a strategic
              approach to employment matters, aligning with the dynamic needs of
              modern workplaces. Trust us to navigate the intricacies of Labour
              and Employment Law, providing clarity, precision, and
              transformative legal solutions for employers and employees alike.
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

export default EmploymentLaw;
