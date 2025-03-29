import React from 'react';
import { Eye, Fingerprint, RefreshCcw, Globe, Shield, Rocket } from 'lucide-react';

const PrivacyCard = ({ icon: Icon, title, description, tips }: { icon: any, title: string, description: string, tips?: string[] }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
    {tips && (
      <ul className="space-y-2">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start space-x-2 text-gray-600">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Privacy = () => {
  const features = [
    {
      icon: Eye,
      title: "Transaction Visibility",
      description: "Understand how blockchain transparency affects your privacy when using OK tokens.",
      tips: [
        "All transactions are publicly recorded",
        "Addresses can be tracked by transaction history",
        "Practice good privacy habits consistently"
      ]
    },
    {
      icon: RefreshCcw,
      title: "Address Management",
      description: "Generate new addresses for different transactions to enhance privacy.",
      tips: [
        "Use new addresses for each payment",
        "Avoid address reuse when possible",
        "Separate addresses for different purposes"
      ]
    },
    {
      icon: Globe,
      title: "Public Address Sharing",
      description: "Be mindful when sharing addresses publicly to maintain privacy.",
      tips: [
        "Use dedicated addresses for public purposes",
        "Keep private transactions separate",
        "Consider implications of address exposure"
      ]
    },
    {
      icon: Shield,
      title: "IP Protection",
      description: "Protect your IP address while using MetaMask and interacting with DApps.",
      tips: [
        "Use a VPN for sensitive transactions",
        "Consider privacy-focused browsers",
        "Be cautious with unknown sites"
      ]
    },
    {
      icon: Fingerprint,
      title: "Transaction Privacy",
      description: "Understand the limitations and best practices for private transactions.",
      tips: [
        "Consider transaction size visibility",
        "Be aware of chain analysis techniques",
        "Use privacy-enhancing features when available"
      ]
    },
    {
      icon: Rocket,
      title: "Future Enhancements",
      description: "Stay informed about upcoming privacy features and improvements.",
      tips: [
        "Follow wallet privacy updates",
        "Learn about new privacy tools",
        "Adapt privacy practices as technology evolves"
      ]
    }
  ];

  return (
    <section id="privacy" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Protect Your Privacy</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Maintain your anonymity while using OK tokens with these essential privacy practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <PrivacyCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              tips={feature.tips}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-blue-50 p-6 rounded-xl">
            <Shield className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Privacy Best Practices</h3>
            <p className="text-gray-600">
              Remember that blockchain privacy is an ongoing practice. Stay informed about new privacy features 
              and regularly review your privacy measures to ensure they meet your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;