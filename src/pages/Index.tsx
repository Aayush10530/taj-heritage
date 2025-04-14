
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
      
      {/* Interactive Map Section */}
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
      
      <TaxiBooking />
      
      {/* Local Insights Section */}
      <section className="section-padding bg-white">
        <div className="container-custom fade-in">
          <LocalInsights />
        </div>
      </section>
      
      <GuideProfile />
      <Testimonials />
      
      {/* FAQ Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <FAQSection />
        </div>
      </section>
      
      {/* Newsletter and Booking Calendar Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg mb-6 fade-in">Plan Your Visit</h2>
            <p className="text-lg fade-in">
              Check our availability and subscribe to our newsletter for exclusive updates and offers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="fade-in">
              <NewsletterSignup />
            </div>
            <div className="fade-in">
              <BookingCalendar />
            </div>
          </div>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
