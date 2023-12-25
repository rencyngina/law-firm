"use_client";
import { Padding } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Section2 = () => {
  const [countersVisible, setCountersVisible] = useState(false);
  const [workHours, setWorkHours] = useState(0);
  const [greatReviews, setGreatReviews] = useState(0);
  const [projectsDone, setProjectsDone] = useState(0);
  const [awardsWon, setAwardsWon] = useState(0);

  useEffect(() => {
    const targetNumbers = {
      workHours: 2016,
      greatReviews: 9,
      projectsDone: 185,
      awardsWon: 5,
    };
    const stepDuration = 10;
    const steps = Math.ceil(targetNumbers.workHours / stepDuration);
    let currentStep = 0;

    const countInterval = setInterval(() => {
      currentStep++;
      setWorkHours(Math.ceil((targetNumbers.workHours / steps) * currentStep));
      setGreatReviews(
        Math.ceil((targetNumbers.greatReviews / steps) * currentStep)
      );
      setProjectsDone(
        Math.ceil((targetNumbers.projectsDone / steps) * currentStep)
      );
      setAwardsWon(Math.ceil((targetNumbers.awardsWon / steps) * currentStep));

      if (currentStep === steps) {
        clearInterval(countInterval);
      }
    }, stepDuration);

    const animationTimeout = setTimeout(() => {
      setCountersVisible(true);
    }, stepDuration * steps + 200);

    return () => {
      clearInterval(countInterval);
      clearTimeout(animationTimeout);
    };
  }, []);

  const sectionStyle = {
    height: "75vh",
    backgroundImage: `linear-gradient(rgba(26, 25, 25, 0.8), rgba(21, 21, 21, 0.8)), url(/images/14r.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundAttachment: "fixed",
  };

  const leftSideStyle = {
    flex: 1,
  };

  const rightSideStyle = {
    flex: 1,
    // padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: `rgb(0, 208, 132)`,
    fontSize: "50px",
    fontWeight: "bolder",
    fontFamily: "poppins",
  };

  const buttonStyles = {
    height: "50px",
    // background: '#A65A2A',
    background: `radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
              radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)`,
    width: "170px",
    border: "none",
    fontSize: "16px",
    fontWeight: "bolder",
    color: "white",
    transition: "background 0.3s, color 0.3s",
    marginTop: "4px",
  };

  const handleMouseEnter = (event) => {
    event.target.style.background = "#A65A2A";
    event.target.style.color = "#A65A2A";
  };

  const handleMouseLeave = (event) => {
    event.target.style.background = "#A65A2A";
    event.target.style.color = "#A65A2A";
  };

  return (
    <div
      className="w-full h-screen sm:h-screen lg:h-[85vh] xl:h-[70vh] flex flex-col justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 25, 25, 0.8), rgba(21, 21, 21, 0.8)), url(/images/14r.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflowY: "hidden",
        backgroundAttachment: "fixed",
        "@media (max-width: 1024px)": {
          // Apply styles for screens smaller than lg breakpoint
          backgroundAttachment: "fixed", // Set the background attachment to "fixed" for smaller screens
        },
      }}
    >
      <div className="max-w-7xl mx-auto px-2 lg:grid lg:grid-cols-2 lg:gap-4 items-center">
        <div className="text-center lg:text-left">
          <h6 className="text-white mb-4 text-sm font-bold">
            WE HAVE A SOLID BACKGROUND
          </h6>
          <h1 className="text-white md:text-4xl font-bold">
            Our solutions for your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-700">
              Growth
            </span>
          </h1>
          <p className="text-white lg:text-lg sm:text-sm mt-4">
            {/* Your left side content */}
            Established in{" "}
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-700">
              2016
            </span>
            , MWENDA ROYFORD & CO ADVOCATE is a leading African law firm
            renowned for its comprehensive range of legal services, including
            dispute resolution and corporate & commercial law. We have
            consistently earned top-tier recognition in Kenya from prestigious
            international legal directories like Chambers Global, IFLR1000, and
            Legal 500
          </p>
          <p className="text-white lg:text-xl sm:text-sm mt-4">
            Our specialized legal expertise spans various areas, locally and
            regionally, encompassing Arbitration; Asset Tracing & Recoveries;
            Banking & Finance; Capital Markets; Conveyancing & Real Estate;
            Corporate & Commercial; Dispute Resolution; Employment & Labour;
            FinTech; Infrastructure, Projects & PPP; Private Client;
            Restructuring & Insolvency; and Tax.
          </p>
          <button className="mt-6 font-extrabold text-white py-3 px-6 hover:bg-yellow-500 transition duration-300"
          style={{
            background: `radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
              radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)`,
          }}
          >
            <Link href="/about" className="text-white">
              Read More
            </Link>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-0">
          <div
            className={`counter-item ${
              countersVisible ? "animate" : ""
            } bg-[rgb(38,38,38)] flex flex-col justify-center items-center p-4 transition-transform duration-300 cursor-pointer`}
          >
            <h3 className="gradient-text text-6xl font-extrabold">{awardsWon}</h3>
            <p className="text-white text-xs font-extrabold">Awards Won</p>
          </div>
          <div
            className={`counter-item ${
              countersVisible ? "animate" : ""
            } bg-[rgb(38,38,38)] flex flex-col justify-center items-center p-4 transition-transform duration-300 cursor-pointer`}
          >
            <h3 className="gradient-text text-6xl font-extrabold">{workHours}</h3>
            <p className="text-white text-xs font-extrabold">Year Of Establishment</p>
          </div>
          <div
            className={`counter-item ${
              countersVisible ? "animate" : ""
            } bg-[rgb(38,38,38)] flex flex-col justify-center items-center p-4 transition-transform duration-300 cursor-pointer`}
          >
            <h3 className="text-6xl font-extrabold gradient-text"
            >{greatReviews}</h3>
            <p className="text-white text-xs font-extrabold">Year Of Partnership</p>
          </div>
          <div
            className={`counter-item ${
              countersVisible ? "animate" : ""
            } bg-[rgb(38,38,38)] flex flex-col justify-center items-center p-4 transition-transform duration-300 cursor-pointer`}
          >
            <h3 className="gradient-text text-6xl font-extrabold">{projectsDone}</h3>
            <p className="text-white text-xs font-extrabold">projects Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
