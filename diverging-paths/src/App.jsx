import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TowerOfBabel from './components/TowerOfBabel';
import ForkSection from './components/ForkSection';
import PathA_Native from './components/PathA_Native';
import PathB_Translator from './components/PathB_Translator';
import FutureDivergence from './components/FutureDivergence';
import ProgressIndicator from './components/ProgressIndicator';

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { id: 'tower-of-babel', title: 'The Problem' },
    { id: 'fork-section', title: 'The Fork' },
    { id: 'paths', title: 'The Paths' },
    { id: 'future-divergence', title: 'The Future' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Progress Indicator */}
      <ProgressIndicator current={currentSection} sections={sections} />

      {/* Main Content */}
      <div>
        {/* Section 1: Tower of Babel */}
        <TowerOfBabel />

        {/* Section 2: Fork in the Road */}
        <ForkSection />

        {/* Section 3: Split Paths - Side by Side */}
        <section id="paths" className="min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Path A - Left Side */}
            <PathA_Native />

            {/* Path B - Right Side */}
            <PathB_Translator />
          </div>
        </section>

        {/* Section 4: Future Divergence */}
        <FutureDivergence />

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-400 py-12">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                The Diverging Paths
              </h3>
              <p className="mb-6">
                Interactive visualization of ISDA CDM adoption strategies in banking
              </p>
              <div className="flex justify-center gap-8 text-sm">
                <div>
                  <span className="font-semibold text-native-primary">Path A:</span> Native CDM (J.P. Morgan)
                </div>
                <div>
                  <span className="font-semibold text-translator-primary">Path B:</span> Translation Layer (Peers)
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-700 text-xs opacity-75">
                Based on research comparing strategic approaches to ISDA Common Domain Model adoption
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: currentSection > 0 ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 left-8 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </div>
  );
}

export default App;
