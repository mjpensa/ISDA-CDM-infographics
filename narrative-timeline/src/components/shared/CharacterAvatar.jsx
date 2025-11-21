import { motion } from 'framer-motion';
import { useStore } from '../../store/useStore';
import { User, BookOpen } from 'lucide-react';

const CharacterAvatar = ({ type = 'native-speaker', size = 'large', className = '' }) => {
  const prefersReducedMotion = useStore((state) => state.prefersReducedMotion);

  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32',
  };

  const characterConfig = {
    'native-speaker': {
      icon: User,
      bgColor: 'bg-blue-500',
      textColor: 'text-blue-500',
      borderColor: 'border-blue-500',
      label: 'Native Speaker',
      description: 'J.P. Morgan - Speaking CDM fluently',
    },
    'tourist-phrasebook': {
      icon: BookOpen,
      bgColor: 'bg-orange-500',
      textColor: 'text-orange-500',
      borderColor: 'border-orange-500',
      label: 'Tourist',
      description: 'Peers - Using translation phrasebook',
    },
  };

  const config = characterConfig[type];
  const IconComponent = config.icon;

  return (
    <motion.div
      className={`character-card ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.5,
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className={`${sizeClasses[size]} rounded-full ${config.bgColor} flex items-center justify-center border-4 ${config.borderColor} shadow-lg`}
        >
          <IconComponent className="w-1/2 h-1/2 text-white" />
        </div>
        <div className="text-center">
          <h4 className={`font-bold text-lg ${config.textColor}`}>
            {config.label}
          </h4>
          <p className="text-sm text-gray-600 mt-1">{config.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CharacterAvatar;
