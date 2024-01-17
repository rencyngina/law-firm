import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const Partners = () => {
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
            <div>
              <Image
                src="/images/JKTK.webp"
                width={500}
                height={400}
                className="w-full h-full object-cover"
                alt="Partner 1"
              />
            </div>
            <div>
              <Image
                src="/images/John-Mbaluto.webp"
                width={500}
                height={400}
                className="w-full h-full object-cover"
                alt="Partner 2"
              />
            </div>
            <div>
              <Image
                src="/images/NLC.webp"
                width={500}
                height={400}
                className="w-full h-full object-cover"
                alt="Partner 3"
              />
            </div>
          </Carousel>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          </div>
        </div>
        <div className="lg:w-1/2 lg:ml-6 xl:ml-8">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mt-6 lg:mt-0 mb-4">
            Our Partners
          </h1>
          <div className="w-20 h-1 bg-[#A65A2A] mb-6"></div>
          <p className="text-orange-500 text-lg lg:text-xl xl:text-2xl mb-4">
            Our lawyers are enthusiastic, committed, flexible, and commercially
            minded.
          </p>
          <p className="text-black text-md lg:text-lg xl:text-xl leading-normal mb-8">
            In our dynamic portfolio, we specialize in debt and equity issues,
            ensuring compliance with local regulations. Beyond mere adherence,
            we craft innovative financial strategies.
          </p>
          <a
            href="#contact"
            className="text-[#A65A2A] font-semibold hover:underline">
            Our Lawyers
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
