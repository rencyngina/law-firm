import React from 'react'
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";

const Practice = () => {
  return (
    <>
    <Head />
    <LandingNavBar />
    <div
        className="bg-white"
        id="practice-areas"
        style={{
          height: "90vh",
        }}
      >
      <div
          className="h-52 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/8r.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed", // Modified this line for background attachment
          }}
        >
          <h1 className="text-5xl text-white">Practice Areas</h1>
        </div>
    </div>
    <FooterLinks />
    </>
  )
}

export default Practice
