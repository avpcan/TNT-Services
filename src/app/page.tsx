import SiteHeader from "../components/site-header";
import HeroSection from "../components/hero-section";
import ServicesSection from "../components/services-section";
import ProjectGallery from "../components/project-gallery";
import AboutSection from "../components/about-section";
import ContactSection from "../components/contact-section";
import SiteFooter from "../components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <ServicesSection />
        <ProjectGallery />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
