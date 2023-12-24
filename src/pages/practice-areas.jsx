import React from 'react';
import LandingNavBar from '../components/nav';
import Head from '../components/head';
import FooterLinks from '../components/Footer/FooterLinks';
import Image from 'next/image';
import Link from 'next/link';

const Practice = () => {
  const data = [
    { id: 1, name: 'Conveyance and Property Law', imageSrc: '/images/assets.jpg', linkTo: '/about' },
    { id: 2, name: 'Commercial and Business Law', imageSrc: '/images/8r.jpg', linkT0: '' },
    { id: 3, name: 'Child and Family Law', imageSrc: '/images/familylaw.jpg', linkTo: '' },
    { id: 4, name: 'Probate and Estate Administration', imageSrc: '/images/property.jpg', linkTo: '' },
    { id: 5, name: 'Labour and Employment Law', imageSrc: '/images/11r.jpg', linkTo: '' },
    { id: 6, name: 'Alternative Dispute Resolution (ADR)', imageSrc: '/images/service_03.jpg', linkTo: '' },
    { id: 7, name: 'Tort and Insurance Law', imageSrc: '/images/law1.jpg', linkTo: '' },
    { id: 8, name: 'Banking and Finance', imageSrc: '/images/service_01.jpg', linkTo: '' },
    { id: 9, name: 'Criminal Law', imageSrc: '/images/brief.jpeg', linkTo: '' },
    { id: 10, name: 'Co-operative Societies Law', imageSrc: '/images/coprate1.jpg', linkTo: '' },
  ];

  return (
    <>
      <Head />
      <LandingNavBar />
      <div className="bg-white min-h-screen" id="practice-areas">
        <div
          className="h-52 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/8r.jpg)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        >
          <h1 className="text-5xl text-white">Practice Areas</h1>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap justify-center">
            {data.map((item) => (
              <div key={item.id} className="w-full md:w-4/12 lg:w-3/12 mb-12 px-4">
                <div className="shadow-lg rounded overflow-hidden">
                  <Image
                    alt="Practice Area"
                    src={item.imageSrc}
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    style={{ maxHeight: '250px' }}
                  />
                  <div className="p-4 text-center">
                  <a href={item.linkTo} className="text-blue-500 hover:text-blue-700">
                      <h5 className="text-lg font-bold mb-2">{item.name}</h5>
                  </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterLinks />
    </>
  );
};

export default Practice;

