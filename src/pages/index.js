import LandingNavBar from '../components/nav';
import Hero from '../components/HeroSection/Hero';
import FooterLinks from '../components/Footer/FooterLinks';
import Head from '../components/head'
import Section1 from '../components/section1'
import Section2 from '../components/section2'
import Patners from '../components/patners'
import FloatingChatButton from '../components/floatingChatIcon'

export default function Home() {
  return (
      <main>
        <Head />
        <LandingNavBar />
        <Hero />
        <Section1 />
        <Section2 />
        <Patners />
        <FloatingChatButton />
        <FooterLinks />
      </main>
  );
}
