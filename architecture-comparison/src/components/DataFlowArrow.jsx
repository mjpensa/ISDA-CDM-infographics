import React from 'react';
import { motion } from 'framer-motion';

const DataFlowArrow = ({ from, to, isActive, color = 'blue', delay = 0, label }) => {
  const colors = {
    blue: 'stroke-native-primary',
    green: 'stroke-native-secondary',
    orange: 'stroke-translator-primary',
    red: 'stroke-translator-accent',
    gray: 'stroke-legacy-primary',
  };

  return (
    <div className="relative w-full h-12 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
        <defs>
          <marker
            id={`arrowhead-${color}`}
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" className={`fill-current ${colors[color]}`} />
          </marker>
        </defs>
        <motion.line
          x1="50"
          y1="5"
          x2="50"
          y2="45"
          className={`${colors[color]} ${isActive ? 'flow-pulse' : ''}`}
          strokeWidth="3"
          markerEnd={`url(#arrowhead-${color})`}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isActive ? 1 : 0.3 }}
          transition={{ duration: 0.8, delay }}
        />
      </svg>
      {label && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-1 text-xs font-mono rounded border border-gray-300">
          {label}
        </div>
      )}
    </div>
  );
};

export default DataFlowArrow;
