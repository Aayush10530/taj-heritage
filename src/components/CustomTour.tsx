
import { useState } from "react";
import { ArrowRight, Clock, MapPin, Calendar } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

const CustomTour = () => {
  const [selectedMonuments, setSelectedMonuments] = useState<string[]>([]);

  const monuments = [
    {
      id: "taj-mahal",
      name: "Taj Mahal",
      description: "UNESCO World Heritage Site and one of the New Seven Wonders of the World",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000",
      duration: "2-3 hours",
      price: "$20"
    },
    {
      id: "agra-fort",
      name: "Agra Fort",
      description: "UNESCO World Heritage Site, this massive red sandstone fort is also known as the Red Fort of Agra",
      image: "https://images.unsplash.com/photo-1607173793322-069baaf945a9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000",
      duration: "1-2 hours",
      price: "$15"
    },
    {
      id: "fatehpur-sikri",
      name: "Fatehpur Sikri",
      description: "A city built by Emperor Akbar, known for its unique blend of Persian and local architectural styles",
      image: "https://images.unsplash.com/photo-1629892458178-b2b8fabea7e9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000",
      duration: "2-3 hours",
      price: "$18"
    },
    {
      id: "itimad-ud-daulah",
      name: "Itimad-ud-Daulah (Baby Taj)",
      description: "Known as the 'Baby Taj', this tomb is often regarded as a draft for the Taj Mahal",
      image: "https://images.unsplash.com/photo-1609183546144-3ea06cb27ed4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000",
      duration: "1 hour",
      price: "$12"
    },
    {
      id: "mehtab-bagh",
      name: "Mehtab Bagh",
      description: "Perfect spot to view the Taj Mahal across the Yamuna River, especially at sunset",
      image: "https://images.unsplash.com/photo-1583473904242-e482d3c5d9d8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000",
      duration: "1 hour",
      price: "$10"
    },
    {
      id: "sikandra",
      name: "Akbar's Tomb (Sikandra)",
      description: "The tomb of the great Mughal Emperor Akbar, featuring a unique architectural style",
      image: "https://images.unsplash.com/photo-1626017204247-b3b34249fbb7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000",
      duration: "1-2 hours",
      price: "$15"
    }
  ];

  const handleMonumentToggle = (id: string) => {
    setSelectedMonuments(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const getTotalPrice = () => {
    return monuments
      .filter(monument => selectedMonuments.includes(monument.id))
      .reduce((total, monument) => total + parseInt(monument.price.replace('$', '')), 0);
  };

  const getTotalDuration = () => {
    const durations = monuments
      .filter(monument => selectedMonuments.includes(monument.id))
      .map(monument => {
        const parts = monument.duration.split('-');
        return parseInt(parts[parts.length - 1]);
      });
    
    const totalHours = durations.reduce((total, hours) => total + hours, 0);
    
    if (totalHours <= 4) return `${totalHours} hours`;
    return `${Math.ceil(totalHours/2)} hours (recommended 2-day tour)`;
  };

  return (
    <section id="custom-tour" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent-foreground/70 uppercase tracking-wider text-sm font-medium fade-in">
            Build Your Own Experience
          </span>
          <h2 className="heading-lg mt-2 mb-6 fade-in">
            Create Your Custom Tour
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8 fade-in"></div>
          <p className="text-lg fade-in">
            Select the monuments and attractions you wish to visit, and we'll create a personalized
            itinerary tailored to your interests, pace, and schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {monuments.map((monument, index) => (
            <div 
              key={monument.id}
              className={`relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer fade-in ${
                selectedMonuments.includes(monument.id) ? "ring-2 ring-accent" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleMonumentToggle(monument.id)}
            >
              <div className="relative h-48">
                <img 
                  src={monument.image}
                  alt={monument.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <div className={`size-6 rounded-full flex items-center justify-center border-2 ${
                    selectedMonuments.includes(monument.id) 
                      ? "bg-accent border-accent" 
                      : "bg-white/80 border-gray-300"
                  }`}>
                    {selectedMonuments.includes(monument.id) && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-playfair font-semibold text-lg mb-1">{monument.name}</h3>
                <div className="mb-2 flex items-center gap-1 text-sm text-gray-600">
                  <Clock size={14} />
                  <span>{monument.duration}</span>
                </div>
                <p className="text-sm text-gray-700 mb-3 line-clamp-2">{monument.description}</p>
                <span className="font-medium">{monument.price} per person</span>
              </div>
            </div>
          ))}
        </div>

        <div className={`bg-white p-6 rounded-xl shadow-md ${selectedMonuments.length > 0 ? 'fade-in' : 'hidden'}`}>
          <h3 className="heading-md mb-6">Your Custom Tour Summary</h3>
          
          {selectedMonuments.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Selected Attractions</h4>
                <ul className="space-y-2">
                  {monuments
                    .filter(monument => selectedMonuments.includes(monument.id))
                    .map(monument => (
                      <li key={monument.id} className="flex items-center gap-2">
                        <MapPin size={16} className="text-accent" />
                        <span>{monument.name}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Tour Details</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-accent" />
                      <span>Estimated Duration: {getTotalDuration()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-accent" />
                      <span>Best Time: Early morning or late afternoon</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Pricing</h4>
                  <p className="text-2xl font-playfair font-medium">
                    ${getTotalPrice()} <span className="text-sm text-gray-600">per person</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    *Includes guide, entrance fees, and bottled water
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-600">
              Select monuments above to create your custom tour.
            </p>
          )}
          
          <div className="mt-8 text-center">
            <button 
              className={`btn-primary inline-flex items-center ${selectedMonuments.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={selectedMonuments.length === 0}
            >
              Book This Custom Tour
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomTour;
