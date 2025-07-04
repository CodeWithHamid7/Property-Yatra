const Configurations = () => {
  const configurations = [
    { type: '2 BHK', area: '1,200 sq.ft', price: '₹2.5 Crores' },
    { type: '3 BHK', area: '1,800 sq.ft', price: '₹3.8 Crores' },
    { type: '4 BHK', area: '2,400 sq.ft', price: '₹5.2 Crores' },
    { type: '4 BHK Premium', area: '2,800 sq.ft', price: '₹6.5 Crores' }
  ];

  return (
    <section id="configuration" className="py-20 relative">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: `url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop)`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Configurations
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Configuration</th>
                    <th className="px-6 py-4 text-left font-semibold">Area</th>
                    <th className="px-6 py-4 text-left font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {configurations.map((config, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{config.type}</td>
                      <td className="px-6 py-4 text-gray-600">{config.area}</td>
                      <td className="px-6 py-4 font-semibold text-blue-900">{config.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Configurations;
