import { Waves, Car, Shield, Dumbbell, Trees, Wifi, Coffee, Baby } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    { icon: Waves, title: 'Swimming Pool', description: 'Resort-style swimming pool with kids area' },
    { icon: Car, title: 'Parking', description: 'Covered parking for all residents' },
    { icon: Shield, title: '24/7 Security', description: 'Round-the-clock security with CCTV' },
    { icon: Dumbbell, title: 'Fitness Center', description: 'Fully equipped modern gymnasium' },
    { icon: Trees, title: 'Landscaped Gardens', description: 'Beautiful green spaces and gardens' },
    { icon: Wifi, title: 'High-Speed Internet', description: 'Fiber optic internet connectivity' },
    { icon: Coffee, title: 'Clubhouse', description: 'Premium clubhouse with dining' },
    { icon: Baby, title: 'Kids Play Area', description: 'Safe and fun play area for children' }
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            World-Class Amenities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience luxury living with our comprehensive range of premium amenities 
            designed to enhance your lifestyle and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full mb-4 group-hover:bg-amber-600 transition-colors">
                <amenity.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {amenity.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            And Much More...
          </h3>
          <p className="text-xl opacity-90 mb-6">
            Discover additional premium amenities including jogging track, 
            meditation area, multipurpose hall, and exclusive concierge services.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View Complete List
          </button>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
