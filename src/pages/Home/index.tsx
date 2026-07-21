import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import FeaturedSection from './FeaturedSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <ServicesSection />
      <FeaturedSection />
    </>
  );
}
