const ReraDisclaimer = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=200&fit=crop"
              alt="RERA Certificate"
              className="mx-auto rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">RERA Registered Project</h3>
            <p className="text-lg text-gray-600 mb-4">
              Registration No: RERA/2024/PROJECT/001234
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-500 leading-relaxed">
              <strong>Disclaimer:</strong> The content provided on this website is for informational purposes only. 
              All images, floor plans, amenities, specifications, and other details mentioned are indicative and 
              for representational purposes only. They may not be to scale or may not represent the actual dimensions, 
              designs, or specifications of the project. The developer reserves the right to make changes to the 
              project design, specifications, or amenities without prior notice. Prospective buyers are advised to 
              verify all details and specifications with the sales team before making any investment decision. 
              This website does not constitute an offer or contract of sale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReraDisclaimer;