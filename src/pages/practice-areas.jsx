import React from 'react';
import LandingNavBar from '../components/nav';
import Head from '../components/head';
import FooterLinks from '../components/Footer/FooterLinks';
import Image from 'next/image';
import Link from 'next/link';

const Practice = () => {
  const data = [
    { id: 1, name: 'Conveyance and Property Law', imageSrc: '/images/assets.jpg', linkTo: '/estate-Administration' },
    { id: 2, name: 'Commercial and Business Law', imageSrc: '/images/8r.jpg', linkT0: '/commercial' },
    { id: 3, name: 'Child and Family Law', imageSrc: '/images/familylaw.jpg', linkTo: '/family' },
    { id: 4, name: 'Probate and Estate Administration', imageSrc: '/images/property.jpg', linkTo: '/estate-Administration' },
    { id: 5, name: 'Labour and Employment Law', imageSrc: '/images/11r.jpg', linkTo: '/employment-law' },
    { id: 6, name: 'Alternative Dispute Resolution (ADR)', imageSrc: '/images/service_03.jpg', linkTo: '/dispute' },
    { id: 7, name: 'Tort and Insurance Law', imageSrc: '/images/law1.jpg', linkTo: '/insurance-law' },
    { id: 8, name: 'Banking and Finance', imageSrc: '/images/service_01.jpg', linkTo: '/banking-finance' },
    { id: 9, name: 'Criminal Law', imageSrc: '/images/brief.jpeg', linkTo: '/criminal-law' },
    { id: 10, name: 'Co-operative Societies Law', imageSrc: '/images/coprate1.jpg', linkTo: '/societies-law' },
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
          <div className="block lg:grid lg:grid-cols-3 gap-6">
            {data.map((item) => (
              <div key={item.id} className="mb-4">
                <div className="shadow-xl rounded overflow-hidden duration-300 transform hover:scale-95 hover:shadow-xl">
                  <Image
                    alt="Practice Area"
                    src={item.imageSrc}
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    style={{ maxHeight: '250px' }}
                  />
                  <div className="p-4 text-center bg-[rgb(17,24,39)]">
                  <a href={item.linkTo} className="text-[#A65A2A] hover:text-yellow-700">
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

