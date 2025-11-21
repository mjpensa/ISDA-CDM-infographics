import { motion } from 'framer-motion';
import ChapterContainer from '../shared/ChapterContainer';
import NarrativeText from '../shared/NarrativeText';
import RosettaStone from '../illustrations/RosettaStone';
import { chaptersData } from '../../data/chapters';

const Chapter3_RosettaTrap = () => {
  const chapter = chaptersData[2];

  const trapExplanation = chapter.sections.find(s => s.type === 'trap-explanation');
  const whatBreaks = chapter.sections.find(s => s.type === 'what-breaks');
  const obscuredTruth = chapter.sections.find(s => s.type === 'obscured-truth');
  const neverEndingCycle = chapter.sections.find(s => s.type === 'never-ending-cycle');

  return (
    <ChapterContainer chapter={chapter}>
      {/* Opening Narrative */}
      <div className="max-w-3xl mx-auto">
        <NarrativeText isQuote>
          {chapter.sections[0].content}
        </NarrativeText>
      </div>

      {/* Rosetta Stone Illustration */}
      <RosettaStone />

      {/* Trap Explanation */}
      <motion.div
        className="max-w-4xl mx-auto mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="warning-box rounded-lg">
          <h3 className="text-2xl font-bold font-ui mb-4 text-yellow-800">
            {trapExplanation.title}
          </h3>
          <h4 className="text-lg font-semibold font-ui mb-2 text-yellow-700">
            {trapExplanation.subtitle}
          </h4>
          <NarrativeText className="text-yellow-900">
            {trapExplanation.content}
          </NarrativeText>
        </div>
      </motion.div>

      {/* What Breaks the Map */}
      <motion.div
        className="max-w-3xl mx-auto mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold font-ui mb-6 text-center text-orange-800">
          {whatBreaks.title}
        </h3>
        <div className="space-y-3">
          {whatBreaks.breakPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-red-50 border-l-4 border-red-500 p-4 rounded flex items-center gap-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <span className="text-2xl flex-shrink-0">{point.icon}</span>
              <p className="text-gray-800 font-medium">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Obscured Truth Comparison */}
      <motion.div
        className="max-w-4xl mx-auto mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="danger-box rounded-lg">
          <h3 className="text-2xl font-bold font-ui mb-4 text-red-800">
            {obscuredTruth.title}
          </h3>
          <NarrativeText className="text-red-900 mb-6">
            {obscuredTruth.content}
          </NarrativeText>

          <div className="bg-white rounded-lg p-4 mb-4">
            <p className="font-ui font-bold text-lg mb-4 text-gray-800">
              {obscuredTruth.comparison.question}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* JPM Answer */}
              <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{obscuredTruth.comparison.jpm.icon}</span>
                  <h4 className="font-bold font-ui text-green-800">
                    {obscuredTruth.comparison.jpm.role}
                  </h4>
                </div>
                <p className="text-gray-700">{obscuredTruth.comparison.jpm.response}</p>
              </div>

              {/* Peers Answer */}
              <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{obscuredTruth.comparison.peers.icon}</span>
                  <h4 className="font-bold font-ui text-orange-800">
                    {obscuredTruth.comparison.peers.role}
                  </h4>
                </div>
                <p className="text-gray-700">{obscuredTruth.comparison.peers.response}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Never-Ending Cycle */}
      <motion.div
        className="max-w-3xl mx-auto mt-12"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 shadow-xl border-2 border-red-300">
          <div className="text-center mb-4">
            <span className="text-5xl">♾️</span>
          </div>
          <h3 className="text-2xl font-bold font-ui text-center mb-4 text-red-800">
            {neverEndingCycle.title}
          </h3>
          <NarrativeText className="text-center mb-6 text-red-900">
            {neverEndingCycle.content}
          </NarrativeText>

          <div className="space-y-3">
            {neverEndingCycle.steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-4 flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-800 font-medium">{step}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <motion.div
              className="inline-block"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <span className="text-4xl">🔄</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Warning callout */}
      <motion.div
        className="max-w-4xl mx-auto mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="bg-red-100 border-2 border-red-400 rounded-xl p-6 text-center">
          <p className="text-xl font-ui font-bold text-red-800">
            This is the hidden cost of the translation strategy. But the consequences go even deeper...
          </p>
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default Chapter3_RosettaTrap;
