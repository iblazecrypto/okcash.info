import React from 'react';
import { AlertTriangle, Shield, TrendingUp, ArrowRight, Eye, Lock } from 'lucide-react';

interface InfoPoint {
  icon: any;
  title: string;
  description: string;
  tips?: string[];
}

const InfoCard = ({ icon: Icon, title, description, tips }: InfoPoint) => (
  <div className="glass-card p-6 rounded-xl hover:shadow-lg transition-all">
    <div className="flex items-start gap-4">
      <div className="bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="h-5 w-5 text-amber-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-2">{description}</p>
        {tips && (
          <ul className="space-y-1">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-500 text-sm">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 flex-shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
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
      ]
    },
    {
      icon: TrendingUp,
      title: "Price Volatility",
      description: "Understand market dynamics and manage risk appropriately.",
      tips: [
        "Only invest what you can afford",
        "Consider using stable pairs",
        "Monitor market conditions"
      ]
    },
    {
      icon: ArrowRight,
      title: "Irreversible Transactions",
      description: "All blockchain transactions are permanent and cannot be reversed.",
      tips: [
        "Double-check addresses",
        "Start with small test amounts",
        "Verify recipient details"
      ]
    },
    {
      icon: Eye,
      title: "Pseudonymous Nature",
      description: "Balance transparency with privacy in the blockchain.",
      tips: [
        "Use new addresses regularly",
        "Keep identities separate",
        "Consider privacy tools"
      ]
    },
    {
      icon: Lock,
      title: "Multichain Security",
      description: "Benefit from security across multiple chains.",
      tips: [
        "Use audited contracts",
        "Follow chain-specific best practices",
        "Stay informed about updates"
      ]
    }
  ];

  return (
    <section id="important" className="py-16 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-2xl mb-4">
            <AlertTriangle className="h-8 w-8 text-amber-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Important Things to Know</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Essential information to understand before getting started with OK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {infoPoints.map((point, index) => (
            <InfoCard
              key={index}
              icon={point.icon}
              title={point.title}
              description={point.description}
              tips={point.tips}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Important;