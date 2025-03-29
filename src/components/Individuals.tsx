import React from 'react';
import { Zap, Shield, Clock, Globe, Coins, Lock } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Individuals = () => {
  const features = [
    {
      icon: Zap,
      title: "Multichain Payments",
      description: "Send, tip, and share assets seamlessly across 9+ blockchain networks including Ethereum, BSC, Polygon, and more. Just scan a QR code or enter an address to get started!"
    },
    {
      icon: Shield,
      title: "Unbreakable Security",
      description: "Take control of your crypto universe with cutting-edge cryptographic protocols. Only you have access to your assets, with no intermediaries or central points of failure."
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "Access your funds 24/7, 365 days a year. Choose your preferred network and wallet setup, whether it's MetaMask, Trust Wallet, or Coinbase Wallet."
    },
    {
      icon: Globe,
      title: "Global Transfers",
      description: "Send OK worldwide in seconds, just like sending an email. No queues, no waiting periods, and no limits on how much you can send."
    },
    {
      icon: Coins,
      title: "Ultra-Low Fees",
      description: "Keep more of your coins with minimal transaction fees. Receiving OK is FREE, and sending costs just a tiny fraction depending on your chosen network."
    },
    {
      icon: Lock,
      title: "Enhanced Privacy",
      description: "Maintain your privacy with no personal data required for transactions. Follow best practices to enhance your anonymity in every transaction."
    }
  ];

  return (
    <section id="individuals" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">OK for Individuals</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of multichain payments with features designed for everyday users.
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
            Get Started with OK
          </a>
        </div>
      </div>
    </section>
  );
};

export default Individuals;