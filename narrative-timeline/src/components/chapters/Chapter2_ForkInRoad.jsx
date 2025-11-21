import { motion } from 'framer-motion';
import ChapterContainer from '../shared/ChapterContainer';
import NarrativeText from '../shared/NarrativeText';
import ComparisonCard from '../shared/ComparisonCard';
import CharacterAvatar from '../shared/CharacterAvatar';
import ForkRoad from '../illustrations/ForkRoad';
import { chaptersData } from '../../data/chapters';

const Chapter2_ForkInRoad = () => {
  const chapter = chaptersData[1];
  const dualPaths = chapter.sections.find(s => s.type === 'dual-paths');

  return (
    <ChapterContainer chapter={chapter}>
      {/* Opening Narrative */}
      <div className="max-w-3xl mx-auto">
        <NarrativeText isQuote>
          {chapter.sections[0].content}
        </NarrativeText>
      </div>

      {/* Fork Illustration */}
      <ForkRoad />

      {/* Two Paths Comparison */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {/* Path A - Native Speaker (JPM) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-xl h-full">
            <CharacterAvatar type="native" size="medium" showLabel={true} className="mb-6" />

            <h3 className="text-2xl font-bold font-ui text-blue-900 mb-2">
              {dualPaths.pathA.title}
            </h3>
            <p className="text-sm text-blue-700 font-medium mb-2">
              {dualPaths.pathA.bank}
            </p>
            <p className="text-sm italic text-gray-600 mb-4">
              {dualPaths.pathA.metaphor}
            </p>

            <div className="bg-white/50 rounded-lg p-4 mb-4">
              <p className="font-ui font-semibold mb-2">Strategy:</p>
              <p className="text-blue-900 font-bold">{dualPaths.pathA.strategy}</p>
            </div>

            <NarrativeText isQuote className="text-blue-800 text-base my-6">
              {dualPaths.pathA.quote}
            </NarrativeText>

            <div className="bg-white rounded-lg p-4 mb-4">
              <p className="narrative-text text-sm">
                {dualPaths.pathA.explanation}
              </p>
            </div>

            {/* Investment Details */}
            <div className="space-y-4 mt-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{dualPaths.pathA.investment.cost.icon}</span>
                  <h4 className="font-bold font-ui">The Cost:</h4>
                </div>
                <p className="text-sm">{dualPaths.pathA.investment.cost.description}</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{dualPaths.pathA.investment.reward.icon}</span>
                  <h4 className="font-bold font-ui">The Reward:</h4>
                </div>
                <p className="text-sm">{dualPaths.pathA.investment.reward.description}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Path B - Translator (Peers) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-xl h-full">
            <CharacterAvatar type="tourist" size="medium" showLabel={true} className="mb-6" />

            <h3 className="text-2xl font-bold font-ui text-orange-900 mb-2">
              {dualPaths.pathB.title}
            </h3>
            <div className="text-sm text-orange-700 font-medium mb-2">
              {dualPaths.pathB.banks.join(', ')}
            </div>
            <p className="text-sm italic text-gray-600 mb-4">
              {dualPaths.pathB.metaphor}
            </p>

            <div className="bg-white/50 rounded-lg p-4 mb-4">
              <p className="font-ui font-semibold mb-2">Strategy:</p>
              <p className="text-orange-900 font-bold">{dualPaths.pathB.strategy}</p>
            </div>

            <NarrativeText isQuote className="text-orange-800 text-base my-6">
              {dualPaths.pathB.quote}
            </NarrativeText>

            <div className="bg-white rounded-lg p-4 mb-4">
              <p className="narrative-text text-sm">
                {dualPaths.pathB.explanation}
              </p>
            </div>

            {/* Trade-off Details */}
            <div className="space-y-4 mt-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{dualPaths.pathB.tradeoff.benefit.icon}</span>
                  <h4 className="font-bold font-ui">The Benefit:</h4>
                </div>
                <p className="text-sm">{dualPaths.pathB.tradeoff.benefit.description}</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{dualPaths.pathB.tradeoff.risk.icon}</span>
                  <h4 className="font-bold font-ui">The Risk:</h4>
                </div>
                <p className="text-sm">{dualPaths.pathB.tradeoff.risk.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Summary callout */}
      <motion.div
        className="max-w-4xl mx-auto mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gray-100 border-2 border-gray-300 rounded-xl p-6 text-center">
          <p className="text-xl font-ui font-bold text-gray-800">
            The strategic divide is set. Now we see where each path leads...
          </p>
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default Chapter2_ForkInRoad;
