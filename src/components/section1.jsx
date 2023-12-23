import React from "react";
// bg-gradient-to-b from-gray-800 to-gray-900
const Section1 = () => {
  return (
    <div className="bg-[#6B7280] py-14 md:py-24 lg:py-26 xl:py-38">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 text-white">
        <h1 className="text-3xl md:text-5xl lg:text-3xl xl:text-4xl font-bold text-center mb-6">
          Why Choose Us ?
        </h1>
        <div className="w-24 h-1 bg-[#A65A2A] mx-auto mb-10"></div>
        <p className="text-lg md:text-xl lg:text-xl xl:text-2xl leading-relaxed text-center">
          Oraro & Company Advocates takes great pride in its strong client
          relationships, deeply rooted in the provision of exceptional legal
          services. Our approach combines local expertise with global perspectives,
          ensuring the highest quality representation for our clients.
        </p>
      </div>
    </div>
  );
};

export default Section1;



