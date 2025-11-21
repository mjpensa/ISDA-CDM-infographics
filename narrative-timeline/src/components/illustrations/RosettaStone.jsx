import { motion } from 'framer-motion';
import { useStore } from '../../store/useStore';
import { AlertTriangle } from 'lucide-react';

const RosettaStone = () => {
  const prefersReducedMotion = useStore((state) => state.prefersReducedMotion);

  // Crack paths
  const cracks = [
    'M 200 50 L 220 150 L 210 250',
    'M 150 100 L 180 180 L 160 280',
    'M 250 80 L 240 170 L 260 260',
    'M 180 120 L 200 200 L 190 290',
  ];

  return (
    <div className="illustration-container">
      <svg
        viewBox="0 0 400 350"
        className="w-full max-w-lg h-auto"
        role="img"
        aria-label="Rosetta Stone illustration showing a cracking translation layer"
      >
        {/* Stone tablet shape */}
        <motion.path
          d="M 150 30 L 250 30 L 270 50 L 270 300 Q 270 310, 260 310 L 140 310 Q 130 310, 130 300 L 130 50 Q 130 40, 140 30"
          fill="#D4A373"
          stroke="#8B6F47"
          strokeWidth="3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.8,
          }}
        />

        {/* Stone texture/aging */}
        <motion.rect
          x="140"
          y="50"
          width="120"
          height="250"
          fill="url(#stoneGradient)"
          opacity="0.3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 1,
            delay: prefersReducedMotion ? 0 : 0.5,
          }}
        />

        {/* Gradient definition for stone texture */}
        <defs>
          <linearGradient id="stoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B6F47" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#D4A373" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#8B6F47" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Fake text lines (representing translation mappings) */}
        {[70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270].map((y, index) => (
          <motion.g key={index}>
            <line
              x1="150"
              y1={y}
              x2="240"
              y2={y}
              stroke="#8B6F47"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.5,
                delay: prefersReducedMotion ? 0 : 0.8 + index * 0.05,
              }}
            />
            {index % 2 === 0 && (
              <line
                x1="150"
                y1={y + 5}
                x2="220"
                y2={y + 5}
                stroke="#8B6F47"
                strokeWidth="1"
                opacity="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.5,
                  delay: prefersReducedMotion ? 0 : 0.8 + index * 0.05,
                }}
              />
            )}
          </motion.g>
        ))}

        {/* Cracks appearing */}
        {cracks.map((crack, index) => (
          <motion.path
            key={index}
            d={crack}
            stroke="#DC2626"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 2,
              delay: prefersReducedMotion ? 0 : 1.5 + index * 0.2,
              ease: 'easeIn',
            }}
          />
        ))}

        {/* Secondary cracks (thinner) */}
        {cracks.map((crack, index) => (
          <motion.path
            key={`thin-${index}`}
            d={crack}
            stroke="#DC2626"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
            transform={`translate(${index % 2 === 0 ? 10 : -10}, 0)`}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 1.5,
              delay: prefersReducedMotion ? 0 : 2 + index * 0.15,
              ease: 'easeIn',
            }}
          />
        ))}

        {/* Warning labels */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.5,
            delay: prefersReducedMotion ? 0 : 3,
          }}
        >
          {/* Left warning */}
          <circle cx="80" cy="150" r="25" fill="#DC2626" />
          <text
            x="80"
            y="160"
            textAnchor="middle"
            fill="white"
            fontSize="28"
            fontWeight="bold"
          >
            !
          </text>
        </motion.g>

        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.5,
            delay: prefersReducedMotion ? 0 : 3.2,
          }}
        >
          {/* Right warning */}
          <circle cx="320" cy="200" r="25" fill="#DC2626" />
          <text
            x="320"
            y="210"
            textAnchor="middle"
            fill="white"
            fontSize="28"
            fontWeight="bold"
          >
            !
          </text>
        </motion.g>

        {/* Breaking effect - pieces starting to separate */}
        <motion.g
          initial={{ x: 0, y: 0 }}
          animate={{ x: -2, y: 2 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 1,
            delay: prefersReducedMotion ? 0 : 3.5,
            repeat: prefersReducedMotion ? 0 : Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <path
            d="M 140 100 L 170 100 L 160 180 L 130 180 Z"
            fill="#C4936B"
            opacity="0.7"
          />
        </motion.g>

        <motion.g
          initial={{ x: 0, y: 0 }}
          animate={{ x: 2, y: -1 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 1,
            delay: prefersReducedMotion ? 0 : 3.5,
            repeat: prefersReducedMotion ? 0 : Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <path
            d="M 240 120 L 270 120 L 270 200 L 250 200 Z"
            fill="#C4936B"
            opacity="0.7"
          />
        </motion.g>
      </svg>

      <div className="mt-6 text-center max-w-md mx-auto">
        <p className="text-sm text-gray-600 italic flex items-center justify-center gap-2 mb-3">
          <AlertTriangle className="w-4 h-4 text-red-600" />
          The translation layer breaks with every change
        </p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-xs text-red-800 font-semibold mb-2">The Never-Ending Cycle:</p>
          <ul className="text-xs text-red-700 space-y-1 text-left">
            <li>⚠️ Regulator changes rule → Map breaks</li>
            <li>⚠️ Internal system update → Map breaks</li>
            <li>🔧 Result: Constant maintenance required ♾️</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RosettaStone;
