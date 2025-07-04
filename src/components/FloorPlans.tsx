import { Button } from '@/components/ui/button';
import { Home, Square, Bed, Bath } from 'lucide-react';

const FloorPlans = () => {
  const plans = [
    {
      type: "1 BHK",
      area: "650 sq ft",
      bedrooms: 1,
      bathrooms: 1,
      price: "Starting ₹45 Lakhs",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      features: ["Open Kitchen", "Balcony", "Ample Storage"]
    },
    {
      type: "2 BHK",
      area: "950 sq ft",
      bedrooms: 2,
      bathrooms: 2,
      price: "Starting ₹68 Lakhs",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      features: ["Master Bedroom", "Living Room", "2 Balconies"]
    },
    {
      type: "3 BHK",
      area: "1,200 sq ft",
      bedrooms: 3,
      bathrooms: 3,
      price: "Starting ₹89 Lakhs",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      features: ["Spacious Layout", "Study Room", "Premium Finishes"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Floor Plans & Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our thoughtfully designed floor plans that maximize space 
            utilization while ensuring optimal natural light and ventilation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.type}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {plan.type}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Square className="w-4 h-4 mr-2" />
                    <span className="font-medium">{plan.area}</span>
                  </div>
                  <div className="text-2xl font-bold text-amber-600">
                    {plan.price}
                  </div>
                </div>

                <div className="flex items-center space-x-6 mb-6 text-gray-600">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span>{plan.bedrooms} Bed</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span>{plan.bathrooms} Bath</span>
                  </div>
                  <div className="flex items-center">
                    <Home className="w-4 h-4 mr-1" />
                    <span>{plan.type}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-blue-900 hover:bg-blue-800">
                    View Floor Plan
                  </Button>
                  <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-50">
                    Schedule Site Visit
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            *Prices are subject to change. Please contact us for the latest pricing and offers.
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-8">
            Download Complete Brochure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;