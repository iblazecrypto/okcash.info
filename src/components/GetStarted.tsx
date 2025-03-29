import React from 'react';
import { Book, Wallet, Globe, Coins, ArrowRight, FileText, Store, MessageSquare } from 'lucide-react';

const StepCard = ({ 
  icon: Icon, 
  number, 
  title, 
  description, 
  recommendations 
}: { 
  icon: any, 
  number: string, 
  title: string, 
  description: string,
  recommendations?: { title: string, items: string[] }
}) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
    <div className="flex items-center space-x-4 mb-6">
      <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center">
        <Icon className="h-6 w-6 text-green-600" />
      </div>
      <div className="text-4xl font-bold text-green-600">{number}</div>
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
    {recommendations && (
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">{recommendations.title}</h4>
        <ul className="space-y-2">
          {recommendations.items.map((item, index) => (
            <li key={index} className="flex items-start space-x-2 text-gray-600 text-sm">
              <span className="w-2 h-2 bg-green-600 rounded-full mt-1.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const MerchantCard = ({ 
  icon: Icon, 
  number, 
  title, 
  description 
}: { 
  icon: any, 
  number: string, 
  title: string, 
  description: string 
}) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-400 transition-colors">
    <div className="flex items-center space-x-4 mb-4">
      <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center">
        <Icon className="h-5 w-5 text-green-600" />
      </div>
      <div className="text-3xl font-bold text-green-600">{number}</div>
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const GetStarted = () => {
  const userSteps = [
    {
      icon: Book,
      number: "1",
      title: "Level Up Your Knowledge",
      description: "Before starting your OK journey, understand the basics of blockchain and multichain technology.",
      recommendations: {
        title: "Key Areas to Learn:",
        items: [
          "Blockchain fundamentals",
          "Wallet security best practices",
          "Transaction basics",
          "Network differences"
        ]
      }
    },
    {
      icon: Wallet,
      number: "2",
      title: "Choose Your Wallet",
      description: "Select a compatible crypto wallet for your preferred blockchain network.",
      recommendations: {
        title: "Recommended Wallets:",
        items: [
          "OneKey Hardware Wallet - All networks, trusted by millions",
          "Trust Wallet - Ethereum, BSC, Polygon, Avalanche",
          "MetaMask - Ethereum and EVM-compatible networks",
          "Coinbase Wallet - Ethereum, Polygon",
          "Phantom Wallet - Solana network"
        ]
      }
    },
    {
      icon: Globe,
      number: "3",
      title: "Select Your Network",
      description: "Choose from multiple blockchain networks, each with unique advantages.",
      recommendations: {
        title: "Available Networks:",
        items: [
          "Ethereum - High security and liquidity",
          "BSC - Low fees and fast transactions",
          "Polygon - Layer 2 scaling solution",
          "Avalanche - High-speed transactions",
          "BASE - Optimized for DeFi access"
        ]
      }
    },
    {
      icon: Coins,
      number: "4",
      title: "Get Your OK Tokens",
      description: "Acquire OK tokens through exchanges or decentralized platforms.",
      recommendations: {
        title: "Acquisition Methods:",
        items: [
          "Popular centralized exchanges",
          "Decentralized exchanges (DEX)",
          "Direct peer-to-peer trading",
          "Staking rewards"
        ]
      }
    }
  ];

  const merchantSteps = [
    {
      icon: Book,
      number: "1",
      title: "Get Informed",
      description: "Understand cryptocurrency payments and how they can benefit your business operations."
    },
    {
      icon: Store,
      number: "2",
      title: "Set Up Payments",
      description: "Choose between direct wallet acceptance or third-party processors for instant conversion."
    },
    {
      icon: FileText,
      number: "3",
      title: "Handle Accounting",
      description: "Consult professionals for guidance on crypto tax compliance and reporting requirements."
    },
    {
      icon: MessageSquare,
      number: "4",
      title: "Promote Acceptance",
      description: "Register in crypto directories and display OK logos to attract crypto-savvy customers."
    }
  ];

  return (
    <section id="get-started" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Getting Started with OK</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your journey to the multichain universe begins here. Follow these steps to get started with OK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {userSteps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              number={step.number}
              title={step.title}
              description={step.description}
              recommendations={step.recommendations}
            />
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Accept OK?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join the revolution and start accepting OK payments in your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {merchantSteps.map((step, index) => (
              <MerchantCard
                key={index}
                icon={step.icon}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <a 
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors"
          >
            <span>Start Your OK Journey</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;