
import { useRef, useEffect } from "react";
import { ArrowRight, Star, Heart, Users, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import TourHighlights from "./TourHighlights";

const TourPackages = () => {
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

  // Only showing the first 4 tour packages
  const tourPackages = [
    {
      id: 1,
      title: "Taj Mahal Sunrise Private Tour",
      description: "Experience the magic of the Taj Mahal at dawn, when the first rays of sunlight illuminate the marble monument, creating a breathtaking golden glow.",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000",
      rating: 4.9,
      reviews: 124,
      people: "1-3",
      tags: ["best-seller"],
      price: 179,
      highlights: [
        "Beat the crowds with early morning access",
        "Witness the changing colors of the Taj at sunrise",
        "Expert historical commentary from our guides",
        "Perfect lighting conditions for photography"
      ]
    },
    {
      id: 2,
      title: "Royal Mughal Heritage Full Day Tour",
      description: "Immerse yourself in the rich history of the Mughal Empire with visits to all major monuments in Agra, accompanied by expert historical commentary.",
      image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      rating: 4.8,
      reviews: 98,
      people: "2-6",
      price: 250,
      highlights: [
        "Visit all major Mughal monuments in one day",
        "Insights into the architecture and history",
        "Lunch at a traditional restaurant",
        "Luxury air-conditioned transportation"
      ]
    },
    {
      id: 3,
      title: "Taj Mahal by Moonlight",
      description: "Witness the ethereal beauty of the Taj Mahal under the moonlight during special night viewing sessions, a rare and magical experience.",
      image: "/lovable-uploads/38db1722-ab1f-44d2-bfc1-95605b191003.png",
      rating: 5.0,
      reviews: 56,
      people: "1-4",
      price: 220,
      highlights: [
        "Exclusive night viewing of the Taj Mahal",
        "Mystical atmosphere under moonlight",
        "Smaller crowds than daytime visits",
        "Special night photography opportunities"
      ]
    },
    {
      id: 5,
      title: "Romantic Taj Experience for Couples",
      description: "A special tour designed exclusively for couples to experience the eternal monument of love with romantic elements and private moments.",
      image: "/lovable-uploads/777fdc51-0bd6-423c-90d7-c23aba7137e9.png",
      rating: 4.9,
      reviews: 87,
      tags: ["romantic"],
      price: 299,
      highlights: [
        "Private tour designed for couples",
        "Professional photography session",
        "Romantic lunch with Taj view",
        "Personalized love story narration by guide"
      ]
    }
  ];

  return (
    <section id="tours" className="section-padding" ref={sectionRef}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent-foreground/70 uppercase tracking-wider text-sm font-medium fade-in">
            Tour Packages
          </span>
          <h2 className="heading-lg mt-2 mb-6 fade-in">
            Curated Experiences in Agra
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8 fade-in"></div>
          <p className="text-lg fade-in">
            Discover our carefully crafted tour packages, designed to showcase the best of Agra's Mughal heritage with 
            the perfect balance of historical insight, comfort, and memorable experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {tourPackages.map((tour, index) => (
            <div 
              key={tour.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow fade-in relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover"
                />
                
                {tour.tags?.includes("best-seller") && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium text-sm flex items-center gap-1">
                    <Star className="fill-gold" size={14} />
                    <span>Most Booked</span>
                  </div>
                )}
                
                {tour.tags?.includes("romantic") && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium text-sm flex items-center gap-1">
                    <Heart className="fill-red-500 text-red-500" size={14} />
                    <span>Couples Special</span>
                  </div>
                )}
                
                {/* Price tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm">
                  <div className="flex items-center gap-1 font-medium">
                    <DollarSign size={14} className="text-accent" />
                    <span>{tour.price}</span>
                    <span className="text-xs text-gray-500">per person</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Star className="text-yellow-500 fill-yellow-500" size={16} />
                    <span className="font-medium">{tour.rating}</span>
                    <span className="text-gray-500">({tour.reviews} reviews)</span>
                  </div>
                  {tour.people && (
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                      <Users size={14} />
                      <span>{tour.people} people</span>
                    </div>
                  )}
                </div>
                
                <h3 className="font-playfair text-xl font-semibold mb-3">{tour.title}</h3>
                <p className="mb-4 text-gray-700">{tour.description}</p>
                
                <TourHighlights 
                  highlights={tour.highlights} 
                  className="mb-6"
                />
                
                <div className="flex justify-end">
                  <Link 
                    to={`/tour/${tour.id}`}
                    className="btn-primary py-2 inline-flex items-center"
                  >
                    View Details
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center fade-in">
          <Link to="/tours" className="btn-primary inline-flex items-center gap-2 px-6 py-3">
            Explore More
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-16 text-center fade-in">
          <h3 className="heading-md mb-6">Looking for Something Customized?</h3>
          <Link to="/custom-tour" className="btn-primary inline-flex items-center">
            Create Custom Tour
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
