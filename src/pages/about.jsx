import React from "react";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";

const About = () => {
  return (
    <>
      <Head />
      <LandingNavBar />
      <div
        className="bg-white"
        id="about"
        style={{
          height: "90vh",
        }}
      >
        <div
          className="h-52 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/law1.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed", // Modified this line for background attachment
          }}
        >
          <h1 className="text-5xl text-white">Who we are</h1>
        </div>
        <div className="container mx-auto py-10">
          <div className="w-3/4 mx-auto">
            <p className="text-justify text-black text-sm pt-10">
              Established in <span className="text-green-500">1977</span>, Oraro & Company Advocates is a leading
              African law firm renowned for its comprehensive range of legal
              services, including dispute resolution and corporate & commercial
              law. We have consistently earned top-tier recognition in Kenya
              from prestigious international legal directories like Chambers
              Global, IFLR1000, and Legal 500.
            </p>
            <p className="text-justify text-sm pt-10">
              Our specialized legal expertise spans various areas, locally and
              regionally, encompassing Arbitration; Asset Tracing & Recoveries;
              Banking & Finance; Capital Markets; Conveyancing & Real Estate;
              Corporate & Commercial; Dispute Resolution; Employment & Labour;
              FinTech; Infrastructure, Projects & PPP; Private Client;
              Restructuring & Insolvency; and Tax. Our diverse clientele
              comprises local and international entities, governments,
              regulators, and non-profit organizations across industries such as
              retail, insurance, maritime & logistics, technology, construction,
              private equity, education, energy, real estate, financial
              services, manufacturing & industries, and the public sector.
            </p>
            <p className="text-justify text-sm pt-10">
              Our firm is founded on the principles of integrity,
              professionalism and excellence in service. We are committed to
              providing our clients with practical and innovative legal
              solutions that are tailored to their unique objectives. Our team
              of advocates is highly regarded for their expertise and experience
              in a wide range of practice areas.
            </p>
            <p className="text-justify text-sm pt-10">
              Through our direct provision of services and strategic
              partnerships with leading law firms worldwide, we offer both local
              and cross-jurisdictional legal support. As a full Affiliate Member
              of AB & David Africa, a Pan-African business law network, we are
              committed to safeguarding successful business endeavors in Africa
              by minimizing associated risks. This allows us to seamlessly
              deliver cross-border legal counsel while upholding the highest
              professional standards.
            </p>
            <p className="text-justify text-sm pt-10">
              At Oraro & Company Advocates, we take pride in nurturing strong
              client relationships and delivering quality legal services. Our
              partner-led approach leverages both local insights and global
              perspectives to meet the unique needs of our clients.
            </p>
          </div>
        </div>
      </div>
      <FooterLinks />
    </>
  );
};

export default About;