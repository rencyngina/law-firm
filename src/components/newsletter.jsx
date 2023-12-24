import React from 'react';

const Newsletter = () => {
  return (
    <div className='bg-gradient-to-b from-gray-800 to-gray-900 py-8 border-b-gray-500'>
      <div className="container mx-auto text-center">
        <h1 className="text-3xl text-white font-semibold">
          Subscribe to our newsletter
        </h1>
        <p className="text-gray-300 mt-4">
          Stay updated with our 
          latest news.
        </p>
        <div className="mt-6 flex justify-center items-center">
          <input
            className='w-80 h-10 px-4 py-2 rounded-l-lg text-gray-800 bg-white'
            type="email"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="h-10 px-6 rounded-r-lg bg-yellow-500 hover:bg-yellow-600 text-white"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
