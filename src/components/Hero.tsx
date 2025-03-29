import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-black to-black"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/ok-256.png" 
              alt="OK Logo" 
              className="h-24 w-24 relative z-10"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            OK is multichain: sustainability & decentralization.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
            OK is the market symbol for Okcash, a decentralized cryptocurrency born on November 24, 2014. Simple to use, efficient, and sustainable, OK Token enables developers to expand their services while providing more value to users across 9+ blockchains.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <Link 
              to="/get-started" 
              className="hero-button flex items-center justify-center space-x-2 w-full group relative overflow-hidden"
            >
              <span className="relative z-10">Get started with OK</span>
              <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <a 
              href="https://okcash.network#wallets"
              target="_blank"
              rel="noopener noreferrer" 
              className="relative group overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 px-8 py-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 w-full flex items-center justify-center space-x-2"
            >
              <span className="relative z-10">Choose your wallet</span>
              <ArrowRight className="h-5 w-5 relative z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </a>
            <a 
              href="https://okcash.network#exchanges"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 px-8 py-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 w-full flex items-center justify-center space-x-2"
            >
              <span className="relative z-10">Buy OK</span>
              <ArrowRight className="h-5 w-5 relative z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
              <Shield className="h-12 w-12 text-primary-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Secure</h3>
              <p className="text-gray-400 text-center">Advanced encryption and proven blockchain technology</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
              <Clock className="h-12 w-12 text-primary-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Fast</h3>
              <p className="text-gray-400 text-center">Quick transactions with minimal fees</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
              <Users className="h-12 w-12 text-primary-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Community Driven</h3>
              <p className="text-gray-400 text-center">Active global community and development team</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/5 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;