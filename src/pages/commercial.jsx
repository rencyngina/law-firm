import React from 'react';
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";

const Commercial = () => {
  return (
    <>
    <Head />
     <LandingNavBar />
     <div
       className="bg-white"
       id="contact"
       style={{
         height: "90vh",
       }}
     >
       <div
         className="h-52 w-full flex flex-col justify-center items-center"
         style={{
           backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/call.jpg)`,
           backgroundPosition: "center",
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
           backgroundAttachment: "fixed", // Modified this line for background attachment
         }}
       >
         <h1 className="text-5xl text-white">Commercial</h1>
       </div>
       </div>
       <FooterLinks />
    </>
  );
}

export default Commercial;