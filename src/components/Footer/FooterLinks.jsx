// import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";


function FooterLinks() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="mx-auto max-w-screen-lg lg:max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div className="text-teal-300">
              <Image
                src="/images/MWENDA ROYFORD LOGO-03 (1).png"
                alt="Logo"
                height={350}
                width={850}
                // className="w-full h-80"
              />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
              <div className="col-span-2">
              <div>
              <p className="lg:text-xl sm:text-xl font-bold text-white">
                About Us
              </p>
              <p className="lg:text-sm text-sm mt-4 text-white">
              Established in 2016, Mwenda Royford and Company Advocates 
              stands at the forefront of legal innovation, sculpting a legacy
               of excellence with unwavering commitment. Our vision is anchored in
                a passion for transformative legal solutions, setting us apart in the legal landscape.
              </p>
            </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <p className="text-xl font-bold text-[#A65A2A]">Our Location</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex items-center">
                    <a
                      href="#"
                      className="transition hover:opacity-75 text-gray-200"
                    >
                      5TH AVENUE OFFICE SUITES 4TH FLOOR SUITE 4 – 15 OFF NGONG
                      ROAD
                    </a>
                  </li>
                  <li className="flex items-center">
                    <a
                      href="#"
                      className="transition hover:opacity-75 text-gray-200"
                    >
                      +254 701 331176
                    </a>
                  </li>
                  <a className="flex items-center" href="mailto:info@royfordlaw.com">
                    <p className="transition hover:opacity-75 text-gray-200">
                      info@royfordlaw.com
                    </p>
                  </a>
                </ul>
              </div>
              <div className="flex lg:block gap-10">
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-bold  text-[#A65A2A] lg:text-xl sm:text-lg">
                    Company
                  </p>
                  <ul className=" lg:text-sm sm:text-sm mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="transition hover:opacity-75 text-gray-200"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition hover:opacity-75 text-gray-200"
                      >
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition hover:opacity-75 text-gray-200"
                      >
                        Join Our team
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex lg:block gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-bold  text-[#A65A2A] lg:text-xl sm:text-lg">
                    Industry
                  </p>
                  <ul className=" lg:text-sm sm:text-sm mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="transition hover:opacity-75 text-gray-200"
                      >
                        Agriculture
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition hover:opacity-75 text-gray-200"
                      >
                        Business
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition hover:opacity-75 text-gray-200"
                      >
                        Education
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition hover:opacity-75 text-gray-200"
                      >
                        Entertainment
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition hover:opacity-75 text-gray-200"
                      >
                        Real Estate
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end items-center">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61555492831222&mibextid=ZbWKwL"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6 lg:h-10 lg:w-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/royfordlaw?utm_source=qr&igsh=dzU2enhuNWpwczln"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-6 w-6 lg:h-10 lg:w-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Royfordlaw"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    <span className="sr-only ">Twitter</span>
                    <BsTwitterX className="h-6 w-6 lg:h-9 lg:w-9"/>
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/@Royfordlaw?si=RWqau-X_t0j_EK_-"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75 text-gray-200 lg:h-12 lg:w-12"
                  >
                    <span className="sr-only">YouTube</span>
                    <FaYoutube size={20} className="h-6 w-6 lg:h-10 lg:w-10"/>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mwenda-royford-company-advocates-062a5a2b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    <span className="sr-only">YouTube</span>
                    <FaLinkedin size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 dark:border-gray-800 mt-4">
            <div className="sm:flex sm:justify-between">
              <p className="text-xs text-gray-400">
                © {currentYear}. Mwenda RoyFord & Company Advocates. All rights reserved.
              </p>
              <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                <li>
                  <a
                    href="#"
                    className=" transition hover:opacity-75 text-gray-400 lg:text-sm sm:text-xs"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" transition hover:opacity-75 text-gray-400 lg:text-sm sm:text-xs"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" transition hover:opacity-75 text-gray-400 lg:text-sm sm:text-xs"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterLinks;
