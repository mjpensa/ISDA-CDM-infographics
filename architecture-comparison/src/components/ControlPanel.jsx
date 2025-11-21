import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import { Play, Pause, AlertTriangle, Eye, EyeOff, Maximize2 } from 'lucide-react';

const ControlPanel = () => {
  const {
    viewMode,
    showProblems,
    isTracing,
    setViewMode,
    toggleProblems,
    startTrace,
    stopTrace,
  } = useStore();

  const Button = ({ onClick, active, children, icon: Icon }) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
        active
          ? 'bg-blue-600 text-white shadow-lg'
          : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-400'
      }`}
    >
      {Icon && <Icon size={18} />}
      {children}
    </motion.button>
  );

  return (
    <div className="bg-white border-t-2 border-gray-200 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Left side - View controls */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-gray-600 mr-2">View Mode:</span>
            <Button
              onClick={() => setViewMode('all')}
              active={viewMode === 'all'}
              icon={Maximize2}
            >
              All Three
            </Button>
            <Button
              onClick={() => setViewMode('native-vs-translator')}
              active={viewMode === 'native-vs-translator'}
            >
              Native vs Translator
            </Button>
          </div>

          {/* Right side - Action controls */}
          <div className="flex flex-wrap items-center gap-3">
            <Button
              onClick={toggleProblems}
              active={showProblems}
              icon={showProblems ? Eye : EyeOff}
            >
              {showProblems ? 'Hide' : 'Show'} Problems
            </Button>
            <Button
              onClick={isTracing ? stopTrace : startTrace}
              active={isTracing}
              icon={isTracing ? Pause : Play}
            >
              {isTracing ? 'Stop' : 'Trace a Trade'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
