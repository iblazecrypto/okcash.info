import React from 'react';
import { Globe, Leaf, Users, Shield, ArrowRight } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Principles</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built on strong foundations of decentralization, sustainability, and accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="p-3 bg-green-100 rounded-lg">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Decentralization</h3>
              <p className="text-gray-600">
                True peer-to-peer network with community governance and distributed consensus through open-source development.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="p-3 bg-green-100 rounded-lg">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Energy-efficient Proof of Stake consensus with long-term scalability and environmental consciousness.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="p-3 bg-green-100 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-600">
                User-friendly interfaces across multiple platforms with low entry barriers and strong community support.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="p-3 bg-green-100 rounded-lg">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p className="text-gray-600">
                Advanced security features with strong encryption and comprehensive wallet protection measures.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#technical" className="inline-flex items-center text-green-600 hover:text-green-700">
            <span>Learn about our technical infrastructure</span>
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;