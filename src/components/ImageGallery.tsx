
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    src: "https://images.unsplash.com/photo-1548013146-72479768bada",
    alt: "Taj Mahal at sunrise",
    caption: "Taj Mahal at dawn, when the marble takes on a golden hue"
  },
  {
    src: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    alt: "Agra Fort",
    caption: "The magnificent red sandstone Agra Fort, a UNESCO World Heritage Site"
  },
  {
    src: "https://images.unsplash.com/photo-1568019344332-013d4dca7d7e",
    alt: "Itmad-ud-Daulah",
    caption: "Itmad-ud-Daulah, often called the 'Baby Taj'"
  },
  {
    src: "https://images.unsplash.com/photo-1619110602090-0a024b48d5ed",
    alt: "Fatehpur Sikri",
    caption: "The stunning red sandstone city of Fatehpur Sikri"
  }
];

const ImageGallery = () => {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <h2 className="heading-md text-center mb-8">Gallery of Agra's Treasures</h2>
      
      {/* Main carousel */}
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="overflow-hidden rounded-xl">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full aspect-[16/9] object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <p className="mt-2 text-center text-sm text-muted-foreground">{image.caption}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative static translate-y-0 mr-4" />
          <CarouselNext className="relative static translate-y-0" />
        </div>
      </Carousel>
      
      {/* Clickable thumbnails */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-2 mt-6">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`cursor-pointer rounded-md overflow-hidden hover:opacity-80 transition ${activeImage === index ? 'ring-2 ring-accent' : ''}`}
            onClick={() => setActiveImage(index)}
          >
            <img 
              src={image.src} 
              alt={`Thumbnail ${index + 1}`} 
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      {/* Lightbox for clicked images */}
      {activeImage !== null && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div 
            className="max-w-5xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={images[activeImage].src} 
              alt={images[activeImage].alt} 
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="absolute top-4 right-4">
              <button 
                onClick={() => setActiveImage(null)}
                className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/40 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 text-white">
              <p className="text-center">{images[activeImage].caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
