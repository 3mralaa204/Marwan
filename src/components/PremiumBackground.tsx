
import { useEffect, useState } from 'react';

interface PremiumBackgroundProps {
  scrollY: number;
}

const PremiumBackground = ({ scrollY }: PremiumBackgroundProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredZone, setHoveredZone] = useState<number | null>(null);
  
  const backgroundImages = [
    '/lovable-uploads/1327a578-74b6-4079-b231-45fa2d1431ba.png',
    '/lovable-uploads/75624a6d-cf28-415c-8c9e-85097e46a5a7.png',
    '/lovable-uploads/3ea9475c-321a-4339-9df7-5f2955a7d09f.png',
    '/lovable-uploads/90090fbe-879a-4e8d-b90b-d6696e074cd6.png',
    '/lovable-uploads/bafee9d4-b03a-4ec6-bb27-f8af3db57684.png',
    '/lovable-uploads/83b90baf-f87f-4b27-b42a-8a1faf6d8da3.png',
    '/lovable-uploads/904bdf79-af11-4665-8c64-cd2ec9b441b2.png',
    '/lovable-uploads/ea303a9d-d786-4f4a-900f-bac58821eb4c.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="absolute inset-0 z-0">
      {/* Main Background Images with Parallax */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 ${
              index === currentImageIndex ? 'opacity-60 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(2px) grayscale(20%)',
              transform: `translateY(${scrollY * 0.5}px) scale(${1 + Math.sin(Date.now() / 10000) * 0.02})`,
            }}
          />
        ))}
      </div>

      {/* Mosaic Grid Overlay */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-2 p-4">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg opacity-30 hover:opacity-80 transition-all duration-500"
            onMouseEnter={() => setHoveredZone(i)}
            onMouseLeave={() => setHoveredZone(null)}
            style={{
              backgroundImage: `url(${backgroundImages[i % backgroundImages.length]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: hoveredZone === i ? 'blur(1px) brightness(1.3)' : 'blur(1.5px) brightness(0.8)',
              transform: hoveredZone === i ? 'scale(1.05)' : 'scale(1)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent" />
          </div>
        ))}
      </div>

      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-complex"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            <div className="w-3 h-3 bg-yellow-400/20 rounded-full blur-sm" />
          </div>
        ))}
      </div>

      {/* Premium Gradient Overlay - Less opacity */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
    </div>
  );
};

export default PremiumBackground;
