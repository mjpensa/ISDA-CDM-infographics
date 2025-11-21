import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import useStore from '../../store/useStore';
import { summaryData } from '../../data/chapters';

const SummarySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const setCurrentChapter = useStore((state) => state.setCurrentChapter);

  useEffect(() => {
    if (isInView) {
      setCurrentChapter(6); // Summary is chapter 6
    }
  }, [isInView, setCurrentChapter]);

  return (
    <motion.div
      ref={ref}
      id="summary-section"
      className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 flex items-center justify-center p-8 md:p-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl mb-6">📖</div>
          <h2 className="text-5xl font-bold font-ui mb-8 text-gray-800">
            The Tale Complete
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-2xl border-2 border-purple-300">
            <p className="text-2xl font-narrative italic text-gray-800 leading-relaxed">
              {summaryData.tagline}
            </p>
          </div>
        </motion.div>

        {/* Key Takeaways */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold font-ui text-center mb-10 text-gray-800">
            Key Takeaways
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {summaryData.keyTakeaways.map((takeaway, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <div className="text-center mb-4">
                  <span className="text-5xl">{takeaway.icon}</span>
                </div>
                <h4 className="text-2xl font-bold font-ui text-center mb-6 text-gray-800">
                  {takeaway.title}
                </h4>
                <ul className="space-y-3">
                  {takeaway.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visual Timeline Recap */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold font-ui text-center mb-10 text-gray-800">
            The Journey
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 hidden md:block" />

            {/* Timeline items */}
            <div className="space-y-8">
              {[
                { icon: '🏛️', title: 'Tower of Babel', description: 'Post-crisis chaos', color: 'gray' },
                { icon: '🔀', title: 'The Fork', description: 'Two paths diverge', color: 'blue' },
                { icon: '⚠️', title: 'Rosetta Trap', description: 'Hidden dependencies', color: 'orange' },
                { icon: '🌊', title: 'Ripple Effect', description: 'Two truths vs one truth', color: 'purple' },
                { icon: '🚀', title: 'The Future', description: 'Ready vs stuck', color: 'green' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                    <div className="bg-white rounded-lg p-4 shadow-md inline-block">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h5 className="font-bold font-ui text-lg">{item.title}</h5>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 flex-shrink-0 hidden md:block">
                    <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final Call to Action / Closing */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-12 shadow-2xl text-white">
            <div className="text-6xl mb-6">
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                💡
              </motion.span>
            </div>
            <h3 className="text-4xl font-bold font-ui mb-6">
              The Strategic Question
            </h3>
            <p className="text-2xl font-narrative mb-8 max-w-3xl mx-auto">
              Will you learn the language of the future, or rely on a dictionary from the past?
            </p>
            <div className="flex justify-center gap-8 text-5xl">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="cursor-pointer"
                title="Native Speaker - Future Ready"
              >
                🗣️
              </motion.div>
              <div className="text-3xl flex items-center">vs</div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: -10 }}
                className="cursor-pointer"
                title="Translator - Playing Catch-up"
              >
                📖
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Credits/Footer */}
        <motion.div
          className="mt-12 text-center text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-sm">
            The Tale of Two Banking Strategies: ISDA CDM Adoption
          </p>
          <p className="text-xs mt-2">
            Based on research comparing J.P. Morgan's native adoption strategy with peer translation approaches
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SummarySection;
