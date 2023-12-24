import React, { useState, useEffect } from "react";
import Image from "next/image";

import masaaiImage from "../../../public/images/law1.jpg";
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
      title: "Muenda RoyFord & Company Advocates",
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
      linkTo: "/services",
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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imagesData.length) % imagesData.length);
  };

  return (
    <div style={{ position: "relative", height: "90vh" }}>
      <Image
        src={imagesData[currentIndex].image}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
      />
      <div style={overlayStyle}>
       <h1 style={titleStyle} className="text-4xl lg:text-5xl text-white font-extrabold">{imagesData[currentIndex].title}</h1>
<p style={descriptionStyle}className="text-lg lg:text-xl text-white">{imagesData[currentIndex].description}</p>
        <button className="btn btn-primary mt-6 bg-[#F6ED6F]" style={buttonStyle}>
          {imagesData[currentIndex].buttonLabel}
        </button>
        <div className="flex justify-center mt-6 gap-96">
          <button className="btn btn-primary m-2" onClick={handlePrev}>
            <GrPrevious />
          </button>
          <button className="btn btn-primary" onClick={handleNext}>
            <GrNext />
          </button>
        </div>
      </div>
    </div>
  );
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(26, 25, 25, 0.8)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "white",
  padding: "20px",
};

const titleStyle = {
  // fontSize: "4rem",
  // color: "white",
  // fontWeight: "bold",
  lineHeight: "1.5",
  width: "50%",
};

const descriptionStyle = {
  // fontSize: "1.5rem",
  // color: "white",
  lineHeight: "1.5",
  width: "50%",
};

const buttonStyle = {
  fontSize: "1.5rem",
  color: "white",
  lineHeight: "1.2",
  width: "180px",
  height: "60px",
  backgroundColor: "#A65A2A",
};

export default Hero;