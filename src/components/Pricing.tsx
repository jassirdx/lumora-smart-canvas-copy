
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get Your Lumora Today
          </h2>
          <p className="text-xl text-gray-600">
            Limited time offer - 40% off for early adopters
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-blue-200">
            <div className="text-center mb-8">
              <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                40% OFF - Limited Time
              </div>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-3xl text-gray-400 line-through">$132</span>
                <span className="text-5xl font-bold text-gray-900">$79</span>
              </div>
              <p className="text-lg text-gray-600">One-time purchase, lifetime of organization</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>15.6" HD touchscreen display</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Calendar & reminder integration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Mobile app for iOS & Android</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Voice control support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Free shipping & 30-day returns</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>7-14 day delivery</span>
              </div>
            </div>
            
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold">
              Order Now - $79 <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
