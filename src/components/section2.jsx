"use_client";
/* eslint-disable react/no-unescaped-entities */
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
      greatReviews: 8,
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
      }}
    >
      <div className="max-w-7xl lg:max-w-8xl xl:max-w-9xl mx-auto lg:grid lg:grid-cols-2 lg:gap-4 items-center">
        <div className=" p-2">
          <h6 className="text-white mb-2 mt-2 text-lg lg:text-xl xl:text-xl font-bold">
            WE HAVE A SOLID BACKGROUND
          </h6>
          <h1 className="text-white md:text-xl text-lg font-bold">
            Our solutions for your <br />
            <span className="text-[#D0B216] background-clip-text">Growth</span>
          </h1>
          <p className="text-white lg:text-lg xl:text-xl text-md lg:mt-0 xl:mt-6 mt-4">
            Established in{" "}
            <span className="font-bold bg-clip-text text-transparent bg-[#D0B216]">
              2016{" "}
            </span>
            Mwenda Royford & Co Advocates, Redefines the practice of law,
            turning it into a dynamic symphony of unparalleled expertise and
            unwavering dedication. Our firm stands as a beacon of legal prowess,
            propelled by an exceptional cadre of legal minds. We have
            transformed the legal landscape, infusing it with innovation and a
            relentless commitment to excellence. With us, law becomes not just a
            profession but a thrilling journey where every note is played with
            precision, and every case is handled with utmost dedication. Welcome
            to a legal experience like no other.
          </p>
          <button className="mt-4 font-extrabold text-white py-3 px-6 hover:bg-yellow-500 transition duration-300 border-2 border-yellow-500">
          <button
            className="mt-4 font-extrabold text-white py-3 px-6 hover:bg-yellow-500 transition duration-300"
            style={{
              background: "rgb(208,178,22)",
            }}
          
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
            <p className="text-white text-xs font-extrabold">Established</p>
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