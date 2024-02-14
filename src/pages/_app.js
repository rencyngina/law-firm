import Head from 'next/head';
import '../styles/globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next"

function MyApp({ Component, pageProps }) {
  // Metadata object containing all the metadata for the webpage
  const metadata = {
    title: "Mwenda RoyFord & Company Advocates - Legal Excellence",
    description: "Unlock legal excellence with Royfordlaw. Highly skilled professionals from Kenya's prestigious Law Schools, ready to guide you. Trust in our expertise for unparalleled legal services.",
    keywords: "Royfordlaw, legal excellence, advocates, legal services, law, royfordlaw.com, royfordlaw, mwenda royford, law firm",
    author: "Erick Adikah",
    portfolio: {
      name: "Erick Adikah",
      sameAs: [
        "https://www.linkedin.com/in/erickadikah",
        "https://github.com/erickadikah",
        "https://my-portfolio-sand-ten-81.vercel.app/"
      ]
    },
    themeColor: "#1B2432",
    favicon: "/images/favicon.ico",
    robots: "index, follow, visit:daily",
    og: {
      title: "Mwenda RoyFord & Company Advocates - Legal Excellence",
      description: "Unlock legal excellence with Royfordlaw. Highly skilled professionals from Kenya's prestigious Law School, University of Nairobi, ready to guide you. Trust in our expertise for unparalleled legal services.",
      image: "/MWENDA ROYFORD LOGO-03 (1).png",
      url: "https://www.royfordlaw.com/",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "Mwenda RoyFord & Company Advocates - Legal Excellence",
      description: "Unlock legal excellence with Royfordlaw. Highly skilled professionals from Kenya's prestigious Law School, University of Nairobi, ready to guide you. Trust in our expertise for unparalleled legal services.",
      image: "/images/favicon.ico",
      site: "@royford_law",
      url: "https://twitter.com/Royfordlaw",
    },
    linkedIn: {
      card: "summary_large_image",
      title: "Mwenda RoyFord & Company Advocates - Legal Excellence",
      description: "Unlock legal excellence with Royfordlaw. Highly skilled professionals from Kenya's prestigious Law School, University of Nairobi, ready to guide you. Trust in our expertise for unparalleled legal services.",
      image: "/images/favicon.ico",
      site: "@royford_law",
      url: "https://www.linkedin.com/in/mwenda-royford-company-advocates-062a5a2b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app_share",
      type: "website"
    }

  };
  

  return (
    <>
      <Head>
        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Title Tag */}
        <title>{metadata.title}</title>

        {/* Meta Description */}
        <meta name="description" content={metadata.description} />

        {/* Keywords Meta Tag */}
        <meta name="keywords" content={metadata.keywords} />

        {/* Favicon Link */}
        <link rel="icon" href={metadata.favicon} />
        
        {/* Author Meta Tag */}
        <meta name="author" content={metadata.author} />

        {/* Schema.org Markup for Portfolio */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: metadata.portfolio.name,
            sameAs: metadata.portfolio.sameAs
          })}
        </script>

        {/* Robots Meta Tag */}
        <meta name="robots" content={metadata.robots} />

        {/* Theme Color Meta Tag */}
        <meta name="theme-color" content={metadata.themeColor} />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:image" content={metadata.og.image} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:type" content={metadata.og.type} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="twitter:site" content={metadata.twitter.site} />

        {/* LinkedIn Meta Tags */}
        <meta property="og:title" content={metadata.linkedIn.title} />
        <meta property="og:description" content={metadata.linkedIn.description} />
        <meta property="og:image" content={metadata.linkedIn.image} />
        <meta property="og:url" content={metadata.linkedIn.url} />
        <meta property="og:type" content={metadata.linkedIn.type} />
        <meta property="og:site" content={metadata.linkedIn.site} />
      </Head>
      
      {/* Main Component */}
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;