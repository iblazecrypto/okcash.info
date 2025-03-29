import React from 'react';
import { Rocket, Shield, Globe, Coins, Gift, Users, Smartphone, Bot, Search, Dumbbell, Layers, Leaf } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
    <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-purple-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Innovation = () => {
  const features = [
    {
      icon: Rocket,
      title: "Multichain Revolution",
      description: "Experience blazing-fast transactions and ultra-low fees across 9+ major blockchains, pushing the boundaries of what's possible in the digital world."
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Benefit from unbreakable security with advanced fraud prevention, wallet encryption, and optional multi-signature accounts for maximum protection."
    },
    {
      icon: Globe,
      title: "Borderless Payments",
      description: "Send and receive payments globally with seamless cross-chain transactions, expanding financial accessibility to unbanked regions."
    },
    {
      icon: Coins,
      title: "Efficient Staking",
      description: "Participate in our Friendly Long-Term Staking model that minimizes energy consumption while ensuring top-notch security and scalability."
    },
    {
      icon: Gift,
      title: "Social Payments",
      description: "Support creators and causes with easy tipping and donations using simple QR codes, adding transparency and reliability to contributions."
    },
    {
      icon: Users,
      title: "Social Crowdfunding",
      description: "Launch decentralized crowdfunding campaigns with assurance contracts, enabling community-backed projects with built-in trust mechanisms."
    },
    {
      icon: Smartphone,
      title: "Mobile Micropayments",
      description: "Enable seamless micro-transactions for content monetization, ad-free browsing, and on-the-go payments across multiple chains."
    },
    {
      icon: Bot,
      title: "IoT Integration",
      description: "Power the future of automated payments through ROKOS integration, enabling crypto-powered vending machines, tickets, and smart city solutions."
    },
    {
      icon: Search,
      title: "Enhanced Transparency",
      description: "Build trust through blockchain transparency, enabling selective accounting and digital contracts while maintaining transaction integrity."
    },
    {
      icon: Dumbbell,
      title: "Network Resilience",
      description: "Benefit from enhanced security through decentralized networks with no single point of failure, handling massive transaction volumes efficiently."
    },
    {
      icon: Layers,
      title: "Cross-Chain Flexibility",
      description: "Seamlessly interact across Ethereum, BSC, Polygon, Avalanche, Arbitrum, Optimism, Base, and Solana with full interoperability."
    },
    {
      icon: Leaf,
      title: "Sustainable Growth",
      description: "Support network health through our Multichain Staking system, creating a saving-sharing economy that rewards long-term participation."
    }
  ];

  return (
    <section id="innovation" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Rocket className="h-12 w-12 text-purple-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Innovation & Future</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leading the social payments and multichain revolution with cutting-edge technology.
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
          <div className="max-w-2xl mx-auto bg-purple-50 p-6 rounded-xl">
            <Users className="h-8 w-8 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Join the OK Revolution</h3>
            <p className="text-gray-600">
              Be part of a community-driven movement that's reshaping the future of digital finance. 
              With continuous innovation and development, OK is building a more inclusive and efficient financial ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;