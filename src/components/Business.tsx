import React from 'react';
import { Coins, ShieldCheck, Globe, FileCheck, Users, LineChart } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Business = () => {
  const features = [
    {
      icon: Coins,
      title: "Cost-Effective Payments",
      description: "Minimize operational costs with some of the lowest transaction fees across multiple chains. Receive payments for free and send with minimal fees."
    },
    {
      icon: ShieldCheck,
      title: "No Chargebacks",
      description: "Secure, irreversible transactions eliminate chargeback fraud and protect your revenue. Focus on growth without worrying about payment reversals."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Process international payments instantly across 9+ chains including Ethereum, BSC, and Polygon. No delays, no bank fees, and no limits."
    },
    {
      icon: FileCheck,
      title: "Simplified Compliance",
      description: "Accept payments securely without handling sensitive customer data. Reduce compliance overhead and streamline your payment operations."
    },
    {
      icon: Users,
      title: "Crypto-Ready Brand",
      description: "Position your business at the forefront of digital innovation. Tap into the growing crypto community and attract tech-savvy customers."
    },
    {
      icon: LineChart,
      title: "Financial Transparency",
      description: "Build trust with verifiable transaction records. Perfect for organizations requiring public accountability and transparent operations."
    }
  ];

  return (
    <section id="business" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">OK for Business</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your business with secure, efficient, and global payment solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Business;