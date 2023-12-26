import React from "react";
// bg-gradient-to-b from-gray-800 to-gray-900
const Section1 = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-12 md:py-24 lg:py-26 xl:py-38">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 text-white">
        <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold mb-4">
          Why Choose Us ?
        </h1>
        <div className="w-28 h-1 bg-[#A65A2A] mb-8"></div>
        <p className="text-sm md:text-xl lg:text-lg xl:text-lg leading-relaxed">
          Muenda RoyFord & Company Advocates takes great pride in its strong
          client relationships, deeply rooted in the provision of exceptional
          legal services. Our approach combines local expertise with global
          perspectives, ensuring the highest quality representation for our
          clients.
        </p>
      </div>
      {/*
      values and mission
    */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10">
          <div
            className="p-4 lg:p-6 xl:p-8"
            style={{
              background: `radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
              radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)`,
            }}
          >
            <div className="flex justify-center items-center">
              <img
                src="/images/mission.png"
                alt="mission"
                className="w-12 lg:w-16 lg:h-16 h-12 xl:w-18 xl:h-18"
              />
            </div>
            <h1 className="text-xl lg:text-2xl xl:text-4xl font-bold text-center mt-4 mb-2">
              Mission
            </h1>
            <p className="text-center">
              To provide our clients with the highest quality legal services in
              a timely, efficient and cost effective manner.
            </p>
          </div>
          <div
            className="p-4 lg:p-6 xl:p-8"
            style={{
              background: `radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
              radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)`,
            }}
          >
            <div className="flex justify-center items-center">
              <img
                src="/images/vision.svg"
                alt="vision"
                className="w-12 h-12"
              />
            </div>
            <h1 className="text-xl lg:text-2xl xl:text-4xl font-bold text-center mt-4 mb-2">
              Vision
            </h1>
            <p className="text-center">
              To be the leading law firm in Kenya and beyond.
            </p>
          </div>
          <div
            className="p-4 lg:p-6 xl:p-8"
            style={{
              background: `radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
              radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)`,
            }}
          >
            <div className="flex justify-center items-center">
              <img
                src="/images/values.png"
                alt="values"
                className="w-12 h-12"
              />
            </div>
            <h1 className="text-xl lg:text-2xl xl:text-4xl font-bold text-center mt-4 mb-2">
              Values
            </h1>
            <ul className="list-disc text-sm p-4 lg:text-lg xl:text-lg font-bold mt-4 mb-2 lg:ml-4 xl:ml-6">
              <li className="mb-2 lg:mb-1 xl:mb-1">Integrity</li>
              <li className="mb-2 lg:mb-1 xl:mb-1">Professionalism</li>
              <li className="mb-2 lg:mb-1 xl:mb-1">Teamwork</li>
              <li className="mb-2 lg:mb-1 xl:mb-1">Commitment</li>
              <li className="mb-2 lg:mb-1 xl:mb-1">Accountability</li>
              <li className="mb-2 lg:mb-1 xl:mb-1">Excellence</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
