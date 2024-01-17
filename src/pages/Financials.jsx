/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
import Image from "next/image";
import familyContent from "../pages/content/familyContent.json";
import { BiLogoGmail } from "react-icons/bi";

function Financials() {

  return (
    <>
    <LandingNavBar />
    <div className="bg-white h-auto w-full" id="contact"></div>
    <div
          className="h-52 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/coporate.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // backgroundAttachment: "fixed", // Modified this line for background attachment
          }}
        >
          <h1 className="text-5xl text-white">Financials</h1>
          </div>
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center xl:justify-center lg:justify-center lg:gap-8 xl:gap-10 p-2 xl:p-24 lg:p-16 border-b">
          <Image
            src="/images/coporate.png"
            width={500}
            height={300}
            className="w-82 h-42 mt-6"
            alt=""
          />
          <div className="lg:mb-4 xl:mb-8">
            <h1 className="text-3xl text-left lg:text-left mt-10 font-bold mb-6">
              Overview
            </h1>
            <div className="w-28 h-1 bg-[#A65A2A] mb-8"></div>
            <p className="text-orange-500 text-md leading-normal lg:text-lg xl:text-xl lg:text-left">
            Dive into the heart of financial vibrancy with Mwenda Royford and Company Advocates, where the rhythm of the financial sector's pulse is matched by our nuanced understanding of its intricate dynamics.
            </p>
            <br />
            <p className="text-gray-500 leading-normal text-md lg:text-lg xl:text-xl lg:text-left">
            In a sector shaped by meticulous regulatory oversight, we navigate the challenges and harness the opportunities that come with stringent disclosure requirements and a demanding business environment. Beyond legal jargon, our expertise manifests in technically sound, practical, and 
            commercially effective advice, ensuring that our clients not only survive but thrive in this dynamic financial landscape.
Picture a legal ensemble that extends beyond traditional boundaries, providing a symphony of services encompassing business support, restructuring, insolvency, corporate advisory, dispute resolution, litigation, employment and labor advice, local and international arbitration, and tax dispute resolution. At Mwenda Royford and Company Advocates, we don't just understand the complexities; we orchestrate success in the financial sector with unparalleled legal finesse.
            </p>
          </div>
        </div>
        {/* Experience and key Contacts to be added */}
        
      <FooterLinks />
    </>
  );
};

export default Financials;


