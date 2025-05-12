import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What are the campus library timings?',
    answer: 'The library is open from 8 AM to 8 PM, Monday to Saturday.',
  },
  {
    question: 'How can I reset my university portal password?',
    answer: 'Visit the IT Helpdesk or use the "Forgot Password" option on the portal login page.',
  },
  {
    question: 'Where can I find the academic calendar?',
    answer: 'The academic calendar is available on the university website under the "Academic" section.',
  },
  {
    question: 'Who do I contact for hostel accommodation?',
    answer: 'You can contact the Hostel Warden Office for queries related to accommodation.',
  },
  {
    question: 'How to apply for a student ID card?',
    answer: 'Submit your application through the student portal under "Services" > "ID Card".',
  },
];

const FAQ = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 bg-white text-black">
      <h2 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
      <p className="text-md text-center mb-8 text-gray-700">
        Here are some of the most common questions asked by students. If you can't find the answer you're looking for, feel free to reach out to us!
      </p>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-left text-lg font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-gray-800">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
