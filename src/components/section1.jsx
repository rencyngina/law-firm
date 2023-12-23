import React from "react";

const Section1 = () => {
  return (
    <div className="bg-gray-500 w-full">
      <div className="h-80 md:h-96 lg:h-120 xl:h-140 md:flex-row justify-center items-center text-white p-20">
        <h1 className="text-2xl md:text-2xl lg:text-2xl xl:text-4xl font-bold mb-4 text-center">
          Why Us
        </h1>
        <div className="border-t border-[#A65A2A] border-solid border-2 mx-2 my-2 md:my-0"></div>
        <p className="text-base md:text-lg lg:text-xl xl:text-xl text-center md:text-left mt-10">
          Oraro & Company Advocates takes great pride in its strong client
          relationships, which are deeply rooted in the provision of exceptional
          legal services. Our approach is characterized by a partnership-led
          model that combines local expertise with global perspectives, ensuring
          the highest quality representation for our clients.
        </p>
      </div>
    </div>
  );
};

export default Section1;


