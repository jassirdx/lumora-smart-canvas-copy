
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              ✨ In 20,000+ Homes
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              The Smart Display That Brings Your Family Together
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Lumora transforms any wall into a beautiful, interactive family command center. Stay organized with shared calendars, reminders, and smart home controls.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>4.8/5 from 2,340+ reviews</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Order Now - $79 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Free shipping
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                7-14 day delivery
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                30-day returns
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-3xl shadow-2xl transform rotate-2">
              <img 
                src="/lovable-uploads/e87ce158-cdab-4b09-8fb8-f9049e260cd1.png" 
                alt="Lumora Display showing family calendar"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
