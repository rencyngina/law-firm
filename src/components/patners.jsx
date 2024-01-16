import React from 'react';
import Image from 'next/image';

const Partners = () => {
  return (
    <div className='bg-white w-full'>
      <div className="h-40 md:h-46 lg:h-120 xl:h-140 flex flex-col justify-center items-center text-[#A65A2A] px-6 md:px-20 lg:px-20 xl:px-44">
        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold">Our Partners</h1>
        <div className="w-28 h-1 bg-[#A65A2A] mt-8"></div>
        <p className="text-sm mt-3">We are proud to work with</p>
      </div>
      {/* Partner Cards*/}
     <div className="lg:justify-center mx-auto container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-10 px-6 md:px-20 lg:px-40 xl:px-64 mb-10 lg:p-8 items-center">
        
            {/*<div className="shadow-xl rounded overflow-hidden duration-300 transform hover:scale-95 hover:shadow-xl">
                  <Image
                    alt="Practice Area"
                    src='/images/Arifu-Logo.png'
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    style={{ maxHeight: '250px' }}
                  />
                  <div className="p-4 text-center bg-[rgb(17,24,39)]">
                  <h5 className="text-[#A65A2A] text-lg font-bold mb-2 hover:text-yellow-700">
                    Arifu
                  </h5>
                  <p>
                  description
                  </p>
                  </div>
  </div>*/}
            {/*<div className="shadow-xl rounded overflow-hidden duration-300 transform hover:scale-95 hover:shadow-xl">
                  <Image
                    alt="Practice Area"
                    src='/images/intelliwealth logo 2.png'
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    style={{ maxHeight: '250px' }}
                  />
                  <div className="p-4 text-center bg-[rgb(17,24,39)]">
                  <h5 className="text-[#A65A2A] text-lg font-bold mb-2 hover:text-yellow-700">
                    intelliwealth
                  </h5>
                  <p>
                  description
                  </p>
                  </div>
  </div>*/}
            
  </div>
      </div>
  );
};

export default Partners;
