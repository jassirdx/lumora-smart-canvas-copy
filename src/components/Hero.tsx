
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-6 py-3 rounded-full text-sm font-medium shadow-sm border border-green-200">
              <CheckCircle className="w-4 h-4 mr-2" />
              ✨ Trusted by 20,000+ Families
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              The Smart Display That 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Brings Your Family Together</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Transform any wall into a beautiful, interactive family command center. Stay organized with shared calendars, reminders, and smart home controls that everyone loves to use.
            </p>
            
            <div className="flex items-center gap-3 text-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold text-gray-900">4.8/5</span>
              <span className="text-gray-500">from 2,340+ reviews</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Order Now - $79 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                Free shipping
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                7-14 day delivery
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                Setup in minutes
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/lovable-uploads/e87ce158-cdab-4b09-8fb8-f9049e260cd1.png" 
                alt="Lumora Display showing family calendar"
                className="w-full rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                40% OFF
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
