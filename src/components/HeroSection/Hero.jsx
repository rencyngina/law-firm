import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import masaaiImage from "../../../public/images/royford.jpg";
import fourthImage from "../../../public/images/brief.jpeg";
import fifthImage from "../../../public/images/service_03.jpg";
import secondImage from "../../../public/images/assets.jpg";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [opacity, setOpacity] = useState(1);

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

  useEffect(() => {
    const handleSwipe = () => {
      if (touchStart - touchEnd > 50) {
        // Swiped left, go to next image
        handleNext();
      } else if (touchEnd - touchStart > 50) {
        // Swiped right, go to previous image
        handlePrev();
      }
    };

    const handleTouchStart = (event) => {
      setTouchStart(event.touches[0].clientX);
    };

    const handleTouchMove = (event) => {
      setTouchEnd(event.touches[0].clientX);
    };

    const handleTouchEnd = () => {
      handleSwipe();
      setTouchStart(0);
      setTouchEnd(0);
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchEnd]);

   useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0); // Set opacity to 0 for smooth fade-out transition

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
        setOpacity(1); // Set opacity back to 1 for smooth fade-in transition
      }, 5000); // Wait for 5 second before changing to the next image

    }, 10000); // Change image every 10 seconds

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
        className="object-fit"
        style={{
          opacity: opacity,
          // transition: 'opacity 2s ease-in-out',
          transition: 'opacity 1.5s ease-in-out',
        }}
        
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4 sm:p-8">
        <h1 className="w-full sm:w-1/2 lg:w-1/2 text-4xl font-bold lg:text-6xl xl:text-7xl leading-relaxed lg:font-extrabold mb-2">
          {imagesData[currentIndex].title}
        </h1>
        <p className="text-white w-full sm:w-1/2 lg:w-1/2 text-sm lg:text-xl leading-relaxed">
          {imagesData[currentIndex].description}
        </p>
        <button className="text-sm lg:text-xl w-28 h-10 lg:w-48 lg:h-16 mt-6 mr-10 lg:mr-20 xl:mr-32" style={{ background: 'rgb(208,178,22)', border: 'none', transition: 'border 0.3s ease' }}>
          {imagesData[currentIndex].buttonLabel}
        </button>
         <div className="hidden lg:flex justify-center mt-6 gap-8 sm:gap-12 md:gap-16 lg:gap-24">
          {/* Conditional rendering of buttons based on screen size */}
          <button className="btn btn-primary rounded-full bg-white h-12 w-12 flex items-center justify-center focus:outline-none  sm:flex" onClick={handlePrev}>
            <GrPrevious className="text-black" />
          </button>
          <button className="btn btn-primary rounded-full bg-white h-12 w-12 flex items-center justify-center focus:outline-none sm:flex" onClick={handleNext}>
            <GrNext className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

