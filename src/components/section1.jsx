import React from "react";
// bg-gradient-to-b from-gray-800 to-gray-900
const Section1 = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-12 md:py-24 lg:py-26 xl:py-38">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 text-white">
        <h1 className="text-3xl md:text-5xl lg:text-3xl xl:text-3xl font-bold text-center mb-6">
          Why Choose Us ?
        </h1>
        <div className="w-24 h-1 bg-[#A65A2A] mx-auto mb-10"></div>
        <p className="text-lg md:text-xl lg:text-lg xl:text-lg leading-relaxed text-center">
          Muenda RoyFord & Company Advocates takes great pride in its strong client
          relationships, deeply rooted in the provision of exceptional legal
          services. Our approach combines local expertise with global perspectives,
          ensuring the highest quality representation for our clients.
        </p>
      </div>
      {/*
      values and mission
    */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10">
          <div className="bg-[#A65A2A] p-4">
            <div className="flex justify-center items-center">
              <img src="/images/mission.png" alt="mission" className="w-12 h-12" />
            </div>
            <h1 className="text-xl font-bold text-center mt-4 mb-2">Mission</h1>
            <p className="text-center">
              To provide our clients with the highest quality legal services in a
              timely, efficient and cost effective manner.
            </p>
          </div>
          <div className="bg-[#A65A2A] p-4">
            <div className="flex justify-center items-center">
              <img src="/images/vision.svg" alt="vision" className="w-12 h-12" />
            </div>
            <h1 className="text-xl font-bold text-center mt-4 mb-2">Vision</h1>
            <p className="text-center">
              To be the leading law firm in Kenya and beyond.
            </p>
          </div>
          <div className="bg-[#A65A2A] p-4">
            <div className="flex justify-center items-center">
              <img src="/images/values.png" alt="values" className="w-12 h-12" />
            </div>
            <h1 className="text-xl font-bold text-center mt-4 mb-2">Values</h1>
            <p className="text-center">
              Integrity, Professionalism, Teamwork, Commitment, Accountability,
              Excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;



