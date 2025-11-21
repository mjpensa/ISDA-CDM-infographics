import { motion } from 'framer-motion';

const ComparisonCard = ({ title, icon, children, color = "blue", className = "" }) => {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-50",
    orange: "border-orange-500 bg-orange-50",
    green: "border-green-500 bg-green-50",
    red: "border-red-500 bg-red-50"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`comparison-card border-l-4 ${colorClasses[color]} ${className}`}
    >
      {(title || icon) && (
        <div className="flex items-center gap-3 mb-4">
          {icon && <span className="text-3xl" aria-hidden="true">{icon}</span>}
          {title && <h3 className="text-2xl font-bold font-ui">{title}</h3>}
        </div>
      )}
      <div className="space-y-3">
        {children}
      </div>
    </motion.div>
  );
};

export default ComparisonCard;
