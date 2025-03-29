import React from 'react';
import { Smartphone, LampDesk as Desktop, ShoppingBag, Wallet } from 'lucide-react';

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Multichain Ecosystem</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access OKCash across 9+ major blockchains with zero fees and lightning-fast transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Base</h3>
            <p className="font-mono text-sm text-gray-600 break-all">
              0x979584b07E1e14C7718C9FdaB2E35Bbb5fec2c59
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Ethereum, Polygon, Avalanche, Arbitrum, Optimism, Fantom</h3>
            <p className="font-mono text-sm text-gray-600 break-all">
              0xd3Ac016b1B8C80EeAdDe4D186A9138C9324e4189
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">BSC</h3>
            <p className="font-mono text-sm text-gray-600 break-all">
              0x523821d20a283d955f6205B4C9252779Cd0f964B
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Solana</h3>
            <p className="font-mono text-sm text-gray-600 break-all">
              HvPrYvgJiBtwUC7H4bi8L5bqnirFPWc2J9NdVy6UFiZm
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Web3 Integration</h3>
            <p className="text-gray-600">
              Build DApps with smart contracts for lending, gaming, and more.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Desktop className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Staking & DAO</h3>
            <p className="text-gray-600">
              Earn rewards through staking and participate in governance through OK DAO.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <ShoppingBag className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">NFT Support</h3>
            <p className="text-gray-600">
              Create, trade, and collect NFTs on multiple blockchain networks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Wallet className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Near Zero Fees</h3>
            <p className="text-gray-600">
              Near Fee-free transactions and instant settlements across the supported chains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;