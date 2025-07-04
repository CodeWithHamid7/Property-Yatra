import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Train, Building, Plane, Car } from 'lucide-react';

const LocationAppreciation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const appreciationFactors = [
    {
      icon: Train,
      title: 'Metro Connectivity',
      description: 'Direct metro connectivity will boost property values by 30-40% in the next 5 years, making it a prime investment opportunity.'
    },
    {
      icon: Building,
      title: 'IT Hub Development',
      description: 'Upcoming IT corridor development will create thousands of jobs, driving demand for residential properties in the area.'
    },
    {
      icon: Plane,
      title: 'Airport Proximity',
      description: 'Strategic location near the international airport ensures excellent connectivity and higher appreciation potential.'
    },
    {
      icon: Car,
      title: 'Highway Access',
      description: 'Direct access to major highways and expressways makes commuting easier and increases property desirability.'
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % appreciationFactors.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + appreciationFactors.length) % appreciationFactors.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            FUTURISTIC LOCATION READY FOR HIGH GROWTH AND APPRECIATION
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons - Positioned outside content area */}
          <Button
            onClick={prevSlide}
            disabled={isAnimating}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-blue-900 hover:scale-110 transition-all duration-300 disabled:opacity-50 shadow-lg w-12 h-12 -ml-6"
          >
            <ChevronLeft className="w-6 h-6 transition-transform duration-300" />
          </Button>
          
          <Button
            onClick={nextSlide}
            disabled={isAnimating}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-blue-900 hover:scale-110 transition-all duration-300 disabled:opacity-50 shadow-lg w-12 h-12 -mr-6"
          >
            <ChevronRight className="w-6 h-6 transition-transform duration-300" />
          </Button>

          {/* Content Container with Slide Animation */}
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-all duration-800 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${appreciationFactors.length * 100}%`
              }}
            >
              {appreciationFactors.map((factor, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                  style={{ width: `${100 / appreciationFactors.length}%` }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center h-full">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-600 rounded-full mb-6 transform transition-all duration-500 hover:scale-110 hover:rotate-12">
                      {React.createElement(factor.icon, { 
                        className: "w-10 h-10 transition-transform duration-300" 
                      })}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 transition-all duration-300">
                      {factor.title}
                    </h3>
                    <p className="text-lg opacity-90 leading-relaxed transition-all duration-300">
                      {factor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {appreciationFactors.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating && index !== currentIndex) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 800);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentIndex ? 'bg-white scale-125 shadow-lg' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAppreciation;