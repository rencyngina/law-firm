import React, { useState, useEffect } from "react";
import Image from "next/image";

import masaaiImage from "../../../public/images/law1.jpg";
import fourthImage from "../../../public/images/brief.jpeg";
import fifthImage from "../../../public/images/7r.jpg";
import secondImage from "../../../public/images/8r.jpg";
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
      buttonLabel: "Our Services",
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
      setOpacity(0); // Fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
        setOpacity(1); // Fade in
      }, 500); // Change time based on transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setOpacity(0); // Fade out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
      setOpacity(1); // Fade in
    }, 500); // Change time based on transition duration
  };

  const handlePrev = () => {
    setOpacity(0); // Fade out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + imagesData.length) % imagesData.length);
      setOpacity(1); // Fade in
    }, 500); // Change time based on transition duration
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
        <h1 style={titleStyle}>{imagesData[currentIndex].title}</h1>
        <p style={descriptionStyle}>{imagesData[currentIndex].description}</p>
        <button className="btn btn-primary mt-6" style={buttonStyle}>
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
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "white",
  padding: "20px",
};

const titleStyle = {
  fontSize: "4rem",
  color: "white",
  fontWeight: "bold",
  lineHeight: "1.5",
  width: "50%",
};

const descriptionStyle = {
  fontSize: "1.5rem",
  color: "white",
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
