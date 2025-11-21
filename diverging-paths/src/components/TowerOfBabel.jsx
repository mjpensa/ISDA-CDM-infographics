import React from 'react';
import { motion } from 'framer-motion';
import { Building2, AlertTriangle, Globe, ChevronDown } from 'lucide-react';

const TowerOfBabel = () => {
  return (
    <section
      id="tower-of-babel"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background chaos lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-red-500"
            style={{
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              height: ['50%', '100%', '50%'],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Title */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-12"
          >
            <Building2 className="w-24 h-24 mx-auto mb-6 text-red-400 opacity-80" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              The Tower of Babel
            </h1>
            <p className="text-xl text-gray-300">Post-2008 Financial Crisis</p>
          </motion.div>

          {/* Problem Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-12 space-y-6 text-lg"
          >
            <p className="leading-relaxed">
              After the 2008 financial crisis, regulators worldwide demanded transparency.
              They asked banks to report every trade, but they didn't agree on a common language.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              {[
                { flag: '🇺🇸', region: 'United States', format: 'Format A' },
                { flag: '🇪🇺', region: 'Europe', format: 'Format B' },
                { flag: '🇯🇵', region: 'Asia', format: 'Format C' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                >
                  <div className="text-4xl mb-3">{item.flag}</div>
                  <div className="font-semibold">{item.region}</div>
                  <div className="text-sm text-gray-400 mt-2">{item.format}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* The Problem - Spaghetti Architecture */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="bg-red-900/30 border border-red-500/50 rounded-xl p-8 mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              <h2 className="text-3xl font-bold">Spaghetti Architecture</h2>
            </div>
            <p className="text-lg mb-6">
              Banks responded by building a messy patchwork of systems designed to satisfy
              each regulator individually.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 justify-center">
                <span className="text-2xl">💸</span>
                <span>Expensive</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-2xl">🔴</span>
                <span>Chaotic</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-2xl">⚠️</span>
                <span>Error-prone</span>
              </div>
            </div>
          </motion.div>

          {/* The Solution - CDM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-400/50 rounded-xl p-8"
          >
            <Globe className="w-16 h-16 mx-auto mb-4 text-blue-400" />
            <h2 className="text-3xl font-bold mb-4">The Solution Emerges</h2>
            <p className="text-lg leading-relaxed">
              To fix this, the industry created the <span className="font-bold text-blue-400">ISDA Common Domain Model (CDM)</span>:
              a single, digital "language" that defines exactly what a trade is, ensuring everyone means
              the same thing when they say "Swap" or "Bond."
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16"
          >
            <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
            <p className="text-sm text-gray-400 mt-2">Scroll to see how banks responded</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TowerOfBabel;
