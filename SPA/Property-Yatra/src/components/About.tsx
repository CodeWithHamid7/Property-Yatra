import { useState } from 'react';
import { Building, Users, Award, Star, Calendar, Home } from 'lucide-react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const achievements = [
    { icon: Calendar, value: '50 Years', label: 'A Legacy of Excellence' },
    { icon: Building, value: '50 Million sq.ft.', label: 'Developed' },
    { icon: Home, value: '50000+', label: 'Homes Delivered' },
    { icon: Award, value: '83+', label: 'Completed Projects' },
    { icon: Star, value: '9 Cities', label: 'Presence' },
    { icon: Users, value: '2 Lacs', label: 'Happy Residents' }
  ];

  const shortDescription = "Property Yatra has been a pioneer in real estate development for over five decades. We are committed to delivering exceptional quality homes that combine modern amenities with timeless design.";
  
  const fullDescription = "Property Yatra has been a pioneer in real estate development for over five decades. We are committed to delivering exceptional quality homes that combine modern amenities with timeless design. Our journey began with a simple vision: to create living spaces that enhance the quality of life for our residents. Today, we stand as one of the most trusted names in the industry, having delivered thousands of homes across multiple cities. Our commitment to excellence, innovation, and customer satisfaction has earned us numerous accolades and the trust of homebuyers nationwide.";

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About Property Yatra
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              {isExpanded ? fullDescription : shortDescription}
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-900 hover:text-blue-700 font-medium transition-colors"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full mb-4 group-hover:bg-amber-600 transition-colors">
                <achievement.icon className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{achievement.value}</div>
              <div className="text-gray-600 text-sm">{achievement.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;