
export const ProductShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            See Lumora in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From morning routines to family game time, Lumora seamlessly integrates into your daily life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="/lovable-uploads/7e6f8a6f-53cd-4c5d-84c8-8f3ae373e1fd.png" 
              alt="Children playing with interactive family schedule"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Perfect for Growing Families
            </h3>
            <p className="text-lg text-gray-600">
              Keep everyone on the same page with shared calendars, chore charts, and interactive displays that even the kids love to use.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Interactive touch interface</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Kid-friendly design</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Beautiful, colorful calendar views</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Brings Everyone Together
            </h3>
            <p className="text-lg text-gray-600">
              Create magical moments with your family while staying organized. Lumora makes planning fun and interactive for everyone.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Family activity planning</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Shared reminder system</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Multi-user profiles</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="/lovable-uploads/28381107-cc8e-42ad-9a5e-c63ee5736391.png" 
              alt="Happy family enjoying time together with Lumora display"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
