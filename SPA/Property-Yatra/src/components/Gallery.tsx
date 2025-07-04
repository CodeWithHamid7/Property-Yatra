import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('amenities');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const galleryData = {
    amenities: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop', title: 'Swimming Pool' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop', title: 'Gymnasium' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1574736797929-d0501ba2fe65?w=800&h=600&fit=crop', title: 'Clubhouse' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop', title: 'Garden Area' }
    ],
    masterplan: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop', title: '2 BHK Floor Plan' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop', title: '3 BHK Floor Plan' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1581791535728-7b6571e0b26d?w=800&h=600&fit=crop', title: '4 BHK Floor Plan' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop', title: 'Master Layout' }
    ],
    videos: [
      { type: 'video', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Project Walkthrough' },
      { type: 'video', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Amenities Tour' },
      { type: 'video', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Location Benefits' }
    ]
  };

  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setCurrentImageIndex(0);
      setIsTransitioning(false);
    }, 300);
  };

  const nextImage = () => {
    const currentData = galleryData[activeTab as keyof typeof galleryData];
    setCurrentImageIndex((prev) => (prev + 1) % currentData.length);
  };

  const prevImage = () => {
    const currentData = galleryData[activeTab as keyof typeof galleryData];
    setCurrentImageIndex((prev) => (prev - 1 + currentData.length) % currentData.length);
  };

  const currentData = galleryData[activeTab as keyof typeof galleryData];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 animate-fade-in">
            Gallery
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            <Button
              onClick={() => handleTabChange('amenities')}
              variant={activeTab === 'amenities' ? 'default' : 'outline'}
              className={`px-6 py-3 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                activeTab === 'amenities'
                  ? 'bg-blue-900 hover:bg-blue-800 shadow-lg'
                  : 'border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white hover:shadow-lg'
              }`}
            >
              Amenities
            </Button>
            <Button
              onClick={() => handleTabChange('masterplan')}
              variant={activeTab === 'masterplan' ? 'default' : 'outline'}
              className={`px-6 py-3 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                activeTab === 'masterplan'
                  ? 'bg-blue-900 hover:bg-blue-800 shadow-lg'
                  : 'border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white hover:shadow-lg'
              }`}
            >
              Master Layout Plan
            </Button>
            <Button
              onClick={() => handleTabChange('videos')}
              variant={activeTab === 'videos' ? 'default' : 'outline'}
              className={`px-6 py-3 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                activeTab === 'videos'
                  ? 'bg-blue-900 hover:bg-blue-800 shadow-lg'
                  : 'border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white hover:shadow-lg'
              }`}
            >
              <Play className="w-4 h-4 mr-2" />
              Videos
            </Button>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className={`transition-all duration-500 ease-in-out ${
            isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
          }`}>
            {activeTab === 'videos' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentData.map((item, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="aspect-video bg-gray-800 flex items-center justify-center">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={currentData[currentImageIndex]?.src}
                    alt={currentData[currentImageIndex]?.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <Button
                    onClick={prevImage}
                    variant="outline"
                    size="icon"
                    className="ml-4 rounded-full bg-white/90 border-gray-300 hover:bg-white hover:scale-110 transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                </div>
                
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <Button
                    onClick={nextImage}
                    variant="outline"
                    size="icon"
                    className="mr-4 rounded-full bg-white/90 border-gray-300 hover:bg-white hover:scale-110 transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>

                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {currentData[currentImageIndex]?.title}
                  </h3>
                  <div className="flex justify-center space-x-2">
                    {currentData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                          index === currentImageIndex
                            ? 'bg-blue-900 scale-125'
                            : 'bg-gray-300 hover:bg-blue-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
