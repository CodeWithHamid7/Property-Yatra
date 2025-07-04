import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

const ProjectVideo = () => {
  const [activeVideo, setActiveVideo] = useState('introduction');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const videoButtons = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'walkthrough', label: 'Walkthrough' },
    { id: 'reasons', label: 'Top 5 Reason to Buy in' }
  ];

  const handleVideoChange = (videoId: string) => {
    if (videoId === activeVideo) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveVideo(videoId);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Project Videos
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {videoButtons.map((button) => (
              <Button
                key={button.id}
                variant={activeVideo === button.id ? "default" : "outline"}
                className={`px-6 py-3 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                  activeVideo === button.id 
                    ? 'bg-blue-900 hover:bg-blue-800 shadow-lg' 
                    : 'border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white hover:shadow-lg'
                }`}
                onClick={() => handleVideoChange(button.id)}
              >
                <PlayCircle className="w-5 h-5 mr-2 transition-transform duration-300 hover:scale-110" />
                {button.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`bg-gray-800 rounded-lg p-8 text-center transition-all duration-500 ease-in-out ${
            isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
          }`}>
            <PlayCircle className={`w-20 h-20 text-white mx-auto mb-4 transition-all duration-500 ${
              isTransitioning ? 'scale-75 rotate-180' : 'scale-100 rotate-0'
            }`} />
            <h3 className={`text-2xl font-semibold text-white mb-2 transition-all duration-500 ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
              {videoButtons.find(b => b.id === activeVideo)?.label}
            </h3>
            <p className={`text-gray-300 transition-all duration-500 delay-100 ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
              Video player will be integrated here for {activeVideo} content
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectVideo;