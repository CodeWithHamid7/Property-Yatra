import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const updateScrollProgress = () => {
      const currentScroll = window.pageYOffset;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScroll / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    const handleScroll = () => {
      toggleVisibility();
      updateScrollProgress();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 right-6 z-50">
      <div className="relative">
        {/* Progress Circle */}
        <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="text-gray-300"
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="text-blue-900 transition-all duration-300"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={`${scrollProgress}, 100`}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        
        {/* Button */}
        <Button
          onClick={scrollToTop}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-900 hover:bg-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default ScrollToTop;