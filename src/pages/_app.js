import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Unique and Relevant Title Tag with Keywords */}
        <title>Mwenda RoyFord & Company Advocates - Legal Excellence</title>

        {/* Unique and Descriptive Meta Descriptions */}
        <meta
          name="description"
          content="Unlock legal excellence with Royfordlaw. Highly skilled professionals from Kenya's prestigious Law Schools, ready to guide you. Trust in our expertise for unparalleled legal services."
        />

        {/* Keywords Meta Tag */}
        <meta name="keywords" content="Royfordlaw, legal excellence, advocates, legal services, law, royfordlaw.com, royfordlaw, mwenda royford, law firm" />

        {/* Favicon Link */}
        <link rel="icon" href="/images/favicon.ico" />
        {/* Author Meta Tag */}
        <meta name="author" content="Erick Adikah" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Theme Color Meta Tag */}
        <meta name="theme-color" content="#1B2432" />
        <meta name="royfordlaw" content="royfordlaw" />
        <meta name="web application" content="rofordlaw.com" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content="Mwenda RoyFord & Company Advocates - Legal Excellence" />
        <meta property="og:description" content="Unlock legal excellence with Royfordlaw. Highly skilled professionals from Kenya's prestigious Law School, University of Nairobi, ready to guide you. Trust in our expertise for unparalleled legal services." />
        <meta property="og:image" content="/MWENDA ROYFORD LOGO-03 (1).png" />
        <meta property="og:url" content="https://www.royfordlaw.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="/images/favicon.ico" />
        <meta name="twitter:title" content="Mwenda RoyFord & Company Advocates - Legal Excellence" />
        <meta name="twitter:description" content="Unlock legal excellence with Royfordlaw. Highly skilled professionals from Kenya's prestigious Law School, University of Nairobi, ready to guide you. Trust in our expertise for unparalleled legal services." />
        <meta name="twitter:image" content="/images/favicon.ico" />
        <meta name="twitter:site" content="@royford_law" />
      </Head>
      
      {/* Main Component */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
