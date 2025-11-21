import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, TrendingDown, Award, AlertTriangle } from 'lucide-react';

const FutureDivergence = () => {
  return (
    <section
      id="future-divergence"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
    >
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">The Future Divergence</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            How these strategic choices shape tomorrow's digital economy
          </p>
        </motion.div>

        {/* Side-by-side comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          {/* J.P. Morgan - Success */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-500/20 to-green-500/20 backdrop-blur-sm border-2 border-green-400 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <Rocket className="w-16 h-16 text-green-400" />
                <div>
                  <h3 className="text-3xl font-bold text-green-400">J.P. Morgan</h3>
                  <p className="text-blue-200">The Native Speaker</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-6 h-6 text-green-400" />
                    <h4 className="text-xl font-bold">Position</h4>
                  </div>
                  <p className="text-green-200 italic text-lg mb-4">
                    "We learned the language. Now we're ready for the future."
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 text-lg">✅</span>
                      <span>Native blockchain integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 text-lg">✅</span>
                      <span>AI-powered everything</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 text-lg">✅</span>
                      <span>Zero additional translation overhead</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 text-lg">✅</span>
                      <span>Competitive advantage for next decade</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-500/20 border border-green-400 rounded-lg p-4 text-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl mb-2"
                  >
                    🚀
                  </motion.div>
                  <p className="font-bold text-green-400 text-lg">Ready to Lead</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Peers - Struggle */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm border-2 border-orange-400 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <TrendingDown className="w-16 h-16 text-orange-400" />
                <div>
                  <h3 className="text-3xl font-bold text-orange-400">Peer Banks</h3>
                  <p className="text-orange-200">The Translators</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-6 h-6 text-orange-400" />
                    <h4 className="text-xl font-bold">Position</h4>
                  </div>
                  <p className="text-orange-200 italic text-lg mb-4">
                    "We saved money today, but now we're stuck."
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 text-lg">⚠️</span>
                      <span>Need new translation layers for every new technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 text-lg">⚠️</span>
                      <span>Always one step behind</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 text-lg">⚠️</span>
                      <span>Accumulating technical debt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 text-lg">⚠️</span>
                      <span>Playing defense, not offense</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-500/20 border border-orange-400 rounded-lg p-4 text-center">
                  <div className="text-6xl mb-2">🐢</div>
                  <p className="font-bold text-orange-400 text-lg">Playing Catch-Up</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl p-12 text-center border-2 border-blue-400 shadow-2xl">
            <h3 className="text-4xl font-bold mb-6">The Strategic Insight</h3>
            <p className="text-2xl leading-relaxed font-medium text-blue-100">
              "While peers are using the CDM as a{' '}
              <span className="text-orange-300 font-bold">dictionary</span>{' '}
              to survive today's regulations, J.P. Morgan is{' '}
              <span className="text-green-300 font-bold">learning the language</span>{' '}
              to dominate tomorrow's digital economy."
            </p>

            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="text-left">
                  <div className="font-bold text-orange-300 mb-2">📖 Using a Dictionary</div>
                  <ul className="space-y-1 text-blue-200 text-xs">
                    <li>• Short-term convenience</li>
                    <li>• Permanent dependency</li>
                    <li>• Limited future capability</li>
                  </ul>
                </div>
                <div className="text-left">
                  <div className="font-bold text-green-300 mb-2">🗣️ Learning the Language</div>
                  <ul className="space-y-1 text-blue-200 text-xs">
                    <li>• Upfront investment</li>
                    <li>• True fluency achieved</li>
                    <li>• Unlimited future potential</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureDivergence;
