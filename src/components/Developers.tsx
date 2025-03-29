import React from 'react';
import { Code, Wrench, Building2, Target, Shield, Rocket } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Developers = () => {
  const features = [
    {
      icon: Code,
      title: "Web3 Integration",
      description: "Build and deploy dApps across multiple chains including Ethereum, BSC, Polygon, and more. Accept payments easily with OK address links or QR codes."
    },
    {
      icon: Wrench,
      title: "Flexible APIs",
      description: "Leverage third-party APIs for payment processing, invoicing, and currency conversion. Customize and extend the open-source infrastructure to create unique services."
    },
    {
      icon: Building2,
      title: "Self-Custodial Solutions",
      description: "Integrate RPC nodes directly into your applications for independent payment processing. Connect to multiple chains for maximum flexibility and reach."
    },
    {
      icon: Target,
      title: "Invoice Tracking",
      description: "Generate unique addresses for each transaction, enabling automated payment matching and precise invoice tracking. Perfect for subscriptions and e-commerce."
    },
    {
      icon: Shield,
      title: "Built-in Security",
      description: "Benefit from protocol-level security across all chains, simplified compliance, and robust fraud prevention. Implement secure Web3 protocols with confidence."
    },
    {
      icon: Rocket,
      title: "Innovative Features",
      description: "Create decentralized tipping systems, automated payments, micro-payment channels, staking pools, and distributed crowdfunding platforms across multiple chains."
    }
  ];

  return (
    <section id="developers" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">OK for Developers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build the future of Web3 with powerful tools and multichain capabilities.
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
            href="https://github.com/okcashpro"
            target="_blank"
            rel="noopener noreferrer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            Start Building
          </a>
        </div>
      </div>
    </section>
  );
};

export default Developers;