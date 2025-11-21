import { motion } from 'framer-motion';
import ChapterContainer from '../shared/ChapterContainer';
import ChapterHeader from '../shared/ChapterHeader';
import NarrativeText from '../shared/NarrativeText';
import CharacterAvatar from '../shared/CharacterAvatar';
import ForkRoad from '../illustrations/ForkRoad';
import { chapters } from '../../data/chapters';
import { useStore } from '../../store/useStore';

const Chapter2 = () => {
  const chapter = chapters[1];
  const prefersReducedMotion = useStore((state) => state.prefersReducedMotion);

  return (
    <ChapterContainer chapterId={chapter.id} className="bg-white">
      <ChapterHeader chapter={chapter} />

      <div className="space-y-12">
        {chapter.sections.map((section, index) => {
          if (section.type === 'narrative') {
            return (
              <NarrativeText key={index} delay={0.1 * index}>
                <p className="text-gray-800 max-w-3xl mx-auto">
                  {section.content}
                </p>
              </NarrativeText>
            );
          }

          if (section.type === 'dual-paths') {
            return (
              <div key={index} className="space-y-16">
                {/* Fork illustration */}
                <ForkRoad />

                {/* Detailed path descriptions */}
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                  {/* Path A: Native Speaker */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: prefersReducedMotion ? 0.01 : 0.8,
                    }}
                  >
                    <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-500">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">
                        {section.pathA.title}
                      </h3>

                      <div className="flex justify-center my-6">
                        <CharacterAvatar type="native-speaker" size="large" />
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white rounded p-4">
                          <p className="font-semibold text-blue-900 mb-2">Bank:</p>
                          <p className="text-blue-700 text-lg">{section.pathA.bank}</p>
                        </div>

                        <div className="bg-white rounded p-4">
                          <p className="font-semibold text-blue-900 mb-2">Strategy:</p>
                          <p className="text-blue-700">{section.pathA.strategy}</p>
                        </div>

                        <div className="bg-white rounded p-4">
                          <p className="font-semibold text-blue-900 mb-2">Metaphor:</p>
                          <p className="text-blue-700 italic">{section.pathA.metaphor}</p>
                        </div>

                        <div className="bg-blue-100 rounded p-4 border-l-4 border-blue-600">
                          <p className="text-blue-900 italic font-narrative">
                            "{section.pathA.quote}"
                          </p>
                        </div>

                        <div className="bg-white rounded p-4">
                          <p className="text-gray-800 leading-relaxed">
                            {section.pathA.explanation}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="bg-red-50 border border-red-300 rounded p-4">
                            <p className="font-bold text-red-900 mb-2">The Cost:</p>
                            <p className="text-2xl mb-2">{section.pathA.investment.cost.level}</p>
                            <p className="text-sm text-red-800">
                              {section.pathA.investment.cost.description}
                            </p>
                          </div>

                          <div className="bg-green-50 border border-green-300 rounded p-4">
                            <p className="font-bold text-green-900 mb-2">The Reward:</p>
                            <p className="text-2xl mb-2">{section.pathA.investment.reward.level}</p>
                            <p className="text-sm text-green-800">
                              {section.pathA.investment.reward.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Path B: Translator */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: prefersReducedMotion ? 0.01 : 0.8,
                    }}
                  >
                    <div className="bg-orange-50 rounded-lg p-8 border-2 border-orange-500">
                      <h3 className="text-2xl font-bold text-orange-900 mb-4">
                        {section.pathB.title}
                      </h3>

                      <div className="flex justify-center my-6">
                        <CharacterAvatar type="tourist-phrasebook" size="large" />
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white rounded p-4">
                          <p className="font-semibold text-orange-900 mb-2">Banks:</p>
                          <ul className="text-orange-700 space-y-1">
                            {section.pathB.banks.map((bank, i) => (
                              <li key={i}>• {bank}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-white rounded p-4">
                          <p className="font-semibold text-orange-900 mb-2">Strategy:</p>
                          <p className="text-orange-700">{section.pathB.strategy}</p>
                        </div>

                        <div className="bg-white rounded p-4">
                          <p className="font-semibold text-orange-900 mb-2">Metaphor:</p>
                          <p className="text-orange-700 italic">{section.pathB.metaphor}</p>
                        </div>

                        <div className="bg-orange-100 rounded p-4 border-l-4 border-orange-600">
                          <p className="text-orange-900 italic font-narrative">
                            "{section.pathB.quote}"
                          </p>
                        </div>

                        <div className="bg-white rounded p-4">
                          <p className="text-gray-800 leading-relaxed">
                            {section.pathB.explanation}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="bg-green-50 border border-green-300 rounded p-4">
                            <p className="font-bold text-green-900 mb-2">The Benefit:</p>
                            <p className="text-2xl mb-2">{section.pathB.tradeoff.benefit.level}</p>
                            <p className="text-sm text-green-800">
                              {section.pathB.tradeoff.benefit.description}
                            </p>
                          </div>

                          <div className="bg-red-50 border border-red-300 rounded p-4">
                            <p className="font-bold text-red-900 mb-2">The Risk:</p>
                            <p className="text-2xl mb-2">{section.pathB.tradeoff.risk.level}</p>
                            <p className="text-sm text-red-800">
                              {section.pathB.tradeoff.risk.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>
    </ChapterContainer>
  );
};

export default Chapter2;
