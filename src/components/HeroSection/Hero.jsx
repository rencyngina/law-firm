import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import masaaiImage from '../../../public/images/law1.jpg';
import fourthImage from '../../../public/images/brief.jpeg';
import fifthImage from '../../../public/images/law1.jpg';
import secondImage from '../../../public/images/law1.jpg';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesData = [
    {
      image: masaaiImage,
      title: 'Muenda RoyFord & Company Advocates',
      description: 'At Acuitus, we believe in the power of transformation. We stand as a beacon of innovation, inspiration, and progress.',
      buttonLabel: 'Learn More',
      linkTo: '/about',
    },
    {
      image: fourthImage,
      title: 'Activation',
      description: 'From immersive events to captivating product launches, our Activation service transforms concepts into tangible moments that engage, inspire, and leave a lasting impact',
      buttonLabel: 'Our Services',
      linkTo: '/services',
    },
    {
      image: fifthImage,
      title: 'Trainings',
      description: 'We are committed to offering innovative solutions that address a wide range of business challenges. As part of our dedication to sustainability and diversified expertise, we are proud to introduce our specialized farming training program',
      buttonLabel: 'Our Services',
      linkTo: '/services',
    },
    {
      image: secondImage,
      title: 'Research',
      description: 'We provide insights that help you make informed decisions. Get a deeper understanding of your industry, enabling you to stay ahead of the curve and respond effectively to changing landscapes',
      buttonLabel: 'Our Services',
      linkTo: '/services',
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [imagesData.length]);

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    padding: '20px',
  };

  const titleStyle = {
    fontSize: '4rem',
    color: 'white',
    fontWeight: 'bold',
    lineHeight: '1',
  };

  return (
    <div style={{ position: 'relative', height: '90vh' }}>
      <Image src={imagesData[currentIndex].image} alt="Hero Image" layout="fill" objectFit="cover" />
      <div style={overlayStyle}>
        <h1 style={titleStyle}>{imagesData[currentIndex].title}</h1>
        <p>{imagesData[currentIndex].description}</p>
      </div>
    </div>
  );
};

export default Hero;

