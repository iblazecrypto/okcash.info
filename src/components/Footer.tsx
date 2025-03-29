import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/ok-256.png" alt="OK Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold">Okcash</span>
            </div>
            <p className="text-gray-400">
              The future of digital payments, today.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://okcash.network" className="text-gray-400 hover:text-white transition-colors" target="_blank">Okcash Network</a></li>
              <li><a href="/developers" className="text-gray-400 hover:text-white transition-colors">Documenation</a></li>
              <li><a href="https://github.com/okcashpro/okcash-whitepaper" className="text-gray-400 hover:text-white transition-colors" target="_blank">Whitepaper</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="https://github.com/okcashpro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
              <li><a href="https://twitter.com/okmultichain" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="https://discord.gg/grvpc8c" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Discord</a></li>
              <li><a href="https://t.me/ok_heroes" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Telegram</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">OK</h3>
            <ul className="space-y-2">
              <li><a href="https://okcash.org" className="text-gray-400 hover:text-white transition-colors" target="_blank">Okcash.org</a></li>
              <li><a href="https://edge.okcash.network" className="text-gray-400 hover:text-white transition-colors" target="_blank">Edge</a></li>
              <li><a href="https://www.coingecko.com/en/coins/okcash" className="text-gray-400 hover:text-white transition-colors" target="_blank">Coingecko</a></li>
              <li><a href="https://coinmarketcap.com/currencies/okcash/" className="text-gray-400 hover:text-white transition-colors" target="_blank">Coinmarketcap</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Okcash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;