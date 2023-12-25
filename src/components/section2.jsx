"use_client";
import { Padding } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Link from 'next/link'

const Section2 = () => {
  const [countersVisible, setCountersVisible] = useState(false);
  const [workHours, setWorkHours] = useState(0);
  const [greatReviews, setGreatReviews] = useState(0);
  const [projectsDone, setProjectsDone] = useState(0);
  const [awardsWon, setAwardsWon] = useState(0);

  useEffect(() => {
    const targetNumbers = {
      workHours: 2016,
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
    height: "75vh",
    backgroundImage: `linear-gradient(rgba(26, 25, 25, 0.8), rgba(21, 21, 21, 0.8)), url(/images/14r.jpg)`,
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
    // background: '#A65A2A',
    background: `radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
              radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)`,
    width: "170px",
    border: "none",
    fontSize: "16px",
    fontWeight: "bolder",
    color: "white",
    transition: "background 0.3s, color 0.3s",
    marginTop: '4px'
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
    width: "220px",
    display: "flex",
    flexWrap: 'wrap',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // color: "#A65A2A",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
    margin: "10px",
    fontFamily: 'Encode Sans Expanded, sans-serif',
    fontSize: '3.5rem',
    };

  return (
    <div className="w-full" id="about" style={sectionStyle}>
      <div className="lg:flex sm:block mt-8 px-32">
        <div style={leftSideStyle}>
      <h6 className="text-white mb-4 lg:text-sm sm:text-xs font-bold">
        WE HAVE A SOLID BACKGROUND
      </h6>
      <h1 className="text-white md:text-4xl font-bold">
        Our solutions for your
        <br />
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-yellow-300 via-yellow-500 to-yellow-700">Growth</span>
      </h1>
      <br />
      <p className="text-white lg:text-xl sm:text-xs mt-4">
        {/* Your left side content */}
        Established in <span className="font-bold text-transparent bg-gradient-to-r bg-clip-text from-yellow-300 via-yellow-500 to-yellow-700">2016</span>, MWENDA ROYFORD & CO ADVOCATE is a leading African
        law firm renowned for its comprehensive range of legal services,
        including dispute resolution and corporate & commercial law. We have
        consistently earned top-tier recognition in Kenya from prestigious
        international legal directories like Chambers Global, IFLR1000, and
        Legal 500
      </p>
      <br />
      <p className="text-white lg:text-xl sm:text-sm mt-4">
        Our specialized legal expertise spans various areas, locally and
        regionally, encompassing Arbitration; Asset Tracing & Recoveries;
        Banking & Finance; Capital Markets; Conveyancing & Real Estate;
        Corporate & Commercial; Dispute Resolution; Employment & Labour;
        FinTech; Infrastructure, Projects & PPP; Private Client;
        Restructuring & Insolvency; and Tax.
      </p>
      <br />
      <button
        style={buttonStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="h-23 w-44 border-none"
      >
        <Link style={{ textDecoration: 'none', color: 'white' }} href="/about">
          Read More
        </Link>
      </button>
    </div>
        <div style={rightSideStyle}>
        <div className="flex">
        <div className={`counter-item ${countersVisible ? "animate" : ""}`}
          style={counterItemsstyles}
          >
          <h3 className="text-transparent bg-gradient-to-r bg-clip-text from-yellow-300 via-yellow-500 to-yellow-700">{awardsWon}</h3>
          <p
          style={{ fontSize: "14px", whiteSpace: "nowrap", color: "white" }}>
          Awards Won
          </p>
          </div>
          <div
            className={`counter-item ${countersVisible ? "animate" : ""}`}
            style={counterItemsstyles}
          >
            <h3 className="text-transparent bg-gradient-to-r bg-clip-text from-yellow-300 via-yellow-500 to-yellow-700">{workHours}</h3>
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
              <h2 className="text-transparent bg-gradient-to-r bg-clip-text from-yellow-300 via-yellow-500 to-yellow-700">{greatReviews}</h2>
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
              <h2 className="text-transparent bg-gradient-to-r bg-clip-text from-yellow-300 via-yellow-500 to-yellow-700">{awardsWon}</h2>
              <p
                style={{
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Years Of Partner
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
