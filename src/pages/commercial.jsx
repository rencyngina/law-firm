import React from "react";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
import Image from "next/image";

const Commercial = () => {
  return (
    <>
      <Head />
      <LandingNavBar />
      <div className="bg-white h-auto w-full" id="contact">
        <div
          className="h-52 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/coporate.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed", // Modified this line for background attachment
          }}
        >
          <h1 className="text-5xl text-white">Commercial</h1>
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center xl:justify-center lg:justify-center lg:gap-8 xl:gap-10 p-2 xl:p-24 lg:p-16 border-b">
          <Image
            src="/images/coporate.png"
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
            Dive into the heart of commerce with our Corporate & Commercial practice, where each transaction is a pulsating journey. Armed with a reservoir of sector-specific wisdom, we propel businesses to unprecedented heights, merging strategic vision with profound legal acumen and an intimate grasp of business dynamics.
            </p>
            <br />
            {/*  Querry data using json from a file*/}
            <p className="text-gray-500 leading-normal text-md lg:text-lg xl:text-xl lg:text-left">
            Behold the legal symphony: our Corporate & Commercial practice seamlessly intertwines competition law, employment intricacies, financial finesse, regulatory astuteness, and taxation wizardry. Picture our recent conquests—a breathtaking saga featuring intricate mergers, daring acquisitions, visionary joint ventures, and contracts that redefine industry landscapes.
            Our prowess is not just acknowledged; it's revered. Join us in the epicenter of corporate law, where each legal stroke is a strategic masterpiece, propelling businesses into realms of unparalleled growth. In the intricate dance of commerce, we are the choreographers, crafting success stories that resonate with the pulse of business brilliance.             
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
                Mwenda Royford and Company Advocates elevate the practice of Commercial and Business Law through a sensational blend of creativity and efficiency, leaving an indelible mark on the legal landscape. They have orchestrated a diverse range of custom-made commercial and business agreements, tailoring solutions to meet the unique needs of both local and foreign corporate clients. Their expertise extends to advising on the intricate structuring of local and international companies, including for-profit and non-profit entities, showcasing their versatility in navigating complex business landscapes.
                </li>
                <li className="leading-normal text-md">
                An exemplary experience lies in their adept formation and registration of Trusts and Foundations, attesting to their commitment to comprehensive legal solutions. Mwenda Royford and Company Advocates also stand out in conducting due diligence for companies, providing invaluable insights into institutional, governance, and ownership structures. The firm's offering of company secretarial services for corporate clients further underscores their dedication to facilitating seamless business operations, making them unparalleled leaders in the realm of Commercial and Business Law.
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

export default Commercial;
