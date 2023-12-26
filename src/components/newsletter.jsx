import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-8 border-b-gray-500">
      <div className="container mx-auto text-center">
        <h1 className="lg:text-xl text-lg xl:text-2xl text-white font-semibold">
          Subscribe to our newsletter
        </h1>
        <p className="text-gray-300 mt-2 text-sm lg:text-lg xl:text-xl">Stay updated with our latest news.</p>
        <div className="mt-6 flex justify-center items-center">
          <input
            className=" w-70 xl:w-100 xl:h-12 h-8 lg:w-80 lg:h-10 px-2 lg:py-2 xl:py-4 xl:px-6 lg:px-4 py-2 rounded-l-sm lg:rounded-l-lg xl:rounded-l-xl text-gray-800 bg-white"
            type="email"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="lg:h-10 xl:h-12 h-8 lg:px-6 xl:px-8 px-3 rounded-l-sm lg:rounded-r-lg xl:rounded-r-xl bg-[#A65A2A] hover:bg-yellow-600 text-white"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
