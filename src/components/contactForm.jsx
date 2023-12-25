"use_client"
import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { CustomButton } from "./custom-button";

const ContactForm = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Check if all required fields have values
    const isFormValid =
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== "";

    // Enable or disable the submit button based on form validity
    document.querySelector('button[type="submit"]').disabled = !isFormValid;
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

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Log the success message
        onToggle();
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
    <Box>
      <h1
        style={{ textAlign: "center" }}
        className="text-3xl font-bold text-gray-900 dark:text-white"
      >
        Wanna reach out?
      </h1>
      <p
        style={{ textAlign: "center" }}
        className="text-xl text-gray-600 dark:text-gray-400"
      >
        I will get back to you as soon as possible.
      </p>
      <form
        className={colorMode === "dark" ? "dark:bg-gray-700" : ""}
        onSubmit={handleSubmit}
      >
        <FormControl id="name" mb="4">
          <FormLabel>Your Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
            borderColor={colorMode === "dark" ? "gray.700" : "gray.700"}
            _placeholder={{
              color: colorMode === "dark" ? "gray.300" : "gray.600",
            }}
            color={colorMode === "dark" ? "white" : "black"}
          />
        </FormControl>
        <FormControl id="email" mb="4">
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
            borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
            _placeholder={{
              color: colorMode === "dark" ? "gray.300" : "gray.600",
            }}
            color={colorMode === "dark" ? "white" : "black"}
          />
        </FormControl>
        <FormControl id="message" mb="4">
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows="4"
            required
            borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
            _placeholder={{
              color: colorMode === "dark" ? "gray.300" : "gray.600",
            }}
            color={colorMode === "dark" ? "white" : "black"}
          />
        </FormControl>
        <CustomButton
          style={{ backgroundColor: "rgb(49, 130, 206)" }}
          type="submit"
          onClick={handleSubmit}
          disabled
        >
          Submit
        </CustomButton>
      </form>
      {isOpen && (
        <Box
          mt="4"
          p="4"
          bg={colorMode === "dark" ? "gray.800" : "teal.100"}
          rounded="lg"
          color={colorMode === "dark" ? "white" : "black"}
        >
          Thank you for your message! We will get back to you soon.
        </Box>
      )}
    </Box>
  );
};

export default ContactForm;