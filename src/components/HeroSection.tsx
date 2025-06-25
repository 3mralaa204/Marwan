
import { Button } from "@/components/ui/button";
import { ExternalLink, Camera, MapPin } from "lucide-react";

interface HeroSectionProps {
  isVisible: boolean;
  scrollY: number;
}

const HeroSection = ({ isVisible, scrollY }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-yellow-400/10 via-yellow-500/15 to-yellow-600/10 rounded-full blur-xl animate-pulse-glow" />
              <div className="absolute -inset-3 bg-gradient-to-r from-white/5 to-gray-300/5 rounded-full blur-md" />
              <img 
                src="/lovable-uploads/a1f48733-7390-4645-8595-f5a408ec0517.png" 
                alt="Marwan Mohamed" 
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-2 border-white/20 shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>

          {/* Hero Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Marwan
                  </span>
                  <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-gradient-x">
                    Mohamed
                  </span>
                </h1>
                
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <Camera className="w-6 h-6 text-yellow-400" />
                  <p className="text-xl md:text-2xl text-gray-300 font-light">
                    Photographer & Videographer
                  </p>
                </div>
                
                <p className="text-gray-400 flex items-center justify-center lg:justify-start gap-2 mb-8">
                  <MapPin className="w-4 h-4" />
                  10th of Ramadan – Sharqia
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  asChild
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
                >
                  <a 
                    href="https://drive.google.com/drive/folders/1OF0BqWIUA2T9Q1a5UKhGXtdq23S_TPob" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Camera className="w-5 h-5" />
                    View My Work
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400 px-8 py-6 text-lg rounded-full font-semibold transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
