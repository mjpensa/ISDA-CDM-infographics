import React from 'react';
import { motion } from 'framer-motion';

const MetricsCard = ({ label, value, level, icon }) => {
  const levelColors = {
    good: 'bg-green-50 border-green-300 text-green-800',
    neutral: 'bg-yellow-50 border-yellow-300 text-yellow-800',
    bad: 'bg-red-50 border-red-300 text-red-800',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className={`p-3 rounded-lg border-2 ${levelColors[level]} transition-shadow hover:shadow-lg`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1">
          <div className="text-xs font-semibold uppercase tracking-wide opacity-70">
            {label}
          </div>
          <div className="text-sm font-bold mt-1">{value}</div>
        </div>
        <div className="text-xl">{icon}</div>
      </div>
    </motion.div>
  );
};

export default MetricsCard;
