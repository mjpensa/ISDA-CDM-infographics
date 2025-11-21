import React from 'react';
import { motion } from 'framer-motion';
import { architecturesData } from '../data/architectures';
import SystemLayer from './SystemLayer';
import DataFlowArrow from './DataFlowArrow';
import MetricsCard from './MetricsCard';
import { useStore } from '../store/useStore';

const LegacyColumn = () => {
  const { isTracing, traceStep } = useStore();
  const data = architecturesData.legacy;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full"
    >
      {/* Header */}
      <div className="bg-legacy-primary text-white p-6 rounded-t-xl">
        <div className="text-sm font-semibold opacity-80 mb-1">{data.era}</div>
        <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
        <div className="text-sm opacity-90">{data.subtitle}</div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-50 p-6 overflow-auto">
        {/* Layers with messy connecting lines visualization */}
        <div className="relative">
          {/* Spaghetti lines - decorative */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <path
              d="M 50,50 Q 150,100 250,50 T 450,50"
              stroke="#DC2626"
              strokeWidth="2"
              fill="none"
              className="flow-pulse"
            />
            <path
              d="M 100,100 Q 200,150 300,100 T 500,100"
              stroke="#DC2626"
              strokeWidth="2"
              fill="none"
              className="flow-pulse"
              style={{ animationDelay: '0.5s' }}
            />
            <path
              d="M 75,200 Q 175,250 275,200 T 475,200"
              stroke="#DC2626"
              strokeWidth="2"
              fill="none"
              className="flow-pulse"
              style={{ animationDelay: '1s' }}
            />
          </svg>

          {data.layers.map((layer, idx) => (
            <div key={layer.id}>
              <SystemLayer
                layer={layer}
                colorTheme="legacy"
                isActive={isTracing && traceStep === data.layers.length - idx}
                archId="legacy"
              />
              {idx < data.layers.length - 1 && (
                <DataFlowArrow
                  color="red"
                  isActive={isTracing && traceStep >= data.layers.length - idx}
                  delay={idx * 0.3}
                />
              )}
            </div>
          ))}
        </div>

        {/* Warning Badge */}
        <div className="mt-6 p-4 bg-red-100 border-2 border-red-400 rounded-lg">
          <div className="flex items-center gap-2 text-red-800 font-bold mb-2">
            <span className="text-2xl">⚠️</span>
            <span>THE PROBLEM</span>
          </div>
          <div className="text-sm text-red-700 space-y-1">
            <div>• Expensive to maintain</div>
            <div>• Error-prone mappings</div>
            <div>• No standardization</div>
            <div>• Regulatory chaos</div>
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

export default LegacyColumn;
