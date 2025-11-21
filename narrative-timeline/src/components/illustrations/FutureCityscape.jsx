import { motion } from 'framer-motion';
import { useStore } from '../../store/useStore';
import { Rocket, Snail, Zap, Link2, Brain, AlertTriangle } from 'lucide-react';

const FutureCityscape = () => {
  const prefersReducedMotion = useStore((state) => state.prefersReducedMotion);

  return (
    <div className="illustration-container">
      <div className="max-w-6xl mx-auto">
        <svg
          viewBox="0 0 800 400"
          className="w-full h-auto"
          role="img"
          aria-label="Future digital economy showing JPM ready and Peers struggling"
        >
          {/* Sky gradient */}
          <defs>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EFF6FF" />
              <stop offset="100%" stopColor="#DBEAFE" />
            </linearGradient>
            <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9CA3AF" />
              <stop offset="50%" stopColor="#D1D5DB" />
              <stop offset="100%" stopColor="#9CA3AF" />
            </linearGradient>
          </defs>

          <rect x="0" y="0" width="800" height="400" fill="url(#skyGradient)" />

          {/* Ground */}
          <rect x="0" y="320" width="800" height="80" fill="#10B981" opacity="0.3" />

          {/* Roads */}
          <rect x="0" y="280" width="400" height="40" fill="url(#roadGradient)" />
          <rect x="400" y="300" width="400" height="40" fill="url(#roadGradient)" />

          {/* Road markings */}
          {[50, 150, 250, 350].map((x) => (
            <rect key={x} x={x} y="295" width="30" height="10" fill="white" />
          ))}
          {[450, 550, 650, 750].map((x) => (
            <rect key={x} x={x} y="315" width="30" height="10" fill="white" />
          ))}

          {/* Left side - JPM Highway (smooth and direct) */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 1,
              delay: prefersReducedMotion ? 0 : 0.5,
            }}
          >
            {/* Future city buildings */}
            {[
              { x: 50, y: 150, height: 130, color: '#3B82F6' },
              { x: 120, y: 120, height: 160, color: '#2563EB' },
              { x: 200, y: 100, height: 180, color: '#1D4ED8' },
              { x: 280, y: 140, height: 140, color: '#3B82F6' },
            ].map((building, index) => (
              <motion.g
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.8,
                  delay: prefersReducedMotion ? 0 : 0.8 + index * 0.1,
                }}
              >
                <rect
                  x={building.x}
                  y={building.y}
                  width="50"
                  height={building.height}
                  fill={building.color}
                  stroke="#1E40AF"
                  strokeWidth="2"
                />
                {/* Windows */}
                {Array.from({ length: Math.floor(building.height / 20) }).map((_, i) => (
                  <g key={i}>
                    <rect
                      x={building.x + 10}
                      y={building.y + 10 + i * 20}
                      width="10"
                      height="8"
                      fill="#60A5FA"
                    />
                    <rect
                      x={building.x + 30}
                      y={building.y + 10 + i * 20}
                      width="10"
                      height="8"
                      fill="#60A5FA"
                    />
                  </g>
                ))}
              </motion.g>
            ))}

            {/* JPM Rocket */}
            <motion.g
              initial={{ x: -100, y: 50 }}
              animate={{ x: 0, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 2,
                delay: prefersReducedMotion ? 0 : 1.5,
                ease: 'easeOut',
              }}
            >
              <motion.circle
                cx="350"
                cy="240"
                r="30"
                fill="#3B82F6"
                stroke="#1E40AF"
                strokeWidth="3"
                animate={{
                  y: prefersReducedMotion ? 0 : [-2, 2, -2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              {/* Rocket body */}
              <path
                d="M 350 220 L 340 240 L 340 250 L 360 250 L 360 240 Z"
                fill="white"
                stroke="#1E40AF"
                strokeWidth="2"
              />
              {/* Flame */}
              <motion.path
                d="M 345 250 L 350 260 L 355 250"
                fill="#F59E0B"
                animate={{
                  scaleY: prefersReducedMotion ? 1 : [1, 1.3, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                }}
                style={{ transformOrigin: '350px 250px' }}
              />
            </motion.g>

            {/* Technology icons (Blockchain & AI) */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.5,
                delay: prefersReducedMotion ? 0 : 2,
              }}
            >
              {/* Blockchain */}
              <circle cx="100" cy="60" r="25" fill="#10B981" opacity="0.2" />
              <text x="100" y="68" textAnchor="middle" fontSize="28">
                ⛓️
              </text>

              {/* AI */}
              <circle cx="250" cy="50" r="25" fill="#8B5CF6" opacity="0.2" />
              <text x="250" y="58" textAnchor="middle" fontSize="28">
                🤖
              </text>
            </motion.g>
          </motion.g>

          {/* Right side - Peers with obstacles */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 1,
              delay: prefersReducedMotion ? 0 : 0.7,
            }}
          >
            {/* Old buildings (legacy systems) */}
            {[
              { x: 450, y: 200, height: 80, color: '#6B7280' },
              { x: 530, y: 180, height: 100, color: '#9CA3AF' },
              { x: 620, y: 210, height: 70, color: '#6B7280' },
              { x: 710, y: 190, height: 90, color: '#9CA3AF' },
            ].map((building, index) => (
              <motion.rect
                key={index}
                x={building.x}
                y={building.y}
                width="50"
                height={building.height}
                fill={building.color}
                stroke="#4B5563"
                strokeWidth="2"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.8,
                  delay: prefersReducedMotion ? 0 : 1 + index * 0.1,
                }}
              />
            ))}

            {/* Obstacles on the road */}
            {[
              { x: 480, y: 300, label: '⚠️' },
              { x: 580, y: 300, label: '🚧' },
              { x: 680, y: 300, label: '⚠️' },
            ].map((obstacle, index) => (
              <motion.g
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.5,
                  delay: prefersReducedMotion ? 0 : 2 + index * 0.2,
                }}
              >
                <circle cx={obstacle.x} cy={obstacle.y} r="20" fill="#DC2626" opacity="0.8" />
                <text
                  x={obstacle.x}
                  y={obstacle.y + 6}
                  textAnchor="middle"
                  fontSize="20"
                >
                  {obstacle.label}
                </text>
              </motion.g>
            ))}

            {/* Slow car */}
            <motion.g
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 3,
                delay: prefersReducedMotion ? 0 : 1.5,
                ease: 'easeOut',
              }}
            >
              <rect x="550" y="305" width="60" height="30" fill="#F59E0B" rx="5" />
              <circle cx="565" cy="335" r="8" fill="#374151" />
              <circle cx="595" cy="335" r="8" fill="#374151" />
              {/* Flat tire */}
              <motion.circle
                cx="565"
                cy="338"
                r="6"
                fill="#DC2626"
                animate={{
                  scale: prefersReducedMotion ? 1 : [1, 0.8, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              />
            </motion.g>

            {/* Translation layers stacking up */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.5,
                delay: prefersReducedMotion ? 0 : 2.5,
              }}
            >
              <text x="650" y="150" textAnchor="middle" fontSize="12" fill="#DC2626" fontWeight="bold">
                Translation
              </text>
              <text x="650" y="165" textAnchor="middle" fontSize="12" fill="#DC2626" fontWeight="bold">
                Layers
              </text>
              {[0, 1, 2].map((i) => (
                <rect
                  key={i}
                  x="610"
                  y={170 + i * 12}
                  width="80"
                  height="10"
                  fill="#F59E0B"
                  opacity={0.7 - i * 0.2}
                  stroke="#DC2626"
                  strokeWidth="1"
                />
              ))}
            </motion.g>
          </motion.g>

          {/* Labels */}
          <motion.text
            x="200"
            y="370"
            textAnchor="middle"
            fontSize="20"
            fontWeight="bold"
            fill="#1E40AF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 0.5,
              delay: prefersReducedMotion ? 0 : 3,
            }}
          >
            J.P. Morgan: Ready 🚀
          </motion.text>

          <motion.text
            x="600"
            y="370"
            textAnchor="middle"
            fontSize="20"
            fontWeight="bold"
            fill="#DC2626"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 0.5,
              delay: prefersReducedMotion ? 0 : 3,
            }}
          >
            Peers: Stuck 🐢
          </motion.text>
        </svg>

        {/* Legend */}
        <div className="mt-8 grid md:grid-cols-2 gap-6 text-sm">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Native CDM = Future-Ready
            </h4>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start gap-2">
                <Link2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Direct blockchain integration</span>
              </li>
              <li className="flex items-start gap-2">
                <Brain className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>AI-powered with clean data</span>
              </li>
              <li className="flex items-start gap-2">
                <Rocket className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Leading the digital economy</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Translation Layer = Stuck
            </h4>
            <ul className="space-y-2 text-orange-800">
              <li className="flex items-start gap-2">
                <Snail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Need new translation for every tech</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>AI compromised by translated data</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Playing catch-up, not leading</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureCityscape;
