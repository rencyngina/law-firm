/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
import Image from "next/image";
import familyContent from "./content/familyContent.json";
import { BiLogoGmail } from "react-icons/bi";

function EnergySector() {

  return (
    <>
    <LandingNavBar />
    <div className="bg-white h-auto w-full" id="contact"></div>
    <div
          className="h-52 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/sector/energy1.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed", // Modified this line for background attachment
          }}
        >
          <h1 className="text-xl lg:text-5xl text-white">Energy Sector</h1>
          </div>
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center xl:justify-center lg:justify-center lg:gap-8 xl:gap-10 p-2 xl:p-24 lg:p-16 border-b">
          <div className="lg:mb-4 xl:mb-8">
            <h1 className=" text-xl lg:text-3xl text-left lg:text-left mt-10 font-bold mb-6">
              Overview
            </h1>
            <div className="w-28 h-1 bg-[#A65A2A] mb-8"></div>
            <p className="text-orange-500 text-md leading-normal lg:text-lg xl:text-lg lg:text-left">
            Our legal mastery meets the complexities of a dynamic regulatory environment.
            In an era of substantial oil and mineral discoveries, our prowess in the energy sector stands as a beacon, navigating the intricate legal terrain with finesse. Picture a symphony of expertise, where large-scale infrastructure projects seamlessly blend with our commitment to bolster domestic and foreign export.            
            </p>
            <br />
            <p className="text-gray-500 leading-normal text-md lg:text-lg xl:text-lg lg:text-left">
            At Mwenda Royford and Company Advocates, our dedication to the energy sector is more than legal advice; it's an unwavering commitment to being trailblazers in this transformative industry. As we collaborate closely with the Infrastructure, Projects & PPP practice area, we stand at the forefront, offering our clients not just legal counsel but a gateway to success in the pulsating energy renaissance of Kenya.
            </p>
          </div>
        </div>
        
      <FooterLinks />
    </>
  );
};

export default EnergySector;

