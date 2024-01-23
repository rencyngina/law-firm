/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import styled, { keyframes } from "styled-components";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import Foot from "../components/foot";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AboutWrapper = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  font-family: "Arial", sans-serif;
`;

const HeroSection = styled.div`
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)),
    url(/images/law1.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  color: white;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    height: 20vh;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  text-align: justify;
  animation: ${fadeIn} 1s ease-in-out;

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #333;
    line-height: 1.5;
    
    @media(max-width:768px){
      font-size:16px;
    }
  }

  h1 {
    font-size: 2rem;
    color: #ff4d4d;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 15px;
  }

  br {
    margin-bottom: 15px;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <Head />
      <LandingNavBar />
      <HeroSection>
        <h1>Who we are</h1>
      </HeroSection>
      <ContentSection>
        <h1>About us</h1>
        <p>
          Established in 2016, Mwenda Royford and Company Advocates stands at
          the forefront of legal innovation, sculpting a legacy of excellence
          with unwavering commitment.{" "}
          <span style={{ color: "#D0B216" }}>
            Our vision is anchored in a passion for transformative legal
            solutions,
          </span>{" "}
          setting us apart in the legal landscape.
        </p>
        <p>
          Specializing in corporate and commercial law, we have redefined the
          narrative of legal practice, infusing every case with a strategic
          blend of innovation and expertise. Our repertoire spans a spectrum of
          legal domains, from Arbitration and Banking & Finance to Tax and
          Employment & Labour, ensuring a comprehensive approach tailored to the
          unique needs of each client.
        </p>
        <p>
          Our diverse client, both local and international, hails from a
          multitude of industries. We take pride in our partner-led approach,
          where local insights meet global perspectives, ensuring a bespoke
          legal strategy that transcends expectations. At Mwenda Royford and
          Company Advocates, we don't just practice law our commitment to client
          success and the pursuit of legal excellence is boundless. where
          experience is not just a metric but a legacy. Mwenda Royford & Co
          Advocates boasts a treasure trove of legal virtuosos, each advocate a
          maestro in their own right
        </p>
        <p>
          where every case is a gripping narrative penned by the skilled hands
          of Mwenda Royford & Co Advocates. Our advocates don't just interpret
          the law; they sculpt it, mold it into a saga of triumph and justice.
          From the courtroom to the boardroom, we transcend the conventional,
          weaving stories of legal prowess that resonate with victory. Mwenda
          Royford & Co Advocates: Elevating the practice of law to an art form,
          rewriting the rules, and creating a legacy of justice. Join us on a
          journey where every legal challenge becomes an epic adventure, and
          every client is the protagonist in their own success story. Welcome to
          the future of legal brilliance; welcome to Mwenda Royford & Co
          Advocates.
        </p>
      </ContentSection>
      <Foot />
    </AboutWrapper>
  );
};

export default About;
