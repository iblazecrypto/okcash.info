import React from 'react';
import { Twitter, Github, Disc as Discord, MessageCircle } from 'lucide-react';

const Community = () => {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with developers, users, and enthusiasts from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <a href="https://twitter.com/okmultichain" 
             target="_blank"
             rel="noopener noreferrer"
             className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 transition-colors">
            <div className="flex items-center space-x-4 mb-4">
              <Twitter className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-semibold">Twitter</h3>
            </div>
            <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
              Follow us for the latest updates and announcements
            </p>
          </a>

          <a href="https://github.com/okcashpro" 
             target="_blank"
             rel="noopener noreferrer"
             className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 transition-colors">
            <div className="flex items-center space-x-4 mb-4">
              <Github className="h-6 w-6 text-gray-900" />
              <h3 className="text-xl font-semibold">GitHub</h3>
            </div>
            <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
              Contribute to our open-source development
            </p>
          </a>

          <a href="https://discord.gg/grvpc8c" 
             target="_blank"
             rel="noopener noreferrer"
             className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 transition-colors">
            <div className="flex items-center space-x-4 mb-4">
              <Discord className="h-6 w-6 text-indigo-600" />
              <h3 className="text-xl font-semibold">Discord</h3>
            </div>
            <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
              Join our active Discord community
            </p>
          </a>

          <a href="https://t.me/ok_heroes" 
             target="_blank"
             rel="noopener noreferrer"
             className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 transition-colors">
            <div className="flex items-center space-x-4 mb-4">
              <MessageCircle className="h-6 w-6 text-blue-500" />
              <h3 className="text-xl font-semibold">Telegram</h3>
            </div>
            <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
              Connect with our global Telegram community
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;