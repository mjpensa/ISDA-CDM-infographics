import { motion } from 'framer-motion';

const NarrativeText = ({ children, isQuote = false, className = "" }) => {
  const baseClass = isQuote ? "narrative-quote" : "narrative-text";

  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6 }}
      className={`${baseClass} ${className}`}
    >
      {children}
    </motion.p>
  );
};

export default NarrativeText;
