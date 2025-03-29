import React from 'react';
import { Globe, Coins, Trophy, ArrowRight } from 'lucide-react';

const Stats = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-primary-50/50 to-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-100/20 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="premium-card text-center">
            <div className="premium-icon inline-block mb-6">
              <Globe className="h-10 w-10 text-primary-600 relative z-10" />
            </div>
            <div className="text-5xl font-bold text-gray-900 mb-3">9+</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Chains</h3>
            <p className="text-gray-600">Leading the Multichain Universe 🌐</p>
          </div>

          <div className="premium-card text-center">
            <div className="premium-icon inline-block mb-6">
              <Coins className="h-10 w-10 text-primary-600 relative z-10" />
            </div>
            <div className="text-5xl font-bold text-gray-900 mb-3">105M</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Max Supply</h3>
            <p className="text-gray-600">Scarcity Meets Sustainability 💎</p>
          </div>

          <div className="premium-card text-center">
            <div className="premium-icon inline-block mb-6">
              <Trophy className="h-10 w-10 text-primary-600 relative z-10" />
            </div>
            <div className="text-5xl font-bold text-gray-900 mb-3">10+</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Years in Crypto</h3>
            <p className="text-gray-600">Veterans of the Blockchain Revolution 🏆</p>
          </div>
        </div>

        <div className="mt-24 text-center max-w-4xl mx-auto">
          <p className="text-3xl text-gray-800 mb-8 font-semibold leading-tight">
            Be Part of the OK Movement! Decentralized, Open-Source, and Powered by YOU! 🌟
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            OK is Pure Community-Driven Crypto Goodness. Join the Ranks of the OK Heroes and Let's Make Crypto History Together!
            OK is not a security, it never had an ICO, nor any kind of funding rounds.
            OK is self sustainable and is fully supported by volunteers (Just like Bitcoin). 🤝
          </p>
        </div>
        <div className="mt-16 text-center">
          <button className="hero-button inline-flex items-center justify-center space-x-2">
            <span>Learn more about OK</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;