import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, MessageCircle, X } from 'lucide-react';

const StickyButtons = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState<'download' | 'enquire' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    mobile: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${formType} form submitted:`, formData);
    setShowForm(false);
    setFormData({ name: '', mobile: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openForm = (type: 'download' | 'enquire') => {
    setFormType(type);
    setShowForm(true);
  };

  return (
    <>
      {/* Sticky Buttons */}
      <div className="fixed bottom-4 left-4 right-4 z-40 flex justify-between pointer-events-none">
        <Button
          onClick={() => openForm('download')}
          className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg pointer-events-auto transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-xl"
        >
          <Download className="w-5 h-5 mr-2 transition-transform duration-300 hover:rotate-12" />
          Download Brochure
        </Button>
        
        <Button
          onClick={() => openForm('enquire')}
          className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg pointer-events-auto transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-xl"
        >
          <MessageCircle className="w-5 h-5 mr-2 transition-transform duration-300 hover:bounce" />
          Enquire Now
        </Button>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative animate-scale-in shadow-2xl">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all duration-300 transform hover:scale-110 hover:rotate-90"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6 animate-fade-in">
              {formType === 'download' ? 'Download Brochure' : 'Enquire Now'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="transition-all duration-300 focus:scale-105 focus:shadow-md"
                />
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Input
                  type="tel"
                  name="mobile"
                  placeholder="Mob No."
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="transition-all duration-300 focus:scale-105 focus:shadow-md"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 animate-fade-in transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                style={{ animationDelay: '300ms' }}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyButtons;
