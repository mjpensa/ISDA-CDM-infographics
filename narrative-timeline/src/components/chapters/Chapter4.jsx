import { motion } from 'framer-motion';
import ChapterContainer from '../shared/ChapterContainer';
import ChapterHeader from '../shared/ChapterHeader';
import NarrativeText from '../shared/NarrativeText';
import DataFlowDiagram from '../illustrations/DataFlowDiagram';
import { chapters } from '../../data/chapters';
import { useStore } from '../../store/useStore';
import { XCircle, CheckCircle2 } from 'lucide-react';

const Chapter4 = () => {
  const chapter = chapters[3];
  const prefersReducedMotion = useStore((state) => state.prefersReducedMotion);

  return (
    <ChapterContainer chapterId={chapter.id} className="bg-gray-50">
      <ChapterHeader chapter={chapter} />

      <div className="space-y-12">
        {chapter.sections.map((section, index) => {
          if (section.type === 'narrative') {
            return (
              <NarrativeText key={index} delay={0.1 * index}>
                <p className="text-gray-800 max-w-4xl mx-auto text-lg">
                  {section.content}
                </p>
              </NarrativeText>
            );
          }

          if (section.type === 'two-truths-problem') {
            return (
              <motion.div
                key={index}
                className="max-w-5xl mx-auto space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.6,
                }}
              >
                <h3 className="text-3xl font-bold text-orange-600 text-center flex items-center justify-center gap-3">
                  <XCircle className="w-8 h-8" />
                  {section.title}
                </h3>

                {/* Silo Problem */}
                <div className="bg-orange-50 border-2 border-orange-400 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-orange-900 mb-3">
                    {section.siloProblem.title}
                  </h4>
                  <p className="text-gray-800 text-lg">
                    {section.siloProblem.content}
                  </p>
                </div>

                {/* What Happens */}
                <div className="bg-white rounded-lg p-6 border-2 border-orange-400 shadow-lg">
                  <h4 className="text-xl font-bold text-orange-900 mb-6 text-center">
                    {section.whatHappens.title}
                  </h4>

                  <div className="space-y-6">
                    {section.whatHappens.teams.map((team, i) => (
                      <motion.div
                        key={i}
                        className="bg-gray-50 rounded-lg p-5 border-l-4 border-orange-500"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: prefersReducedMotion ? 0.01 : 0.5,
                          delay: prefersReducedMotion ? 0 : i * 0.2,
                        }}
                      >
                        <h5 className="font-bold text-lg text-gray-900 mb-3">
                          {team.name}
                        </h5>
                        <ul className="space-y-2">
                          {team.actions.map((action, j) => (
                            <li key={j} className="text-gray-700 flex items-start gap-2">
                              <span className="text-orange-600">→</span>
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* The Disaster */}
                <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-lg p-8 text-white shadow-2xl">
                  <h4 className="text-2xl font-bold mb-4 text-center">
                    {section.disaster.title}
                  </h4>
                  <p className="text-lg mb-6 text-center leading-relaxed">
                    {section.disaster.content}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {section.disaster.impacts.map((impact, i) => (
                      <motion.div
                        key={i}
                        className="bg-white/20 rounded-lg p-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: prefersReducedMotion ? 0.01 : 0.4,
                          delay: prefersReducedMotion ? 0 : i * 0.1,
                        }}
                      >
                        <div className="text-2xl mb-2">{impact.icon}</div>
                        <p className="font-bold mb-1">{impact.label}</p>
                        <p className="text-sm">{impact.value}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          }

          if (section.type === 'one-truth-advantage') {
            return (
              <motion.div
                key={index}
                className="max-w-5xl mx-auto space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.6,
                }}
              >
                <h3 className="text-3xl font-bold text-blue-600 text-center flex items-center justify-center gap-3">
                  <CheckCircle2 className="w-8 h-8" />
                  {section.title}
                </h3>

                {/* How It Works */}
                <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-3">
                    {section.howItWorks.title}
                  </h4>
                  <p className="text-gray-800 text-lg">
                    {section.howItWorks.content}
                  </p>
                </div>

                {/* Data Flow */}
                <div className="bg-white rounded-lg p-6 border-2 border-blue-400 shadow-lg">
                  <h4 className="text-xl font-bold text-blue-900 mb-6 text-center">
                    {section.dataFlow.title}
                  </h4>

                  <ol className="space-y-4">
                    {section.dataFlow.steps.map((step, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-4 bg-blue-50 rounded-lg p-4"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: prefersReducedMotion ? 0.01 : 0.5,
                          delay: prefersReducedMotion ? 0 : i * 0.15,
                        }}
                      >
                        <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          {i + 1}
                        </span>
                        <span className="text-gray-800 font-medium">{step}</span>
                      </motion.li>
                    ))}
                  </ol>
                </div>

                {/* The Guarantee */}
                <div className="bg-blue-100 border-l-4 border-blue-600 rounded p-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-3">
                    {section.guarantee.title}
                  </h4>
                  <p className="text-gray-800 text-lg">
                    {section.guarantee.content}
                  </p>
                </div>

                {/* Advantages */}
                <div className="grid md:grid-cols-2 gap-4">
                  {section.advantages.map((advantage, i) => (
                    <motion.div
                      key={i}
                      className="bg-green-50 border-2 border-green-400 rounded-lg p-5"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: prefersReducedMotion ? 0.01 : 0.4,
                        delay: prefersReducedMotion ? 0 : i * 0.1,
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl flex-shrink-0">{advantage.icon}</span>
                        <div>
                          <h5 className="font-bold text-green-900 mb-1">
                            {advantage.label}
                          </h5>
                          <p className="text-green-800 text-sm">
                            {advantage.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Contrast */}
                <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-lg p-8 text-white shadow-2xl">
                  <div className="grid md:grid-cols-2 gap-8 text-center">
                    <div>
                      <p className="text-xl font-bold mb-2">JPM:</p>
                      <p className="text-2xl">{section.contrast.jpm}</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold mb-2">Peers:</p>
                      <p className="text-2xl">{section.contrast.peers}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          }

          return null;
        })}

        {/* Data Flow Diagram */}
        <DataFlowDiagram />
      </div>
    </ChapterContainer>
  );
};

export default Chapter4;
