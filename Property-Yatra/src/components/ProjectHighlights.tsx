import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Home, Car, Waves, Shield, Trees, Dumbbell, Coffee, Baby, Wifi, Building } from 'lucide-react';

const ProjectHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const highlights = [
    { icon: Home, title: 'Premium Apartments', description: 'Spacious 2, 3 & 4 BHK apartments' },
    { icon: Car, title: 'Covered Parking', description: 'Dedicated parking for all residents' },
    { icon: Waves, title: 'Swimming Pool', description: 'Olympic size swimming pool' },
    { icon: Shield, title: '24/7 Security', description: 'Multi-tier security system' },
    { icon: Trees, title: 'Green Spaces', description: 'Landscaped gardens and parks' },
    { icon: Dumbbell, title: 'Fitness Center', description: 'State-of-the-art gymnasium' },
    { icon: Coffee, title: 'Clubhouse', description: 'Premium clubhouse facilities' },
    { icon: Baby, title: 'Kids Play Area', description: 'Safe and fun playground' },
    { icon: Wifi, title: 'High-Speed WiFi', description: 'Fiber optic connectivity' },
    { icon: Building, title: 'Commercial Spaces', description: 'Retail and office spaces' }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % highlights.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + highlights.length) % highlights.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % highlights.length;
      cards.push({ ...highlights[index], displayIndex: i });
    }
    return cards;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Project Highlights
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out ${
              isAnimating ? 'opacity-75 transform translate-x-2' : 'opacity-100 transform translate-x-0'
            }`}>
              {getVisibleCards().map((highlight, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="group p-6 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full mb-4 group-hover:bg-amber-600 group-hover:scale-110 transition-all duration-300">
                    <highlight.icon className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              onClick={prevSlide}
              disabled={isAnimating}
              variant="outline"
              size="icon"
              className="rounded-full border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white hover:scale-110 transition-all duration-300 disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5 transition-transform duration-300 hover:-translate-x-1" />
            </Button>
            <Button
              onClick={nextSlide}
              disabled={isAnimating}
              variant="outline"
              size="icon"
              className="rounded-full border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white hover:scale-110 transition-all duration-300 disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5 transition-transform duration-300 hover:translate-x-1" />
            </Button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {highlights.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index >= currentIndex && index < currentIndex + 4
                    ? 'bg-blue-900' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;