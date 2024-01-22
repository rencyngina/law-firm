import React from "react";

const Faq = () => {
  return (
    <div class="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10 lg:mb-10">
    <h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Got some burning questions about our services?
        </h1>
        <p class="mt-6 text-xl text-gray-500">
        Here are some of the most frequently asked questions about our
        services. If you have any other questions, please feel free to
        contact us.
        </p>
      <div class="mx-auto px-5">
        <div class="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
          <div class="py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                <span> How does the billing work?</span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                Springerdata offers a variety of billing options, including
                monthly and annual subscription plans, as well as pay-as-you-go
                pricing for certain services. Payment is typically made through
                a credit card or other secure online payment method.
              </p>
            </details>
          </div>
          <div class="py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                <span> Can I get a refund for my subscription?</span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                We offer a 30-day money-back guarantee for most of its
                subscription plans. If you are not satisfied with your
                subscription within the first 30 days, you can request a full
                refund. Refunds for subscriptions that have been active for
                longer than 30 days may be considered on a case-by-case basis.
              </p>
            </details>
          </div>
          <div class="py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                <span> Is there a free trial?</span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                We offer a free trial of our software for a limited time. During
                the trial period, you will have access to a limited set of
                features and functionality, but you will not be charged.
              </p>
            </details>
          </div>
          <div class="py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                <span> How do I contact support?</span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                If you need help with our platform or have any other questions,
                you can contact the company's support team by submitting a
                support request through the website or by emailing
                support@ourwebsite.com.
              </p>
            </details>
          </div>
          <div class="py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                <span> Do you offer any discounts or promotions?</span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                We may offer discounts or promotions from time to time. To stay
                up-to-date on the latest deals and special offers, you can sign
                up for the company's newsletter or follow it on social media.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
