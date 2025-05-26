
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
              src="/lovable-uploads/a60abb50-018f-4136-8180-376792cae87c.png" 
              alt="Children interacting with Lumora family display"
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
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Easy Installation & Setup
            </h3>
            <p className="text-lg text-gray-600">
              Mount Lumora anywhere in your home with our simple wall mount system. No complicated wiring or technical expertise required.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Simple wall mounting system</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No complex wiring needed</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Setup in under 10 minutes</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="/lovable-uploads/2569ecbb-126d-4b30-a4b4-415da547979f.png" 
              alt="Easy installation process for Lumora display"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/9c073786-3bac-4734-bd73-22cbf37cacf5.png" 
              alt="Family using Lumora for meal planning and organization"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Never Miss What's Important
            </h3>
            <p className="text-lg text-gray-600">
              From meal planning to appointment tracking, Lumora keeps your family organized and connected with beautiful, intuitive displays.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Meal planning made simple</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Visual calendar organization</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Customizable family views</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
