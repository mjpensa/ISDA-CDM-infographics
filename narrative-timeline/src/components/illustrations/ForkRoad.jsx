import { motion } from 'framer-motion';
import { useStore } from '../../store/useStore';
import { User, BookOpen } from 'lucide-react';

const ForkRoad = () => {
  const prefersReducedMotion = useStore((state) => state.prefersReducedMotion);

  return (
    <div className="illustration-container">
      <svg
        viewBox="0 0 600 400"
        className="w-full max-w-3xl h-auto"
        role="img"
        aria-label="Fork in the road showing two strategic paths"
      >
        {/* Main road leading to fork */}
        <motion.path
          d="M 300 400 L 300 250"
          stroke="#6B7280"
          strokeWidth="60"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 1,
            ease: 'easeInOut',
          }}
        />

        {/* Path A - Native (Left, Blue) */}
        <motion.path
          d="M 300 250 Q 250 200, 150 100"
          stroke="#3B82F6"
          strokeWidth="50"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 1.2,
            delay: prefersReducedMotion ? 0 : 0.8,
            ease: 'easeOut',
          }}
        />

        {/* Path B - Translator (Right, Orange) */}
        <motion.path
          d="M 300 250 Q 350 200, 450 100"
          stroke="#F59E0B"
          strokeWidth="50"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 1.2,
            delay: prefersReducedMotion ? 0 : 0.8,
            ease: 'easeOut',
          }}
        />

        {/* Road markings - dashed lines */}
        <motion.path
          d="M 300 400 L 300 250"
          stroke="white"
          strokeWidth="3"
          strokeDasharray="10,10"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 1,
            delay: prefersReducedMotion ? 0 : 0.3,
          }}
        />

        {/* Signpost */}
        <motion.g
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.5,
            delay: prefersReducedMotion ? 0 : 1.5,
          }}
        >
          {/* Post */}
          <rect x="290" y="200" width="20" height="100" fill="#8B4513" />

          {/* Left sign (Native) */}
          <rect x="200" y="200" width="90" height="30" fill="#3B82F6" rx="5" />
          <text
            x="245"
            y="220"
            textAnchor="middle"
            fill="white"
            fontSize="12"
            fontWeight="bold"
          >
            Native
          </text>

          {/* Right sign (Translator) */}
          <rect x="310" y="230" width="100" height="30" fill="#F59E0B" rx="5" />
          <text
            x="360"
            y="250"
            textAnchor="middle"
            fill="white"
            fontSize="12"
            fontWeight="bold"
          >
            Translator
          </text>
        </motion.g>

        {/* Path A Icon (Native Speaker) */}
        <motion.g
          transform="translate(120, 70)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.6,
            delay: prefersReducedMotion ? 0 : 2,
          }}
        >
          <circle cx="30" cy="30" r="28" fill="#3B82F6" stroke="#1E40AF" strokeWidth="3" />
          <circle cx="30" cy="25" r="8" fill="white" />
          <circle cx="30" cy="40" r="12" fill="white" />
        </motion.g>

        {/* Path B Icon (Tourist with Book) */}
        <motion.g
          transform="translate(420, 70)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.6,
            delay: prefersReducedMotion ? 0 : 2,
          }}
        >
          <circle cx="30" cy="30" r="28" fill="#F59E0B" stroke="#D97706" strokeWidth="3" />
          <rect x="20" y="20" width="20" height="25" fill="white" rx="2" />
          <line x1="23" y1="25" x2="37" y2="25" stroke="#F59E0B" strokeWidth="1.5" />
          <line x1="23" y1="30" x2="37" y2="30" stroke="#F59E0B" strokeWidth="1.5" />
          <line x1="23" y1="35" x2="37" y2="35" stroke="#F59E0B" strokeWidth="1.5" />
        </motion.g>

        {/* Labels */}
        <motion.text
          x="150"
          y="140"
          textAnchor="middle"
          fill="#1E40AF"
          fontSize="16"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.5,
            delay: prefersReducedMotion ? 0 : 2.3,
          }}
        >
          J.P. Morgan
        </motion.text>

        <motion.text
          x="450"
          y="140"
          textAnchor="middle"
          fill="#D97706"
          fontSize="16"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.5,
            delay: prefersReducedMotion ? 0 : 2.3,
          }}
        >
          Peers
        </motion.text>

        {/* Cost/Benefit indicators */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.5,
            delay: prefersReducedMotion ? 0 : 2.5,
          }}
        >
          {/* Path A - High cost now */}
          <text x="100" y="180" fontSize="12" fill="#DC2626">💰💰💰</text>
          <text x="100" y="195" fontSize="10" fill="#666">High cost</text>

          {/* Path A - Big reward later */}
          <text x="170" y="55" fontSize="12" fill="#10B981">🎯</text>
          <text x="165" y="50" fontSize="10" fill="#10B981">Big reward</text>

          {/* Path B - Low cost now */}
          <text x="450" y="180" fontSize="12" fill="#10B981">✅</text>
          <text x="445" y="195" fontSize="10" fill="#666">Low cost</text>

          {/* Path B - Risk later */}
          <text x="490" y="55" fontSize="12" fill="#DC2626">⚠️</text>
          <text x="490" y="50" fontSize="10" fill="#DC2626">Risk ahead</text>
        </motion.g>
      </svg>

      <div className="mt-6 grid grid-cols-2 gap-8 max-w-3xl mx-auto">
        <div className="text-center">
          <p className="text-blue-600 font-bold mb-2">Path A: The Native Speaker</p>
          <p className="text-sm text-gray-600">High upfront investment, long-term advantage</p>
        </div>
        <div className="text-center">
          <p className="text-orange-600 font-bold mb-2">Path B: The Translator</p>
          <p className="text-sm text-gray-600">Low initial cost, but enters the trap</p>
        </div>
      </div>
    </div>
  );
};

export default ForkRoad;
