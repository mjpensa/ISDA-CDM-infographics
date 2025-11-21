import { motion } from 'framer-motion';
import ChapterContainer from '../shared/ChapterContainer';
import NarrativeText from '../shared/NarrativeText';
import FutureCityscape from '../illustrations/FutureCityscape';
import { chaptersData } from '../../data/chapters';

const Chapter5_TheFuture = () => {
  const chapter = chaptersData[4];
  const futureTech = chapter.sections.find(s => s.type === 'future-technologies');
  const finalDivergence = chapter.sections.find(s => s.type === 'final-divergence');

  return (
    <ChapterContainer chapter={chapter}>
      {/* Opening Narrative */}
      <div className="max-w-3xl mx-auto">
        <NarrativeText isQuote>
          {chapter.sections[0].content}
        </NarrativeText>
      </div>

      {/* Future Cityscape */}
      <FutureCityscape />

      {/* Future Technologies Section */}
      <motion.div
        className="max-w-5xl mx-auto mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold font-ui text-center mb-12 text-gray-800">
          {futureTech.title}
        </h3>

        <div className="space-y-12">
          {futureTech.technologies.map((tech, techIndex) => (
            <motion.div
              key={techIndex}
              className="bg-white rounded-2xl shadow-xl p-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: techIndex * 0.2, duration: 0.6 }}
            >
              {/* Technology Header */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-5xl">{tech.icon}</span>
                  <h4 className="text-2xl font-bold font-ui text-gray-800">
                    {tech.name}
                  </h4>
                </div>
                {tech.subtitle && (
                  <p className="text-sm text-gray-600">{tech.subtitle}</p>
                )}
              </div>

              {/* Opportunity */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <p className="font-bold font-ui mb-2 text-blue-900">The Opportunity:</p>
                <p className="text-gray-800">{tech.opportunity}</p>
              </div>

              {/* Path Comparison */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Path A - JPM Ready */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-300">
                  <h5 className="font-bold font-ui text-lg mb-4 text-green-800">
                    {tech.pathA.title}
                  </h5>
                  <div className="space-y-3">
                    {tech.pathA.points.map((point, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.2 + index * 0.1, duration: 0.4 }}
                      >
                        <span className="text-lg flex-shrink-0">{point.icon}</span>
                        <p className="text-sm text-gray-800">{point.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Path B - Peers Struggling */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border-2 border-orange-300">
                  <h5 className="font-bold font-ui text-lg mb-4 text-orange-800">
                    {tech.pathB.title}
                  </h5>
                  <div className="space-y-3">
                    {tech.pathB.points.map((point, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.2 + index * 0.1, duration: 0.4 }}
                      >
                        <span className="text-lg flex-shrink-0">{point.icon}</span>
                        <p className="text-sm text-gray-800">{point.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Final Divergence */}
      <motion.div
        className="max-w-5xl mx-auto mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-3xl font-bold font-ui text-center mb-12 text-gray-800">
          {finalDivergence.title}
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* JPM's Position */}
          <motion.div
            className="bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl p-8 shadow-2xl text-white"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center mb-4">
              <span className="text-6xl">🚀</span>
            </div>
            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold font-ui mb-4">J.P. Morgan</h4>
              <p className="text-xl italic font-narrative">
                {finalDivergence.jpm.quote}
              </p>
            </div>
            <div className="space-y-3">
              {finalDivergence.jpm.outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-white/20 rounded-lg p-3 backdrop-blur-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                >
                  <span className="text-2xl">{outcome.icon}</span>
                  <p className="font-medium">{outcome.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Peers' Position */}
          <motion.div
            className="bg-gradient-to-br from-orange-400 to-gray-500 rounded-2xl p-8 shadow-2xl text-white"
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center mb-4">
              <span className="text-6xl">🐢</span>
            </div>
            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold font-ui mb-4">Other Major Banks</h4>
              <p className="text-xl italic font-narrative">
                {finalDivergence.peers.quote}
              </p>
            </div>
            <div className="space-y-3">
              {finalDivergence.peers.outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-white/20 rounded-lg p-3 backdrop-blur-sm"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                >
                  <span className="text-2xl">{outcome.icon}</span>
                  <p className="font-medium">{outcome.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Final Visual Metaphor */}
      <motion.div
        className="max-w-4xl mx-auto mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-10 shadow-2xl text-white text-center">
          <div className="text-6xl mb-6">💡</div>
          <p className="text-3xl font-bold font-ui mb-4">
            The Lesson
          </p>
          <p className="text-2xl font-narrative italic">
            Learning the language vs Using a dictionary
          </p>
          <div className="mt-8 flex items-center justify-center gap-8">
            <div>
              <span className="text-4xl">🗣️</span>
              <p className="text-sm mt-2">Native Speaker</p>
            </div>
            <div className="text-4xl">→</div>
            <div>
              <span className="text-4xl">🚀</span>
              <p className="text-sm mt-2">Future Ready</p>
            </div>
          </div>
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default Chapter5_TheFuture;
