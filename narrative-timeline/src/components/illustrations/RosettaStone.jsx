import { motion } from 'framer-motion';

const RosettaStone = () => {
  const cracks = [
    { d: "M 150 50 Q 140 150 130 250", delay: 0.5 },
    { d: "M 200 60 Q 210 130 220 200", delay: 0.7 },
    { d: "M 100 120 Q 180 125 260 130", delay: 0.9 },
    { d: "M 120 180 Q 200 175 280 170", delay: 1.1 },
  ];

  return (
    <div className="flex justify-center items-center py-8">
      <svg
        width="400"
        height="320"
        viewBox="0 0 400 320"
        className="max-w-full h-auto"
        role="img"
        aria-label="Rosetta Stone with cracks representing translation layer fragility"
      >
        <title>Rosetta Stone - The Translation Trap</title>

        {/* Stone tablet background */}
        <motion.rect
          x="80"
          y="30"
          width="240"
          height="240"
          rx="10"
          fill="#D4A574"
          stroke="#8B6F47"
          strokeWidth={3}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Inner stone detail */}
        <motion.rect
          x="90"
          y="40"
          width="220"
          height="220"
          rx="5"
          fill="#C19A6B"
          stroke="#8B6F47"
          strokeWidth={2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Fake text lines representing translation mappings */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {[...Array(12)].map((_, i) => (
            <rect
              key={`line-${i}`}
              x="110"
              y={60 + i * 18}
              width={180 - (i % 3) * 20}
              height="3"
              fill="#654321"
              rx="1"
            />
          ))}
        </motion.g>

        {/* Cracks appearing */}
        {cracks.map((crack, index) => (
          <motion.path
            key={`crack-${index}`}
            d={crack.d}
            stroke="#DC2626"
            strokeWidth={4}
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: crack.delay,
              ease: "easeIn"
            }}
          />
        ))}

        {/* Small crack branches */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <path d="M 150 150 L 140 160" stroke="#DC2626" strokeWidth={2} />
          <path d="M 200 130 L 210 120" stroke="#DC2626" strokeWidth={2} />
          <path d="M 180 180 L 190 195" stroke="#DC2626" strokeWidth={2} />
        </motion.g>

        {/* Warning symbols around the stone */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.5, type: "spring" }}
        >
          <text x="40" y="100" fontSize="32">⚠️</text>
          <text x="330" y="160" fontSize="32">⚠️</text>
          <text x="180" y="290" fontSize="32">🔧</text>
        </motion.g>

        {/* Pulsing danger effect */}
        <motion.circle
          cx="200"
          cy="140"
          r="80"
          fill="none"
          stroke="#DC2626"
          strokeWidth={3}
          opacity={0.3}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        />

        {/* Label */}
        <motion.text
          x="200"
          y="310"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="#DC2626"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          The Translation Layer Breaks
        </motion.text>
      </svg>
    </div>
  );
};

export default RosettaStone;
