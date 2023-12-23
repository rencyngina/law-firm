import LandingNavBar from '../components/nav';
import Hero from '../components/HeroSection/Hero';
import FooterLinks from '../components/Footer/FooterLinks';
import Head from '../components/head'
import Section1 from '../components/section1'
import Section2 from '../components/section2'
import Patners from '../components/patners'

export default function Home() {
  return (
      <main>
        <Head />
        <LandingNavBar />
        <Hero />
        <Section1 />
        <Section2 />
        <Patners />
        <FooterLinks />
      </main>
  );
}
