import React, { useState } from "react";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Foot from "../components/foot";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <LandingNavBar />
      <div
        className="bg-white flex flex-col"
        id="contact h-[70vh] lg:h-[85vh] xl:h-[90vh]"
      >
        <div
          className="h-52 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/call.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            objectFit: "cover",
          }}
        >
          <h1 className="lg:text-5xl sm:text-lg text-white">Contact Us</h1>
          <p className="text-white lg:text-lg sm:text-xs mt-4">
            We are always ready to serve you
          </p>
        </div>

        <div className="container lg:grid lg:grid-cols-2 lg:gap-2 justify-center mx-auto mt-8 px-4 lg:p-8 p-0 xl:p-10">
          <section className="text-center">
          <h1 className="text-lg lg:text-2xl xl:text-4xl font-semibold text-gray-800 mb-6">
            Request for a call back
          </h1>
             <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="grid grid-cols-1 gap-4">
                {/* Form Input Fields */}
                {["name", "email", "phone", "subject"].map((field) => (
                  <input
                    key={field}
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="input-field"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    required
                  />
                ))}
                {/* Textarea for Message */}
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="input-field"
                  placeholder="Message"
                  required
                ></textarea>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-submit bg-gradient-to-b from-gray-800 to-gray-900"
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
           <section className="mt-8 p-2 lg:p-0 xl:p-0">
            <p className="text-lg lg:text-xl xl:text-2xl">FIND US HERE</p>
            <div className="w-28 h-1 bg-[#A65A2A] mb-8 mt-4"></div>
            <h1 className="text-xl lg:text-2xl xl:text-4xl font-semibold text-gray-800 mb-6">
              Map & Location
            </h1>
            <p className="text-md lg:text-xl xl:text-xl mb-8">
              We are located along 5th avenue office suite 4th floor suite 4 – 15 off gong road
            </p>
            <div className="flex justify-center items-center p-0">
              {/* Google Map Iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3988.791699620398!2d36.78176001089665!3d-1.2997965986823754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s5TH%20AVENUE%20OFFICE%20SUITES%204TH%20FLOOR%20SUITE%204%20%E2%80%93%2015%20OFF%20NGONG%20ROAD!5e0!3m2!1sen!2ske!4v1703769902782!5m2!1sen!2ske"
                width="700"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default Contact;
