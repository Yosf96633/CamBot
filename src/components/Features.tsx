import React from 'react';
import {
  Bot,
  MapPin,
  Bell,
  Users
} from 'lucide-react';

const features = [
  {
    icon: <Bot className="text-3xl text-black" aria-label="Chat Support" />,
    title: '24/7 Chat Support',
    desc: 'Get instant replies to your academic and campus-related queries anytime.',
  },
  {
    icon: <MapPin className="text-3xl text-black" aria-label="Campus Navigation" />,
    title: 'Campus Navigation',
    desc: 'Find any department, building, or office with chatbot-guided directions.',
  },
  {
    icon: <Bell className="text-3xl text-black" aria-label="Real-Time Notifications" />,
    title: 'Real-Time Notifications',
    desc: 'Never miss out on important events, deadlines, or updates.',
  },
  {
    icon: <Users className="text-3xl text-black" aria-label="Student Services Access" />,
    title: 'Student Services Access',
    desc: 'Check hostel, ID card, and fee details directly through the chatbot.',
  },
];

function Features() {
  return (
    <div className="bg-white text-black py-12 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-4">Key Features</h2>
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10 text-md">
        Our AI-powered campus assistant is designed to simplify student life by providing instant access to essential services, navigation, and real-time support — all through one smart chatbot interface.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border cursor-pointer border-gray-200 text-center shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="mb-3 flex justify-center">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-700">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
