import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

const LocationAdvantages = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const locationData = {
    CONNECTIVITY: [
      'Metro Station - 5 minutes walk',
      'Major Highway - 2 km',
      'Railway Station - 10 minutes drive',
      'Airport - 30 minutes drive'
    ],
    HEALTHCARE: [
      'Multi-specialty Hospital - 1 km',
      'Emergency Medical Center - 500m',
      'Pharmacy - 200m',
      'Dental Clinic - 300m'
    ],
    BUSINESS: [
      'IT Park - 3 km',
      'Business District - 5 km',
      'Banking Hub - 1 km',
      'Shopping Mall - 2 km'
    ],
    EDUCATION: [
      'International School - 1 km',
      'University - 4 km',
      'Coaching Centers - 500m',
      'Library - 800m'
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Location Advantages
          </h2>
          <p className="text-xl text-gray-600">
            Strategically positioned for convenience and growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map Image */}
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop"
              alt="Location Map"
              className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg transition-opacity duration-300 group-hover:opacity-75" />
          </div>

          {/* Collapsible Sections */}
          <div className="space-y-4">
            {Object.entries(locationData).map(([category, items]) => (
              <Collapsible key={category}>
                <CollapsibleTrigger
                  onClick={() => toggleSection(category)}
                  className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-300 transform hover:scale-102 hover:shadow-md"
                >
                  <span className="font-semibold text-gray-900 transition-colors duration-300 hover:text-blue-900">
                    {category}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-all duration-300 ${
                      openSections.includes(category) ? 'rotate-180 text-blue-900' : 'text-gray-600'
                    }`} 
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-900 shadow-sm animate-fade-in">
                    <ul className="space-y-2">
                      {items.map((item, index) => (
                        <li 
                          key={index} 
                          className="flex items-center animate-fade-in hover:transform hover:translate-x-2 transition-transform duration-300"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 animate-pulse" />
                          <span className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantages;