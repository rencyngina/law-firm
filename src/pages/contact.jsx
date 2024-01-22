import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: 100% 100%;
  }
`;

const ContactWrapper = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  animation: ${fadeIn} 10s infinite alternate;
`;

const HeroSection = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    rgba(21, 21, 21, 0.8),
    rgba(30, 29, 29, 0.8)
  ), url(/images/call.jpg);
  background-position: 0% 0%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  object-fit: cover;
  color: white;
  text-align: center;
  padding: 0 20px;
  animation: ${fadeIn} 10s infinite alternate;

  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    font-weight: 700;
    color: #fff;
  }

  p {
    font-size: 1.2rem;
    color: #eee;
  }
`;

const FormSection = styled.section`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  margin-top: -50px;
  text-align: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
    font-weight: 700;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #45a049;
    box-shadow: 0 0 10px rgba(69, 160, 73, 0.5);
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #45a049;
    box-shadow: 0 0 10px rgba(69, 160, 73, 0.5);
  }
`;

const SubmitButton = styled.button`
  background-color: #161E2D;
  color: white;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 200px;
  outline: none;

  &:hover {
    background-color: #45a049;
  }
`;

const MapSection = styled.section`
  margin-top: 20px;
  padding: 20px;
  text-align: center;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #333;
    font-weight: 700;
  }

  div {
    width: 100%;
    height: 1px;
    background: #A65A2A;
    margin-bottom: 15px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 20px;
    color: #666;
  }
`;

const GoogleMap = styled.iframe`
  width: 100%;
  height: 500px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  if (response.ok) {
    return await response.json();
  }
  throw await response.json();
};

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
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetchData("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      toast.success("Message sent will get back to you soon");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Message not sent");
    }
  };

  return (
    <ContactWrapper>
      <LandingNavBar />
      <HeroSection>
        <h1>Contact Us</h1>
        <p>We are always ready to serve you</p>
      </HeroSection>
      <FormSection>
        <h1 style={{ fontSize: "2rem", marginBottom: "20px", color: "#333" }}>
          Send Us a Message
        </h1>
        <form onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <StyledInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <StyledInput
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            required
          />
          <StyledInput
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
          />
          <StyledTextarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
            required
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </FormSection>
      <MapSection>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#333" }}>
          Find Us Here
        </h1>
        <div style={{ width: "100%", height: "1px", background: "#A65A2A", marginBottom: "15px" }}></div>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#333" }}>
          Map & Location
        </h1>
        <p style={{ fontSize: "1rem", marginBottom: "20px", color: "#666" }}>
          We are located along 5th avenue office suite 4th floor suite 4 – 15 off gong road
        </p>
        <GoogleMap
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3988.791699620398!2d36.78176001089665!3d-1.2997965986823754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s5TH%20AVENUE%20OFFICE%20SUITES%204TH%20FLOOR%20SUITE%204%20%E2%80%93%2015%20OFF%20NGONG%20ROAD!5e0!3m2!1sen!2ske!4v1703769902782!5m2!1sen!2ske"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "10px", boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></GoogleMap>
      </MapSection>

      <ToastContainer />
      <Head />
    </ContactWrapper>
  );
};

export default Contact;
