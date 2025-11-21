import { motion } from 'framer-motion';
import { useStore } from '../../store/useStore';

const NarrativeText = ({ children, className = '', isQuote = false, delay = 0 }) => {
  const prefersReducedMotion = useStore((state) => state.prefersReducedMotion);

  const baseClass = isQuote ? 'narrative-quote' : 'narrative-text';

  return (
    <motion.div
      className={`${baseClass} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.6,
        delay: prefersReducedMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default NarrativeText;
