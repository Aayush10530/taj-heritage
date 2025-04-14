
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Hero Content */}
      <div className="container-custom relative h-full flex flex-col justify-center">
        <div className="max-w-3xl animate-fade-in [animation-delay:300ms]">
          <h1 className="text-white heading-xl mb-4">
            Discover the Eternal Beauty of the Taj Mahal
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 font-light">
            Experience the majesty of Mughal heritage through exclusive, 
            personalized tours in Agra, guided by experts in history and culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#tours"
              className="btn-primary inline-flex items-center justify-center"
            >
              Explore Our Tours
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a
              href="#custom-tour"
              className="border border-white text-white hover:bg-white hover:bg-opacity-20 transition-colors px-6 py-3 rounded-md font-medium text-center"
            >
              Create Custom Tour
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
