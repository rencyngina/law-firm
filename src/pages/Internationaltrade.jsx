/* eslint-disable react/no-unescaped-entities */
import React from "react";
import LandingNavBar from "../components/nav";
// import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
// import Image from "next/image";
// import familyContent from "../pages/content/familyContent.json";
// import { BiLogoGmail } from "react-icons/bi";

function PublicSector() {
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
        <h1 className="text-5xl text-white">Public Sector</h1>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center xl:justify-center lg:justify-center lg:gap-8 xl:gap-10 p-2 xl:p-24 lg:p-16 border-b">
        <div className="lg:mb-4 xl:mb-8">
          <h1 className="text-xl lg:text-3xl text-left lg:text-left mt-10 font-bold mb-6">
            Overview
          </h1>
          <div className="w-28 h-1 bg-[#A65A2A] mb-8"></div>
          <p className="text-[#D0B216] text-md leading-normal lg:text-lg xl:text-lg lg:text-left">
            As virtuosos of the legal craft, we present an all-encompassing
            repertoire of legal practices, specializing in immigration,
            business, and international trade laws. In a realm where intricacies
            abound, our expertise serves as a beacon, seamlessly navigating the
            nuanced complexities of trade laws, transforming challenges into
            resounding triumphs. Trade laws, often enigmatic and open to
            interpretation, constitute the very fabric of global commerce. Our
            adept legal team not only comprehends but excels in navigating these
            intricate pathways, ensuring that import-export ventures not only
            survive but flourish. 
          </p>
          <br />
            <p className="text-[#D0B216] text-md leading-normal lg:text-lg xl:text-lg lg:text-left">
            At Mwenda Royford and Company Advocates, we
            transcend the conventional practice of law; we curate legal
            symphonies resonating with success in the dynamic world of
            international trade. Embark on an exhilarating journey through the
            dynamic realms of international trade law with Mwenda Royford and
            Company Advocates. Steeped in expertise across various legal
            practices, we transcend conventional boundaries, offering a spectrum
            of services, including immigration, business, and international
            trade law. In the intricate tapestry of trade regulations, where
            complexities abound, our adept legal team serves as navigators,
            transforming challenges into triumphs.
          </p>
          <br />
          <p className="text-black leading-normal text-md lg:text-lg xl:text-lg lg:text-left">
            Trade laws, labyrinthine and rife with interpretation, become a
            terrain of opportunity under our guidance. We understand that
            unraveling the rules is the key to unlocking success in
            import-export ventures. At Mwenda Royford and Company Advocates, we
            go beyond legal practice; we curate an experience that not only
            grasps the intricacies of international trade law but harnesses them
            for unparalleled success. In the dynamic arena of global commerce,
            we craft legal strategies that redefine industry norms and pave the
            way for triumphs.
            </p>
            <br />
            <p className="text-black leading-normal text-md lg:text-lg xl:text-lg lg:text-left">
            Embark on a thrilling odyssey through the
            fascinating realm of international trade law with Mwenda Royford and
            Company Advocates. Positioned at the forefront of Africa's
            engagement in global commerce, we navigate the intricate landscape
            of international trade with unparalleled expertise and continental
            reach.
             As Africa emerges as a key player in the international trade
            arena, our legal prowess becomes a catalyst for economic
            advancement. In the wake of groundbreaking initiatives like the
            African Continental Free Trade Agreement (AfCFTA), we leverage our
            comprehensive knowledge of regional, bilateral, and multilateral
            trade agreements.
            </p> 
            <br />
            <p className="text-black leading-normal text-md lg:text-lg xl:text-lg lg:text-left">
            Our adept lawyers, well-versed in AfCFTA, EPAs,
           AGOA, and more, stand ready to guide businesses through the
           complexities of international trade law. From anti-corruption and
           transparency to competition, investment, and tax matters, our
           principal areas of practice are strategically aligned to drive
           success in every facet of international trade. At Mwenda Royford and
           Company Advocates, we don't just practice law; we orchestrate a
           symphony of legal excellence that resonates across borders for
           Africa's economic prosperity.
            </p>
        </div>
      </div>
      {/* Experience and key Contacts to be added */}

      <FooterLinks />
    </>
  );
}

export default PublicSector;
