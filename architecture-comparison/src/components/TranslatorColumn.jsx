import React from 'react';
import { motion } from 'framer-motion';
import { architecturesData } from '../data/architectures';
import SystemLayer from './SystemLayer';
import DataFlowArrow from './DataFlowArrow';
import MetricsCard from './MetricsCard';
import { useStore } from '../store/useStore';
import { AlertTriangle } from 'lucide-react';

const TranslatorColumn = () => {
  const { isTracing, traceStep, showProblems } = useStore();
  const data = architecturesData.translator;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col h-full"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-translator-primary to-translator-secondary text-white p-6 rounded-t-xl">
        <div className="text-sm font-semibold opacity-90 mb-1">
          {data.banks.slice(0, 2).join(', ')} + others
        </div>
        <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
        <div className="text-sm opacity-90">{data.subtitle}</div>
        <div className="mt-2 inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-semibold">
          Strategy: {data.strategy}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gradient-to-b from-translator-bg to-white p-6 overflow-auto">
        {/* Layers with translation complexity */}
        <div className="relative">
          {data.layers.map((layer, idx) => (
            <div key={layer.id}>
              <SystemLayer
                layer={layer}
                colorTheme="translator"
                isActive={isTracing && traceStep === idx + 1}
                archId="translator"
              />

              {/* Special visual for Translation Layer */}
              {layer.id === 'translation' && showProblems && (
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                  className="relative -mt-2 mb-2"
                >
                  <div className="absolute inset-0 bg-red-500 opacity-10 blur-xl rounded-lg crack-animation" />
                </motion.div>
              )}

              {/* Two Truths Problem Visualization */}
              {layer.id === 'reporting' && showProblems && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="my-4 p-4 bg-red-50 border-2 border-red-300 rounded-lg"
                >
                  <div className="flex items-start gap-2 mb-3">
                    <AlertTriangle className="text-red-600 flex-shrink-0" size={24} />
                    <div>
                      <div className="font-bold text-red-800 text-sm mb-1">
                        THE TWO TRUTHS PROBLEM
                      </div>
                      <div className="text-xs text-red-700">Same trade, different numbers</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-white p-2 rounded border border-red-200">
                      <div className="font-semibold text-gray-700">Path A → CFTC</div>
                      <div className="text-red-600 font-mono mt-1">Map A → CDM</div>
                      <div className="font-bold text-lg mt-1">$101M</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-red-200">
                      <div className="font-semibold text-gray-700">Path B → Fed</div>
                      <div className="text-red-600 font-mono mt-1">Map B → Proprietary</div>
                      <div className="font-bold text-lg mt-1">$100M</div>
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-red-700 italic">
                    → Thousands of hours reconciling differences
                  </div>
                </motion.div>
              )}

              {idx < data.layers.length - 1 && (
                <DataFlowArrow
                  color={layer.id === 'translation' ? 'red' : 'orange'}
                  isActive={isTracing && traceStep > idx}
                  delay={idx * 0.3}
                  label={layer.id === 'translation' ? '⚠️ Translation' : ''}
                />
              )}
            </div>
          ))}
        </div>

        {/* Rosetta Stone Trap Warning */}
        <div className="mt-6 p-4 bg-orange-100 border-2 border-orange-400 rounded-lg">
          <div className="flex items-center gap-2 text-orange-800 font-bold mb-2">
            <span className="text-2xl">⚠️</span>
            <span>THE ROSETTA STONE TRAP</span>
          </div>
          <div className="text-sm text-orange-700 space-y-1">
            <div>• Permanent dependency on translation maps</div>
            <div>• Every regulatory change breaks the map</div>
            <div>• Every internal update breaks the map</div>
            <div>• Data lineage is obscured</div>
          </div>
        </div>

        {/* Data Lineage Problem */}
        <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-400 rounded">
          <div className="text-sm text-gray-700 italic">
            "When a regulator asks 'Where did this number come from?' — Peers must dig through
            layers of translation logic. The trail goes cold."
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-6 space-y-2">
          <h4 className="font-bold text-gray-700 mb-3">Key Metrics</h4>
          {Object.entries(data.metrics).map(([key, metric]) => (
            <MetricsCard
              key={key}
              label={key.replace(/([A-Z])/g, ' $1').trim()}
              value={metric.value}
              level={metric.level}
              icon={metric.icon}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TranslatorColumn;
