
import { useState, useEffect, useRef } from "react";
import { Clock, Users, MapPin, ArrowRight, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const TourPackages = () => {
  const [activeTab, setActiveTab] = useState("all");
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

  const tourPackages = [
    {
      id: 1,
      title: "Taj Mahal Sunrise Private Tour",
      description: "Experience the magic of the Taj Mahal at dawn, when the first rays of sunlight illuminate the marble monument, creating a breathtaking golden glow.",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000",
      duration: "5 hours",
      groupSize: "Private (1-4 people)",
      locations: ["Taj Mahal", "Agra Fort"],
      rating: 4.9,
      reviews: 124,
      price: "$149",
      type: "private",
      tags: ["best-seller"]
    },
    {
      id: 2,
      title: "Royal Mughal Heritage Full Day Tour",
      description: "Immerse yourself in the rich history of the Mughal Empire with visits to all major monuments in Agra, accompanied by expert historical commentary.",
      image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      duration: "8 hours",
      groupSize: "Small group (max 10 people)",
      locations: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Itimad-ud-Daulah"],
      rating: 4.8,
      reviews: 98,
      price: "$199",
      type: "group"
    },
    {
      id: 3,
      title: "Taj Mahal by Moonlight",
      description: "Witness the ethereal beauty of the Taj Mahal under the moonlight during special night viewing sessions, a rare and magical experience.",
      image: "/lovable-uploads/38db1722-ab1f-44d2-bfc1-95605b191003.png",
      duration: "3 hours",
      groupSize: "Private (1-4 people)",
      locations: ["Taj Mahal (Night View)"],
      rating: 5.0,
      reviews: 56,
      price: "$199",
      type: "private"
    },
    {
      id: 4,
      title: "Imperial Agra Day Tour",
      description: "Our most authentic experience visiting the two most iconic monuments of Agra with expert historical insights and plenty of time for photography.",
      image: "/lovable-uploads/452c1e6d-a8c3-48c7-a8a7-032db9446cbd.png",
      duration: "6 hours",
      groupSize: "Small group (max 6 people)",
      locations: ["Taj Mahal", "Agra Fort"],
      rating: 4.7,
      reviews: 45,
      price: "$179",
      type: "group",
      tags: ["best-tour"]
    },
    {
      id: 5,
      title: "Romantic Taj Experience for Couples",
      description: "A special tour designed exclusively for couples to experience the eternal monument of love with romantic elements and private moments.",
      image: "/lovable-uploads/777fdc51-0bd6-423c-90d7-c23aba7137e9.png",
      duration: "4 hours",
      groupSize: "Private (couples only)",
      locations: ["Taj Mahal", "Mehtab Bagh"],
      rating: 4.9,
      reviews: 87,
      price: "$249",
      type: "private",
      tags: ["romantic"]
    }
  ];

  const filteredTours = activeTab === "all"
    ? tourPackages
    : tourPackages.filter(tour => tour.type === activeTab);

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

        <div className="flex justify-center mb-10 fade-in">
          <div className="bg-primary/30 rounded-full inline-flex p-1">
            <button
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === "all" ? "bg-accent text-accent-foreground" : ""
              }`}
              onClick={() => setActiveTab("all")}
            >
              All Tours
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === "private" ? "bg-accent text-accent-foreground" : ""
              }`}
              onClick={() => setActiveTab("private")}
            >
              Private Tours
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === "group" ? "bg-accent text-accent-foreground" : ""
              }`}
              onClick={() => setActiveTab("group")}
            >
              Group Tours
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredTours.map((tour, index) => (
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
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-medium text-sm">
                  {tour.price} per person
                </div>
                
                {tour.tags?.includes("best-seller") && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium text-sm flex items-center gap-1">
                    <Star className="fill-gold" size={14} />
                    <span>Most Booked</span>
                  </div>
                )}
                
                {tour.tags?.includes("best-tour") && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium text-sm flex items-center gap-1">
                    <Star className="fill-gold" size={14} />
                    <span>Best Tour</span>
                  </div>
                )}
                
                {tour.tags?.includes("romantic") && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium text-sm flex items-center gap-1">
                    <Heart className="fill-red-500 text-red-500" size={14} />
                    <span>Couples Special</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="text-yellow-500 fill-yellow-500" size={16} />
                  <span className="font-medium">{tour.rating}</span>
                  <span className="text-gray-500">({tour.reviews} reviews)</span>
                </div>
                
                <h3 className="font-playfair text-xl font-semibold mb-3">{tour.title}</h3>
                <p className="mb-4 text-gray-700">{tour.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={16} />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users size={16} />
                    <span>{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin size={16} />
                    <span>{tour.locations.length} location{tour.locations.length > 1 ? 's' : ''}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium text-lg">{tour.price} per person</span>
                  <a 
                    href="#contact"
                    className="btn-primary py-2 inline-flex items-center"
                  >
                    Book Now
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
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
