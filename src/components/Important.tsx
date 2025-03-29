import React from 'react';
import { AlertTriangle, Shield, TrendingUp, ArrowRight, Eye, Lock, Globe2 } from 'lucide-react';

interface InfoPoint {
  icon: any;
  title: string;
  description: string;
  tips?: string[];
  color?: string;
}

const InfoCard = ({ icon: Icon, title, description, tips, color = "amber" }: InfoPoint) => (
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className={`bg-${color}-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`h-7 w-7 text-${color}-600`} />
      </div>
      <h3 className="text-xl font-bold mb-4 group-hover:text-primary-600 transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
      {tips && (
        <ul className="space-y-3">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className={`w-2 h-2 bg-${color}-400 rounded-full mt-2 flex-shrink-0`} />
              <span className="text-gray-500">{tip}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const Important = () => {
  const infoPoints = [
    {
      icon: Shield,
      title: "Secure Your Wallet",
      description: "Take full control of your funds with proper security practices.",
      tips: [
        "Use hardware wallets for large amounts",
        "Enable all security features",
        "Keep recovery phrase offline"
      ],
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Price Volatility",
      description: "Understand market dynamics and manage risk appropriately.",
      tips: [
        "Only invest what you can afford",
        "Consider using stable pairs",
        "Monitor market conditions"
      ],
      color: "green"
    },
    {
      icon: ArrowRight,
      title: "Irreversible Transactions",
      description: "All blockchain transactions are permanent and cannot be reversed.",
      tips: [
        "Double-check addresses",
        "Start with small test amounts",
        "Verify recipient details"
      ],
      color: "purple"
    },
    {
      icon: Eye,
      title: "Pseudonymous Nature",
      description: "Balance transparency with privacy in the blockchain.",
      tips: [
        "Use new addresses regularly",
        "Keep identities separate",
        "Consider privacy tools"
      ],
      color: "amber"
    },
    {
      icon: Lock,
      title: "Multichain Security",
      description: "Benefit from security across multiple chains.",
      tips: [
        "Use audited contracts",
        "Follow chain-specific best practices",
        "Stay informed about updates"
      ],
      color: "red"
    },
    {
      icon: Globe2,
      title: "Multichain Freedom",
      description: "Experience true flexibility with OK's multichain ecosystem.",
      tips: [
        "Choose from 9+ major blockchains",
        "Community-driven development since 2014",
        "No ICO or funding rounds - pure decentralization",
        "Self-sustainable like Bitcoin"
      ],
      color: "indigo"
    }
  ];

  return (
    <section id="important" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl mb-6 transform hover:scale-105 transition-transform duration-300">
            <AlertTriangle className="h-10 w-10 text-amber-600" />
          </div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 mb-4">
            Important Things to Know
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Essential information to understand before getting started with OK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {infoPoints.map((point, index) => (
            <InfoCard
              key={index}
              icon={point.icon}
              title={point.title}
              description={point.description}
              tips={point.tips}
              color={point.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Important;