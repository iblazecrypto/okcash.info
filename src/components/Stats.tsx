import React from 'react';
import { Globe, Coins, Trophy, ArrowRight, Star, Award } from 'lucide-react';

const Stats = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-primary-900 to-primary-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 border border-white/20">
            <div className="relative mb-6 inline-block">
              <div className="absolute inset-0 bg-primary-400 rounded-full blur-lg opacity-50"></div>
              <div className="relative bg-gradient-to-br from-primary-400 to-primary-600 p-4 rounded-full">
                <Globe className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="text-6xl font-bold text-white mb-3 glow">9+</div>
            <h3 className="text-2xl font-semibold text-white/90 mb-2">Chains</h3>
            <p className="text-primary-200">Leading the Multichain Universe</p>
            <Star className="h-6 w-6 text-yellow-400 mx-auto mt-4 animate-pulse" />
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 border border-white/20">
            <div className="relative mb-6 inline-block">
              <div className="absolute inset-0 bg-primary-400 rounded-full blur-lg opacity-50"></div>
              <div className="relative bg-gradient-to-br from-primary-400 to-primary-600 p-4 rounded-full">
                <Coins className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="text-6xl font-bold text-white mb-3 glow">105M</div>
            <h3 className="text-2xl font-semibold text-white/90 mb-2">Max Supply</h3>
            <p className="text-primary-200">Scarcity Meets Sustainability</p>
            <Award className="h-6 w-6 text-yellow-400 mx-auto mt-4 animate-pulse" />
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 border border-white/20">
            <div className="relative mb-6 inline-block">
              <div className="absolute inset-0 bg-primary-400 rounded-full blur-lg opacity-50"></div>
              <div className="relative bg-gradient-to-br from-primary-400 to-primary-600 p-4 rounded-full">
                <Trophy className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="text-6xl font-bold text-white mb-3 glow">10+</div>
            <h3 className="text-2xl font-semibold text-white/90 mb-2">Years in Crypto</h3>
            <p className="text-primary-200">Veterans of the Blockchain Revolution</p>
            <Trophy className="h-6 w-6 text-yellow-400 mx-auto mt-4 animate-pulse" />
          </div>
        </div>

        <div className="mt-20 text-center max-w-4xl mx-auto">
          <p className="text-3xl text-white mb-8 font-bold leading-tight">
            Be Part of the OK Movement! Decentralized, Open-Source, and Powered by YOU!
          </p>
          <p className="text-lg text-primary-200 leading-relaxed max-w-3xl mx-auto mb-12">
            OK is Pure Community-Driven Crypto Goodness. Join the Ranks of the OK Heroes and Let's Make Crypto History Together!
            OK is not a security, it never had an ICO, nor any kind of funding rounds.
            OK is self sustainable and is fully supported by volunteers (Just like Bitcoin). 🤝
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;