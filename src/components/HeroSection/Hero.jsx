import React, { useState, useEffect } from "react";
import Image from "next/image";

import masaaiImage from "../../../public/images/logo2.png";
import fourthImage from "../../../public/images/brief.jpeg";
import fifthImage from "../../../public/images/service_03.jpg";
import secondImage from "../../../public/images/assets.jpg";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const imagesData = [
    {
      image: masaaiImage,
      title: "MWENDA ROYFORD & COMPANY ADVOCATE",
      description: "Where Exelence Meets Justice",
      buttonLabel: "About Us",
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
        "Our Banking & Finance practise area is well regarded for its expertise in advising in both contentious and non-contentious matters",
      buttonLabel: "Our Expertise",
      linkTo: "/practice-areas",
    },
    {
      image: secondImage,
      title: "Assets Tracing & Recovery",
      description:
        "Our Asset Tracing & Recoveries practice area is a recognised leader in advising both contentious and noncontentious complex tracing and recovery of assets and in restructuring & insolvencies.",
      buttonLabel: "Our Services",
      linkTo: "/services",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [imagesData.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imagesData.length) % imagesData.length
    );
  };

  return (
    <div className="relative w-full h-[79vh] lg:h-[85.8vh] xl:h-[88]">
      <Image
        src={imagesData[currentIndex].image}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col justify-center items-center text-white p-4 sm:p-8">
        <h1 className="w-full sm:w-1/2 lg:w-1/2 text-4xl font-bold lg:text-6xl xl:text-7xl leading-relaxed lg:font-extrabold mb-2">
          {imagesData[currentIndex].title}
        </h1>
        <p className=" text-white w-full sm:w-1/2 lg:w-1/2 text-sm lg:text-xl leading-relaxed">
          {imagesData[currentIndex].description}
        </p>
        <button
          className="text-sm lg:text-xl w-28 h-10 lg:w-48 lg:h-16 mt-6"
          style={{
            background: `radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
              radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)`,
          }}
        >
          {imagesData[currentIndex].buttonLabel}
        </button>
        {/*<div className="flex justify-center mt-6 gap-8 sm:gap-12 md:gap-16 lg:gap-24">
          <button
            className="btn btn-primary rounded-full bg-white h-12 w-12 flex items-center justify-center focus:outline-none"
            onClick={handlePrev}
          >
            <GrPrevious className="text-black" />
          </button>
          <button
            className="btn btn-primary rounded-full bg-white h-12 w-12 flex items-center justify-center focus:outline-none"
            onClick={handleNext}
          >
            <GrNext className="text-black" />
          </button>
        </div>*/}
      </div>
    </div>
  );
};

export default Hero;
