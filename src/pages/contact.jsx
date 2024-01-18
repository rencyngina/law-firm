import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 405) {
        const fallbackResponse = await fetch("/api/message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (fallbackResponse.ok) {
          const data = await fallbackResponse.json();
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          toast.success("Message sent");
        } else {
          const errorData = await fallbackResponse.json();
          console.log("Error:", errorData);
          toast.error("Message not sent");
        }
      } else {
        if (response.ok) {
          const data = await response.json();
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          toast.success("Message sent");
        } else {
          const errorData = await response.json();
          console.log("Error:", errorData);
          toast.error("Message not sent");
        }
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error("Internal server error");
    }
  };

  return (
    <>
      <LandingNavBar />
      <div
        className="bg-white flex flex-col"
        id="contact h-[70vh] lg:h-[85vh] xl:h-[90vh]"
      >
        {/* Hero Section */}
        <div
          className="h-52 w-full flex flex-col justify-center items-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/call.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            objectFit: "cover",
          }}
        >
          <h1 className="lg:text-5xl sm:text-lg text-white z-10 relative">
            Contact Us
          </h1>
          <p className="text-white lg:text-lg sm:text-xs mt-4 z-10 relative">
            We are always ready to serve you
          </p>
        </div>

        {/* Main Content Section */}
        <div className="container lg:grid lg:grid-cols-2 lg:gap-2 justify-center mx-auto mt-8 px-4 lg:p-8 p-0 xl:p-10">
          {/* Contact Form Section */}
          <section className="text-center lg:order-2">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-6">
              Request a Call
            </h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="grid grid-cols-1 gap-4">
                {["name", "email", "phone", "subject"].map((field) => (
                  <div key={field} className="mb-4">
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-gray-600"
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="input-field mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300"
                      placeholder={`Enter your ${field}`}
                      required
                    />
                  </div>
                ))}
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="input-field mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300"
                    placeholder="Write your message here"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-submit bg-gradient-to-b from-gray-800 to-gray-900 px-4 py-2 text-white rounded-md hover:from-gray-700 hover:to-gray-800 focus:outline-none focus:ring focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </section>

          {/* Contact Info and Map Section */}
          <section className="mt-8 p-2 lg:p-0 xl:p-0 lg:order-1">
            <div className="mb-6">
              <p className="text-lg lg:text-xl xl:text-2xl">FIND US HERE</p>
              <div className="w-28 h-1 bg-[#A65A2A] mb-4 mt-2"></div>
              <h1 className="text-xl lg:text-2xl xl:text-4xl font-semibold text-gray-800 mb-2">
                Map & Location
              </h1>
              <p className="text-md lg:text-xl xl:text-xl mb-6">
                We are located along 5th avenue office suite 4th floor suite 4 –
                15 off gong road
              </p>
              {/* Google Map Iframe */}
              <div className="mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3988.791699620398!2d36.78176001089665!3d-1.2997965986823754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s5TH%20AVENUE%20OFFICE%20SUITES%204TH%20FLOOR%20SUITE%204%20%E2%80%93%2015%20OFF%20NGONG%20ROAD!5e0!3m2!1sen!2ske!4v1703769902782!5m2!1sen!2ske"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              {/* Social Media Icons */}
              <div className="flex items-center justify-center space-x-4">
                <p className="text-md lg:text-xl xl:text-2xl font-semibold">
                  FOLLOW US
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <FaFacebook className="w-5 h-5 lg:w-10 lg:h-10 text-blue-600" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <BsTwitterX className="w-5 h-5 lg:w-10 lg:h-10 text-blue-400" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <FaLinkedin className="w-5 h-5 lg:w-10 lg:h-10 text-blue-800" />
                </a>
              </div>
            </div>
          </section>
        </div>
        <ToastContainer />
      </div>
      <Head />
    </>
  );
};

export default Contact;
