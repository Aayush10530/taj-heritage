import { useEffect, useRef } from "react";
import { User, Car, Hotel, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in");
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <User size={32} />,
      title: "Licensed Tour Guides",
      description: "Our guides are certified by the Government of India and possess deep knowledge of Mughal history and architecture."
    },
    {
      icon: <Car size={32} />,
      title: "Luxury Transportation",
      description: "Travel in comfort with our fleet of air-conditioned, chauffeur-driven luxury vehicles.",
      hasKnowMore: true
    },
    {
      icon: <Hotel size={32} />,
      title: "Hotel Recommendations",
      description: "We partner with the finest accommodations in Agra to ensure your stay matches the luxury of your experience."
    },
    {
      icon: <Headphones size={32} />,
      title: "Multilingual Support",
      description: "Our guides speak multiple languages including English, French, Spanish, German, and Japanese."
    }
  ];

  return (
    <section id="services" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent-foreground/70 uppercase tracking-wider text-sm font-medium fade-in">
            Our Services
          </span>
          <h2 className="heading-lg mt-2 mb-6 fade-in">
            Experience Agra in Luxury
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8 fade-in"></div>
          <p className="text-lg fade-in">
            We provide a comprehensive suite of premium services designed to make your visit to 
            the Taj Mahal and Agra's other treasures as comfortable and enriching as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-primary/30 p-8 rounded-lg hover:shadow-lg transition-shadow fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-accent/20 p-4 rounded-full inline-block mb-6">
                <div className="text-accent-foreground">{service.icon}</div>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-4">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              {service.hasKnowMore && (
                <Link 
                  to="/luxury-transport" 
                  className="text-accent hover:text-accent/80 font-medium inline-flex items-center"
                >
                  Know More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="heading-md mb-4">Custom Services Available</h3>
              <p>
                Need something special for your tour? From photography services to specialized cultural 
                experiences, we can accommodate your unique requests.
              </p>
            </div>
            <a href="#contact" className="btn-primary whitespace-nowrap">
              Inquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
