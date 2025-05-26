
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "How easy is it to set up Lumora?",
      answer: "Lumora takes less than 10 minutes to set up. Simply mount it on your wall, connect to WiFi, and follow the guided setup process on the display."
    },
    {
      question: "What calendars does Lumora work with?",
      answer: "Lumora integrates seamlessly with Google Calendar, Apple Calendar, Outlook, and most major calendar services. You can sync multiple accounts for different family members."
    },
    {
      question: "Can multiple family members use one Lumora?",
      answer: "Absolutely! Lumora supports unlimited family member profiles, each with their own calendar, reminders, and personalized settings."
    },
    {
      question: "What's included in the box?",
      answer: "Each Lumora comes with the 15.6\" display, wall mount, power adapter, setup guide, and access to our mobile apps for iOS and Android."
    },
    {
      question: "Is there a monthly subscription fee?",
      answer: "Yes, Lumora requires a monthly subscription of $9.99/month for cloud sync, premium features, and ongoing software updates. The first month is included free with your purchase."
    },
    {
      question: "What are your return options?",
      answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your Lumora, you can return it for a full refund within 30 days of purchase."
    },
    {
      question: "What if I need technical support?",
      answer: "Our dedicated support team is available via chat, email, and phone. We also provide comprehensive online tutorials and a community forum for tips and tricks."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about your new smart family display
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl px-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
