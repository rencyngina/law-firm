/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";

const Faq = () => {
  useEffect(() => {
    // JavaScript to toggle the answers and rotate the arrows
    document
      .querySelectorAll('[id^="question"]')
      .forEach(function (button, index) {
        button.addEventListener("click", function () {
          var answer = document.getElementById("answer" + (index + 1));
          var arrow = document.getElementById("arrow" + (index + 1));

          if (answer.style.display === "none" || answer.style.display === "") {
            answer.style.display = "block";
            arrow.style.transform = "rotate(0deg)";
          } else {
            answer.style.display = "none";
            arrow.style.transform = "rotate(-180deg)";
          }
        });
      });
  }, []);

  return (
    <section className="py-8 bg-gray-50 sm:py-16 lg:py-18">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl  leading-tight text-black sm:text-4xl lg:text-5xl">
            Got some burning questions about our services?
          </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              id="question1"
              data-state="closed"
              className="flex items-center justify-between w-full px-10 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">
                How much do you charge for your legal services?
              </span>
              <svg
                id="arrow1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="answer1"
              style={{ display: "none" }}
              className="px-4 pb-5 sm:px-6 sm:pb-6"
            >
              <p>
                Our legal fees vary based on the complexity of the case and the
                services required. We offer an initial consultation to assess
                your situation and provide a personalized quote
              </p>
            </div>
          </div>
          <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              id="question1"
              data-state="closed"
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">
                What documents should I bring to my initial consultation?
              </span>
              <svg
                id="arrow2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="answer2"
              style={{ display: "none" }}
              className="px-4 pb-5 sm:px-6 sm:pb-6"
            >
              <p>
                It's helpful to bring any relevant documents, such as contracts,
                correspondence, or court documents. However, if you don't have
                them, don't worry; we'll gather necessary information during the
                consultation.
              </p>
            </div>
          </div>
          <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              id="question1"
              data-state="closed"
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">
                How can I schedule a consultation with one of your attorneys?
              </span>
              <svg
                id="arrow3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="answer3"
              style={{ display: "none" }}
              className="px-4 pb-5 sm:px-6 sm:pb-6"
            >
              <p>
                To schedule a consultation, you can send as a message through
                our contact and will reach out. During the consultation, we will
                discuss your legal concerns and provide insights into your case
              </p>
            </div>
          </div>
          <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              id="question1"
              data-state="closed"
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">
                How do I stay updated on the progress of my case?
              </span>
              <svg
                id="arrow4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="answer4"
              style={{ display: "none" }}
              className="px-4 pb-5 sm:px-6 sm:pb-6"
            >
              <p>
                We prioritize transparent communication. You will receive
                regular updates on the progress of your case, and our team is
                available to address any questions or concerns you may have
              </p>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-600 textbase mt-9">
          Still have questions?
          <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
            Contact our support info@royfordlawlaw.com
          </span>
        </p>
      </div>
    </section>
  );
};

export default Faq;
