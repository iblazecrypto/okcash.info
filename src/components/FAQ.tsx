import React from 'react';
import { HelpCircle, Coins, Shield, Clock, LineChart, Users, Wallet } from 'lucide-react';

interface FAQItem {
  icon: any;
  question: string;
  answer: string;
  points?: string[];
  highlight?: {
    title: string;
    items: string[];
  };
}

const FAQCard = ({ icon: Icon, question, answer, points, highlight }: FAQItem) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
    <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-amber-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{question}</h3>
    <p className="text-gray-600 leading-relaxed mb-4">{answer}</p>
    {points && (
      <ul className="space-y-2 mb-4">
        {points.map((point, index) => (
          <li key={index} className="flex items-start space-x-2 text-gray-600">
            <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    )}
    {highlight && (
      <div className="bg-amber-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">{highlight.title}</h4>
        <ul className="space-y-2">
          {highlight.items.map((item, index) => (
            <li key={index} className="flex items-start space-x-2 text-gray-600 text-sm">
              <span className="w-2 h-2 bg-amber-600 rounded-full mt-1.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const FAQ = () => {
  const faqs: FAQItem[] = [
    {
      icon: Coins,
      question: "How does OK staking work in the new multichain system?",
      answer: "Staking OK in our multichain universe is easy and doesn't require keeping your wallet open or running a node. Thanks to our secure staking pools on multiple networks, you can stake and earn rewards effortlessly.",
      points: [
        "Connect your wallet to your preferred chain",
        "Stake through Team.Finance's secure, audited platform",
        "Rewards are managed by the pool directly",
        "No need to keep wallet open"
      ]
    },
    {
      icon: Shield,
      question: "How do I back up my wallet, and what should I do if I need to restore it?",
      answer: "Your wallet's recovery phrase is your master key to accessing your OK balance across any supported chain and device.",
      points: [
        "Write down your 12- or 24-word recovery phrase",
        "Store it offline in a secure location",
        "Avoid digital copies like screenshots",
        "Never share your recovery phrase"
      ],
      highlight: {
        title: "To restore your wallet:",
        items: [
          "Download the wallet app on your new device",
          "Select the 'Import Wallet' option",
          "Enter your recovery phrase"
        ]
      }
    },
    {
      icon: Clock,
      question: "How long does it take for staked OK to earn rewards?",
      answer: "Rewards start accumulating immediately after staking your OK on any supported chain. The rewards are determined by the specific APY of that chain's pool.",
      points: [
        "No waiting periods or lock-up times",
        "APYs vary based on total staked OK",
        "Different rates for different chains",
        "Check pool APYs before staking"
      ]
    },
    {
      icon: Wallet,
      question: "What's the best way to keep my OK secure across multiple chains?",
      answer: "Security is our top priority. Follow these best practices to keep your OK secure:",
      points: [
        "Use reputable wallet providers (Trust Wallet, MetaMask, Coinbase Wallet)",
        "Enable encryption and security features",
        "Consider multisignature wallets for large amounts",
        "Be cautious of phishing attempts",
        "Only interact with official OK platforms"
      ]
    },
    {
      icon: LineChart,
      question: "What should I know about APY rates in OK's multichain staking pools?",
      answer: "Our OK staking pools offer competitive APYs across different chains, with rates varying based on several factors.",
      points: [
        "Staking pool size affects rates",
        "Duration impacts returns",
        "Total staked OK influences APY",
        "Market dynamics play a role"
      ],
      highlight: {
        title: "Current Example Rates:",
        items: [
          "82% APY on Base",
          "Up to 300% APY on Arbitrum"
        ]
      }
    },
    {
      icon: Users,
      question: "Can I participate in OK's governance through staking or holding OK?",
      answer: "Yes! The upcoming OK DAO enables active participation in governance for stakers and holders.",
      points: [
        "Submit proposals for new projects and integrations",
        "Vote on community initiatives",
        "Shape OK's future direction",
        "Be part of decentralized governance"
      ]
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="h-12 w-12 text-amber-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about OK's multichain ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <FAQCard
              key={index}
              icon={faq.icon}
              question={faq.question}
              answer={faq.answer}
              points={faq.points}
              highlight={faq.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;