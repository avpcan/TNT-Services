import SiteHeader from "../components/site-header";
import HeroSection from "../components/hero-section";
import LandscapingSection from "../components/landscaping-section";
import JunkRemovalSection from "../components/junk-removal-section";
import HotTubSection from "../components/hot-tub-section";
import ProjectGallery from "../components/project-gallery";
import AboutSection from "../components/about-section";
import ServiceAreaSection from "../components/service-area-section";
import ContactSection from "../components/contact-section";
import SiteFooter from "../components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <LandscapingSection />
        <JunkRemovalSection />
        <HotTubSection />
        <ProjectGallery />
        <AboutSection />
        <ServiceAreaSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
