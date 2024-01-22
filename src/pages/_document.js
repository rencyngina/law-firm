import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/images/LOGOS3-removebg.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Next.js TailwindCSS Starter Template" />
        <meta name="keywords" content="nextjs, tailwindcss, starter, template" />
        <title>Mwenda RoyFord & Company Advocates</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
