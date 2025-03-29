import React from 'react';
import { Users, Code, Palette, Globe, Megaphone, Shield, Rocket } from 'lucide-react';

const RoleCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
    <div className="bg-rose-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-rose-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Collaborators = () => {
  const roles = [
    {
      icon: Code,
      title: "Developers",
      description: "Building and integrating cutting-edge technology across multiple chains"
    },
    {
      icon: Palette,
      title: "Artists",
      description: "Creating the visual identity and iconic designs of OK"
    },
    {
      icon: Megaphone,
      title: "Community Leaders",
      description: "Rallying support and spreading awareness globally"
    },
    {
      icon: Globe,
      title: "Regional Advocates",
      description: "Championing OK in local communities worldwide"
    }
  ];

  return (
    <section id="collaborators" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Users className="h-12 w-12 text-rose-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">OK Heroes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the ranks of over 70+ global contributors fueling the future of decentralization.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md mb-12">
          <blockquote className="text-2xl text-gray-700 italic text-center mb-4">
            "We are the innovators, the dreamers, and the doers—the rebels with a vision. With our collective strength, we believe in a future where finance belongs to everyone."
          </blockquote>
          <p className="text-gray-500 text-center">~ Inspired by "The Crazy Ones," Steve Jobs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {roles.map((role, index) => (
            <RoleCard
              key={index}
              icon={role.icon}
              title={role.title}
              description={role.description}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Become an OK Hero?</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Rocket className="h-6 w-6 text-rose-600 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Be part of a global network driving innovation in social payments, Web3, Gaming, and multichain DeFi</span>
              </li>
              <li className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-rose-600 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Shape the future of decentralized finance and leave your mark on the crypto world</span>
              </li>
              <li className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-rose-600 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Collaborate with like-minded visionaries and expand your horizons</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Presence</h3>
            <p className="text-gray-600 mb-4">
              Our heroes span across the globe, from:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                "USA 🇺🇸", "Canada 🇨🇦", "Mexico 🇲🇽", "Brazil 🇧🇷",
                "Spain 🇪🇸", "France 🇫🇷", "Norway 🇳🇴", "Germany 🇩🇪",
                "UK 🇬🇧", "Indonesia 🇮🇩", "Australia 🇦🇺", "Egypt 🇪🇬"
              ].map((country, index) => (
                <div key={index} className="bg-rose-50 px-4 py-2 rounded-lg text-gray-700">
                  {country}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-rose-600 rounded-full hover:bg-rose-700 transition-colors"
          >
            Become an OK Hero
          </a>
        </div>
      </div>
    </section>
  );
};

export default Collaborators;