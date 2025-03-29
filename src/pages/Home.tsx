import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Code, Wallet, Shield, Users, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Ecosystem from '../components/Ecosystem';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Important from '../components/Important';
import Innovation from '../components/Innovation';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Ecosystem />
      <Features />
      <Innovation />
      <Important />
      
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 mb-6">
              Explore the OK Universe
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover all aspects of the OK ecosystem and join our mission to revolutionize digital finance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-accent-500/5 to-primary-500/5 blur-3xl -z-10"></div>
            <Link 
              to="/ecosystem" 
              className="premium-card group"
            >
              <div className="premium-icon inline-block mb-6">
                <Globe className="h-8 w-8 text-primary-600 relative z-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-all duration-500">
                Ecosystem
              </h3>
              <p className="text-gray-600 group-hover:text-gray-900 transition-all duration-500">
                Explore OK's multichain universe across 9+ major blockchains.
              </p>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                <ArrowRight className="h-5 w-5 text-primary-600" />
              </div>
            </Link>
            
            <Link 
              to="/developers" 
              className="premium-card group"
            >
              <div className="premium-icon inline-block mb-6">
                <Code className="h-8 w-8 text-primary-600 relative z-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
                Developers
              </h3>
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                Build the future with powerful tools and multichain capabilities.
              </p>
            </Link>
            
            <Link 
              to="/business" 
              className="premium-card group"
            >
              <div className="premium-icon inline-block mb-6">
                <Wallet className="h-8 w-8 text-primary-600 relative z-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
                Business
              </h3>
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                Transform your business with secure, efficient payment solutions.
              </p>
            </Link>
            
            <Link 
              to="/security" 
              className="premium-card group"
            >
              <div className="premium-icon inline-block mb-6">
                <Shield className="h-8 w-8 text-primary-600 relative z-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
                Security
              </h3>
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                Learn about our advanced security features and best practices.
              </p>
            </Link>
            
            <Link 
              to="/community" 
              className="premium-card group"
            >
              <div className="premium-icon inline-block mb-6">
                <Users className="h-8 w-8 text-primary-600 relative z-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
                Community
              </h3>
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                Join our global community of developers, users, and enthusiasts.
              </p>
            </Link>
            
            <Link 
              to="/get-started" 
              className="premium-card group"
            >
              <div className="premium-icon inline-block mb-6">
                <ArrowRight className="h-8 w-8 text-primary-600 relative z-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
                Get Started
              </h3>
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                Begin your journey with OK's multichain ecosystem.
              </p>
            </Link>
          </div>
        </div>
      </section>
      <div className="h-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-conic from-primary-500/5 via-transparent to-accent-500/5 animate-spin-slow"></div>
      </div>
    </>
  );
};

export default Home;