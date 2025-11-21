import { motion } from 'framer-motion';
import ChapterContainer from '../shared/ChapterContainer';
import ChapterHeader from '../shared/ChapterHeader';
import NarrativeText from '../shared/NarrativeText';
import TowerOfBabel from '../illustrations/TowerOfBabel';
import { chapters } from '../../data/chapters';
import { useStore } from '../../store/useStore';

const Chapter1 = () => {
  const chapter = chapters[0];
  const prefersReducedMotion = useStore((state) => state.prefersReducedMotion);

  return (
    <ChapterContainer chapterId={chapter.id} className="bg-chapter1-bg">
      <ChapterHeader chapter={chapter} />

      <div className="space-y-12">
        {chapter.sections.map((section, index) => {
          if (section.type === 'narrative') {
            return (
              <NarrativeText key={index} delay={0.1 * index}>
                <p className="text-chapter1-text max-w-3xl mx-auto">
                  {section.content}
                </p>
              </NarrativeText>
            );
          }

          if (section.type === 'problem-list') {
            return (
              <motion.div
                key={index}
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.6,
                  delay: prefersReducedMotion ? 0 : 0.2,
                }}
              >
                <h3 className="text-2xl font-bold text-chapter1-text mb-6 text-center">
                  {section.title}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {section.items.map((item, i) => (
                    <motion.div
                      key={i}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border-2 border-chapter1-accent"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: prefersReducedMotion ? 0.01 : 0.5,
                        delay: prefersReducedMotion ? 0 : 0.3 + i * 0.15,
                      }}
                      whileHover={{
                        scale: prefersReducedMotion ? 1 : 1.05,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="text-5xl mb-4">{item.flag}</div>
                      <h4 className="font-bold text-lg mb-2 text-chapter1-text">
                        {item.region}
                      </h4>
                      <p className="text-sm text-gray-300 italic">"{item.demand}"</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          }

          if (section.type === 'section-title') {
            return (
              <motion.h3
                key={index}
                className="text-3xl font-bold text-chapter1-accent text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.5,
                }}
              >
                {section.content}
              </motion.h3>
            );
          }

          if (section.type === 'pain-points') {
            return (
              <motion.div
                key={index}
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.6,
                }}
              >
                <h3 className="text-2xl font-bold text-chapter1-accent mb-6 text-center">
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.items.map((item, i) => (
                    <motion.div
                      key={i}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center gap-4 border-l-4 border-chapter1-accent"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: prefersReducedMotion ? 0.01 : 0.5,
                        delay: prefersReducedMotion ? 0 : i * 0.1,
                      }}
                    >
                      <div className="text-4xl flex-shrink-0">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-lg text-chapter1-text">
                          {item.label}
                        </h4>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          }

          if (section.type === 'solution') {
            return (
              <motion.div
                key={index}
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.8,
                }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg p-8 text-white shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    {section.title}
                  </h3>
                  <p className="text-lg leading-relaxed font-narrative">
                    {section.content}
                  </p>
                  <motion.div
                    className="mt-6 text-center text-4xl"
                    animate={{
                      scale: prefersReducedMotion ? 1 : [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    ✨
                  </motion.div>
                </div>
              </motion.div>
            );
          }

          return null;
        })}

        {/* Tower of Babel Illustration */}
        <TowerOfBabel />
      </div>
    </ChapterContainer>
  );
};

export default Chapter1;
