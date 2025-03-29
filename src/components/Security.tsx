import React from 'react';
import { Lock, Shield, Wallet, Key, HardDrive, RefreshCw, Scroll } from 'lucide-react';

const SecurityCard = ({ icon: Icon, title, description, tips }: { icon: any, title: string, description: string, tips?: string[] }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
    {tips && (
      <ul className="space-y-2">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start space-x-2 text-gray-600">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Security = () => {
  const features = [
    {
      icon: Lock,
      title: "Online Security",
      description: "Exercise caution with online wallets and exchanges. Only install MetaMask from official sources.",
      tips: [
        "Use official wallet sources only",
        "Enable Two-Factor Authentication (2FA)",
        "Be cautious of phishing attempts"
      ]
    },
    {
      icon: Wallet,
      title: "Smart Wallet Management",
      description: "Treat your MetaMask like a physical wallet - keep only small amounts for daily use.",
      tips: [
        "Use separate wallets for daily transactions",
        "Consider hardware wallets for large holdings",
        "Regular security audits of your wallets"
      ]
    },
    {
      icon: Key,
      title: "Recovery Phrase Protection",
      description: "Your 12-word recovery phrase is the key to your funds. Store it securely offline.",
      tips: [
        "Never share it with anyone",
        "Avoid digital storage",
        "Keep multiple secure physical copies"
      ]
    },
    {
      icon: Shield,
      title: "Strong Password Practices",
      description: "Create and maintain strong passwords for your MetaMask wallet.",
      tips: [
        "Use 16+ characters with mixed types",
        "Avoid personal information",
        "Consider a password manager"
      ]
    },
    {
      icon: HardDrive,
      title: "Cold Storage Security",
      description: "Use hardware wallets like OneKey for long-term storage of larger holdings.",
      tips: [
        "Keep hardware wallets offline",
        "Regular backup verification",
        "Test recovery procedures"
      ]
    },
    {
      icon: RefreshCw,
      title: "Stay Updated",
      description: "Keep your wallet software and security measures current.",
      tips: [
        "Enable automatic updates",
        "Regular security reviews",
        "Follow security best practices"
      ]
    }
  ];

  return (
    <section id="security" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Secure Your Wallet</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Protect your OK tokens with industry-leading security practices and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <SecurityCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              tips={feature.tips}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-blue-50 p-6 rounded-xl">
            <Scroll className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Plan for the Future</h3>
            <p className="text-gray-600">
              Consider creating a secure plan for passing on access to your recovery phrase in case of emergency. 
              Keep your family or beneficiaries informed, or create a legal arrangement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;