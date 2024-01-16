import React from "react";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
import Image from "next/image";

const EstateAdministration = () => {
  return (
    <>
      <Head />
      <LandingNavBar />
      <div className="bg-white h-auto w-full" id="contact">
        <div
          className="h-52 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/property.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed", // Modified this line for background attachment
          }}
        >
          <h1 className="text-xl lg:text-2xl xl:text-3xl text-white">
            Estate Administration
          </h1>
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center xl:justify-center lg:justify-center lg:gap-8 xl:gap-10 p-2 xl:p-24 lg:p-16 border-b">
          <Image
            src="/images/property.jpg"
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
            Step into a realm where our Conveyancing & Real Estate practice group, seasoned in high-stakes legal theatrics, orchestrates a symphony of success for local and international clients. With a tapestry of rich experience, we guide you through the thrilling narratives of land acquisition and disposal, seamlessly executing conveyancing acrobatics
            </p>
            <br />
            <p className="text-gray-500 leading-normal text-md lg:text-lg xl:text-xl lg:text-left">
            Marvel at our expertise in sculpting the skylines of commercial and residential development, choreographing leases and licenses with finesse. Witness the pulse-pounding drama of project financing unfold, and behold the artistry in structuring complex projects and joint ventures. Join us in rewriting the thrilling saga of property law, where every chapter resonates with strategic brilliance and practical triumphs. 
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

              {/* Contact 3 */}
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
                In a recent legal spectacle, our Conveyancing & Real Estate prowess took center stage as we orchestrated a breathtaking acquisition of prime real estate for an international client. Navigating a labyrinth of legal complexities, we seamlessly executed the conveyancing ballet, ensuring a flawless transition of property ownership. The saga continued as we lent our expertise to a high-stakes commercial development, sculpting a skyline that echoed with success. Leases and licenses became a canvas for us to paint strategic masterpieces, and the orchestration of project financing showcased our financial wizardry. In the realm of complex projects and joint ventures, our legal virtuosity shone, crafting structures that stood as monuments to our unwavering commitment to excellence in Conveyance and Property Law.
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

export default EstateAdministration;
