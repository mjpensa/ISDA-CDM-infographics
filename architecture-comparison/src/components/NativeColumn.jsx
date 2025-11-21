import React from 'react';
import { motion } from 'framer-motion';
import { architecturesData } from '../data/architectures';
import SystemLayer from './SystemLayer';
import DataFlowArrow from './DataFlowArrow';
import MetricsCard from './MetricsCard';
import { useStore } from '../store/useStore';

const NativeColumn = () => {
  const { isTracing, traceStep } = useStore();
  const data = architecturesData.native;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col h-full"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-native-primary to-native-secondary text-white p-6 rounded-t-xl">
        <div className="text-sm font-semibold opacity-90 mb-1">{data.bank}</div>
        <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
        <div className="text-sm opacity-90">{data.subtitle}</div>
        <div className="mt-2 inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-semibold">
          Strategy: {data.strategy}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gradient-to-b from-native-bg to-white p-6 overflow-auto">
        {/* Clean data flow visualization */}
        <div className="relative">
          {data.layers.map((layer, idx) => (
            <div key={layer.id}>
              <SystemLayer
                layer={layer}
                colorTheme="native"
                isActive={isTracing && traceStep === idx + 1}
                archId="native"
              />
              {idx < data.layers.length - 1 && (
                <DataFlowArrow
                  color="green"
                  isActive={isTracing && traceStep > idx}
                  delay={idx * 0.2}
                  label={idx === 0 ? 'Born as CDM' : ''}
                />
              )}
            </div>
          ))}
        </div>

        {/* Success Badge */}
        <div className="mt-6 p-4 bg-green-100 border-2 border-green-400 rounded-lg">
          <div className="flex items-center gap-2 text-green-800 font-bold mb-2">
            <span className="text-2xl">✅</span>
            <span>THE ONE TRUTH ADVANTAGE</span>
          </div>
          <div className="text-sm text-green-700 space-y-1">
            <div>• Single source of truth</div>
            <div>• Perfect data lineage</div>
            <div>• Semantic consistency</div>
            <div>• Future-ready architecture</div>
            <div>• No translation overhead</div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-native-primary rounded">
          <div className="text-sm text-gray-700 italic">
            "When a regulator asks 'Where did this number come from?' — JPM points directly to the
            trade itself. No translation logic to dig through."
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

export default NativeColumn;
