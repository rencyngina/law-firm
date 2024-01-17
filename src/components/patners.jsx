import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Link from "next/link";

const Partners = () => {
  const partners = [
    {
      name: "Royford Mwenda",
      sector: "Finance",
      image: "/images/JKTK.webp",
    },
    {
      name: "John Mbaluto",
      sector: "Technology",
      image: "/images/John-Mbaluto.webp",
    },
    {
      name: "Jane Wangoi",
      sector: "Legal",
      image: "/images/NLC.webp",
    },
  ];

  return (
    <div className="w-full" id="partners">
      <div className="container mx-auto bg-[#FFFFFF] shadow-xl mt-10 mb-10 lg:flex lg:items-center xl:justify-center lg:justify-between lg:gap-8 xl:gap-10 p-4 xl:p-12 lg:p-8">
        <div className="lg:w-1/2 relative overflow-hidden">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            interval={5000}
            transitionTime={500}
          >
            {partners.map((partner, index) => (
              <div key={index}>
                <Image
                  src={partner.image}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                  alt={partner.name}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-bold">{partner.name}</h3>
                    <p className="text-sm">{partner.sector}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="lg:w-1/2 lg:ml-6 xl:ml-8">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mt-6 lg:mt-0 mb-4">
            Our Partners
          </h1>
          <div className="w-20 h-1 bg-[#A65A2A] mb-6"></div>
          <p className="text-yellow-500 text-lg lg:text-xl xl:text-2xl mb-4">
            Our lawyers are enthusiastic, committed, flexible, and commercially
            minded.
          </p>
          <p className="text-black text-md lg:text-lg xl:text-xl leading-normal mb-8">
            In our dynamic portfolio, we specialize in debt and equity issues,
            ensuring compliance with local regulations. Beyond mere adherence,
            we craft innovative financial strategies.
          </p>
        <button
            className="mt-4 font-extrabold text-white py-3 px-6 hover:bg-yellow-500 transition duration-300"
            style={{
              background: "rgb(208,178,22)",
            }}
          >
            <Link href="/team" className="text-white">
              Get a Lawyer
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;

