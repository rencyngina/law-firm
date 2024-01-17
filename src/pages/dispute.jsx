/* eslint-disable react/no-unescaped-entities */
import React from "react";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
import Image from "next/image";

const Dispute = () => {
  return (
    <>
      <Head />
      <LandingNavBar />
      <div className="bg-white h-auto w-full" id="contact">
        <div
          className="h-52 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/service_03.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed", // Modified this line for background attachment
          }}
        >
          <h1 className="text-5xl text-white">Dispute</h1>
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center xl:justify-center lg:justify-center lg:gap-8 xl:gap-10 p-2 xl:p-24 lg:p-16 border-b">
          <Image
            src="/images/service_03.jpg"
            width={500}
            height={300}
            className="w-82 h-42 mt-6"
            alt=""
          />
          <div className="lg:mb-6 xl:mb-8">
            <h1 className="text-3xl text-left lg:text-left mt-10 font-bold mb-6">
              Overview
            </h1>
            <div className="w-28 h-1 bg-[#A65A2A] mb-8"></div>
            <p className="text-orange-500 text-md leading-normal lg:text-lg xl:text-xl lg:text-left">
            Our dispute resolution transcends legal conventions. Our commitment to ADR, particularly in Arbitration and Mediation, unfolds as a riveting narrative of swift conflict resolution intertwined with the delicate art of relationship mending. Imagine a legal landscape where disputes, be it within families, registered societies, community groups, or business entities, are not just resolved but transformed into opportunities for growth and understanding.
            </p>
            <br />
            <p className="text-gray-500 leading-normal text-md lg:text-lg xl:text-xl lg:text-left">
            Our triumphs in this arena are emblematic of our prowess, showcasing the adept handling of disputes involving diverse stakeholders. Mwenda Royford and Company Advocates redefine ADR, presenting a thrilling saga of conflict transformation where resolutions go beyond legalities to foster enduring relationships. Trust us to navigate the intricacies of Arbitration and Mediation, crafting resolutions that are not just legal victories but captivating stories of harmony, restoration, and lasting connections.
            </p>
          </div>
        </div>
        {/* Experience and key Contacts to be added */}
        <div className="container mx-auto p-10 xl:p-22 lg:p-14 border-b lg:mb-10">
          <div className="block lg:grid lg:grip-col-2 xl:grid-cols-2 lg:gap-8">
            <div className="gap-4 mt-0 grid grid-cols-1 lg:grid-cols-3 lg:mb-40 xl:mt-50">
              <div className="lg:col-span-3">
                <h1 className="text-2xl lg:text-3xl xl:text-4xl mb-4">
                  Key Contacts
                </h1>
                <div className="w-28 h-1 bg-[#A65A2A] mb-8"></div>
              </div>

              {/* Contact 1 */}
              <div className="bg-white p-4 rounded shadow-lg transition duration-300 hover:bg-gray-600">
                <div className="relative h-40 overflow-hidden rounded-t">
                  <Image
                    src="/images/John-Mbaluto.webp"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                    // className="rounded"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-semibold mb-2">Pamella Ager</h3>
                  <ul className="text-sm">
                    <li className="mb-2">
                      <span className="font-semibold">Position:</span> Partner
                    </li>
                    <li className="mb-2">
                      <span className="font-semibold">Email:</span>{" "}
                      pamella@example.com
                    </li>
                    {/* Add more contact information here if needed */}
                  </ul>
                </div>
              </div>

              {/* Contact 2 */}
              <div className="bg-white p-4 rounded shadow-lg transition duration-300 hover:bg-gray-600">
                <div className="relative h-40 overflow-hidden rounded-t">
                  <Image
                    src="/images/John-Mbaluto.webp"
                    layout="fill"
                    alt=""
                    // className="rounded"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-semibold mb-2">Pamella Ager</h3>
                  <ul className="text-sm">
                    <li className="mb-2">
                      <span className="font-semibold">Position:</span> Partner
                    </li>
                    <li className="mb-2">
                      <span className="font-semibold">Email:</span>{" "}
                      pamella@example.com
                    </li>
                    {/* Add more contact information here if needed */}
                  </ul>
                </div>
              </div>

              {/* Contact 3 */}
              <div className="bg-white p-4 rounded shadow-lg transition duration-300 hover:bg-gray-600">
                <div className="relative h-40 overflow-hidden rounded-t">
                  <Image
                    src="/images/John-Mbaluto.webp"
                    layout="fill"
                    alt=""
                    // className="rounded"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-semibold mb-2">Pamella Ager</h3>
                  <ul className="text-sm">
                    <li className="mb-2">
                      <span className="font-semibold">Position:</span> Partner
                    </li>
                    <li className="mb-2">
                      <span className="font-semibold">Email:</span>{" "}
                      pamella@example.com
                    </li>
                    {/* Add more contact information here if needed */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="text-xl lg:text-2xl xl:text-3xl mb-4">
                Experience
              </h1>
              <div className="w-28 h-1 bg-[#A65A2A] mb-8"></div>
              {/* Experience*/}
              <p className="text-lg lg:text-xl xl:text-2xl mb-6">
                Recently, we have been involved in:
              </p>
              <ul className="list-disc p-2 lg:text-lg xl:text-lg mt-4 mb-2 lg:ml-4 xl:ml-6">
                <li className="leading-normal text-md">
                Our legal expertise meets the art of conflict transformation. Picture a scenario where the swift resolution of disputes is not just a legal triumph but a thrilling narrative of relationship restoration
                </li>
                <li className="leading-normal text-md">
                In one remarkable experience, our commitment to ADR unfolded as a gripping saga. We successfully navigated disputes entwined with the complexities of families, registered societies, community groups, and business persons. This wasn't merely about settling legal matters; it was about redefining relationships, fostering understanding, and turning conflicts into opportunities for growth.
                </li>
                <li className="leading-normal text-md">
                At Mwenda Royford and Company Advocates, ADR is not just a service; it's a captivating story of conflict resolution that goes beyond the legal realm. Trust us to craft resolutions that are not just solutions but thrilling tales of harmony, restoration, and enduring connections in diverse and challenging scenarios.
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FooterLinks />
    </>
  );
};

export default Dispute;
