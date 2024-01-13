import React, { useEffect, useCallback, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
// bg-gradient-to-b from-gray-800 to-gray-900
const Section1 = () => {
  const firstSectionControls = useAnimation();
  const secondSectionControls = useAnimation();
  const thirdSectionControls = useAnimation();
  const sectionRefs = useRef([]);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    sectionRefs.current.forEach(({ ref, offset, controls }) => {
      if (scrollY >= offset) {
        controls.start({ opacity: 1, y: 0 });
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    sectionRefs.current = [
      { ref: firstSectionControls, offset: 100, controls: firstSectionControls },
      { ref: secondSectionControls, offset: 400, controls: secondSectionControls },
      { ref: thirdSectionControls, offset: 800, controls: thirdSectionControls },
    ];
  }, [firstSectionControls, secondSectionControls, thirdSectionControls]);


  return (
    <div
      className="bg-gradient-to-b from-gray-800 to-gray-900 py-12 md:py-24 lg:py-26 xl:py-38"
      id="section1"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 text-white">
        <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold mb-4">
          Why Choose Us ?
        </h1>
        <div className="w-28 h-1 bg-[#A65A2A] mb-8"></div>
        <p className="text-sm md:text-xl lg:text-lg xl:text-lg leading-relaxed">
          Muenda RoyFord & Company Advocates takes great pride in its{" "}
          <span className="font-bold">strong client relationships</span>,which
          are{" "}
          <span className="font-bold">
            deeply rooted in the provision of exceptional legal services
          </span>
          . Our approach combines local expertise with global perspectives,
          ensuring the highest quality representation for our clients.
        </p>
      </div>
      {/*
      values and mission
    */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={firstSectionControls}
            transition={{ duration: 0.5 }}
            className="p-4 lg:p-6 xl:p-8"
            style={{
              background: "rgb(208,178,22)",
            }}
          >
            <div className="flex justify-center items-center">
              <Image
                src="/images/mission.png"
                alt="mission"
                className="w-12 lg:w-16 lg:h-16 h-12 xl:w-18 xl:h-18"
                width={20}
                height={20}
              />
            </div>
            <h1 className="text-xl lg:text-2xl xl:text-4xl font-bold text-center mt-4 mb-2">
              Mission
            </h1>
            <p className="">
              Our mission is to assist our clients in achieving their objectives
              as smoothly and efficiently as possible whilst minimizing the
              legal and regulatory risks, both within Kenya and further a field
              in Africa.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={secondSectionControls}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="p-4 lg:p-6 xl:p-8"
            style={{
              background: "rgb(208,178,22)",
            }}
          >
            <div className="flex justify-center items-center">
              <Image
                src="/images/vision.svg"
                alt="vision"
                className="w-12 h-12"
                width={20}
                height={20}
              />
            </div>
            <h1 className="text-xl lg:text-2xl xl:text-4xl font-bold text-center mt-4 mb-2">
              Vision
            </h1>
            <p className="">
              We intend to build strong associations with leading law firms in
              UK, South Africa, Uganda, Tanzania, Sudan, Ethiopia, United States
              of America to name but a few, to give us considerable strength in
              legal matters with an international or regional ingredient.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={thirdSectionControls}
            transition={{ duration: 1, delay: 0.1 }}
            className="p-4 lg:p-6 xl:p-8"
            style={{
              background: "rgb(208,178,22)",
            }}
          >
            <div className="flex justify-center items-center">
              <Image
                src="/images/values.png"
                alt="values"
                className="w-12 h-12"
                width={20}
                height={20}
              />
            </div>
            <h1 className="text-xl lg:text-2xl xl:text-4xl font-bold text-center mt-4 mb-2">
              Values
            </h1>
            <ul className="list-disc text-sm p-4 lg:text-lg xl:text-lg mt-4 mb-2 lg:ml-4 xl:ml-6">
              <li className="mb-2 lg:mb-1 xl:mb-1">Integrity</li>
              <li className="mb-2 lg:mb-1 xl:mb-1">Professionalism</li>
              <li className="mb-2 lg:mb-1 xl:mb-1">Teamwork</li>
              <li className="mb-2 lg:mb-1 xl:mb-1">Commitment</li>
              <li className="mb-2 lg:mb-1 xl:mb-1">Accountability</li>
              <li className="mb-2 lg:mb-1 xl:mb-1">Excellence</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
