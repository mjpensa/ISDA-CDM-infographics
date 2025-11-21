import { motion } from 'framer-motion';
import ChapterContainer from '../shared/ChapterContainer';
import ChapterHeader from '../shared/ChapterHeader';
import NarrativeText from '../shared/NarrativeText';
import FutureCityscape from '../illustrations/FutureCityscape';
import { chapters } from '../../data/chapters';
import { useStore } from '../../store/useStore';

const Chapter5 = () => {
  const chapter = chapters[4];
  const prefersReducedMotion = useStore((state) => state.prefersReducedMotion);

  return (
    <ChapterContainer chapterId={chapter.id} className="bg-chapter5-bg">
      <ChapterHeader chapter={chapter} />

      <div className="space-y-12">
        {chapter.sections.map((section, index) => {
          if (section.type === 'narrative') {
            return (
              <NarrativeText key={index} isQuote delay={0.1 * index}>
                <p className="text-gray-800 max-w-4xl mx-auto text-xl font-bold">
                  {section.content}
                </p>
              </NarrativeText>
            );
          }

          if (section.type === 'future-technology') {
            return (
              <motion.div
                key={index}
                className="max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.6,
                }}
              >
                <div className="bg-white rounded-lg p-8 shadow-xl border-2 border-blue-300">
                  <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center">
                    {section.title}
                  </h3>

                  <div className="bg-blue-50 rounded-lg p-6 mb-8">
                    <p className="text-lg text-gray-800 italic text-center">
                      {section.opportunity}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Path A */}
                    <motion.div
                      className="bg-gradient-to-br from-blue-500 to-green-500 rounded-lg p-6 text-white"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: prefersReducedMotion ? 0.01 : 0.5,
                        delay: prefersReducedMotion ? 0 : 0.2,
                      }}
                    >
                      <h4 className="text-xl font-bold mb-4">
                        {section.paths.pathA.title}
                      </h4>
                      <ul className="space-y-3">
                        {section.paths.pathA.items.map((item, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: prefersReducedMotion ? 0.01 : 0.3,
                              delay: prefersReducedMotion ? 0 : 0.3 + i * 0.1,
                            }}
                          >
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Path B */}
                    <motion.div
                      className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg p-6 text-white"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: prefersReducedMotion ? 0.01 : 0.5,
                        delay: prefersReducedMotion ? 0 : 0.2,
                      }}
                    >
                      <h4 className="text-xl font-bold mb-4">
                        {section.paths.pathB.title}
                      </h4>
                      <ul className="space-y-3">
                        {section.paths.pathB.items.map((item, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: prefersReducedMotion ? 0.01 : 0.3,
                              delay: prefersReducedMotion ? 0 : 0.3 + i * 0.1,
                            }}
                          >
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          }

          if (section.type === 'final-divergence') {
            return (
              <motion.div
                key={index}
                className="max-w-6xl mx-auto space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.6,
                }}
              >
                <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">
                  {section.title}
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* JPM Position */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: prefersReducedMotion ? 0.01 : 0.8,
                    }}
                  >
                    <div className="bg-gradient-to-br from-blue-600 to-green-500 rounded-lg p-8 text-white shadow-2xl">
                      <h4 className="text-2xl font-bold mb-4">J.P. Morgan's Position</h4>

                      <div className="bg-white/20 rounded-lg p-4 mb-6">
                        <p className="text-xl italic font-narrative">
                          "{section.jpmPosition.quote}"
                        </p>
                      </div>

                      <ul className="space-y-3">
                        {section.jpmPosition.items.map((item, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-3 text-lg"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: prefersReducedMotion ? 0.01 : 0.4,
                              delay: prefersReducedMotion ? 0 : i * 0.1,
                            }}
                          >
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div
                        className="mt-6 text-center text-6xl"
                        animate={{
                          scale: prefersReducedMotion ? 1 : [1, 1.2, 1],
                          rotate: prefersReducedMotion ? 0 : [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                      >
                        🚀
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Peers Position */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: prefersReducedMotion ? 0.01 : 0.8,
                    }}
                  >
                    <div className="bg-gradient-to-br from-gray-600 to-orange-500 rounded-lg p-8 text-white shadow-2xl">
                      <h4 className="text-2xl font-bold mb-4">Peers' Position</h4>

                      <div className="bg-white/20 rounded-lg p-4 mb-6">
                        <p className="text-xl italic font-narrative">
                          "{section.peersPosition.quote}"
                        </p>
                      </div>

                      <ul className="space-y-3">
                        {section.peersPosition.items.map((item, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-3 text-lg"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: prefersReducedMotion ? 0.01 : 0.4,
                              delay: prefersReducedMotion ? 0 : i * 0.1,
                            }}
                          >
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div
                        className="mt-6 text-center text-6xl"
                        animate={{
                          x: prefersReducedMotion ? 0 : [-3, 3, -3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        🐢
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Final metaphor callback */}
                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-lg p-10 text-white text-center shadow-2xl">
                  <p className="text-3xl font-bold font-narrative">
                    "Learning the language vs Using a dictionary"
                  </p>
                </div>
              </motion.div>
            );
          }

          return null;
        })}

        {/* Future Cityscape Illustration */}
        <FutureCityscape />
      </div>
    </ChapterContainer>
  );
};

export default Chapter5;
