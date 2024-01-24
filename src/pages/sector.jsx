import React from "react";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
import Image from "next/image";
import Link from "next/link";

const Sector = () => {
  const sectordata = [
    {
      id: 1,
      sector: "Construction",
      ImageSrc: "/images/sector/construction1.jpg",
      linkTo: "/construction",
    },
    {
      id: 2,
      sector: "Energy Sector",
      ImageSrc: "/images/sector/energy1.jpg",
      linkTo: "/EnergySector",
    },
    {
      id: 3,
      sector: "Financials",
      ImageSrc: "/images/sector/financials1.jpg",
      linkTo: "/Financials",
    },
    {
      id: 4,
      sector: "Manufacturing and Industrials",
      ImageSrc: "/images/sector/manufacture1.jpg",
      linkTo: "/Industrials",
    },
    {
      id: 5,
      sector: "International trade",
      ImageSrc: "/images/sector/internationaltrade1.jpg",
      linkTo: "/Internationaltrade",
    },
  ];

  return (
    <>
      <Head />
      <LandingNavBar />
      <div className="bg-white min-h-screen" id="sector">
        <div
          className="h-52 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/sector/energy1.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <h1 className="text-2xl lg:text-5xl xl:text-6xl text-white">
            Sectors
          </h1>
        </div>
        <div className="container mx-auto px-4 py-12">
          <div className="block lg:grid lg:grid-cols-3 gap-6">
            {sectordata.map((item) => (
              <div key={item.id} className="mb-4">
                <div className="shadow-xl rounded overflow-hidden duration-300 transform hover:scale-95 hover:shadow-xl">
                  <Image
                    alt="sector"
                    src={item.ImageSrc}
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    style={{ maxHeight: "250px" }}
                  />
                  <div className="p-4 text-center bg-[rgb(17,24,39)]">
                    <Link
                      href={item.linkTo}
                      className="text-[#A65A2A] hover:text-yellow-700"
                    >
                      <h5 className="text-lg font-bold mb-2">{item.sector}</h5>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterLinks />
    </>
  );
};

export default Sector;
