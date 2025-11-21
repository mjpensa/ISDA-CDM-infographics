import { motion } from 'framer-motion';
import ChapterContainer from '../shared/ChapterContainer';
import { summaryData } from '../../data/chapters';
import { useStore } from '../../store/useStore';
import { CheckCircle2, TrendingUp, Shield } from 'lucide-react';

const Summary = () => {
  const prefersReducedMotion = useStore((state) => state.prefersReducedMotion);

  const icons = [CheckCircle2, Shield, TrendingUp];

  return (
    <ChapterContainer chapterId={6} className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.8,
          }}
        >
          <h1 className="chapter-title text-blue-900 mb-8">
            The Takeaway
          </h1>

          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 0.8,
              delay: prefersReducedMotion ? 0 : 0.3,
            }}
          >
            <p className="text-3xl md:text-4xl font-bold font-narrative leading-relaxed">
              "{summaryData.tagline}"
            </p>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {summaryData.keyTakeaways.map((takeaway, index) => {
            const IconComponent = icons[index];

            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border-2 border-blue-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.6,
                  delay: prefersReducedMotion ? 0 : index * 0.2,
                }}
                whileHover={{
                  scale: prefersReducedMotion ? 1 : 1.05,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {takeaway.title}
                </h3>

                <ul className="space-y-3">
                  {takeaway.items.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2 text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: prefersReducedMotion ? 0.01 : 0.4,
                        delay: prefersReducedMotion ? 0 : 0.5 + index * 0.2 + i * 0.1,
                      }}
                    >
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Story recap */}
        <motion.div
          className="bg-white rounded-xl p-8 shadow-lg border-2 border-purple-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.6,
          }}
        >
          <h3 className="text-2xl font-bold text-purple-900 mb-6 text-center">
            The Journey Recap
          </h3>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { icon: '🏛️', title: 'Tower of Babel', desc: 'The Problem' },
              { icon: '🔀', title: 'Fork in Road', desc: 'The Choice' },
              { icon: '⚠️', title: 'Rosetta Trap', desc: 'The Risk' },
              { icon: '📊', title: 'Ripple Effect', desc: 'The Impact' },
              { icon: '🚀', title: 'The Future', desc: 'The Winner' },
            ].map((chapter, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-gradient-to-b from-purple-50 to-blue-50 rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.4,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                }}
                whileHover={{
                  scale: prefersReducedMotion ? 1 : 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="text-4xl mb-2">{chapter.icon}</div>
                <p className="font-bold text-sm text-gray-900">{chapter.title}</p>
                <p className="text-xs text-gray-600">{chapter.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.8,
            delay: prefersReducedMotion ? 0 : 0.5,
          }}
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              The Strategic Imperative
            </h3>
            <p className="text-xl font-narrative mb-6">
              In the digital economy, being a <strong>Native Speaker</strong> isn't just an advantage—it's survival.
            </p>
            <div className="flex items-center justify-center gap-8 text-5xl">
              <motion.span
                animate={{
                  scale: prefersReducedMotion ? 1 : [1, 1.2, 1],
                  rotate: prefersReducedMotion ? 0 : [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                🗣️
              </motion.span>
              <span className="text-3xl">{'>'}</span>
              <motion.span
                animate={{
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                📖
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </ChapterContainer>
  );
};

export default Summary;
