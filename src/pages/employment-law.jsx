import React from "react";
import LandingNavBar from "../components/nav";
import Head from "../components/head";
import FooterLinks from "../components/Footer/FooterLinks";
import Image from "next/image";

const EmploymentLaw = () => {
  return (
    <>
      <Head />
      <LandingNavBar />
      <div className="bg-white h-auto w-full" id="contact">
        <div
          className="h-52 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/11r.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed", // Modified this line for background attachment
          }}
        >
          <h1 className="text-5xl text-white">EmploymentLaw</h1>
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center xl:justify-center lg:justify-center lg:gap-8 xl:gap-10 p-2 xl:p-24 lg:p-16 border-b">
          <Image
            src="/images/11r.jpg"
            width={500}
            height={300}
            className="w-82 h-42 mt-6"
          />
          <div className="lg:mb-6 xl:mb-8">
            <h1 className="text-3xl text-left lg:text-left mt-10 font-bold mb-6">
              Overview
            </h1>
            <div className="w-28 h-1 bg-[#A65A2A] mb-8"></div>
            <p className="text-orange-500 text-md leading-normal lg:text-lg xl:text-xl lg:text-left">
              The firm offers a comprehensive employment law service providing
              employers, employees and self-employed with advice on employment
              policies, contracts termination, wages and benefits, collective
              bargaining agreements, workplace safety, workmen’s compensation
              and pensions as well as dealing with employment related disputes.
              We also assist companies to carry out the Employment audit in
              terms of the requirements as required by law.
            </p>
            <br />
            <p className="text-gray-500 leading-normal text-md lg:text-lg xl:text-xl lg:text-left">
              Chambers Global Guide, one of the most prestigious global legal
              directories, in its 2021 rankings, noted the practice area as a
              notable practice group that continues to enhance its reputation
              and market share in Kenya’s real estate space. Similarly, the
              Legal 500 EMEA 2021 recognised the firm’s Real Estate &
              Construction team for their outstanding contribution to the
              practice area.
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
                  Acted for a leading Kenyan investments and real estate company
                  in the sale of 10 high- end villas worth USD 100 million in a
                  gated community in Karen. We advised the parties on the joint
                  venture arrangement and facilitated the negotiation of the
                  joint venture agreement and the transfer of the land to the
                  joint venture reference.
                </li>
                <li className="leading-normal text-md">
                  Acted for a leading Kenyan investments and real estate company
                  in the acquisition of a 10-acre piece of land in Ridgeways,
                  Kiambu worth USD 92.5 Million. We advised on all aspects of
                  the acquisition, conducting legal due diligence and
                  negotiating the sale and purchase agreement.
                </li>
                <li className="leading-normal text-md">
                  Acting for a leading Kenyan real estate and investments firm
                  in the acquisition of a property worth USD 13 million.
                </li>
                <li className="leading-normal text-md">
                  Advisor to a Pan-African financial institution with offices in
                  several African countries, in the acquisition of a property in
                  Nairobi worth USD 12 million
                </li>
                <li className="leading-normal text-md">
                  Acting for a leading Kenyan real estate and investments firm
                  in the acquisition of a property worth USD 13 million
                </li>
                <li className="leading-normal text-md">
                  Acting a leading Turkish construction company in partnership
                  with a German investment firm in a joint venture project with
                  landowners for the development of a multi-million dollar
                  mixed-use project in Nairobi.
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

export default EmploymentLaw;
