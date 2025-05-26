
export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Lumora</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The smart display that brings families together through beautiful organization and seamless connectivity.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span className="bg-green-600 px-3 py-1 rounded-full">Free shipping</span>
              <span>•</span>
              <span className="bg-blue-600 px-3 py-1 rounded-full">Fast delivery</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Product</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Features</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Specifications</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Mobile App</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Setup Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Support</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Warranty</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Satisfaction Guarantee</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Privacy</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Terms</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Reviews</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Lumora. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400 mt-4 md:mt-0">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-medium">Made with ❤️ for families everywhere</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
