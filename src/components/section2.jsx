"use_client";
import { Padding } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

const Section2 = () => {
  const [countersVisible, setCountersVisible] = useState(false);
  const [workHours, setWorkHours] = useState(0);
  const [greatReviews, setGreatReviews] = useState(0);
  const [projectsDone, setProjectsDone] = useState(0);
  const [awardsWon, setAwardsWon] = useState(0);

  useEffect(() => {
    const targetNumbers = {
      workHours: 1977,
      greatReviews: 9,
      projectsDone: 185,
      awardsWon: 5,
    };
    const stepDuration = 10;
    const steps = Math.ceil(targetNumbers.workHours / stepDuration);
    let currentStep = 0;

    const countInterval = setInterval(() => {
      currentStep++;
      setWorkHours(Math.ceil((targetNumbers.workHours / steps) * currentStep));
      setGreatReviews(
        Math.ceil((targetNumbers.greatReviews / steps) * currentStep)
      );
      setProjectsDone(
        Math.ceil((targetNumbers.projectsDone / steps) * currentStep)
      );
      setAwardsWon(Math.ceil((targetNumbers.awardsWon / steps) * currentStep));

      if (currentStep === steps) {
        clearInterval(countInterval);
      }
    }, stepDuration);

    const animationTimeout = setTimeout(() => {
      setCountersVisible(true);
    }, stepDuration * steps + 200);

    return () => {
      clearInterval(countInterval);
      clearTimeout(animationTimeout);
    };
  }, []);

  const sectionStyle = {
    height: "80vh",
    backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/14r.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundAttachment: "fixed",
    margin: "0",
    // padding: '0'
    padding: "50px",
  };

  const leftSideStyle = {
    flex: 1,
    // textAlign: "center",
  };

  const rightSideStyle = {
    flex: 1,
    // padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: `rgb(0, 208, 132)`,
    fontSize: "50px",
    fontWeight: "bolder",
    fontFamily: "poppins",
  };

  const buttonStyles = {
    height: "50px",
    background: '#A65A2A',
    width: "170px",
    border: "none",
    fontSize: "16px",
    fontWeight: "bolder",
    color: "white",
    transition: "background 0.3s, color 0.3s",
    marginTop: '10px'
  };

  const handleMouseEnter = (event) => {
    event.target.style.background = "#A65A2A";
    event.target.style.color = "#A65A2A";
  };

  const handleMouseLeave = (event) => {
    event.target.style.background = "#A65A2A";
    event.target.style.color = "#A65A2A";
  };

  const counterItemsstyles = {
    // padding: "20px",
    backgroundColor: "rgba(35, 35, 35, 0.9)",
    height: "150px",
    width: "200px",
    display: "flex",
    flexWrap: 'wrap',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#A65A2A",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
    margin: "10px",
    fontFamily: 'Encode Sans Expanded, sans-serif',
    fontSize: '3.5rem',
    };

  return (
    <div className="w-full" id="about" style={sectionStyle}>
      <div className="lg:flex sm:block">
        <div style={leftSideStyle}>
          <h6 className="text-white mb-4 lg:text-sm sm:text-xs">
            WE HAVE A SOLID BACKGROUND
          </h6>
          <h1 className="text-white md:text-4xl">
            Our solutions for your
            <span className="text-[#A65A2A]"> Growth</span>
          </h1>
          <br />
          <p className="text-white lg:text-xl sm:text-lg mt-4">
            {/* Your left side content */}
            Established in <span className="font-bold text-[#A65A2A]">1977</span>, Oraro & Company Advocates is a leading African
            law firm renowned for its comprehensive range of legal services,
            including dispute resolution and corporate & commercial law. We have
            consistently earned top-tier recognition in Kenya from prestigious
            international legal directories like Chambers Global, IFLR1000, and
            Legal 500
          </p>
          <br />
          <p className="text-white lg:text-xl sm:text-lg mt-4">
            Our specialized legal expertise spans various areas, locally and
            regionally, encompassing Arbitration; Asset Tracing & Recoveries;
            Banking & Finance; Capital Markets; Conveyancing & Real Estate;
            Corporate & Commercial; Dispute Resolution; Employment & Labour;
            FinTech; Infrastructure, Projects & PPP; Private Client;
            Restructuring & Insolvency; and Tax. Our diverse clientele comprises
            local and international entities, governments, regulators, and
            non-profit organizations across industries such as retail,
            insurance, maritime & logistics, technology, construction, private
            equity, education, energy, real estate, financial services,
            manufacturing & industries, and the public sector.
          </p>
          <br />
          {/*<p className="text-white lg:text-xl sm:text-lg mt-4">
            Through our direct provision of services and strategic partnerships
            with leading law firms worldwide, we offer both local and
            cross-jurisdictional legal support. As a full Affiliate Member of AB
            & David Africa, a Pan-African business law network, we are committed
            to safeguarding successful business endeavors in Africa by
            minimizing associated risks.
  </p>*/}
          <button
            style={buttonStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="bg-[##A65A2A]"
          >
            <a style={{ textDecoration: "none", color: "white" }} href="/about">
              Read More
            </a>
          </button>
        </div>
        <div style={rightSideStyle}>
        <div className="flex">
        <div className={`counter-item ${countersVisible ? "animate" : ""}`}
          style={counterItemsstyles}
          >
          <h3>{awardsWon}</h3>
          <p
          style={{ fontSize: "14px", whiteSpace: "nowrap", color: "white" }}>
          Awards Won
          </p>
          </div>
          <div
            className={`counter-item ${countersVisible ? "animate" : ""}`}
            style={counterItemsstyles}
          >
            <h3>{workHours}</h3>
            <p
              style={{ fontSize: "14px", whiteSpace: "nowrap", color: "white" }}
            >
              Year Of Establishment
            </p>
          </div>
        </div>
          <div className="flex flex-wrap gap-2">
            <div
              className={`counter-item ${countersVisible ? "animate" : ""}`}
              style={counterItemsstyles}
            >
              <h2>{greatReviews}</h2>
              <p
                style={{
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                  color: "white",
                }}
              >
                Partners
              </p>
            </div>
            <div
              className={`counter-item ${countersVisible ? "animate" : ""}`}
              style={counterItemsstyles}
            >
              <h2>{awardsWon}</h2>
              <p
                style={{
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Years Of Partner
                <br />
                Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
