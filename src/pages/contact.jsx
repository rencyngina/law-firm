import React, { useState } from "react";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

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
      <Head />
      <LandingNavBar />
      <div className="bg-white flex flex-col" id="contact">
        <div
          className="h-52 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/call.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <h1 className="lg:text-5xl sm:text-lg text-white">Contact Us</h1>
          <p className="text-white lg:text-lg sm:text-xs mt-4">
            We are always ready to serve you
          </p>
        </div>

        <div className="container mx-auto mt-8 px-4">
          <section className="text-center">
            <h1 className="text-3xl mt-8 mb-4">Send Us a Message</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Email"
                  required
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Phone"
                  required
                />
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Subject"
                  required
                />
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
              </div>
              <button
                type="submit"
                className="btn-submit bg-gradient-to-b from-gray-800 to-gray-900"
              >
                Submit
              </button>
            </form>
          </section>
          <section className="text-center mt-8">
            <h1 className="text-3xl mb-4">Our Location</h1>
            <div className="sm:grid-cols-1 lg:grid-cols-1">
              <div className="flex justify-center items-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d414.6107271344538!2d-84.39783285948984!3d33.763616353875854!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1703529936281!5m2!1sen!2ske"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              </div>
          </section>
        </div>
      </div>
      <FooterLinks />
    </>
  );
};

export default Contact;
