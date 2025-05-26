
import { CheckCircle, Users, Calendar, Smartphone } from "lucide-react";

export const FeatureShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Everything Your Family Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lumora combines beautiful design with powerful features to keep your family organized and connected
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Calendar</h3>
            <p className="text-gray-600 text-sm">Sync with Google, Apple, and Outlook calendars for seamless family scheduling.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Family Profiles</h3>
            <p className="text-gray-600 text-sm">Individual profiles for each family member with personalized colors and settings.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Task Management</h3>
            <p className="text-gray-600 text-sm">Track chores, homework, and daily routines with visual progress indicators.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
              <Smartphone className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Mobile App</h3>
            <p className="text-gray-600 text-sm">Control your Lumora from anywhere with our iOS and Android apps.</p>
          </div>
        </div>

        {/* Interface Examples */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <img src="/lovable-uploads/a0dca132-3e79-43c8-94c9-cb435b43d6ea.png" alt="Streak tracking feature" className="w-full h-32 object-contain mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Habit Tracking</h3>
            <p className="text-gray-600">Build positive family habits with streak tracking and motivational badges.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <img src="/lovable-uploads/6dc1ed7e-2f3e-403e-9217-092f292333d1.png" alt="Family member assignment" className="w-full h-32 object-contain mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Task Assignment</h3>
            <p className="text-gray-600">Easily assign tasks and chores to specific family members with visual confirmation.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <img src="/lovable-uploads/e733e85a-10c7-4d1c-81fd-8fe3186aa4c8.png" alt="Morning routine tracking" className="w-full h-32 object-contain mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Daily Routines</h3>
            <p className="text-gray-600">Create and track morning, evening, and custom routines for each family member.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
