
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
      answer: "No! Lumora is a one-time purchase with no monthly fees. All features and updates are included forever."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, return your Lumora for a full refund."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Lumora
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
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
