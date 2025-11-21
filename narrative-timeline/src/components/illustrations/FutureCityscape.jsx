import { motion } from 'framer-motion';

const FutureCityscape = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <svg
        width="500"
        height="300"
        viewBox="0 0 500 300"
        className="max-w-full h-auto"
        role="img"
        aria-label="Future digital economy showing JPM ahead and peers behind"
      >
        <title>The Future - JPM vs Peers</title>

        {/* Background gradient - digital future */}
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EFF6FF" />
            <stop offset="100%" stopColor="#DBEAFE" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="500" height="300" fill="url(#skyGradient)" />

        {/* Ground line */}
        <motion.line
          x1="0"
          y1="250"
          x2="500"
          y2="250"
          stroke="#94A3B8"
          strokeWidth={2}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Highway to the future (JPM path) */}
        <motion.path
          d="M 0 250 Q 250 230 500 150"
          stroke="#3B82F6"
          strokeWidth={40}
          fill="none"
          opacity={0.5}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        {/* Highway lines */}
        <motion.path
          d="M 0 250 Q 250 230 500 150"
          stroke="#FFFFFF"
          strokeWidth={2}
          strokeDasharray="20,15"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Winding road (Peers path) */}
        <motion.path
          d="M 0 255 Q 100 260 150 240 Q 200 220 250 235 Q 300 250 350 230"
          stroke="#F59E0B"
          strokeWidth={30}
          fill="none"
          opacity={0.5}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        {/* JPM Rocket */}
        <motion.g
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: 420, y: -80, opacity: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeOut" }}
        >
          {/* Rocket body */}
          <path
            d="M 0 0 L 10 -30 L 20 0 L 15 5 L 10 0 L 5 5 Z"
            fill="#3B82F6"
            stroke="#1E40AF"
            strokeWidth={2}
          />
          {/* Rocket window */}
          <circle cx="10" cy="-15" r="3" fill="#FFFFFF" />
          {/* Flames */}
          <motion.path
            d="M 5 5 L 7 15 L 10 10 L 13 15 L 15 5"
            fill="#F59E0B"
            animate={{
              d: [
                "M 5 5 L 7 15 L 10 10 L 13 15 L 15 5",
                "M 5 5 L 7 18 L 10 12 L 13 18 L 15 5",
                "M 5 5 L 7 15 L 10 10 L 13 15 L 15 5"
              ]
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
          {/* Label */}
          <text x="10" y="25" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#3B82F6">
            JPM 🚀
          </text>
        </motion.g>

        {/* Peers Car with flat tire */}
        <motion.g
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 280, opacity: 1 }}
          transition={{ duration: 2.5, delay: 1, ease: "linear" }}
        >
          {/* Car body */}
          <rect x="0" y="-15" width="40" height="15" rx="3" fill="#F59E0B" stroke="#D97706" strokeWidth={2} />
          {/* Car top */}
          <path d="M 5 -15 L 10 -25 L 30 -25 L 35 -15" fill="#F59E0B" stroke="#D97706" strokeWidth={2} />
          {/* Windows */}
          <rect x="7" y="-23" width="10" height="7" fill="#93C5FD" />
          <rect x="23" y="-23" width="10" height="7" fill="#93C5FD" />
          {/* Front wheel (normal) */}
          <circle cx="10" cy="0" r="5" fill="#1F2937" />
          <circle cx="10" cy="0" r="2" fill="#6B7280" />
          {/* Back wheel (flat) */}
          <ellipse cx="30" cy="2" rx="5" ry="3" fill="#DC2626" />
          <text x="30" y="4" textAnchor="middle" fontSize="8">⚠️</text>
          {/* Label */}
          <text x="20" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#F59E0B">
            Peers 🐢
          </text>
        </motion.g>

        {/* Future tech icons in the sky */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          {/* Blockchain icon */}
          <g transform="translate(400, 40)">
            <text fontSize="32">⛓️</text>
            <text x="16" y="45" textAnchor="middle" fontSize="10" fill="#374151">Blockchain</text>
          </g>

          {/* AI icon */}
          <g transform="translate(450, 80)">
            <text fontSize="32">🤖</text>
            <text x="16" y="45" textAnchor="middle" fontSize="10" fill="#374151">AI</text>
          </g>

          {/* Smart contract icon */}
          <g transform="translate(420, 120)">
            <text fontSize="24">📝</text>
            <text x="12" y="35" textAnchor="middle" fontSize="9" fill="#374151">Smart Contract</text>
          </g>
        </motion.g>

        {/* Obstacles on winding road */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          {/* Translation barrier 1 */}
          <rect x="140" y="220" width="8" height="20" fill="#DC2626" />
          <text x="144" y="215" textAnchor="middle" fontSize="10">🚧</text>

          {/* Translation barrier 2 */}
          <rect x="240" y="215" width="8" height="20" fill="#DC2626" />
          <text x="244" y="210" textAnchor="middle" fontSize="10">🚧</text>
        </motion.g>

        {/* Labels */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <text x="400" y="280" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3B82F6">
            Ready for the Future
          </text>
          <text x="180" y="280" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#F59E0B">
            Stuck in the Past
          </text>
        </motion.g>

        {/* Sparkles around rocket path */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 2
          }}
        >
          <text x="300" y="180" fontSize="16">✨</text>
          <text x="350" y="160" fontSize="16">✨</text>
          <text x="380" y="150" fontSize="16">✨</text>
        </motion.g>
      </svg>
    </div>
  );
};

export default FutureCityscape;
