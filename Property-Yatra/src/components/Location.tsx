import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Mail } from 'lucide-react';

const Location = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Location contact form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Location & Contact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Map */}
          <div className="relative">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Google Map will be integrated here</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  name="mobile"
                  placeholder="Mob no."
                  value={formData.mobile}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3"
              >
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>

        {/* Site Address */}
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Site Address</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-900 mr-2" />
              <span className="text-gray-700">123 Premium Avenue, Luxury District, Metropolitan City - 400001</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-blue-900 mr-2" />
              <span className="text-gray-700">+91 98765 43210</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-blue-900 mr-2" />
              <span className="text-gray-700">info@propertyyatra.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;