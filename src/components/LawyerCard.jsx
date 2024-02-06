import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

const CardContainer = styled.div`
  background: #fff;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #eee;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: 300px;
  margin-bottom: 1rem;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 1rem;
  }

  .image-wrapper {
    border-radius: 12px;
    overflow: hidden;
  }
`;

const BioContainer = styled.div`
  width: 100%;
  margin-left: 1rem;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const BioPointsContainer = styled.div`
  margin-bottom: 1rem;
  margin-top: 0.5rem;

  p {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 8px;
    color: #555;
  }

  .bullet {
    margin-right: 8px;
    color: #3498db;
  }
`;

const ReadMoreButton = styled(motion.span)`
  color: #3498db;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #2073c0;
  }
`;

const RoundedContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
  padding: 1rem;
  border-radius: 2px;
  transition: box-shadow 0.3s ease;
  // background-color: #D0B216;

  @media (min-width: 768px) {
    width: 40%;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    width: 30%;
    justify-content: center;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SocialIcon = styled.a`
  color: #3498db;
  font-size: 1.3rem;
  transition: color 0.3s ease;

  &:hover {
    color: #2073c0;
  }
`;

const HoverableSocialIcon = styled(motion(SocialIcon))`
  &:hover {
    scale: 1.2;
  }
`;

const LawyerCard = ({ lawyer }) => {
  const [readMore, setReadMore] = useState(false);

  const renderBioPoints = () => (
    <BioPointsContainer>
      {Array.isArray(lawyer.bioPoints) ? (
        lawyer.bioPoints.map((point, index) => (
          <p key={index}>
            <span className="bullet">&#8226;</span> {point}
          </p>
        ))
      ) : (
        <p>
          <span className="bullet">&#8226;</span> {lawyer.bioPoints}
        </p>
      )}
    </BioPointsContainer>
  );

  const renderTruncatedBio = () => {
    const truncatedBio = Array.isArray(lawyer.bioPoints)
      ? lawyer.bioPoints.join(" ").substring(0, 300) + "..."
      : String(lawyer.bioPoints).substring(0, 300) + "...";

    return (
      <div>
        <p>{truncatedBio}</p>
        <ReadMoreButton
          whileHover={{ scale: 1.05 }}
          onClick={() => setReadMore(true)}
        >
          Read More
        </ReadMoreButton>
      </div>
    );
  };

  const renderFullBio = () => (
    <div>
      <p>{lawyer.bio}</p>
      {renderBioPoints()}
      <ReadMoreButton
        whileHover={{ scale: 1.05 }}
        onClick={() => setReadMore(false)}
      >
        Read Less
      </ReadMoreButton>
    </div>
  );

  return (
    <CardContainer>
      <ImageContainer>
        <div className="relative w-full h-auto overflow-hidden image-wrapper">
          <Image
            src={lawyer.image}
            alt={lawyer.name}
            width={300}
            height={300}
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </ImageContainer>
      <BioContainer>
        <h2 className="text-2xl font-semibold mb-2 text-[#D0B216]">
          {lawyer.name}
        </h2>
        <p className="lg:text-lg text-sm text-gray-600 mb-4 font-bold">
          {lawyer.work}
        </p>
        <div class="card">
          <a href={lawyer.linkedin} class="socialContainer bg-custom-gray  containerOne hover:bg-instagram">
            <FaFacebook style={{
              color: 'white',
            }} />
          </a>

          <a href={lawyer.linkedin} class="socialContainer bg-custom-gray containerTwo hover:bg-twitter">
            <FaLinkedin style={{
              color: 'white',
            }} />
          </a>

          <a href={`mailto:${lawyer.email}`} class="socialContainer bg-custom-gray containerThree hover:bg-linkedin">
            <FaEnvelope style={{
              color: 'white',
            }}/>
          </a>

          <a href={`tel:${lawyer.phone}`} class="socialContainer bg-custom-gray containerFour hover:bg-whatsapp">
            <FaPhone  style={{
              color: 'white',
            }}/>
          </a>
        </div>
        {readMore ? renderFullBio() : renderTruncatedBio()}
      </BioContainer>
    </CardContainer>
  );
};

export default LawyerCard;