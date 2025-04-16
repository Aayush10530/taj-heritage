
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Gallery items with categories
const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1548013146-72479768bada",
    alt: "Taj Mahal at sunrise",
    caption: "Taj Mahal at dawn, when the marble takes on a golden hue",
    category: "Taj Mahal"
  },
  {
    id: 2,
    src: "/lovable-uploads/bda4c7b4-e8d4-44be-be79-7cae37c2cd37.png",
    alt: "Taj Mahal Garden View",
    caption: "The Taj Mahal viewed through lush gardens with vibrant greenery",
    category: "Taj Mahal"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    alt: "Taj Mahal Reflection",
    caption: "Reflection of the Taj Mahal in the water channels of its gardens",
    category: "Taj Mahal"
  },
  {
    id: 4,
    src: "/lovable-uploads/b0660bda-2876-4f0f-847c-90db3be621e0.png",
    alt: "Agra Fort Interior",
    caption: "Ornate latticework of Agra Fort interior",
    category: "Agra Fort",
    objectFit: "contain"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1588096344356-9b05d911091c",
    alt: "Agra Fort Exterior",
    caption: "The imposing red sandstone walls of Agra Fort",
    category: "Agra Fort"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1619110602090-0a024b48d5ed",
    alt: "Fatehpur Sikri",
    caption: "The stunning red sandstone city of Fatehpur Sikri",
    category: "Fatehpur Sikri"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1626017204247-b3b34249fbb7",
    alt: "Sikandra",
    caption: "The magnificent tomb of Akbar at Sikandra",
    category: "Sikandra"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1609183546144-3ea06cb27ed4",
    alt: "Itmad-ud-Daulah",
    caption: "Itmad-ud-Daulah tomb, also known as 'Baby Taj'",
    category: "Itmad-ud-Daulah"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1623341214825-9f4f963727da",
    alt: "Ram Bagh",
    caption: "The historic Ram Bagh garden, one of the oldest Mughal gardens",
    category: "Ram Bagh"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1596395463910-4e6df70c4b7f",
    alt: "Taj Mahal at Dusk",
    caption: "The Taj Mahal as the sun sets, bathing it in golden light",
    category: "Taj Mahal"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1606046604972-77cc76aee944",
    alt: "Mehtab Bagh",
    caption: "View of the Taj Mahal from Mehtab Bagh across the Yamuna River",
    category: "Mehtab Bagh"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1524896325018-95c722ceb805",
    alt: "Jama Masjid Fatehpur Sikri",
    caption: "The impressive Jama Masjid at Fatehpur Sikri",
    category: "Fatehpur Sikri"
  }
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");
  
  // Get unique categories for filter options
  const categories = ["all", ...new Set(galleryItems.map(item => item.category))];
  
  // Filter gallery items based on selected category
  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <div className="bg-accent/10 py-10">
        <div className="container-custom">
          <Link to="/" className="flex items-center text-accent mb-4 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="heading-lg">Magnificent Monuments of Agra</h1>
          <p className="text-muted-foreground text-lg mt-2">Explore our collection of stunning photographs showcasing Agra's architectural marvels</p>
        </div>
      </div>
      
      {/* Filter options */}
      <div className="container-custom py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <Button 
              key={category} 
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="overflow-hidden aspect-square">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className={`w-full h-full ${item.objectFit === 'contain' ? 'object-contain bg-gray-100' : 'object-cover'} transition-transform duration-300 group-hover:scale-110`}
                  loading="lazy"
                />
              </div>
              <div className="p-3 bg-white">
                <h3 className="font-medium text-sm">{item.category}</h3>
                <p className="text-muted-foreground text-xs mt-1 line-clamp-2">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox for fullscreen view */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="max-w-5xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {galleryItems.find(item => item.id === selectedImage) && (
              <img 
                src={galleryItems.find(item => item.id === selectedImage)?.src} 
                alt={galleryItems.find(item => item.id === selectedImage)?.alt} 
                className="max-w-full max-h-[80vh] object-contain"
              />
            )}
            <div className="absolute top-4 right-4">
              <button 
                onClick={() => setSelectedImage(null)}
                className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/40 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 text-white">
              <p className="text-center">
                {galleryItems.find(item => item.id === selectedImage)?.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
