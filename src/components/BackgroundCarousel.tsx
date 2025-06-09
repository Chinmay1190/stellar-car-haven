
import React, { useState, useEffect } from 'react';

const carImages = [
  'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&h=1080&fit=crop&auto=format&q=80', // Luxury sports car
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&h=1080&fit=crop&auto=format&q=80', // Classic luxury car
  'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1920&h=1080&fit=crop&auto=format&q=80', // Modern luxury sedan
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop&auto=format&q=80', // Luxury supercar
];

const BackgroundCarousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {carImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
            index === currentImage 
              ? 'opacity-40 scale-100' 
              : 'opacity-0 scale-110'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            filter: 'brightness(0.6) contrast(1.2)',
          }}
        />
      ))}
      
      {/* Enhanced overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-dark/60 via-transparent to-luxury-dark/60" />
      
      {/* Sliding indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-20">
        {carImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-12 h-1 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? 'bg-luxury-gold shadow-lg' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
      
      {/* Floating particles for luxury effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-luxury-gold/40 rounded-full animate-float blur-sm" style={{ animationDelay: '0s' }} />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-luxury-accent/50 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-luxury-gold/30 rounded-full animate-float blur-sm" style={{ animationDelay: '4s' }} />
      </div>
    </div>
  );
};

export default BackgroundCarousel;
