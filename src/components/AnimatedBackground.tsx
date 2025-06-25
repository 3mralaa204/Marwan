
import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="absolute inset-0 z-0">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ${
            index === currentImageIndex ? 'opacity-30' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            filter: 'blur(2px) grayscale(20%)',
          }}
        />
      ))}
      
      {/* Floating Elements Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
