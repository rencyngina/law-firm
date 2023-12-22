import LandingNavBar from '../components/nav';
import Hero from '../components/HeroSection/Hero';
import FooterLinks from '../components/Footer/FooterLinks';

export default function Home() {
  return (
      <main>
        <LandingNavBar />
        <Hero />
        <FooterLinks />
      </main>
  );
}
