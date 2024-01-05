import React, { useState, useEffect } from "react";
import Image from "next/image";
import { LuArrowDownCircle } from "react-icons/lu";
import { Link as ScrollLink } from "react-scroll";

import masaaiImage from "../../../public/images/royford.jpg";
import fourthImage from "../../../public/images/brief.jpeg";
import fifthImage from "../../../public/images/service_03.jpg";
import secondImage from "../../../public/images/assets.jpg";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showIcon, setShowIcon] = useState(false);

  const imagesData = [
    {
      image: masaaiImage,
      title: "MWENDA ROYFORD & COMPANY ADVOCATE",
      description: "Where Excellence Meets Justice",
      buttonLabel: "Who we are",
      linkTo: "/about",
    },
    {
      image: fourthImage,
      title: "Arbitration",
      description:
        "We have represented clients in local and international arbitration tribunals including International Centre for Settlement of Investment Disputes (ICSID), the London Court of International Arbitration (LCIA) and the International Chamber of Commerce (ICC) in energy, financial services and construction sectors.",
      buttonLabel: "Our Services",
      linkTo: "/services",
    },
    {
      image: fifthImage,
      title: "Banking & Finance",
      description:
        "Our Banking & Finance practice area is well regarded for its expertise in advising in both contentious and non-contentious matters",
      buttonLabel: "Our Expertise",
      linkTo: "/practice-areas",
    },
    {
      image: secondImage,
      title: "Assets Tracing & Recovery",
      description:
        "Our Asset Tracing & Recoveries practice area is a recognized leader in advising both contentious and non-contentious complex tracing and recovery of assets and in restructuring & insolvencies.",
      buttonLabel: "Our Services",
      linkTo: "/services",
    },
  ];

  const totalImages = imagesData.length;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowIcon(true);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 8000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <div className="relative w-full h-[68vh] lg:h-[85.8vh] xl:h-[88] overflow-hidden md:h-[78vh] xs:h-[50vh]">
      {imagesData.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-[88vh] lg:h-[85.8vh] xl:h-[88] transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.image}
            alt={`Slide ${index}`}
            layout="fill"
            className="object-fit"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4 sm:p-8">
            <h1 className="w-full sm:w-1/2 lg:w-1/2 text-4xl font-bold lg:text-6xl xl:text-7xl leading-relaxed lg:font-extrabold mb-2">
              {image.title}
            </h1>
            <p className="text-white w-full sm:w-1/2 lg:w-1/2 text-sm lg:text-xl leading-relaxed">
              {image.description}
            </p>
          </div>
        </div>
      ))}
      <ScrollLink
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="absolute bottom-0 left-0 flex gap-4 justify-center items-center p-4 lg:p-16"
      >
        <LuArrowDownCircle
          className={`text-2xl text-white ${
            showIcon ? "see-more-icon visible" : "see-more-icon"
          }`}
        />
        <h1 className="text-white text-sm lg:text-xl leading-relaxed">
          See More
        </h1>
      </ScrollLink>
    </div>
  );
};

export default Hero;
