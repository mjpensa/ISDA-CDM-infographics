import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import Tooltip from './Tooltip';

const SystemLayer = ({ layer, colorTheme, isActive, archId }) => {
  const { setHoveredLayer, showProblems } = useStore();

  const themeColors = {
    legacy: {
      bg: 'bg-legacy-bg',
      border: 'border-legacy-primary',
      text: 'text-legacy-primary',
      accent: 'bg-legacy-accent',
    },
    native: {
      bg: 'bg-native-bg',
      border: 'border-native-primary',
      text: 'text-native-primary',
      accent: 'bg-native-secondary',
    },
    translator: {
      bg: 'bg-translator-bg',
      border: 'border-translator-primary',
      text: 'text-translator-primary',
      accent: 'bg-translator-accent',
    },
  };

  const colors = themeColors[colorTheme];
  const hasIssues = layer.issues && layer.issues.length > 0;
  const hasBenefits = layer.benefits && layer.benefits.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
      onHoverStart={() => setHoveredLayer({ layer: layer.id, arch: archId })}
      onHoverEnd={() => setHoveredLayer(null)}
      className={`${colors.bg} border-2 ${colors.border} rounded-lg p-4 mb-4 transition-all ${
        isActive ? 'ring-4 ring-blue-300' : ''
      }`}
    >
      {/* Layer Name */}
      <h3 className={`font-bold text-lg mb-3 ${colors.text}`}>{layer.name}</h3>

      {/* Elements */}
      <div className="space-y-2">
        {layer.elements.map((element, idx) => (
          <div
            key={idx}
            className="flex items-start gap-2 bg-white bg-opacity-60 rounded p-2"
          >
            {element.icon && <span className="text-2xl">{element.icon}</span>}
            <div className="flex-1">
              <div className="font-semibold text-gray-900">
                {element.label}
                {element.status && (
                  <span
                    className={`ml-2 text-xs px-2 py-1 rounded ${
                      element.status === 'ready'
                        ? 'bg-green-100 text-green-800'
                        : element.status === 'limited'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {element.status}
                  </span>
                )}
              </div>
              {element.sublabel && (
                <div className="text-sm text-gray-600 mt-1">{element.sublabel}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Benefits */}
      {hasBenefits && (
        <div className="mt-3 space-y-1">
          {layer.benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-green-700">
              <span>✅</span>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      )}

      {/* Issues/Problems */}
      {hasIssues && showProblems && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-3 space-y-1"
        >
          {layer.issues.map((issue, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-red-700">
              <span>⚠️</span>
              <span className="font-semibold">{issue}</span>
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default SystemLayer;
