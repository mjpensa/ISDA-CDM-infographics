import { motion } from 'framer-motion';

const ForkRoad = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <svg
        width="400"
        height="300"
        viewBox="0 0 400 300"
        className="max-w-full h-auto"
        role="img"
        aria-label="Fork in the road showing two diverging paths"
      >
        <title>Fork in the Road - Strategic Choice</title>

        {/* Main road coming from bottom */}
        <motion.path
          d="M 200 300 L 200 150"
          stroke="#6B7280"
          strokeWidth={60}
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Road dividing line */}
        <motion.path
          d="M 200 300 L 200 150"
          stroke="#FFFFFF"
          strokeWidth={3}
          strokeDasharray="20,15"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Left path (Native - Blue - JPM) */}
        <motion.path
          d="M 200 150 Q 150 100 80 50"
          stroke="#3B82F6"
          strokeWidth={50}
          fill="none"
          className="path-left"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Left path line */}
        <motion.path
          d="M 200 150 Q 150 100 80 50"
          stroke="#FFFFFF"
          strokeWidth={3}
          strokeDasharray="20,15"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />

        {/* Right path (Translator - Orange - Peers) */}
        <motion.path
          d="M 200 150 Q 250 100 320 50"
          stroke="#F59E0B"
          strokeWidth={50}
          fill="none"
          className="path-right"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Right path line */}
        <motion.path
          d="M 200 150 Q 250 100 320 50"
          stroke="#FFFFFF"
          strokeWidth={3}
          strokeDasharray="20,15"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />

        {/* Signpost at the fork */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {/* Post */}
          <rect x="195" y="120" width="10" height="80" fill="#8B4513" />

          {/* Left sign (Native) */}
          <rect x="100" y="130" width="100" height="30" fill="#3B82F6" rx="5" />
          <text
            x="150"
            y="150"
            textAnchor="middle"
            fill="white"
            fontSize="14"
            fontWeight="bold"
          >
            Native
          </text>

          {/* Right sign (Translator) */}
          <rect x="200" y="160" width="100" height="30" fill="#F59E0B" rx="5" />
          <text
            x="250"
            y="180"
            textAnchor="middle"
            fill="white"
            fontSize="14"
            fontWeight="bold"
          >
            Translator
          </text>
        </motion.g>

        {/* Labels with icons */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          {/* Left label - Native Speaker */}
          <text x="80" y="30" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#3B82F6">
            🗣️ Native Speaker
          </text>
          <text x="80" y="48" textAnchor="middle" fontSize="12" fill="#374151">
            J.P. Morgan
          </text>

          {/* Right label - Translator */}
          <text x="320" y="30" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#F59E0B">
            📖 Translator
          </text>
          <text x="320" y="48" textAnchor="middle" fontSize="12" fill="#374151">
            Other Banks
          </text>
        </motion.g>

        {/* Decision point circle */}
        <motion.circle
          cx="200"
          cy="150"
          r="8"
          fill="#DC2626"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.3, type: "spring" }}
        />

        {/* Pulsing effect at decision point */}
        <motion.circle
          cx="200"
          cy="150"
          r="8"
          fill="none"
          stroke="#DC2626"
          strokeWidth={2}
          initial={{ scale: 1, opacity: 1 }}
          animate={{
            scale: 3,
            opacity: 0
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeOut"
          }}
        />
      </svg>
    </div>
  );
};

export default ForkRoad;
