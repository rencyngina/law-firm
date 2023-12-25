"use_client";
import React, { useState } from "react";
import LandingNavBar from '../components/nav';
import Hero from '../components/HeroSection/Hero';
import FooterLinks from '../components/Footer/FooterLinks';
import Head from '../components/head'
import Section1 from '../components/section1'
import Section2 from '../components/section2'
import Patners from '../components/patners'
import FloatingChatButton from '../components/floatingChatIcon'
import Newsletter from '../components/newsletter'

export default function Home() {
  const [isFormVisible, setIsFormVisible] = useState(false);


  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };
  return (
      <main>
      <Head />
      <LandingNavBar />
      <Hero />
      <Section1 />
      <Section2 />
      <Patners />
      <FloatingChatButton onClick={toggleForm} /> {/* Pass toggleForm as onClick handler */}
      {isFormVisible && (
        <div className="fixed bottom-0 right-0 z-50">
          <div className="relative">
            <button onClick={closeForm} className="absolute top-0 right-0 m-4 bg-white text-gray-700 rounded-full px-3 py-1">
              Close
            </button>
            <iframe
              className="w-full h-screen"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfZ5tIaSf0YrQ1JG4V3gjV2c2zZwL1QY8zqD3Vg4gqKk5Q4Zg/viewform?embedded=true"
              title="Contact Form"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}
      <Newsletter />
      <FooterLinks />
    </main>
  );
}
