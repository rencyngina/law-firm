import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../../public/images/royford.jpg";
import Image2 from "../../../public/images/brief.jpeg";
import Image3 from "../../../public/images/service_03.jpg";
import Image4 from "../../../public/images/assets.jpg";
import { LuArrowDownCircle } from "react-icons/lu";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";


const Hero = () => {
  const imagesData = [
    {
      image: Image1,
      title: "MWENDA ROYFORD & COMPANY ADVOCATE",
      description: "Where Excellence Meets Justice",
      buttonLabel: "Who we are",
      linkTo: "/about",
    },
    {
      image: Image2,
      title: "Arbitration",
      description:
        "We have represented clients in local and international arbitration tribunals including International Centre for Settlement of Investment Disputes (ICSID), the London Court of International Arbitration (LCIA) and the International Chamber of Commerce (ICC) in energy, financial services and construction sectors.",
      buttonLabel: "Our Services",
      linkTo: "/services",
    },
    {
      image: Image3,
      title: "Banking & Finance",
      description:
        "Our Banking & Finance practice area is well regarded for its expertise in advising in both contentious and non-contentious matters",
      buttonLabel: "Our Expertise",
      linkTo: "/practice-areas",
    },
    {
      image: Image4,
      title: "Assets Tracing & Recovery",
      description:
        "Our Asset Tracing & Recoveries practice area is a recognized leader in advising both contentious and non-contentious complex tracing and recovery of assets and in restructuring & insolvencies.",
      buttonLabel: "Our Services",
      linkTo: "/services",
    },
  ];

 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="w-full h-[76vh] lg:h-[84.5vh] xl:h-[87]">
      <Slider {...settings} className="w-full h-[76vh] lg:h-[85.8vh] xl:h-[87]">
        {imagesData.map((image, index) => (
          <div key={index} className="relative h-[76vh] lg:h-[85vh] xl:h-[88vh]">
            <Image src={image.image} alt={`Slide ${index}`} className="w-full h-[76vh] lg:h-[85vh] xl:h-[88vh] object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4 sm:p-8">
              <h1 className="w-full sm:w-1/2 lg:w-1/2 text-4xl font-bold lg:text-5xl xl:text-6xl leading-relaxed lg:font-extrabold mb-2">
                {image.title}
              </h1>
              <p className="text-white w-full sm:w-1/2 lg:w-1/2 text-sm lg:text-xl leading-relaxed">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <ScrollLink
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="absolute bottom-0 left-0 flex gap-4 justify-center items-center p-4 lg:p-16"
      >
        <LuArrowDownCircle className="text-2xl lg:text-3xl text-white animate-bounce" />
        <h1 className="text-white text-sm lg:text-xl leading-relaxed">See More</h1>
      </ScrollLink>
    </div>
  );
};


export default Hero;
