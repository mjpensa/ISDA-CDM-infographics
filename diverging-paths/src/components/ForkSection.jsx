import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, TrendingUp, Shield } from 'lucide-react';

const ForkSection = () => {
  return (
    <section
      id="fork-section"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-light via-white to-neutral-light relative"
    >
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <GitBranch className="w-20 h-20 mx-auto mb-6 text-gray-600" />
          <h2 className="text-5xl font-bold text-neutral-dark mb-4">
            The Fork in the Road
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With this new common language available, a strategic divide opened up in the banking world.
            Two distinct paths emerged for adopting the CDM.
          </p>
        </motion.div>

        {/* The Fork Visual */}
        <div className="relative max-w-6xl mx-auto mb-16">
          {/* Fork illustration */}
          <svg className="w-full h-64" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid meet">
            {/* Starting point */}
            <motion.circle
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              cx="400"
              cy="250"
              r="15"
              fill="#6B7280"
            />

            {/* Left path (Native) */}
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
              d="M 400 250 Q 300 200, 150 50"
              stroke="#0066CC"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />

            {/* Right path (Translator) */}
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
              d="M 400 250 Q 500 200, 650 50"
              stroke="#FF8C00"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />

            {/* Endpoint circles */}
            <motion.circle
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2, type: "spring" }}
              cx="150"
              cy="50"
              r="20"
              fill="#0066CC"
            />
            <motion.circle
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2, type: "spring" }}
              cx="650"
              cy="50"
              r="20"
              fill="#FF8C00"
            />
          </svg>
        </div>

        {/* Two Paths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Path A - Native Speaker */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 60px rgba(0, 102, 204, 0.15)" }}
            className="bg-gradient-to-br from-native-bg to-white border-2 border-native-primary rounded-2xl p-8 cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-10 h-10 text-native-primary" />
              <div>
                <h3 className="text-3xl font-bold text-native-primary">Path A</h3>
                <p className="text-sm text-gray-600">The Native Speaker</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="inline-block bg-native-primary text-white px-4 py-2 rounded-full font-semibold mb-3">
                J.P. Morgan
              </div>
              <h4 className="text-xl font-bold text-neutral-dark mb-2">Strategy: "Native Adoption"</h4>
              <p className="text-gray-700 leading-relaxed">
                J.P. Morgan chose the difficult path. Instead of just using the CDM to talk to regulators,
                they decided to <span className="font-bold text-native-primary">think in CDM</span>.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="font-bold text-red-700 mb-2">💰 The Cost</div>
                <ul className="text-sm text-red-600 space-y-1">
                  <li>• High upfront investment</li>
                  <li>• Requires rewriting internal "plumbing"</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="font-bold text-green-700 mb-2">🎯 The Reward</div>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Deleted distinction between internal and regulatory data</li>
                  <li>• Immune to constant translation costs</li>
                  <li>• Paying down technical debt once and for all</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-native-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-native-primary/90 transition-colors"
                onClick={() => {
                  document.getElementById('path-a')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Path A →
              </motion.button>
            </div>
          </motion.div>

          {/* Path B - Translator */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 60px rgba(255, 140, 0, 0.15)" }}
            className="bg-gradient-to-br from-translator-bg to-white border-2 border-translator-primary rounded-2xl p-8 cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-10 h-10 text-translator-primary" />
              <div>
                <h3 className="text-3xl font-bold text-translator-primary">Path B</h3>
                <p className="text-sm text-gray-600">The Translator</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="inline-block bg-translator-primary text-white px-4 py-2 rounded-full font-semibold mb-3 text-sm">
                Bank of America, Citi, Goldman Sachs, BNP Paribas
              </div>
              <h4 className="text-xl font-bold text-neutral-dark mb-2">Strategy: "Translation Layer"</h4>
              <p className="text-gray-700 leading-relaxed">
                Most major banks chose the pragmatic path. They kept their decades-old legacy systems
                but built a <span className="font-bold text-translator-primary">"Translation Layer"</span> on top.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="font-bold text-green-700 mb-2">✅ The Benefit</div>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Faster and cheaper today</li>
                  <li>• Don't have to rebuild core systems</li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-300 rounded-lg p-4">
                <div className="font-bold text-orange-700 mb-2">⚠️ The Risk</div>
                <ul className="text-sm text-orange-600 space-y-1">
                  <li>• Walked into the "Rosetta Stone Trap"</li>
                  <li>• Permanent dependency on translation maps</li>
                  <li>• Maps break with every regulatory change</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-translator-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-translator-primary/90 transition-colors"
                onClick={() => {
                  document.getElementById('path-b')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Path B →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForkSection;
