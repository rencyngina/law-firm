import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import masaaiImage from '../../../public/images/law1.jpg';
import fourthImage from '../../../public/images/brief.jpeg';
import fifthImage from '../../../public/images/7r.jpg';
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

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % imagesData.length);
  }

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
    lineHeight: '2',
  };

  const descriptionStyle = {
    fontSize: '1.5rem',
    color: 'white',
    lineHeight: '1.5',
    width: '50%',
  };

  return (
    <div style={{ position: 'relative', height: '90vh' }}>
      <Image src={imagesData[currentIndex].image} alt="Hero Image" layout="fill" objectFit="cover" />
      <div style={overlayStyle}>
        <h1 style={titleStyle}>{imagesData[currentIndex].title}</h1>
        <p style={descriptionStyle}
        >{imagesData[currentIndex].description}</p>
        {/*<Button>
          <Link href={imagesData[currentIndex].linkTo}>
            <a style={{ color: 'white' }}>{imagesData[currentIndex].buttonLabel}</a>
          </Link>
  </Button>*/}
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-primary me-2 " onClick={handlePrev}>Prev</button>
          <button className="btn btn-primary" onClick={handleNext}>Next</button>
          </div>
      </div>
    </div>
  );
};

export default Hero;

