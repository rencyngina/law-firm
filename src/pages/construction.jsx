/* eslint-disable react/no-unescaped-entities */
import React from "react";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
import Image from "next/image";
import familyContent from "../pages/content/familyContent.json";
import { BiLogoGmail } from "react-icons/bi";

function Construction() {
  return (
    <>
      <LandingNavBar />
      <div className="bg-white h-auto w-full" id="contact"></div>
      <div
        className="h-52 w-full flex flex-col justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/sector/construction1.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // Modified this line for background attachment
        }}
      >
        <h1 className="text-xl lg:text-5xl text-white">Construction</h1>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center xl:justify-center lg:justify-center lg:gap-8 xl:gap-10 p-2 xl:p-24 lg:p-16 border-b">
        <div className="lg:mb-4 xl:mb-8">
          <h1 className="text-3xl text-left lg:text-left mt-10 font-bold mb-6">
            Overview
          </h1>
          <div className="w-28 h-1 bg-[#A65A2A] mb-8"></div>
          <p className="text-orange-500 text-md leading-normal lg:text-lg xl:text-lg lg:text-left">
            On a thrilling odyssey through Kenya's dynamic construction
            arena, a pulsating realm of double-digit growth igniting
            opportunities in real estate, energy, and infrastructure. This
            narrative of progress, fueled by private financing, is a testament
            to the success story of our nation. At Mwenda Royford and Company
            Advocates, the construction landscape isn't just a domain; it's the
            essence of our expertise. Picture a tapestry woven with deep sector
            experiences, propelling us to advise seamlessly in contentious and
            non-contentious matters within the construction narrative.
          </p>
          <br />
          <p className="text-gray-500 leading-normal text-md lg:text-lg xl:text-lg lg:text-left">
            In our symphony of legal brilliance, harmonizing with our prowess in
            Conveyancing & Real Estate, we stand as advisors to
            visionaries—owners, developers, contracting professionals, and
            lenders. Envision a canvas where we navigate the intricacies of land
            acquisition, construction disputes, local and international
            arbitration, project agreements, financing, and the structuring of
            complex projects. Join us at Mwenda Royford and Company Advocates,
            where construction isn't just an industry; it's a thrilling saga of
            legal mastery, transforming challenges into triumphs in the heart of
            Kenya's construction renaissance.
          </p>
        </div>
      </div>
      {/* Experience and key Contacts to be added */}

      <FooterLinks />
    </>
  );
}

export default Construction;
