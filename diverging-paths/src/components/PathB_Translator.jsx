import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, XCircle, Map, Layers, AlertCircle, Bot, Link } from 'lucide-react';
import Tooltip from './Tooltip';

const PathB_Translator = () => {
  return (
    <div id="path-b" className="bg-gradient-to-br from-translator-bg via-white to-translator-bg border-l-4 border-translator-primary">
      <div className="p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-translator-primary mb-4">
            Path B: The Translator
          </h2>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">📖</span>
            <p className="text-xl text-gray-700">Peers' Strategy</p>
          </div>
          <div className="inline-block bg-translator-primary text-white px-4 py-2 rounded-full font-semibold text-sm mb-4">
            Bank of America • Citi • Goldman Sachs • BNP Paribas
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            "Like a tourist using a phrasebook - internal systems speak their old language."
          </p>
        </motion.div>

        {/* Approach */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg mb-8"
        >
          <h3 className="text-2xl font-bold text-neutral-dark mb-4">The Approach</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most major banks chose the pragmatic path. They kept their decades-old legacy systems
            but built a "Translation Layer" on top.
          </p>
          <div className="bg-translator-bg border-l-4 border-translator-primary p-6 rounded-r-lg">
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-5 h-5 text-translator-primary" />
              <p className="text-neutral-dark font-semibold">How It Works:</p>
            </div>
            <p className="text-gray-600 text-sm">
              When a regulator asks for a report, the bank pushes data through a "translator"
              (often provided by vendors) to convert it into <Tooltip content="Common Domain Model">CDM</Tooltip>.
            </p>
          </div>
        </motion.div>

        {/* Benefits and Risks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
            <h4 className="text-lg font-bold text-green-700 mb-4">✅ The Benefit</h4>
            <ul className="space-y-2 text-sm text-green-600">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Faster and cheaper today</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Don't have to rebuild core systems</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6">
            <h4 className="text-lg font-bold text-orange-700 mb-4">⚠️ The Risk</h4>
            <ul className="space-y-2 text-sm text-orange-600">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Walked into the "Rosetta Stone Trap"</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* The Rosetta Stone Trap */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-400 rounded-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-10 h-10 text-red-600" />
            <h3 className="text-2xl font-bold text-red-800">The Rosetta Stone Trap</h3>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Map className="w-6 h-6 text-orange-600" />
              <h4 className="font-bold text-neutral-dark">The Permanent Dependency</h4>
            </div>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              When a bank relies on a translation layer, they create a permanent dependency on a map.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Regulator changes a rule → Map breaks</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Bank updates internal system → Map breaks</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Must constantly fix and maintain this "Rosetta Stone"</span>
              </div>
            </div>
          </div>

          <div className="bg-red-100 border border-red-300 rounded-lg p-4">
            <p className="text-sm text-red-800 italic">
              "If a regulator asks 'Where did this number come from?' — Peers must dig through
              translation logic. The data lineage trail goes cold."
            </p>
          </div>
        </motion.div>

        {/* Two Truths Problem */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-400 rounded-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-10 h-10 text-orange-600" />
            <h3 className="text-2xl font-bold text-orange-800">"Two Truths" Problem</h3>
          </div>

          <p className="text-gray-700 mb-6">
            Trade Reporting team and Capital Planning (<Tooltip content="Comprehensive Capital Analysis and Review">CCAR</Tooltip>) team operate in silos:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 border-2 border-orange-300">
              <div className="font-bold text-orange-700 mb-2">Team 1: Trade Reporting</div>
              <p className="text-sm text-gray-600 mb-2">
                Raw data → Maps to <Tooltip content="Common Domain Model">CDM</Tooltip> → Reports to <Tooltip content="Commodity Futures Trading Commission">CFTC</Tooltip>
              </p>
              <div className="text-xs text-gray-500 italic">Uses Map A logic</div>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-orange-300">
              <div className="font-bold text-orange-700 mb-2">Team 2: CCAR Reporting</div>
              <p className="text-sm text-gray-600 mb-2">
                SAME raw data → Maps to proprietary format → Reports to Fed
              </p>
              <div className="text-xs text-gray-500 italic">Uses Map B logic</div>
            </div>
          </div>

          <div className="bg-red-100 border-2 border-red-400 rounded-lg p-6">
            <h4 className="font-bold text-red-800 mb-3">The Disaster:</h4>
            <p className="text-sm text-red-700 mb-4">
              If the two teams define terms like "Notional Amount" or "Maturity Date" slightly
              differently in their respective translation maps, the bank reports contradictory data
              to different regulators.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-3 rounded border border-red-300 text-center">
                <div className="text-xs text-gray-600 mb-1">Federal Reserve sees</div>
                <div className="text-2xl font-bold text-red-700">$100M</div>
                <div className="text-xs text-gray-500 mt-1">(from Map B)</div>
              </div>
              <div className="bg-white p-3 rounded border border-red-300 text-center">
                <div className="text-xs text-gray-600 mb-1">CFTC sees</div>
                <div className="text-2xl font-bold text-red-700">$101M</div>
                <div className="text-xs text-gray-500 mt-1">(from Map A)</div>
              </div>
            </div>
            <div className="text-xs text-red-600 space-y-1">
              <div>🕐 Thousands of hours reconciling differences</div>
              <div>⚠️ Risk of regulatory penalties</div>
            </div>
          </div>
        </motion.div>

        {/* Future Challenges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-600 to-orange-600 text-white rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-10 h-10" />
            <h3 className="text-2xl font-bold">Future Challenges</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Link className="w-6 h-6" />
                <h4 className="text-xl font-bold">Blockchain / <Tooltip content="Distributed Ledger Technology">DLT</Tooltip></h4>
              </div>
              <p className="text-orange-100 mb-3">
                Will need to build ANOTHER translation layer, leaving them "off-chain" and slow
              </p>
              <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                ❌ NOT READY
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Bot className="w-6 h-6" />
                <h4 className="text-xl font-bold">Artificial Intelligence / ML</h4>
              </div>
              <p className="text-orange-100 mb-3">
                Feeding AI "translated" data which can lose context and nuance, leading to hallucinations or bad insights
              </p>
              <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                ⚠️ LIMITED
              </div>
            </div>

            <div className="text-center pt-4 border-t border-white/20">
              <p className="text-lg font-bold">
                🐢 Status: Using CDM as a dictionary to survive today's regulations
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PathB_Translator;
