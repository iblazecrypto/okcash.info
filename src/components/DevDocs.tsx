import React from 'react';
import { BookOpen, Terminal, Code2, Link2, BookKey, Globe2, Shield, Lock } from 'lucide-react';

const DocCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
    <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-cyan-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const DevDocs = () => {
  const docs = [
    {
      icon: BookOpen,
      title: "Dev Start",
      description: "Get started with OK development. Learn the basics and set up your development environment across different networks."
    },
    {
      icon: Terminal,
      title: "RPC Documentation",
      description: "Detailed RPC references for integrating OK Token with your projects across multiple chains."
    },
    {
      icon: Code2,
      title: "Code Examples",
      description: "Real-world examples and templates for developing wallets, DApps, and services with OK Token."
    },
    {
      icon: Link2,
      title: "Multichain Integration",
      description: "Comprehensive guides for integrating OK across Ethereum, BSC, Polygon, Avalanche, and more."
    },
    {
      icon: BookKey,
      title: "Crypto Glossary",
      description: "Essential OK and blockchain terminology guide for both new and experienced developers."
    },
    {
      icon: Globe2,
      title: "Decentralized Apps",
      description: "Resources and guides for building DApps using OK Token across different chains."
    },
    {
      icon: Shield,
      title: "Security Best Practices",
      description: "Learn to secure your applications with proper wallet integration and smart contract deployment."
    },
    {
      icon: Lock,
      title: "Staking & Locks",
      description: "Implement multichain locks and long-term staking pools to incentivize user engagement."
    }
  ];

  return (
    <section id="dev-docs" className="py-20 bg-gradient-to-b from-white to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="h-12 w-12 text-cyan-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Developer Documentation</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive resources and guides for building on the OK ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {docs.map((doc, index) => (
            <DocCard
              key={index}
              icon={doc.icon}
              title={doc.title}
              description={doc.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-cyan-50 p-6 rounded-xl">
            <Terminal className="h-8 w-8 text-cyan-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Documentation Updates</h3>
            <p className="text-gray-600">
              Our documentation is continuously updated to reflect the latest features and best practices. 
              Check back regularly for new guides, examples, and API references.
            </p>
            <div className="mt-6">
              <a 
                href="https://github.com/okcashpro"
                target="_blank"
                rel="noopener noreferrer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-cyan-600 rounded-full hover:bg-cyan-700 transition-colors"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevDocs;