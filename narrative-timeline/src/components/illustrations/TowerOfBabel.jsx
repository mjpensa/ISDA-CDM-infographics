import { motion } from 'framer-motion';

const TowerOfBabel = () => {
  const blocks = [
    { x: 50, y: 200, width: 200, height: 40, color: '#DC2626', delay: 0 },
    { x: 60, y: 160, width: 180, height: 40, color: '#F59E0B', delay: 0.1 },
    { x: 70, y: 120, width: 160, height: 40, color: '#10B981', delay: 0.2 },
    { x: 80, y: 80, width: 140, height: 40, color: '#3B82F6', delay: 0.3 },
    { x: 90, y: 40, width: 120, height: 40, color: '#8B5CF6', delay: 0.4 },
  ];

  const cracks = [
    { x1: 150, y1: 0, x2: 150, y2: 240, delay: 0.5 },
    { x1: 100, y1: 80, x2: 200, y2: 80, delay: 0.6 },
    { x1: 120, y1: 120, x2: 180, y2: 200, delay: 0.7 },
  ];

  return (
    <div className="flex justify-center items-center py-8">
      <svg
        width="300"
        height="280"
        viewBox="0 0 300 280"
        className="max-w-full h-auto"
        role="img"
        aria-label="Tower of Babel illustration showing fragmented systems"
      >
        <title>Tower of Babel - Fragmented Banking Systems</title>

        {/* Tower blocks */}
        {blocks.map((block, index) => (
          <motion.rect
            key={`block-${index}`}
            x={block.x}
            y={block.y}
            width={block.width}
            height={block.height}
            fill={block.color}
            opacity={0.8}
            stroke="#1F2937"
            strokeWidth={2}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: block.y, opacity: 0.8 }}
            transition={{
              duration: 0.6,
              delay: block.delay,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Cracks */}
        {cracks.map((crack, index) => (
          <motion.line
            key={`crack-${index}`}
            x1={crack.x1}
            y1={crack.y1}
            x2={crack.x2}
            y2={crack.y2}
            stroke="#374151"
            strokeWidth={3}
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1,
              delay: crack.delay,
              ease: "easeIn"
            }}
          />
        ))}

        {/* Speech bubbles representing different data formats */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {/* US Flag bubble */}
          <circle cx="40" cy="180" r="15" fill="#3B82F6" opacity={0.3} />
          <text x="40" y="185" textAnchor="middle" fontSize="20">🇺🇸</text>

          {/* EU Flag bubble */}
          <circle cx="260" cy="140" r="15" fill="#F59E0B" opacity={0.3} />
          <text x="260" y="145" textAnchor="middle" fontSize="20">🇪🇺</text>

          {/* Asia Flag bubble */}
          <circle cx="280" cy="200" r="15" fill="#10B981" opacity={0.3} />
          <text x="280" y="205" textAnchor="middle" fontSize="20">🇯🇵</text>
        </motion.g>

        {/* Tangled lines between regulators */}
        <motion.g
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <path
            d="M 40 180 Q 150 100 260 140"
            stroke="#DC2626"
            strokeWidth={2}
            fill="none"
          />
          <path
            d="M 260 140 Q 200 180 280 200"
            stroke="#DC2626"
            strokeWidth={2}
            fill="none"
          />
          <path
            d="M 280 200 Q 150 220 40 180"
            stroke="#DC2626"
            strokeWidth={2}
            fill="none"
          />
        </motion.g>

        {/* Warning signs */}
        <motion.text
          x="150"
          y="270"
          textAnchor="middle"
          fontSize="24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          ⚠️ Spaghetti Architecture
        </motion.text>
      </svg>
    </div>
  );
};

export default TowerOfBabel;
