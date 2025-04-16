
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin } from "lucide-react";

const attractions = [
  { 
    name: "Taj Mahal", 
    lat: 27.1751, 
    lng: 78.0421, 
    description: "The iconic white marble mausoleum built by Emperor Shah Jahan.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada"
  },
  { 
    name: "Agra Fort", 
    lat: 27.1797, 
    lng: 78.0216, 
    description: "UNESCO World Heritage site, a historical fort in the city of Agra.",
    image: "/lovable-uploads/b0660bda-2876-4f0f-847c-90db3be621e0.png"
  },
  { 
    name: "Fatehpur Sikri", 
    lat: 27.0940, 
    lng: 77.6711, 
    description: "A city founded in 1569 by the Mughal Emperor Akbar.",
    image: "https://images.unsplash.com/photo-1619110602090-0a024b48d5ed"
  },
  { 
    name: "Itmad-ud-Daulah", 
    lat: 27.1927, 
    lng: 78.0309, 
    description: "Known as 'Baby Taj', this tomb inspired the design of the Taj Mahal.",
    image: "https://images.unsplash.com/photo-1609183546144-3ea06cb27ed4"
  },
  { 
    name: "Mehtab Bagh", 
    lat: 27.1796, 
    lng: 78.0437, 
    description: "A garden complex aligned with the Taj Mahal on the opposite side of the Yamuna River.",
    image: "/lovable-uploads/bda4c7b4-e8d4-44be-be79-7cae37c2cd37.png"
  },
  { 
    name: "Sikandra", 
    lat: 27.2209, 
    lng: 77.9409, 
    description: "The tomb of Akbar the Great, a masterpiece of Mughal architecture.",
    image: "https://images.unsplash.com/photo-1626017204247-b3b34249fbb7"
  },
  { 
    name: "Ram Bagh", 
    lat: 27.1947, 
    lng: 78.0359, 
    description: "One of the oldest Mughal gardens in India, originally built by Emperor Babur.",
    image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da"
  },
];

const InteractiveMap = () => {
  useEffect(() => {
    // Fix for Leaflet marker icons
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={[27.1751, 78.0421]}
        zoom={13}
        scrollWheelZoom={true} // Enable mouse wheel zoom
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {attractions.map((attraction, index) => (
          <Marker 
            key={index} 
            position={[attraction.lat, attraction.lng]}
          >
            <Popup>
              <div className="p-2 max-w-xs">
                <h3 className="font-semibold text-lg mb-2">{attraction.name}</h3>
                <div className="rounded-md overflow-hidden mb-2">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-32 object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm">{attraction.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-md z-[1000] max-w-xs">
        <h3 className="font-playfair text-lg font-semibold flex items-center gap-2">
          <MapPin size={18} className="text-accent" />
          Agra Attractions
        </h3>
        <p className="text-sm text-gray-600 mt-1">Click on markers to explore major attractions in Agra</p>
        <p className="text-xs text-gray-500 mt-1">Use mouse wheel to zoom in and out</p>
      </div>
    </div>
  );
};

export default InteractiveMap;
