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

  return (
    <div
      className="w-full h-auto lg:h-[75vh] xl:h-[78vh] flex flex-col justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 25, 25, 0.8), rgba(21, 21, 21, 0.8)), url(/images/14r.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflowY: "hidden",
        backgroundAttachment: "fixed",
        "@media (max-width: 1024px)": {
          backgroundAttachment: "fixed",
        },
      }}
    >
      <div className="max-w-7xl lg:max-w-5xl xl:max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-4 items-center">
        <div className=" p-2">
          <h6 className="text-white mb-3 text-lg lg:text-xl xl:text-xl font-bold">
            WE HAVE A SOLID BACKGROUND
          </h6>
          <h1 className="text-white md:text-4xl text-lg font-bold">
            Our solutions for your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-700">
              Growth
            </span>
          </h1>
          <p className="text-white lg:text-lg xl:text-xl text-lg lg:mt-0 xl:mt-6 mt-4">
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
          <p className="text-white lg:text-lg xl:text-xl text-lg lg:mt-0 xl:mt-6 mt-4">
            Our specialized legal expertise spans various areas, locally and
            regionally, encompassing Arbitration; Asset Tracing & Recoveries;
            Banking & Finance; Capital Markets; Conveyancing & Real Estate;
            Corporate & Commercial; Dispute Resolution; Employment & Labour;
            FinTech; Infrastructure, Projects & PPP; Private Client;
            Restructuring & Insolvency; and Tax.
          </p>
          <button
            className="mt-4 font-extrabold text-white py-3 px-6 hover:bg-yellow-500 transition duration-300"
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
        <div className="grid grid-cols-2 gap-4 mt-6 lg:mt-0 p-4">
          <div
            className={`counter-item ${
              countersVisible ? "animate" : ""
            } bg-[rgb(38,38,38)] flex flex-col justify-center items-center p-4 transition-transform duration-300 cursor-pointer`}
          >
            <h3 className="gradient-text font-bold text-2xl lg:text-6xl">
              {awardsWon}
            </h3>
            <p className="text-white text-xs font-extrabold">Awards Won</p>
          </div>
          <div
            className={`counter-item ${
              countersVisible ? "animate" : ""
            } bg-[rgb(38,38,38)] flex flex-col justify-center items-center p-4 transition-transform duration-300 cursor-pointer`}
          >
            <h3 className="gradient-text font-bold text-2xl lg:text-6xl">
              {workHours}
            </h3>
            <p className="text-white text-xs font-extrabold">
              Year Of Establishment
            </p>
          </div>
          <div
            className={`counter-item ${
              countersVisible ? "animate" : ""
            } bg-[rgb(38,38,38)] flex flex-col justify-center items-center p-4 transition-transform duration-300 cursor-pointer`}
          >
            <h3 className="font-bold text-2xl lg:text-6xl gradient-text">
              {greatReviews}
            </h3>
            <p className="text-white text-xs font-extrabold">
              Year Of Partnership
            </p>
          </div>
          <div
            className={`counter-item ${
              countersVisible ? "animate" : ""
            } bg-[rgb(38,38,38)] flex flex-col justify-center items-center p-4 transition-transform duration-300 cursor-pointer`}
          >
            <h3 className="gradient-text font-bold text-2xl lg:text-6xl">
              {projectsDone}
            </h3>
            <p className="text-white text-xs font-extrabold">projects Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
