import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Next.js TailwindCSS Starter Template" />
        <meta name="keywords" content="nextjs, tailwindcss, starter, template" />
        <title>Mwenda RoyFord & Company Advocates</title>
        <meta name="description" content="Unlock legal excellence with Royfordlaw, where highly skilled professionals, graduates of Kenya's prestigious Law School, University of Nairobi, stand ready to guide you. Trust in our expertise for unparalleled legal services. Contact us today for a personalized consultation and embark on a journey to legal success." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

