import { motion } from 'framer-motion';
import ChapterContainer from '../shared/ChapterContainer';
import ChapterHeader from '../shared/ChapterHeader';
import NarrativeText from '../shared/NarrativeText';
import RosettaStone from '../illustrations/RosettaStone';
import { chapters } from '../../data/chapters';
import { useStore } from '../../store/useStore';
import { AlertTriangle } from 'lucide-react';

const Chapter3 = () => {
  const chapter = chapters[2];
  const prefersReducedMotion = useStore((state) => state.prefersReducedMotion);

  return (
    <ChapterContainer chapterId={chapter.id} className="bg-chapter3-bg">
      <ChapterHeader chapter={chapter} />

      <div className="space-y-12">
        {chapter.sections.map((section, index) => {
          if (section.type === 'narrative') {
            return (
              <NarrativeText key={index} delay={0.1 * index}>
                <p className="text-gray-800 max-w-3xl mx-auto text-center text-xl font-bold">
                  {section.content}
                </p>
              </NarrativeText>
            );
          }

          if (section.type === 'trap-explanation') {
            return (
              <motion.div
                key={index}
                className="max-w-4xl mx-auto space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.6,
                }}
              >
                <h3 className="text-3xl font-bold text-chapter3-primary text-center flex items-center justify-center gap-3">
                  <AlertTriangle className="w-8 h-8" />
                  {section.title}
                </h3>

                <div className="bg-white rounded-lg p-6 border-2 border-chapter3-primary shadow-lg">
                  <h4 className="text-xl font-bold text-chapter3-accent mb-3">
                    {section.dependency.title}
                  </h4>
                  <p className="text-gray-800 leading-relaxed">
                    {section.dependency.content}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-chapter3-accent shadow-lg">
                  <h4 className="text-xl font-bold text-chapter3-accent mb-4">
                    {section.breaksMap.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.breaksMap.items.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3 text-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: prefersReducedMotion ? 0.01 : 0.4,
                          delay: prefersReducedMotion ? 0 : i * 0.1,
                        }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          }

          if (section.type === 'obscured-truth') {
            return (
              <motion.div
                key={index}
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.6,
                }}
              >
                <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-8 border-2 border-chapter3-accent shadow-lg">
                  <h3 className="text-2xl font-bold text-chapter3-accent mb-4 text-center">
                    {section.title}
                  </h3>
                  <p className="text-gray-800 text-center mb-6 text-lg">
                    {section.content}
                  </p>

                  <div className="bg-white rounded-lg p-6 mb-6">
                    <p className="text-center font-bold text-lg text-gray-900 mb-6">
                      {section.comparison.question}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-2xl">{section.comparison.jpm.icon}</span>
                          <h4 className="font-bold text-green-900">
                            {section.comparison.jpm.label}
                          </h4>
                        </div>
                        <p className="text-green-800">
                          {section.comparison.jpm.response}
                        </p>
                      </div>

                      <div className="bg-orange-50 border-2 border-orange-500 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-2xl">{section.comparison.peer.icon}</span>
                          <h4 className="font-bold text-orange-900">
                            {section.comparison.peer.label}
                          </h4>
                        </div>
                        <p className="text-orange-800">
                          {section.comparison.peer.response}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          }

          if (section.type === 'never-ending-cycle') {
            return (
              <motion.div
                key={index}
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.6,
                }}
              >
                <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-lg p-8 text-white shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    {section.title}
                  </h3>
                  <p className="text-center mb-6 text-lg">
                    {section.content}
                  </p>

                  <ol className="space-y-3">
                    {section.steps.map((step, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3 bg-white/20 rounded-lg p-4"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: prefersReducedMotion ? 0.01 : 0.4,
                          delay: prefersReducedMotion ? 0 : i * 0.1,
                        }}
                      >
                        <span className="flex-shrink-0 w-8 h-8 bg-white text-orange-600 rounded-full flex items-center justify-center font-bold">
                          {i + 1}
                        </span>
                        <span className="text-lg">{step}</span>
                      </motion.li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            );
          }

          return null;
        })}

        {/* Rosetta Stone Illustration */}
        <RosettaStone />
      </div>
    </ChapterContainer>
  );
};

export default Chapter3;
