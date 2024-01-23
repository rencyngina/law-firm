// LawyerCard.js
import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import styled from "styled-components";

const CardContainer = styled.div`
  background: #fff;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  overflow: hidden;

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
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

const BioContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const LawyerCard = ({ lawyer }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <CardContainer>
      <ImageContainer>
        <div className="relative w-full h-79 overflow-hidden">
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
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          {lawyer.name}
        </h2>
        <p className="lg:text-lg text-sm text-gray-600 mb-4">{lawyer.work}</p>
        <div className="flex items-center mb-4">
          <FaPhone className="text-blue-500 mr-2" />
          <p className="text-blue-500">{lawyer.phone}</p>
        </div>
        <div className="flex items-center mb-4">
          <FaEnvelope className="text-blue-700 mr-2" />
          <p className="text-blue-700">{lawyer.email}</p>
        </div>
        <div className="flex items-center mb-4">
          <FaLinkedin className="text-blue-700 mr-2" />
          <p className="text-blue-700">{lawyer.linkedin}</p>
        </div>
        <div className="flex items-center mb-4">
          <FaFacebook className="text-blue-700 mr-2" />
          <p className="text-blue-700">{lawyer.facebook}</p>
        </div>
        <p className="lg:text-lg text-sm text-gray-600 mb-4">
          {readMore ? lawyer.bio : `${lawyer.bio.substring(0, 300)}...`}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? " Read Less" : " Read More"}
          </span>
        </p>
      </BioContainer>
    </CardContainer>
  );
};

export default LawyerCard;

