import { motion } from 'framer-motion';
import { useStore } from '../../store/useStore';

const ComparisonCard = ({
  title,
  items,
  color = 'blue',
  icon,
  className = '',
  delay = 0,
}) => {
  const prefersReducedMotion = useStore((state) => state.prefersReducedMotion);

  const colorClasses = {
    blue: 'border-blue-500 bg-blue-50 hover:bg-blue-100',
    orange: 'border-orange-500 bg-orange-50 hover:bg-orange-100',
    green: 'border-green-500 bg-green-50 hover:bg-green-100',
    red: 'border-red-500 bg-red-50 hover:bg-red-100',
    gray: 'border-gray-500 bg-gray-50 hover:bg-gray-100',
  };

  return (
    <motion.div
      className={`comparison-card ${colorClasses[color]} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.5,
        delay: prefersReducedMotion ? 0 : delay,
      }}
      whileHover={{
        scale: prefersReducedMotion ? 1 : 1.02,
        transition: { duration: 0.2 },
      }}
    >
      {icon && (
        <div className="text-4xl mb-4 flex justify-center">{icon}</div>
      )}
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            {typeof item === 'string' ? (
              <span>{item}</span>
            ) : (
              <>
                {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
                <div>
                  {item.label && <strong>{item.label}</strong>}
                  {item.description && <span> {item.description}</span>}
                  {item.value && <span> {item.value}</span>}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ComparisonCard;
