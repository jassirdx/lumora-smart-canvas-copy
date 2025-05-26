
import { Star } from "lucide-react";

export const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Chen",
      location: "San Francisco, CA",
      rating: 5,
      text: "Lumora has completely transformed how our family stays organized. The kids love checking their schedules and it's become the central hub of our home.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Mike Rodriguez",
      location: "Austin, TX",
      rating: 5,
      text: "Setup was incredibly easy and the display quality is stunning. We use it for everything from meal planning to tracking soccer practice.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Jennifer Kim",
      location: "Seattle, WA",
      rating: 5,
      text: "Best purchase we've made for our home. The calendar integration works flawlessly and the whole family actually uses it daily.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Loved by 20,000+ Families
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xl font-semibold">4.8/5</span>
          </div>
          <p className="text-lg text-gray-600">Based on 2,340+ verified reviews</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
