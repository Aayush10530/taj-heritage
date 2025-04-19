
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ThemedNavbar from "../components/ThemedNavbar";
import Footer from "../components/Footer";
import { ArrowLeft, Clock, Calendar, Bed, DollarSign, Info, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TourHighlights from "@/components/TourHighlights";
import BookingCalendar from "@/components/BookingCalendar";

// Tour data - this would typically come from a database
const tourData = [
  {
    id: 1,
    title: "Taj Mahal Sunrise Private Tour",
    description: "Experience the magic of the Taj Mahal at dawn, when the first rays of sunlight illuminate the marble monument, creating a breathtaking golden glow.",
    longDescription: "Enjoy a serene morning as you witness the Taj Mahal changing colors with the rising sun. This private tour provides ample time for photography and peaceful contemplation of this wonder of the world. Our expert guide will share detailed insights about the monument's history, architecture, and the love story behind its creation.",
    image: "/heritage-uploads/taj rise.jpg",
    rating: 4.9,
    reviews: 124,
    timing: "6:00 AM - 9:00 AM",
    accommodation: "Guide (25+ years of experience), Entry tickets, Personalized Ride Services",
    price: 179,
    people: "1-3",
    tags: ["best-seller"],
    highlights: [
      "Beat the crowds with early morning access",
      "Witness the changing colors of the Taj at sunrise",
      "Expert historical commentary from our guides",
      "Perfect lighting conditions for photography",
      "Complimentary hotel pickup and drop-off",
      "Small group size for personalized experience"
    ]
  },
  {
    id: 2,
    title: "Royal Mughal Heritage Full Day Tour",
    description: "Immerse yourself in the rich history of the Mughal Empire with visits to all major monuments in Agra, accompanied by expert historical commentary.",
    longDescription: "This comprehensive tour takes you through the magnificent Mughal heritage of Agra. Visit the iconic Taj Mahal, the impressive Agra Fort, and the beautiful Itimad-ud-Daulah (Baby Taj). Our knowledgeable guide will narrate fascinating stories of the Mughal era, bringing history to life as you explore these architectural marvels.",
    image: "/heritage-uploads/all.jpg",
    rating: 4.8,
    reviews: 98,
    timing: "8:00 AM - 5:00 PM",
    accommodation: "Expert historian guide, All entry tickets, Luxury air-conditioned vehicle, Lunch at traditional restaurant",
    price: 250,
    people: "2-6",
    tags: [],
    highlights: [
      "Visit all major Mughal monuments in one day",
      "Insights into the architecture and history",
      "Lunch at a traditional restaurant",
      "Luxury air-conditioned transportation",
      "Skip-the-line entry tickets included",
      "Complimentary bottled water throughout the day"
    ]
  },
  {
    id: 3,
    title: "Taj Mahal by Moonlight",
    description: "Witness the ethereal beauty of the Taj Mahal under the moonlight during special night viewing sessions, a rare and magical experience.",
    longDescription: "Experience the Taj Mahal in a completely different light - moonlight. This exclusive tour is available only on full moon nights and few days before and after. The marble mausoleum takes on an ethereal glow in the moonlight, creating a magical atmosphere that few tourists get to experience. Our guide will share stories and legends that add to the mystical experience.",
    image: "/lovable-uploads/38db1722-ab1f-44d2-bfc1-95605b191003.png",
    rating: 5.0,
    reviews: 56,
    timing: "8:30 PM - 10:30 PM (Available only on full moon nights)",
    accommodation: "Special night entry permits, Expert guide, Luxury transfer service",
    price: 220,
    people: "1-4",
    tags: [],
    highlights: [
      "Exclusive night viewing of the Taj Mahal",
      "Mystical atmosphere under moonlight",
      "Smaller crowds than daytime visits",
      "Special night photography opportunities",
      "Rare experience only available on select nights",
      "Expert guidance on night photography techniques"
    ]
  },
  {
    id: 4,
    title: "Imperial Agra Day Tour",
    description: "Our most authentic experience visiting the two most iconic monuments of Agra with expert historical insights and plenty of time for photography.",
    longDescription: "This tour focuses on the two UNESCO World Heritage Sites in Agra - the Taj Mahal and the Agra Fort. With ample time at each location, you'll be able to explore these magnificent structures thoroughly. Our guides are trained to know the best photo spots and lighting conditions, making this tour perfect for photography enthusiasts.",
    image: "/heritage-uploads/taj fort.jpg",
    rating: 4.7,
    reviews: 45,
    timing: "9:00 AM - 4:00 PM",
    accommodation: "Professional guide, Entry tickets, Air-conditioned transportation",
    price: 195,
    people: "2-5",
    tags: ["best-tour"],
    highlights: [
      "In-depth tour of the Taj Mahal and Agra Fort",
      "Professional photography guidance",
      "Historical insights from expert guides",
      "Comfortable, air-conditioned transportation",
      "Flexible pace with ample time at each monument",
      "Insider access to hidden spots and viewpoints"
    ]
  },
  {
    id: 5,
    title: "Romantic Taj Experience for Couples",
    description: "A special tour designed exclusively for couples to experience the eternal monument of love with romantic elements and private moments.",
    longDescription: "What better place to celebrate love than at the world's most famous monument to love? This specially crafted tour for couples includes private time at scenic spots, a professional photographer to capture your memories, and a romantic lunch overlooking the Taj Mahal. Your guide will ensure you get the perfect photos and private moments at this symbol of eternal love.",
    image: "/heritage-uploads/777fdc51-0bd6-423c-90d7-c23aba7137e9.png",
    rating: 4.9,
    reviews: 87,
    timing: "10:00 AM - 4:00 PM",
    accommodation: "Private guide, All entry fees, Professional photography session (1 hour), Romantic lunch with Taj view",
    price: 299,
    tags: ["romantic"],
    highlights: [
      "Private tour designed for couples",
      "Professional photography session",
      "Romantic lunch with Taj view",
      "Personalized love story narration by guide",
      "Visit to lesser-known romantic spots",
      "Customized experience based on your love story"
    ]
  },
  {
    id: 6,
    title: "Agra Food & Culture Walk",
    description: "Explore the culinary traditions and cultural heritage of Agra, from street food specialties to local artisan workshops.",
    longDescription: "Go beyond the monuments and discover the vibrant culture and cuisine of Agra. Sample delicious street food from age-old establishments, visit local artisans crafting marble inlay work and leather goods, and wander through vibrant bazaars. This walking tour takes you away from the tourist track and into the heart of Agra's cultural life.",
    image: "https://images.unsplash.com/photo-1537944434965-cf4dbaf03696?auto=format&fit=crop&q=80&w=1000",
    rating: 4.8,
    reviews: 62,
    timing: "4:00 PM - 8:00 PM",
    accommodation: "Food guide, All food tastings, Cultural demonstrations, Bottled water",
    price: 89,
    tags: [],
    highlights: [
      "Sample authentic Mughal cuisine and street food",
      "Visit local artisans and craftspeople",
      "Explore hidden gems in Agra's old city",
      "Learn about cultural traditions and daily life",
      "Taste Agra's famous petha sweet",
      "Small group size for an intimate experience"
    ]
  },
  {
    id: 7,
    title: "Mughal Gardens & Nature Tour",
    description: "Discover the lush Mughal gardens and natural landscapes around Agra that showcase the dynasty's appreciation for horticulture and design.",
    longDescription: "The Mughals were known for their exquisite gardens, and this tour focuses on the natural beauty around Agra. Visit Mehtab Bagh for spectacular views of the Taj Mahal across the river, explore Ram Bagh (the oldest Mughal garden), and enjoy the serene atmosphere of lesser-known but beautiful garden complexes that showcase the Mughal's passion for horticulture.",
    image: "https://images.unsplash.com/photo-1558180077-09f158c76707?auto=format&fit=crop&q=80&w=1000",
    rating: 4.6,
    reviews: 38,
    timing: "2:00 PM - 6:00 PM",
    accommodation: "Horticulture expert guide, Garden entry fees, Refreshments",
    price: 120,
    tags: [],
    highlights: [
      "Visit the Mehtab Bagh for Taj Mahal views across the river",
      "Explore the oldest Mughal garden, Ram Bagh",
      "Learn about Mughal landscape design principles",
      "Enjoy serene natural environments away from the crowds",
      "Photograph the Taj Mahal from unique garden viewpoints",
      "Expert insights into historical gardening techniques"
    ]
  },
  {
    id: 8,
    title: "Photography Masterclass Tour",
    description: "Perfect your photography skills with our expert guides who will help you capture stunning images of Agra's monuments from the best angles.",
    longDescription: "Designed for photography enthusiasts, this specialized tour takes you to the best vantage points for capturing Agra's monuments. Our photography expert will guide you on composition, lighting, and timing to get the perfect shots. Visit locations during the golden hours and access special areas for unique perspectives that regular tourists miss.",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=1000",
    rating: 4.9,
    reviews: 42,
    timing: "5:30 AM - 10:00 AM and 3:30 PM - 7:00 PM",
    accommodation: "Photography expert guide, Monument entry fees, Photography permits, Bottled water",
    price: 149,
    tags: ["special"],
    highlights: [
      "Learn composition techniques for architectural photography",
      "Visit the best vantage points at optimal times",
      "Access special areas for unique perspectives",
      "Post-processing tips and guidance",
      "Expert guidance on equipment settings",
      "Small group size for personalized attention"
    ]
  }
];

const TourDetailPage = () => {
  const { id } = useParams();
  const [tour, setTour] = useState<any>(null);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Find the tour with the matching id
    const foundTour = tourData.find(t => t.id === Number(id));
    if (foundTour) {
      setTour(foundTour);
    }
  }, [id]);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Tour not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <ThemedNavbar />
      
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <Link 
            to="/tours"
            className="inline-flex items-center mb-8 text-accent hover:text-accent/80 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Tours
          </Link>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <div className="h-[400px] rounded-xl overflow-hidden mb-6">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-yellow-500 text-white rounded-full p-1">
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <span className="font-medium">{tour.rating}</span>
                <span className="text-gray-500">({tour.reviews} reviews)</span>
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium text-xl mb-4">Tour Highlights</h3>
                <TourHighlights highlights={tour.highlights} />
              </div>
            </div>
            
            <div>
              <h1 className="font-playfair text-3xl font-semibold mb-6">{tour.title}</h1>
              
              <div className="flex items-center mb-6">
                <div className="bg-accent/20 p-2 rounded-full mr-3">
                  <DollarSign className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <span className="text-2xl font-bold">${tour.price}</span>
                  <span className="text-gray-500 ml-2">per person</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-8">{tour.longDescription}</p>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-accent/20 p-3 rounded-full">
                      <Clock className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Timing</h3>
                      <p>{tour.timing}</p>
                    </div>
                  </CardContent>
                </Card>
                
                {tour.people && (
                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="bg-accent/20 p-3 rounded-full">
                        <Users className="text-accent" size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Group Size</h3>
                        <p>{tour.people} people</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-accent/20 p-3 rounded-full">
                      <Bed className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Accommodations & Services</h3>
                      <p>{tour.accommodation}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="pt-4">
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90">
                    Book This Tour
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Check Availability Section */}
          <div className="mt-10 bg-muted/20 p-8 rounded-xl">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-playfair font-semibold text-center mb-6">Check Tour Availability</h2>
              <BookingCalendar />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TourDetailPage;
