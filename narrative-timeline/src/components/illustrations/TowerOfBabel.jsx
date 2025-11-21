import { motion } from 'framer-motion';
import { useStore } from '../../store/useStore';
import { AlertCircle } from 'lucide-react';

const TowerOfBabel = () => {
  const prefersReducedMotion = useStore((state) => state.prefersReducedMotion);

  const blocks = [
    { x: 150, y: 300, color: '#DC2626', label: 'US' },
    { x: 250, y: 250, color: '#F59E0B', label: 'EU' },
    { x: 200, y: 200, color: '#3B82F6', label: 'Asia' },
    { x: 180, y: 150, color: '#10B981', label: 'UK' },
    { x: 220, y: 100, color: '#8B5CF6', label: 'Others' },
  ];

  const speechBubbles = [
    { x: 50, y: 280, text: 'Format A', color: '#DC2626' },
    { x: 320, y: 230, text: 'Format B', color: '#F59E0B' },
    { x: 40, y: 180, text: 'Format C', color: '#3B82F6' },
  ];

  return (
    <div className="illustration-container">
      <svg
        viewBox="0 0 400 400"
        className="w-full max-w-lg h-auto"
        role="img"
        aria-label="Tower of Babel illustration showing fragmented regulatory systems"
      >
        {/* Base/ground */}
        <rect x="100" y="350" width="200" height="10" fill="#6B7280" />

        {/* Tower blocks - fragmented and misaligned */}
        {blocks.map((block, index) => (
          <motion.g key={index}>
            <motion.rect
              x={block.x}
              y={block.y}
              width="60"
              height="40"
              fill={block.color}
              stroke="#374151"
              strokeWidth="2"
              initial={{ opacity: 0, y: -50, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 2 : -2 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.8,
                delay: prefersReducedMotion ? 0 : index * 0.15,
              }}
            />
            <motion.text
              x={block.x + 30}
              y={block.y + 25}
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontWeight="bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.5,
                delay: prefersReducedMotion ? 0 : index * 0.15 + 0.3,
              }}
            >
              {block.label}
            </motion.text>
          </motion.g>
        ))}

        {/* Cracks between blocks */}
        <motion.path
          d="M 200 300 L 210 250 M 220 250 L 200 200 M 180 200 L 190 150 M 210 150 L 220 100"
          stroke="#DC2626"
          strokeWidth="2"
          strokeDasharray="5,5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 2,
            delay: prefersReducedMotion ? 0 : 1,
          }}
        />

        {/* Speech bubbles */}
        {speechBubbles.map((bubble, index) => (
          <motion.g
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 0.5,
              delay: prefersReducedMotion ? 0 : 1.5 + index * 0.2,
            }}
          >
            <ellipse
              cx={bubble.x + 30}
              cy={bubble.y}
              rx="35"
              ry="20"
              fill="white"
              stroke={bubble.color}
              strokeWidth="2"
            />
            <text
              x={bubble.x + 30}
              y={bubble.y + 5}
              textAnchor="middle"
              fontSize="10"
              fontWeight="bold"
              fill={bubble.color}
            >
              {bubble.text}
            </text>
          </motion.g>
        ))}

        {/* Warning icons */}
        {[1, 2, 3].map((_, index) => (
          <motion.g
            key={index}
            transform={`translate(${320 + index * 10}, ${50 + index * 30})`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 0.3,
              delay: prefersReducedMotion ? 0 : 2 + index * 0.15,
              repeat: prefersReducedMotion ? 0 : Infinity,
              repeatDelay: 2,
            }}
          >
            <circle cx="10" cy="10" r="8" fill="#DC2626" />
            <text
              x="10"
              y="14"
              textAnchor="middle"
              fontSize="12"
              fontWeight="bold"
              fill="white"
            >
              !
            </text>
          </motion.g>
        ))}
      </svg>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 italic flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-600" />
          Fragmented regulatory requirements create unstable architecture
        </p>
      </div>
    </div>
  );
};

export default TowerOfBabel;
