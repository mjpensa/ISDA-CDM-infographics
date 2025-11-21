import { motion } from 'framer-motion';
import { useStore } from '../../store/useStore';
import { CheckCircle2, XCircle, Database, Building2, AlertCircle } from 'lucide-react';

const DataFlowDiagram = () => {
  const prefersReducedMotion = useStore((state) => state.prefersReducedMotion);

  return (
    <div className="illustration-container">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
        {/* Left side: Peers - Two Truths Problem */}
        <motion.div
          className="bg-gradient-chapter4-left rounded-lg p-6 text-white"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.8,
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <XCircle className="w-8 h-8" />
            <h3 className="text-2xl font-bold">Peers: "Two Truths"</h3>
          </div>

          <svg viewBox="0 0 300 400" className="w-full h-auto mb-4">
            {/* Raw data source */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.5,
                delay: prefersReducedMotion ? 0 : 0.3,
              }}
            >
              <circle cx="150" cy="50" r="30" fill="white" opacity="0.9" />
              <text
                x="150"
                y="55"
                textAnchor="middle"
                fontSize="12"
                fontWeight="bold"
                fill="#F59E0B"
              >
                Raw Data
              </text>
            </motion.g>

            {/* Split into two paths */}
            <motion.path
              d="M 150 80 L 150 150 M 150 150 L 80 200 M 150 150 L 220 200"
              stroke="white"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 1,
                delay: prefersReducedMotion ? 0 : 0.8,
              }}
            />

            {/* Path 1: Trade Reporting */}
            <motion.g
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.5,
                delay: prefersReducedMotion ? 0 : 1.5,
              }}
            >
              <rect x="30" y="200" width="100" height="60" fill="white" opacity="0.9" rx="5" />
              <text x="80" y="220" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#DC2626">
                Map A
              </text>
              <text x="80" y="235" textAnchor="middle" fontSize="9" fill="#374151">
                Trade
              </text>
              <text x="80" y="248" textAnchor="middle" fontSize="9" fill="#374151">
                Reporting
              </text>
            </motion.g>

            {/* Path 2: CCAR Reporting */}
            <motion.g
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.5,
                delay: prefersReducedMotion ? 0 : 1.5,
              }}
            >
              <rect x="170" y="200" width="100" height="60" fill="white" opacity="0.9" rx="5" />
              <text x="220" y="220" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#DC2626">
                Map B
              </text>
              <text x="220" y="235" textAnchor="middle" fontSize="9" fill="#374151">
                CCAR
              </text>
              <text x="220" y="248" textAnchor="middle" fontSize="9" fill="#374151">
                Reporting
              </text>
            </motion.g>

            {/* Outputs with different values */}
            <motion.path
              d="M 80 260 L 80 300 M 220 260 L 220 300"
              stroke="white"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.8,
                delay: prefersReducedMotion ? 0 : 2,
              }}
            />

            {/* CFTC Output */}
            <motion.g
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.5,
                delay: prefersReducedMotion ? 0 : 2.5,
              }}
            >
              <rect x="30" y="310" width="100" height="50" fill="#DC2626" rx="5" />
              <text x="80" y="330" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">
                CFTC
              </text>
              <text x="80" y="345" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">
                $101M
              </text>
            </motion.g>

            {/* Fed Output */}
            <motion.g
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.5,
                delay: prefersReducedMotion ? 0 : 2.5,
              }}
            >
              <rect x="170" y="310" width="100" height="50" fill="#DC2626" rx="5" />
              <text x="220" y="330" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">
                Fed
              </text>
              <text x="220" y="345" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">
                $100M
              </text>
            </motion.g>

            {/* Conflict indicator */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.5,
                delay: prefersReducedMotion ? 0 : 3,
                repeat: prefersReducedMotion ? 0 : Infinity,
                repeatDelay: 2,
              }}
            >
              <circle cx="150" cy="380" r="15" fill="#DC2626" />
              <text x="150" y="388" textAnchor="middle" fontSize="20" fill="white" fontWeight="bold">
                ≠
              </text>
            </motion.g>
          </svg>

          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Different mapping logic
            </p>
            <p className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Contradictory outputs
            </p>
            <p className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Thousands of hours reconciling
            </p>
          </div>
        </motion.div>

        {/* Right side: JPM - One Truth */}
        <motion.div
          className="bg-gradient-chapter4-right rounded-lg p-6 text-white"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.8,
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="w-8 h-8" />
            <h3 className="text-2xl font-bold">JPM: "One Truth"</h3>
          </div>

          <svg viewBox="0 0 300 400" className="w-full h-auto mb-4">
            {/* CDM Object source */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.5,
                delay: prefersReducedMotion ? 0 : 0.3,
              }}
            >
              <circle cx="150" cy="50" r="35" fill="white" opacity="0.9" />
              <text
                x="150"
                y="50"
                textAnchor="middle"
                fontSize="11"
                fontWeight="bold"
                fill="#3B82F6"
              >
                CDM
              </text>
              <text
                x="150"
                y="62"
                textAnchor="middle"
                fontSize="10"
                fill="#374151"
              >
                Object
              </text>
            </motion.g>

            {/* Single source radiating out */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 1,
                delay: prefersReducedMotion ? 0 : 0.8,
              }}
            >
              {/* Rays */}
              <motion.path
                d="M 150 85 L 150 180"
                stroke="white"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.8,
                  delay: prefersReducedMotion ? 0 : 1,
                }}
              />
              <motion.path
                d="M 150 180 L 80 250 M 150 180 L 150 250 M 150 180 L 220 250"
                stroke="white"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.8,
                  delay: prefersReducedMotion ? 0 : 1.3,
                }}
              />
            </motion.g>

            {/* Multiple outputs - all reading same source */}
            {[
              { x: 80, label: 'Trade\nReport', delay: 1.8 },
              { x: 150, label: 'CCAR\nReport', delay: 2 },
              { x: 220, label: 'Risk\nReport', delay: 2.2 },
            ].map((output, index) => (
              <motion.g
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.5,
                  delay: prefersReducedMotion ? 0 : output.delay,
                }}
              >
                <rect
                  x={output.x - 35}
                  y="260"
                  width="70"
                  height="50"
                  fill="white"
                  opacity="0.9"
                  rx="5"
                />
                {output.label.split('\n').map((line, i) => (
                  <text
                    key={i}
                    x={output.x}
                    y={275 + i * 15}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#374151"
                    fontWeight="bold"
                  >
                    {line}
                  </text>
                ))}
              </motion.g>
            ))}

            {/* Consistency indicator */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.5,
                delay: prefersReducedMotion ? 0 : 2.5,
              }}
            >
              <circle cx="150" cy="350" r="20" fill="#10B981" />
              <text x="150" y="360" textAnchor="middle" fontSize="24" fill="white" fontWeight="bold">
                ✓
              </text>
            </motion.g>
          </svg>

          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Single semantic definition
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Consistent across all outputs
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Zero reconciliation needed
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DataFlowDiagram;
