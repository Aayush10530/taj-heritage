
import { useEffect, useRef } from "react";
import ThemedNavbar from "../components/ThemedNavbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import TourPackages from "../components/TourPackages";
import TaxiBooking from "../components/TaxiBooking";
import GuideProfile from "../components/GuideProfile";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

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
      <TourPackages />
      <TaxiBooking />
      <GuideProfile />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
