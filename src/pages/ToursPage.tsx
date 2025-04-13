import { useRef, useEffect } from "react";
import ThemedNavbar from "../components/ThemedNavbar";
import Footer from "../components/Footer";
import { Star, Heart, ArrowRight } from "lucide-react";

const ToursPage = () => {
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

  // All tour packages (including ones not shown on homepage)
  const tourPackages = [
    {
      id: 1,
      title: "Taj Mahal Sunrise Private Tour",
      description: "Experience the magic of the Taj Mahal at dawn, when the first rays of sunlight illuminate the marble monument, creating a breathtaking golden glow.",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000",
      rating: 4.9,
      reviews: 124,
      tags: ["best-seller"]
    },
    {
      id: 2,
      title: "Royal Mughal Heritage Full Day Tour",
      description: "Immerse yourself in the rich history of the Mughal Empire with visits to all major monuments in Agra, accompanied by expert historical commentary.",
      image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      rating: 4.8,
      reviews: 98
    },
    {
      id: 3,
      title: "Taj Mahal by Moonlight",
      description: "Witness the ethereal beauty of the Taj Mahal under the moonlight during special night viewing sessions, a rare and magical experience.",
      image: "/lovable-uploads/38db1722-ab1f-44d2-bfc1-95605b191003.png",
      rating: 5.0,
      reviews: 56
    },
    {
      id: 4,
      title: "Imperial Agra Day Tour",
      description: "Our most authentic experience visiting the two most iconic monuments of Agra with expert historical insights and plenty of time for photography.",
      image: "/lovable-uploads/452c1e6d-a8c3-48c7-a8a7-032db9446cbd.png",
      rating: 4.7,
      reviews: 45,
      tags: ["best-tour"]
    },
    {
      id: 5,
      title: "Romantic Taj Experience for Couples",
      description: "A special tour designed exclusively for couples to experience the eternal monument of love with romantic elements and private moments.",
      image: "/lovable-uploads/777fdc51-0bd6-423c-90d7-c23aba7137e9.png",
      rating: 4.9,
      reviews: 87,
      tags: ["romantic"]
    },
    {
      id: 6,
      title: "Agra Food & Culture Walk",
      description: "Explore the culinary traditions and cultural heritage of Agra, from street food specialties to local artisan workshops.",
      image: "https://images.unsplash.com/photo-1537944434965-cf4dbaf03696?auto=format&fit=crop&q=80&w=1000",
      rating: 4.8,
      reviews: 62
    },
    {
      id: 7,
      title: "Mughal Gardens & Nature Tour",
      description: "Discover the lush Mughal gardens and natural landscapes around Agra that showcase the dynasty's appreciation for horticulture and design.",
      image: "https://images.unsplash.com/photo-1558180077-09f158c76707?auto=format&fit=crop&q=80&w=1000",
      rating: 4.6,
      reviews: 38
    },
    {
      id: 8,
      title: "Photography Masterclass Tour",
      description: "Perfect your photography skills with our expert guides who will help you capture stunning images of Agra's monuments from the best angles.",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=1000",
      rating: 4.9,
      reviews: 42,
      tags: ["special"]
    }
  ];

  return (
    <div ref={mainRef} className="min-h-screen">
      <ThemedNavbar />
      
      <section className="pt-32 pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="heading-xl mt-2 mb-6 fade-in">Luxury Escapes</h1>
            <div className="w-20 h-1 bg-accent mx-auto mb-8 fade-in"></div>
            <p className="text-lg fade-in">
              Explore our complete collection of tours designed to showcase the beauty and history of Agra and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <Star className="fill-yellow-500" size={14} />
                      <span>Most Booked</span>
                    </div>
                  )}
                  
                  {tour.tags?.includes("best-tour") && (
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium text-sm flex items-center gap-1">
                      <Star className="fill-yellow-500" size={14} />
                      <span>Best Tour</span>
                    </div>
                  )}
                  
                  {tour.tags?.includes("romantic") && (
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium text-sm flex items-center gap-1">
                      <Heart className="fill-red-500 text-red-500" size={14} />
                      <span>Couples Special</span>
                    </div>
                  )}

                  {tour.tags?.includes("special") && (
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium text-sm flex items-center gap-1">
                      <Star className="fill-yellow-500" size={14} />
                      <span>Special Tour</span>
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
                  <p className="mb-6 text-gray-700">{tour.description}</p>
                  
                  <div className="flex justify-end">
                    <a 
                      href="#contact"
                      className="btn-primary py-2 inline-flex items-center"
                    >
                      View Details
                      <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center fade-in">
            <h3 className="heading-md mb-6">Looking for Something Customized?</h3>
            <a href="/custom-tour" className="btn-primary inline-flex items-center">
              Create Custom Tour
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ToursPage;
