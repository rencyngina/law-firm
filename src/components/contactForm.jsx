"use_client";
import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorMode,
} from "@chakra-ui/react";
const ContactForm = ({ formData, handleInputChange, handleSubmit }) => {
  const { colorMode } = useColorMode();

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
        <Button
          style={{ backgroundColor: "rgb(49, 130, 206)" }}
          type="submit"
          onClick={handleSubmit}
          disabled={!formData.name || !formData.email || !formData.message}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
