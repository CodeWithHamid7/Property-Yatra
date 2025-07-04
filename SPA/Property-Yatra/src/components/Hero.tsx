import React, { useState, useEffect } from 'react';
import { Home, CheckCircle, MapPin, IndianRupee } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="home" className="relative">
      {/* Image Slider */}
      <div className="relative h-screen overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentImageIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/20" />

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Property Details - Below Image */}
      <div className="bg-white py-12 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group hover:bg-blue-50 p-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full mb-4 group-hover:bg-amber-600 transition-colors duration-300">
                <Home className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Configuration</h3>
              <p className="text-2xl font-bold text-blue-900">2, 3 & 4 BHK</p>
            </div>
            
            <div className="text-center group hover:bg-blue-50 p-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full mb-4 group-hover:bg-amber-600 transition-colors duration-300">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Status</h3>
              <p className="text-2xl font-bold text-blue-900">Ready to Move</p>
            </div>
            
            <div className="text-center group hover:bg-blue-50 p-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full mb-4 group-hover:bg-amber-600 transition-colors duration-300">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Location</h3>
              <p className="text-2xl font-bold text-blue-900">Prime Location</p>
            </div>
            
            <div className="text-center group hover:bg-blue-50 p-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full mb-4 group-hover:bg-amber-600 transition-colors duration-300">
                <IndianRupee className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Price</h3>
              <p className="text-2xl font-bold text-blue-900">₹85 Lacs Onwards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;