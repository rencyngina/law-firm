"use_client"
import React, { useState } from "react";
import LandingNavBar from "../components/nav";
import Hero from "../components/HeroSection/Hero";
import FooterLinks from "../components/Footer/FooterLinks";
import Head from "../components/head";
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import Patners from "../components/patners";
import FloatingChatButton from "../components/floatingChatIcon";
import Newsletter from "../components/newsletter";
import ContactForm from "../components/contactForm";

export default function Home() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Log the success message
        closeForm();
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        // Handle error responses here
        const errorData = await response.json();
        console.error("Failed to send message:", errorData.error);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <main>
      <Head />
      <LandingNavBar />
      <Hero />
      <Section1 />
      <Section2 />
      <Patners />
      <FloatingChatButton onClick={toggleForm} />
      {isFormVisible && (
        <div className="fixed bottom-0 right-0 z-50">
          <div className="relative">
            <ContactForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
            <button
              onClick={closeForm}
              className="absolute top-0 right-0 m-4 bg-white text-gray-700 rounded-full px-3 py-1"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Newsletter />
      <FooterLinks />
    </main>
  );
}
