'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';

const Hero = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="relative h-screen w-full">
      {/* Header */}
      <Header />
      
      {/* Content */}
      <div className="flex h-full items-center justify-center px-4 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">
            Unlimited Movies & TV Shows
          </h1>
          <p className="mb-8 text-lg md:text-xl lg:text-2xl">
            Watch anywhere. Stream your favorite content anytime.
          </p>

          {/* Email Signup Form */}
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-lg">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full rounded bg-black/60 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-600 sm:w-96"
              />
              <button className="group relative rounded bg-red-600 px-8 py-3 font-semibold text-white transition-all hover:bg-red-700">
                Get Started
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;