import React from 'react'
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
import Image from "next/image";
import familyContent from "../pages/content/familyContent.json";
import { BiLogoGmail } from "react-icons/bi";

function Industrials() {

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
          <h1 className="text-5xl text-white">Industrials</h1>
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
            In an era where Kenya's industrial landscape navigates through an evolving regulatory framework and strategic planning of special economic zones (SEZ), we stand as legal architects at the forefront of this transformative wave.
            </p>
            <br />
            <p className="text-gray-500 leading-normal text-md lg:text-lg xl:text-xl lg:text-left">
            As advocates of industrialization, we seize the pulse of growth in a climate of opportunity driven by a burgeoning middle-class and regional demand. Our legal ensemble, well-versed in the intricacies of the sector, offers advice that transcends challenges and embraces the vast potential for private investment.
Imagine a legal partner that not only comprehends but thrives amidst the complexities, offering nuanced guidance in pivotal areas like banking and finance, commercial disputes, corporate and commercial matters, employment, mergers and acquisitions, real estate, conveyancing, and tax disputes. At Mwenda Royford and Company Advocates, we don't just witness industrial evolution; we shape it with a symphony of legal brilliance.
            </p>
          </div>
        </div>
        {/* Experience and key Contacts to be added */}
       
      <FooterLinks />
    </>
  );
};

export default Industrials;

