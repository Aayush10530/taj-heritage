import { useEffect, useRef } from "react";
import ThemedNavbar from "../components/ThemedNavbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import TourPackages from "../components/TourPackages";
import GuideProfile from "../components/GuideProfile";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ImageGallery from "../components/ImageGallery";
import InteractiveMap from "../components/InteractiveMap";
import FAQSection from "../components/FAQSection";
import LocalInsights from "../components/LocalInsights";
import NewsletterSignup from "../components/NewsletterSignup";
import BookingCalendar from "../components/BookingCalendar";

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation on scroll logic
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "-50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
        }
      });
    }, observerOptions);

    const elements = mainRef.current?.querySelectorAll(".fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen">
      <ThemedNavbar />
      <Hero />
      <AboutUs />
      <Services />
      
      {/* Image Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ImageGallery />
        </div>
      </section>
      
      <TourPackages />
      
      {/* Local Insights Section */}
      <section className="section-padding bg-white">
        <div className="container-custom fade-in">
          <LocalInsights />
        </div>
      </section>
      
      <GuideProfile />
      
      {/* Interactive Map Section - Moved here after GuideProfile and before Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg mb-6 fade-in">Explore Agra's Treasures</h2>
            <p className="text-lg mb-8 fade-in">
              Discover the locations of Agra's most iconic monuments and plan your perfect visit.
            </p>
          </div>
          <div className="fade-in">
            <InteractiveMap />
          </div>
        </div>
      </section>
      
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
