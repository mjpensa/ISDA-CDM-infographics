import { motion } from 'framer-motion';
import ChapterContainer from '../shared/ChapterContainer';
import NarrativeText from '../shared/NarrativeText';
import DataFlowDiagram from '../illustrations/DataFlowDiagram';
import { chaptersData } from '../../data/chapters';

const Chapter4_RippleEffect = () => {
  const chapter = chaptersData[3];
  const splitComparison = chapter.sections.find(s => s.type === 'split-comparison');

  return (
    <ChapterContainer chapter={chapter}>
      {/* Opening Narrative */}
      <div className="max-w-3xl mx-auto">
        <NarrativeText isQuote>
          {chapter.sections[0].content}
        </NarrativeText>
      </div>

      {/* Split Screen Comparison */}
      <div className="grid lg:grid-cols-2 gap-8 mt-12">
        {/* Left Side - The Translator Strategy (Two Truths) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="chapter4-gradient-peers rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold font-ui mb-2 text-orange-900">
            {splitComparison.translator.title}
          </h3>

          <div className="mt-6">
            <h4 className="text-xl font-semibold font-ui mb-2 text-orange-800">
              {splitComparison.translator.subtitle}
            </h4>
            <NarrativeText className="text-orange-900">
              {splitComparison.translator.content}
            </NarrativeText>
          </div>

          {/* Teams Section */}
          <div className="mt-6 space-y-4">
            {splitComparison.translator.teams.map((team, index) => (
              <motion.div
                key={index}
                className="bg-white/80 rounded-lg p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.4 }}
              >
                <h5 className="font-bold font-ui text-orange-800 mb-2">{team.name}</h5>
                <p className="text-sm text-gray-700 mb-2">{team.process}</p>
                <p className="text-sm italic text-gray-600">{team.definition}</p>
              </motion.div>
            ))}
          </div>

          {/* The Disaster */}
          <motion.div
            className="mt-6 bg-red-100 border-2 border-red-400 rounded-lg p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <h4 className="text-lg font-bold font-ui mb-2 text-red-800">
              {splitComparison.translator.disaster.title}
            </h4>
            <p className="text-sm text-red-900">
              {splitComparison.translator.disaster.content}
            </p>
          </motion.div>

          {/* Real Impact */}
          <div className="mt-6 space-y-3">
            <h4 className="text-lg font-semibold font-ui text-orange-800">Real Impact:</h4>
            {splitComparison.translator.realImpact.map((impact, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 bg-white/60 rounded p-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              >
                <span className="text-xl flex-shrink-0">{impact.icon}</span>
                <div>
                  <p className="font-bold text-sm text-gray-800">{impact.label}</p>
                  <p className="text-sm text-gray-700">{impact.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Diagram */}
          <div className="mt-8">
            <DataFlowDiagram type="twoTruths" />
          </div>
        </motion.div>

        {/* Right Side - The Native Strategy (One Truth) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="chapter4-gradient-jpm rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold font-ui mb-2 text-blue-900">
            {splitComparison.native.title}
          </h3>

          <div className="mt-6">
            <h4 className="text-xl font-semibold font-ui mb-2 text-blue-800">
              {splitComparison.native.subtitle}
            </h4>
            <NarrativeText className="text-blue-900">
              {splitComparison.native.content}
            </NarrativeText>
          </div>

          {/* Data Flow Steps */}
          <div className="mt-6 space-y-3">
            {splitComparison.native.dataFlow.map((flow, index) => (
              <motion.div
                key={index}
                className="bg-white/80 rounded-lg p-4 flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                  {flow.step}
                </div>
                <p className="text-sm text-gray-800">{flow.description}</p>
              </motion.div>
            ))}
          </div>

          {/* The Guarantee */}
          <motion.div
            className="mt-6 bg-green-100 border-2 border-green-400 rounded-lg p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <p className="text-sm italic text-green-900 font-medium">
              {splitComparison.native.guarantee}
            </p>
          </motion.div>

          {/* Advantages */}
          <div className="mt-6 space-y-3">
            <h4 className="text-lg font-semibold font-ui text-blue-800">The Advantage:</h4>
            {splitComparison.native.advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 bg-white/60 rounded p-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
              >
                <span className="text-xl flex-shrink-0">{advantage.icon}</span>
                <div>
                  <p className="font-bold text-sm text-gray-800">{advantage.label}</p>
                  <p className="text-sm text-gray-700">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Diagram */}
          <div className="mt-8">
            <DataFlowDiagram type="oneTruth" />
          </div>
        </motion.div>
      </div>

      {/* Contrast Summary */}
      <motion.div
        className="max-w-4xl mx-auto mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="bg-white rounded-xl p-8 shadow-2xl border-2 border-gray-300">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="font-bold text-xl text-blue-900 font-ui">
                {splitComparison.native.contrast.jpm}
              </p>
              <span className="text-3xl mt-2 inline-block">✅</span>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <p className="font-bold text-xl text-orange-900 font-ui">
                {splitComparison.native.contrast.peers}
              </p>
              <span className="text-3xl mt-2 inline-block">⚠️</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Closing callout */}
      <motion.div
        className="max-w-4xl mx-auto mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-purple-300 rounded-xl p-6 text-center">
          <p className="text-xl font-ui font-bold text-purple-900">
            But the real divergence shows up when we look to the future...
          </p>
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default Chapter4_RippleEffect;
