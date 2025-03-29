import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, MessageCircle, Disc as Discord } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/ok-256.png" alt="OK Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold">Okcash</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering the future of digital finance through decentralized, sustainable, and accessible blockchain technology across multiple networks.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/okmultichain" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://github.com/okcashpro" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://discord.gg/grvpc8c" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors">
                <Discord className="h-6 w-6" />
              </a>
              <a href="https://t.me/ok_heroes" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/developers" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/glossary" className="text-gray-400 hover:text-white transition-colors">Glossary</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/ecosystem#technical" className="text-gray-400 hover:text-white transition-colors">Technical</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Ecosystem</h3>
            <ul className="space-y-2">
              <li><Link to="/ecosystem" className="text-gray-400 hover:text-white transition-colors">Networks</Link></li>
              <li><Link to="/business" className="text-gray-400 hover:text-white transition-colors">Business</Link></li>
              <li><Link to="/developers" className="text-gray-400 hover:text-white transition-colors">Developers</Link></li>
              <li><Link to="/security" className="text-gray-400 hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Official Links</h3>
            <ul className="space-y-2">
              <li><a href="https://okcash.network" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">OK Network</a></li>
              <li><a href="https://okcash.org" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Okcash.org</a></li>
              <li><a href="https://edge.okcash.network" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Edge</a></li>
              <li><a href="https://github.com/okcashpro/okcash-whitepaper" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Whitepaper</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Okcash. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.coingecko.com/en/coins/okcash" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
              Coingecko
            </a>
            <a href="https://coinmarketcap.com/currencies/okcash/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
              CoinMarketCap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer