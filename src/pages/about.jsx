import React from "react";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
import Foot from "../components/foot";

const About = () => {
  return (
    <>
      <Head />
      <LandingNavBar />
      <div
        className="bg-white w-full h-auto lg:h-[90vh] xl:h-[95]"
        id="about"
      >
        <div
          className="h-52 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/law1.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // backgroundAttachment: "fixed",
          }}
        >
          <h1 className="text-2xl lg:text-5xl xl:text-6xl text-white">Who we are</h1>
          {/*<p className="text-lg lg:text-xl xl:text-2xl text-white mt-2">
          ABOUT US
        </p>*/}
        </div>
        <div className="container mx-auto h-auto py-4">
          <div className="px-4 mx-auto">
            <p className="lg:text-justify text-black text-md lg:text-lg lg:pt-10 pt-8">
            Established in 2016, Mwenda Royford and Company Advocates stands at the forefront of legal innovation, sculpting a legacy of excellence with unwavering commitment. While our journey began more recently, our vision is anchored in a passion for transformative legal solutions, setting us apart in the legal landscape. 
            </p>
            <p className="lg:text-justify text-black text-md lg:text-lg lg:pt-10 pt-8">
            Specializing in corporate and commercial law, we have redefined the narrative of legal practice, infusing every case with a strategic blend of innovation and expertise. Our repertoire spans a spectrum of legal domains, from Arbitration and Banking & Finance to Tax and Employment & Labour, ensuring a comprehensive approach tailored to the unique needs of each client.
            Though a younger player, our impact echoes the resonance of seasoned professionals. We've seamlessly integrated into the global legal arena, forming strategic alliances and partnerships with leading firms worldwide underscoring our dedication to safeguarding successful business endeavors across the continent.
            
            </p>
            <p className="lg:text-justify text-black text-md lg:text-lg lg:pt-10 pt-8">
            Our diverse clientele, both local and international, hails from a multitude of industries. We take pride in our partner-led approach, where local insights meet global perspectives, ensuring a bespoke legal strategy that transcends expectations. At Mwenda Royford and Company Advocates, our journey may be recent, but our commitment to client success and the pursuit of legal excellence is boundless. Welcome to a legal experience where every case is an opportunity for triumph and innovation.
            </p>
    
            <h1 className="text-2xl lg:text-5xl xl:text-6xl text-white">About us</h1>
            <p className="text-2xl lg:text-5xl xl:text-6xl text-red">
            About us
            </p>
            <p className="lg:text-justify text-black text-md lg:text-lg lg:pt-10 pt-8">
            Dive into the heart of legal excellence with Mwenda Royford & Co Advocates, where the art of law transforms into a thrilling symphony of unparalleled expertise and relentless dedication. Established in 2016, our firm stands as a beacon of legal prowess, a powerhouse fueled by a cadre of exceptional legal minds.
            </p>
            <p className="lg:text-justify text-black text-md lg:text-lg lg:pt-10 pt-8">
            Imagine a legal realm where experience is not just a metric but a legacy. Mwenda Royford & Co Advocates boasts a treasure trove of legal virtuosos, each advocate a maestro in their own right. Our team, a fusion of private practice virtuosos, public sector stalwarts, and international legal luminaries, creates a harmonious ensemble that sets us leagues apart from other corporate commercial law firms in Kenya.
            </p>
            <p className="lg:text-justify text-black text-md lg:text-lg lg:pt-10 pt-8">
            Step into the future of legal representation, where every case is a gripping narrative penned by the skilled hands of Mwenda Royford & Co Advocates. Our advocates don't just interpret the law; they sculpt it, mold it into a saga of triumph and justice. From the courtroom to the boardroom, we transcend the conventional, weaving stories of legal prowess that resonate with victory.
            </p>
            <p className="lg:text-justify text-black text-md lg:text-lg lg:pt-10 pt-8">
            Mwenda Royford & Co Advocates: Elevating the practice of law to an art form, rewriting the rules, and creating a legacy of justice. Join us on a journey where every legal challenge becomes an epic adventure, and every client is the protagonist in their own success story. Welcome to the future of legal brilliance; welcome to Mwenda Royford & Co Advocates.
            </p>
            <p className="lg:text-justify text-black text-md lg:text-lg lg:pt-10 pt-8">

            </p>
            
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default About;
