import React from 'react';
import { Smartphone, Zap, ShoppingBag, Wallet, Shield } from 'lucide-react';

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-2xl mb-6 backdrop-blur-sm border border-white/10">
            <Zap className="h-10 w-10 text-primary-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Multichain Ecosystem</h2>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            Access OKCash across 9+ major blockchains with zero fees and lightning-fast transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-primary-700/50 hover:border-primary-600/50 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary-400" />
              <h3 className="text-xl font-semibold text-white">Base</h3>
            </div>
            <p className="font-mono text-sm text-primary-200 break-all bg-primary-800/50 p-4 rounded-xl border border-primary-700/50 group-hover:border-primary-600/50">
              0x979584b07E1e14C7718C9FdaB2E35Bbb5fec2c59
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-primary-700/50 hover:border-primary-600/50 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary-400" />
              <h3 className="text-xl font-semibold text-white">Ethereum, Polygon, Avalanche, Arbitrum, Optimism, Fantom</h3>
            </div>
            <p className="font-mono text-sm text-primary-200 break-all bg-primary-800/50 p-4 rounded-xl border border-primary-700/50 group-hover:border-primary-600/50">
              0xd3Ac016b1B8C80EeAdDe4D186A9138C9324e4189
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-primary-700/50 hover:border-primary-600/50 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary-400" />
              <h3 className="text-xl font-semibold text-white">BSC</h3>
            </div>
            <p className="font-mono text-sm text-primary-200 break-all bg-primary-800/50 p-4 rounded-xl border border-primary-700/50 group-hover:border-primary-600/50">
              0x523821d20a283d955f6205B4C9252779Cd0f964B
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-primary-700/50 hover:border-primary-600/50 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary-400" />
              <h3 className="text-xl font-semibold text-white">Solana</h3>
            </div>
            <p className="font-mono text-sm text-primary-200 break-all bg-primary-800/50 p-4 rounded-xl border border-primary-700/50 group-hover:border-primary-600/50">
              HvPrYvgJiBtwUC7H4bi8L5bqnirFPWc2J9NdVy6UFiZm
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-primary-700/50 hover:border-primary-600/50 transition-all group">
            <div className="bg-primary-800/50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Smartphone className="h-6 w-6 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Web3 Integration</h3>
            <p className="text-primary-200">
              Build DApps with smart contracts for lending, gaming, and more.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-primary-700/50 hover:border-primary-600/50 transition-all group">
            <div className="bg-primary-800/50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="h-6 w-6 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Staking & DAO</h3>
            <p className="text-primary-200">
              Earn rewards through staking and participate in governance through OK DAO.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-primary-700/50 hover:border-primary-600/50 transition-all group">
            <div className="bg-primary-800/50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ShoppingBag className="h-6 w-6 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">NFT Support</h3>
            <p className="text-primary-200">
              Create, trade, and collect NFTs on multiple blockchain networks.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-primary-700/50 hover:border-primary-600/50 transition-all group">
            <div className="bg-primary-800/50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Wallet className="h-6 w-6 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Near Zero Fees</h3>
            <p className="text-primary-200">
              Near Fee-free transactions and instant settlements across the supported chains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;