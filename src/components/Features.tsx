
import { Calendar, User, ArrowDown } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Calendar Integration",
      description: "Sync with Google Calendar, Apple Calendar, and Outlook. See everyone's schedule at a glance.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: User,
      title: "Family Profiles",
      description: "Create personalized profiles for each family member with their own colors and preferences.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: ArrowDown,
      title: "Voice Control",
      description: "Add events, set reminders, and control your display with simple voice commands.",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Everything Your Family Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lumora comes packed with features designed to make family life easier and more organized
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/84966f62-c8a7-4bcc-b07f-1a8156e41548.png" 
                alt="Mobile app synchronization with Lumora display"
                className="w-full rounded-2xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Works with Your Phone
              </h3>
              <p className="text-lg text-gray-600">
                Manage your Lumora display from anywhere with our beautiful mobile app. Add events on the go and they'll instantly appear on your family display.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">iOS & Android</h4>
                  <p className="text-sm text-gray-600">Native apps available</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Real-time Sync</h4>
                  <p className="text-sm text-gray-600">Instant updates everywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
