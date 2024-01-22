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
        backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)),url(/images/14r.jpg)`,
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
          <h6 className="text-white mb-2 mt-2 text-lg lg:text-xl xl:text-xl font-bold">
            WE HAVE A SOLID BACKGROUND
          </h6>
          <h1 className="text-white md:text-4xl text-lg font-bold">
            Our solutions for your <br />
            <span className="text-[#D0B216] background-clip-text">
              Growth
            </span>
          </h1>
          <p className="text-white lg:text-lg xl:text-xl text-md lg:mt-0 xl:mt-6 mt-4">
          
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-700">
            
            Established in{" "}
            <span className="font-bold bg-clip-text text-transparent bg-[#D0B216]">
              2016
            </span>
            Dive into the heart of legal excellence with Mwenda Royford & Co Advocates, where the art of law transforms into a thrilling symphony of unparalleled expertise and relentless dedication. Established in 2016, our firm stands as a beacon of legal prowess, a powerhouse fueled by a cadre of exceptional legal minds.
          </p>
          <p className="text-white lg:text-lg xl:text-xl text-lg lg:mt-0 xl:mt-6 mt-4">
          Imagine a legal realm where experience is not just a metric but a legacy. Mwenda Royford & Co Advocates boasts a treasure trove of legal virtuosos, each advocate a maestro in their own right. Our team, a fusion of private practice virtuosos, public sector stalwarts, and international legal luminaries, creates a harmonious ensemble that sets us leagues apart from other corporate commercial law firms in Kenya.
          </p>
          <button
            className="mt-4 font-extrabold text-white py-3 px-6 hover:bg-yellow-500 transition duration-300"
            style={{
              background: "rgb(208,178,22)",
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
            <h3 className="text-[rgb(208,178,22)] font-bold text-2xl lg:text-6xl">
              {awardsWon}
            </h3>
            <p className="text-white text-xs font-extrabold">Awards Won</p>
          </div>
          <div
            className={`counter-item ${
              countersVisible ? "animate" : ""
            } bg-[rgb(38,38,38)] flex flex-col justify-center items-center p-4 transition-transform duration-300 cursor-pointer`}
          >
            <h3 className="text-[rgb(208,178,22)] font-bold text-2xl lg:text-6xl">
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
            <h3 className="font-bold text-2xl lg:text-6xl text-[rgb(208,178,22)]">
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
            <h3 className="text-[rgb(208,178,22)] font-bold text-2xl lg:text-6xl">
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
