import React from 'react';
import { Wallet, Database, Key, Coins } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  points 
}: { 
  icon: any, 
  title: string, 
  description: string,
  points: string[]
}) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
    <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-indigo-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-start space-x-2 text-gray-600">
          <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const HowItWorks = () => {
  const features = [
    {
      icon: Wallet,
      title: "Getting Started",
      description: "Begin your OK journey with just a few simple steps.",
      points: [
        "Install a Web3 wallet (MetaMask, Trust Wallet, or Coinbase Wallet)",
        "Generate your first OK address",
        "Create multiple addresses for enhanced privacy",
        "Send and receive OK tokens easily"
      ]
    },
    {
      icon: Database,
      title: "Multichain Balances",
      description: "Access your OK tokens across multiple blockchain networks.",
      points: [
        "Track balances across 9+ networks including Ethereum, BSC, and Polygon",
        "Confirmed transactions recorded on public ledgers",
        "Cryptographic verification ensures transaction integrity",
        "Real-time balance updates across chains"
      ]
    },
    {
      icon: Key,
      title: "Secure Transactions",
      description: "Transfer value securely using cryptographic signatures.",
      points: [
        "Private keys secure and authorize all transactions",
        "Irreversible transactions prevent tampering",
        "Fast confirmations, especially on chains like Base and BSC",
        "Cross-chain transactions supported"
      ]
    },
    {
      icon: Coins,
      title: "Multichain Staking",
      description: "Earn rewards by participating in network consensus.",
      points: [
        "Stake across multiple chains including Base, BSC, and Polygon",
        "Triple-audited smart contracts by Team.Finance",
        "Attractive APY rewards for stakers",
        "Support network stability while earning"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How OK Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Understanding the fundamentals of OK's multichain ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              points={feature.points}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-indigo-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Decentralized Processing</h3>
            <p className="text-gray-600">
              OK maintains neutrality and security through decentralized consensus across all supported chains. 
              Transactions are processed in cryptographically secured blocks, creating a resilient and 
              tamper-proof multichain environment aligned with DeFi principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;