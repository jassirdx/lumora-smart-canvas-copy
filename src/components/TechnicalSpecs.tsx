
export const TechnicalSpecs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Technical Specifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed with precision and built to last, Lumora combines cutting-edge technology with elegant design
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/5e52de16-57ee-4405-b6a9-008d79ba1f4d.png" 
              alt="Lumora technical dimensions and specifications"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Display</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 15.6" Full HD (1920x1080) IPS touchscreen</li>
                <li>• 10-point multi-touch support</li>
                <li>• Anti-glare coating</li>
                <li>• 350 nits brightness</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dimensions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Width: 16.5 inches (42 cm)</li>
                <li>• Height: 26.7 inches (68 cm)</li>
                <li>• Depth: 1.2 inches (3 cm)</li>
                <li>• Weight: 4.2 lbs (1.9 kg)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Connectivity</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Wi-Fi 6 (802.11ax)</li>
                <li>• Bluetooth 5.0</li>
                <li>• USB-C power input</li>
                <li>• Built-in speakers</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Installation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Wall mount included</li>
                <li>• Portrait or landscape orientation</li>
                <li>• Standard wall anchor compatible</li>
                <li>• Cable management system</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
