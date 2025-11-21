import { motion } from 'framer-motion';

const DataFlowDiagram = ({ type = "split" }) => {
  if (type === "oneTruth") {
    return (
      <div className="flex justify-center items-center py-8">
        <svg
          width="400"
          height="300"
          viewBox="0 0 400 300"
          className="max-w-full h-auto"
          role="img"
          aria-label="One Truth data flow diagram showing unified source"
        >
          <title>One Truth - J.P. Morgan Native Approach</title>

          {/* Central CDM Object */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <circle cx="200" cy="150" r="50" fill="#3B82F6" opacity={0.9} />
            <text
              x="200"
              y="145"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="bold"
            >
              CDM
            </text>
            <text
              x="200"
              y="165"
              textAnchor="middle"
              fill="white"
              fontSize="12"
            >
              Golden Source
            </text>
          </motion.g>

          {/* Pulsing ring */}
          <motion.circle
            cx="200"
            cy="150"
            r="50"
            fill="none"
            stroke="#10B981"
            strokeWidth={3}
            initial={{ scale: 1, opacity: 1 }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />

          {/* Trade Reporting destination */}
          <motion.g
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <rect x="20" y="40" width="120" height="60" rx="8" fill="#10B981" />
            <text x="80" y="65" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
              Trade Reporting
            </text>
            <text x="80" y="85" textAnchor="middle" fill="white" fontSize="10">
              CFTC
            </text>
          </motion.g>

          {/* Arrow to Trade Reporting */}
          <motion.path
            d="M 150 130 L 120 80"
            stroke="#10B981"
            strokeWidth={3}
            markerEnd="url(#arrowGreen)"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />

          {/* CCAR Reporting destination */}
          <motion.g
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <rect x="260" y="40" width="120" height="60" rx="8" fill="#10B981" />
            <text x="320" y="65" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
              CCAR Reporting
            </text>
            <text x="320" y="85" textAnchor="middle" fill="white" fontSize="10">
              Federal Reserve
            </text>
          </motion.g>

          {/* Arrow to CCAR */}
          <motion.path
            d="M 250 130 L 280 80"
            stroke="#10B981"
            strokeWidth={3}
            markerEnd="url(#arrowGreen)"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          />

          {/* Risk Engine destination */}
          <motion.g
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <rect x="140" y="230" width="120" height="60" rx="8" fill="#10B981" />
            <text x="200" y="255" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
              Risk Engine
            </text>
            <text x="200" y="275" textAnchor="middle" fill="white" fontSize="10">
              Internal
            </text>
          </motion.g>

          {/* Arrow to Risk */}
          <motion.path
            d="M 200 200 L 200 230"
            stroke="#10B981"
            strokeWidth={3}
            markerEnd="url(#arrowGreen)"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          />

          {/* Checkmark */}
          <motion.text
            x="200"
            y="20"
            textAnchor="middle"
            fontSize="32"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            ✅
          </motion.text>

          {/* Arrow marker definitions */}
          <defs>
            <marker
              id="arrowGreen"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,6 L9,3 z" fill="#10B981" />
            </marker>
          </defs>
        </svg>
      </div>
    );
  }

  // Two Truths version
  return (
    <div className="flex justify-center items-center py-8">
      <svg
        width="400"
        height="350"
        viewBox="0 0 400 350"
        className="max-w-full h-auto"
        role="img"
        aria-label="Two Truths data flow diagram showing diverging paths"
      >
        <title>Two Truths - Peer Translation Approach</title>

        {/* Raw Data Source */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <rect x="150" y="20" width="100" height="60" rx="8" fill="#6B7280" />
          <text x="200" y="45" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            Raw Data
          </text>
          <text x="200" y="65" textAnchor="middle" fill="white" fontSize="10">
            Legacy System
          </text>
        </motion.g>

        {/* Left Translation Layer (Map A) */}
        <motion.g
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <rect x="30" y="140" width="100" height="60" rx="8" fill="#F59E0B" />
          <text x="80" y="165" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            Map A
          </text>
          <text x="80" y="185" textAnchor="middle" fill="white" fontSize="10">
            Translation
          </text>
        </motion.g>

        {/* Right Translation Layer (Map B) */}
        <motion.g
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <rect x="270" y="140" width="100" height="60" rx="8" fill="#F59E0B" />
          <text x="320" y="165" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            Map B
          </text>
          <text x="320" y="185" textAnchor="middle" fill="white" fontSize="10">
            Translation
          </text>
        </motion.g>

        {/* Arrows from Raw Data to Translation Layers */}
        <motion.path
          d="M 170 80 L 80 140"
          stroke="#6B7280"
          strokeWidth={3}
          markerEnd="url(#arrowGray)"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        />
        <motion.path
          d="M 230 80 L 320 140"
          stroke="#6B7280"
          strokeWidth={3}
          markerEnd="url(#arrowGray)"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        />

        {/* CFTC Output */}
        <motion.g
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <rect x="30" y="260" width="100" height="60" rx="8" fill="#DC2626" opacity={0.8} />
          <text x="80" y="280" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
            CFTC
          </text>
          <text x="80" y="300" textAnchor="middle" fill="white" fontSize="10">
            $101M
          </text>
        </motion.g>

        {/* Federal Reserve Output */}
        <motion.g
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <rect x="270" y="260" width="100" height="60" rx="8" fill="#DC2626" opacity={0.8} />
          <text x="320" y="280" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
            Fed Reserve
          </text>
          <text x="320" y="300" textAnchor="middle" fill="white" fontSize="10">
            $100M
          </text>
        </motion.g>

        {/* Arrows to outputs */}
        <motion.path
          d="M 80 200 L 80 260"
          stroke="#DC2626"
          strokeWidth={3}
          markerEnd="url(#arrowRed)"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        />
        <motion.path
          d="M 320 200 L 320 260"
          stroke="#DC2626"
          strokeWidth={3}
          markerEnd="url(#arrowRed)"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        />

        {/* Conflict indicator */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
        >
          <circle cx="200" cy="290" r="25" fill="#DC2626" opacity={0.3} />
          <text x="200" y="300" textAnchor="middle" fontSize="32">⚠️</text>
        </motion.g>

        {/* Arrow marker definitions */}
        <defs>
          <marker
            id="arrowGray"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#6B7280" />
          </marker>
          <marker
            id="arrowRed"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#DC2626" />
          </marker>
        </defs>

        {/* Label */}
        <motion.text
          x="200"
          y="345"
          textAnchor="middle"
          fontSize="14"
          fontWeight="bold"
          fill="#DC2626"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5 }}
        >
          Contradictory Data!
        </motion.text>
      </svg>
    </div>
  );
};

export default DataFlowDiagram;
