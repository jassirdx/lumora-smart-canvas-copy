
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-red-100 to-pink-100 text-red-800 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-sm border border-red-200">
            🔥 Limited Time Offer - 40% OFF
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Get Your Lumora Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of families who've transformed their homes with Lumora's smart organization
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            {/* Gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
                40% OFF - Limited Time
              </div>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-3xl text-gray-400 line-through">$132</span>
                <span className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">$79</span>
              </div>
              <p className="text-lg text-gray-600 font-medium">One-time purchase + $9.99/month subscription</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">15.6" HD touchscreen display</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">Calendar & reminder integration</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">Mobile app for iOS & Android</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">Voice control support</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">Free shipping worldwide</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">7-14 day delivery</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">30-day money-back guarantee</span>
              </div>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Order Now - $79 <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <p className="text-center text-sm text-gray-500 mt-4 font-medium">
              ✨ 30-day satisfaction guarantee • Easy returns • Premium support included
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
