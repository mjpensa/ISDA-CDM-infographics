import { motion } from 'framer-motion';
import ChapterContainer from '../shared/ChapterContainer';
import NarrativeText from '../shared/NarrativeText';
import TowerOfBabel from '../illustrations/TowerOfBabel';
import { chaptersData } from '../../data/chapters';

const Chapter1_TowerOfBabel = () => {
  const chapter = chaptersData[0];

  return (
    <ChapterContainer chapter={chapter}>
      {/* Opening Narrative */}
      <div className="max-w-3xl mx-auto">
        <NarrativeText isQuote>
          {chapter.sections[0].content}
        </NarrativeText>
      </div>

      {/* The Problem Section */}
      <motion.div
        className="max-w-4xl mx-auto mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold font-ui text-center mb-8 text-gray-800">
          {chapter.sections[1].content}
        </h3>

        {/* Regulatory Demands */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {chapter.sections[2].regions.map((region, index) => (
            <motion.div
              key={region.region}
              className="bg-white rounded-lg p-6 shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-4">{region.flag}</div>
              <h4 className="font-bold text-lg mb-2 font-ui">{region.region}</h4>
              <p className="text-gray-600 italic">"{region.demand}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tower Illustration */}
      <TowerOfBabel />

      {/* The Messy Solution */}
      <motion.div
        className="max-w-3xl mx-auto mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold font-ui text-center mb-4 text-gray-800">
          {chapter.sections[3].title}
        </h3>
        <NarrativeText className="text-center">
          {chapter.sections[3].content}
        </NarrativeText>
      </motion.div>

      {/* Pain Points */}
      <motion.div
        className="max-w-4xl mx-auto mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold font-ui text-center mb-8 text-gray-800">
          {chapter.sections[4].title}
        </h3>
        <div className="pain-point-list">
          {chapter.sections[4].points.map((point, index) => (
            <motion.div
              key={point.label}
              className="pain-point-item bg-red-50 p-6 rounded-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <span className="text-3xl flex-shrink-0">{point.icon}</span>
              <div>
                <h4 className="font-bold text-lg font-ui text-red-700">{point.label}</h4>
                <p className="text-gray-700">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* The Solution Emerges */}
      <motion.div
        className="max-w-3xl mx-auto mt-16"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-xl border-2 border-blue-200">
          <div className="text-center mb-4">
            <span className="text-5xl">💡</span>
          </div>
          <h3 className="text-3xl font-bold font-ui text-center mb-6 text-blue-900">
            {chapter.sections[5].title}
          </h3>
          <NarrativeText className="text-center text-lg">
            {chapter.sections[5].content}
          </NarrativeText>
          <div className="text-center mt-6">
            <motion.div
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ISDA CDM
            </motion.div>
          </div>
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default Chapter1_TowerOfBabel;
