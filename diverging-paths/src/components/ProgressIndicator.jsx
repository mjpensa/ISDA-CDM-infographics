import React from 'react';
import { motion } from 'framer-motion';

const ProgressIndicator = ({ current, sections }) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map((section, index) => (
        <div key={index} className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === current
                ? 'bg-native-primary w-4 h-4'
                : index < current
                ? 'bg-native-secondary'
                : 'bg-gray-300'
            }`}
            onClick={() => {
              const element = document.getElementById(section.id);
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: index === current ? 1 : 0, x: index === current ? 0 : 10 }}
            className="text-sm font-semibold text-neutral-dark whitespace-nowrap"
          >
            {section.title}
          </motion.span>
        </div>
      ))}
    </div>
  );
};

export default ProgressIndicator;
