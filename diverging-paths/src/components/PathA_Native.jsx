import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Database, TrendingUp, Zap, Bot, Link } from 'lucide-react';
import Tooltip from './Tooltip';

const PathA_Native = () => {
  return (
    <div id="path-a" className="bg-gradient-to-br from-native-bg via-white to-native-bg border-r-4 border-native-primary">
      <div className="p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-native-primary mb-4">
            Path A: The Native Speaker
          </h2>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🗣️</span>
            <p className="text-xl text-gray-700">J.P. Morgan's Strategy</p>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            "When a trade happens at JPM, it is <span className="font-bold text-native-primary">born as a CDM object</span>."
          </p>
        </motion.div>

        {/* Approach */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg mb-8"
        >
          <h3 className="text-2xl font-bold text-neutral-dark mb-4">The Approach</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            J.P. Morgan chose the difficult path. They tore out old booking systems and replaced them
            with infrastructure that speaks <Tooltip content="ISDA Common Domain Model - A standardized data model for derivatives">CDM</Tooltip> natively.
          </p>
          <div className="bg-native-bg border-l-4 border-native-primary p-6 rounded-r-lg">
            <p className="text-neutral-dark font-semibold">
              No translation layer needed. The data IS already in the correct format.
            </p>
          </div>
        </motion.div>

        {/* One Truth Architecture */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
            <h3 className="text-2xl font-bold text-neutral-dark">"One Truth" Advantage</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Database className="w-6 h-6 text-native-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-bold text-native-primary mb-1">Golden Source</div>
                <p className="text-sm text-gray-700">Trade as <Tooltip content="Common Domain Model">CDM</Tooltip> object at the source</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-2xl">↓</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-green-700 mb-2">Trade Reporting</div>
                <p className="text-xs text-gray-600">Reads CDM object</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-green-700 mb-2">
                  <Tooltip content="Comprehensive Capital Analysis and Review">CCAR</Tooltip>/Risk
                </div>
                <p className="text-xs text-gray-600">Reads SAME CDM object</p>
              </div>
            </div>

            <div className="bg-green-100 border border-green-300 rounded-lg p-4 mt-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-700" />
                <span className="font-bold text-green-800">Result</span>
              </div>
              <ul className="text-sm text-green-700 space-y-1">
                <li>✅ Semantic consistency across enterprise</li>
                <li>✅ Definition changes → Auto-updates all reports</li>
                <li>✅ Perfect data lineage</li>
                <li>✅ Zero reconciliation needed</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Cost vs Reward */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
            <h4 className="text-lg font-bold text-red-700 mb-4">💰 The Cost</h4>
            <ul className="space-y-2 text-sm text-red-600">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>High upfront investment</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Requires rewriting the bank's deep internal "plumbing"</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
            <h4 className="text-lg font-bold text-green-700 mb-4">🎯 The Reward</h4>
            <ul className="space-y-2 text-sm text-green-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Deleted distinction between internal and regulatory data</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Immune to constant costs of translation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Paying down technical debt once and for all</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Future Readiness */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-10 h-10" />
            <h3 className="text-2xl font-bold">Future Readiness</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Link className="w-6 h-6" />
                <h4 className="text-xl font-bold">Blockchain / <Tooltip content="Distributed Ledger Technology">DLT</Tooltip></h4>
              </div>
              <p className="text-blue-100 mb-3">
                Data already standardized - ready to plug directly into tokenized assets
              </p>
              <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                ✅ READY
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Bot className="w-6 h-6" />
                <h4 className="text-xl font-bold">Artificial Intelligence / ML</h4>
              </div>
              <p className="text-blue-100 mb-3">
                Clean, consistent data ready for AI agents. No hallucinations from data quality issues.
              </p>
              <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                ✅ OPTIMIZED
              </div>
            </div>

            <div className="text-center pt-4 border-t border-white/20">
              <p className="text-lg font-bold">
                🚀 Status: Ready to dominate tomorrow's digital economy
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PathA_Native;
