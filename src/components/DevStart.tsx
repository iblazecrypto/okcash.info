import React from 'react';
import { Globe, Wrench, Code, Rocket, Coins, Users, Laptop } from 'lucide-react';

const StepCard = ({ 
  icon: Icon, 
  number, 
  title, 
  description, 
  points 
}: { 
  icon: any, 
  number: string, 
  title: string, 
  description: string,
  points?: string[]
}) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
    <div className="flex items-center space-x-4 mb-6">
      <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center">
        <Icon className="h-6 w-6 text-purple-600" />
      </div>
      <div className="text-4xl font-bold text-purple-600">{number}</div>
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
    {points && (
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start space-x-2 text-gray-600">
            <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const DevStart = () => {
  const steps = [
    {
      icon: Globe,
      number: "1",
      title: "Choose Your Network",
      description: "Select the blockchain network that best suits your project needs.",
      points: [
        "Ethereum - High security and DeFi integration",
        "BSC - Cost-effective DApp development",
        "Polygon - Layer 2 scaling with low fees",
        "Avalanche - Fast consensus and efficiency",
        "BASE - Seamless dApp support and scaling",
        "Solana - High-speed architecture"
      ]
    },
    {
      icon: Wrench,
      number: "2",
      title: "Development Setup",
      description: "Set up your development environment with essential tools.",
      points: [
        "Node.js for JavaScript applications",
        "Truffle/Hardhat for smart contracts",
        "MetaMask for multi-network testing",
        "Infura/Alchemy for reliable node access"
      ]
    },
    {
      icon: Code,
      number: "3",
      title: "SDK Integration",
      description: "Integrate OK functionality into your application.",
      points: [
        "Configure network RPC endpoints",
        "Implement wallet connections",
        "Handle cross-chain transactions",
        "Monitor for upcoming OK SDK"
      ]
    },
    {
      icon: Rocket,
      number: "4",
      title: "Deploy & Test",
      description: "Launch your smart contracts and applications securely.",
      points: [
        "Deploy contracts using Hardhat/Truffle",
        "Ensure OK Token compatibility",
        "Test on network testnets",
        "Perform security audits"
      ]
    },
    {
      icon: Coins,
      number: "5",
      title: "DeFi Integration",
      description: "Implement staking and DeFi features in your platform.",
      points: [
        "Integrate OK staking pools",
        "Create custom staking solutions",
        "Implement cross-chain functionality",
        "Add DeFi capabilities"
      ]
    },
    {
      icon: Users,
      number: "6",
      title: "Community Engagement",
      description: "Connect with the OK developer community.",
      points: [
        "Join OK Heroes Discord",
        "Contribute to GitHub projects",
        "Participate in developer forums",
        "Share knowledge and innovations"
      ]
    }
  ];

  return (
    <section id="dev-start" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Laptop className="h-12 w-12 text-purple-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Developer Quick Start</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build the future of finance with OK's multichain ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              number={step.number}
              title={step.title}
              description={step.description}
              points={step.points}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-purple-50 p-6 rounded-xl">
            <Code className="h-8 w-8 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ready to Build?</h3>
            <p className="text-gray-600">
              Explore our comprehensive documentation to build robust, scalable applications on OK. 
              Stay updated with SDK releases, guides, and API references to power your next breakthrough project.
            </p>
            <div className="mt-6">
              <a 
                href="https://github.com/okcashpro"
                target="_blank"
                rel="noopener noreferrer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
              >
                Start Building
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevStart;