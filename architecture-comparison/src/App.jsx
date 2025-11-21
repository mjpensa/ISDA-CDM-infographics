import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useStore } from './store/useStore';
import LegacyColumn from './components/LegacyColumn';
import NativeColumn from './components/NativeColumn';
import TranslatorColumn from './components/TranslatorColumn';
import ControlPanel from './components/ControlPanel';
import ComparisonDashboard from './components/ComparisonDashboard';
import GlossaryTooltip from './components/GlossaryTooltip';

function App() {
  const { viewMode, isTracing, traceStep, nextTraceStep, stopTrace } = useStore();

  // Auto-advance trace animation
  useEffect(() => {
    if (!isTracing) return;

    const timer = setTimeout(() => {
      if (traceStep < 6) {
        nextTraceStep();
      } else {
        stopTrace();
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [isTracing, traceStep, nextTraceStep, stopTrace]);

  const showLegacy = viewMode === 'all';
  const showNative = viewMode === 'all' || viewMode === 'native-vs-translator';
  const showTranslator = viewMode === 'all' || viewMode === 'native-vs-translator';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-2xl">
        <div className="container mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              The Architecture Comparison
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-4">
              Three Approaches to Banking Trade Reporting with CDM
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white bg-opacity-10 px-3 py-1 rounded-full">
                <span>Key Terms:</span>
                <GlossaryTooltip term="CDM">CDM</GlossaryTooltip>
                <span className="opacity-50">•</span>
                <GlossaryTooltip term="CCAR">CCAR</GlossaryTooltip>
                <span className="opacity-50">•</span>
                <GlossaryTooltip term="CFTC">CFTC</GlossaryTooltip>
                <span className="opacity-50">•</span>
                <GlossaryTooltip term="DLT">DLT</GlossaryTooltip>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Control Panel */}
      <ControlPanel />

      {/* Main Content - Three Columns */}
      <main className="container mx-auto px-6 py-8">
        <div
          className={`grid gap-6 ${
            viewMode === 'all'
              ? 'grid-cols-1 xl:grid-cols-3'
              : 'grid-cols-1 lg:grid-cols-2'
          }`}
        >
          {showLegacy && (
            <motion.div
              layout
              className="h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LegacyColumn />
            </motion.div>
          )}

          {showNative && (
            <motion.div
              layout
              className="h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <NativeColumn />
            </motion.div>
          )}

          {showTranslator && (
            <motion.div
              layout
              className="h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TranslatorColumn />
            </motion.div>
          )}
        </div>

        {/* Callout Boxes Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Rosetta Stone Trap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-red-50 border-3 border-red-400 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">⚠️</span>
              <h3 className="text-xl font-bold text-red-800">THE ROSETTA STONE TRAP</h3>
            </div>
            <div className="text-sm text-red-700 space-y-2">
              <p className="font-semibold">When a bank relies on a translation layer:</p>
              <ul className="space-y-1 ml-4">
                <li>• Permanent dependency on a map</li>
                <li>• Every regulatory change breaks the map</li>
                <li>• Every internal update breaks the map</li>
                <li>• Constantly fixing and maintaining</li>
                <li>• Data lineage is obscured</li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded border border-red-300 italic text-xs">
                "If a regulator asks 'Where did this number come from?'"
                <br />
                <strong>JPM:</strong> Points to the trade itself
                <br />
                <strong>Peers:</strong> Must dig through translation logic
              </div>
            </div>
          </motion.div>

          {/* Two Truths Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-orange-50 border-3 border-orange-400 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">⚠️</span>
              <h3 className="text-xl font-bold text-orange-800">THE TWO TRUTHS PROBLEM</h3>
            </div>
            <div className="text-sm text-orange-700 space-y-2">
              <div className="space-y-1">
                <p>Trade Reporting team → Maps data → CDM → CFTC</p>
                <p>CCAR team → Maps SAME data → Different format → Fed</p>
              </div>
              <p className="font-semibold mt-3">Result: Bank reports contradictory data</p>
              <ul className="space-y-1 ml-4">
                <li>• Fed sees one number for capital risk</li>
                <li>• CFTC sees different number for trade transparency</li>
                <li>• Thousands of hours reconciling differences</li>
              </ul>
            </div>
          </motion.div>

          {/* One Truth Advantage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-green-50 border-3 border-green-400 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">✅</span>
              <h3 className="text-xl font-bold text-green-800">THE ONE TRUTH ADVANTAGE</h3>
            </div>
            <div className="text-sm text-green-700 space-y-2">
              <div className="space-y-1">
                <p><strong>Golden Source:</strong> Trade as CDM object</p>
                <p><strong>Trade Reporting:</strong> Reads CDM object</p>
                <p><strong>CCAR/Risk:</strong> Reads SAME CDM object</p>
              </div>
              <p className="font-semibold mt-3">Result: Semantic consistency across enterprise</p>
              <ul className="space-y-1 ml-4">
                <li>• Definition changes → Auto-updates all reports</li>
                <li>• No mapping divergence</li>
                <li>• Perfect data lineage</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Comparison Dashboard */}
      <ComparisonDashboard />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            Interactive visualization of CDM adoption strategies in banking trade reporting
          </p>
          <p className="text-xs mt-2 opacity-75">
            Based on research comparing J.P. Morgan's native CDM approach vs. peer translation
            layer implementations
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
