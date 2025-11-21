import { motion } from 'framer-motion';
import { User, BookOpen } from 'lucide-react';

const CharacterAvatar = ({ type = "native", size = "medium", showLabel = true, className = "" }) => {
  const sizes = {
    small: "w-16 h-16",
    medium: "w-24 h-24",
    large: "w-32 h-32"
  };

  const iconSizes = {
    small: 32,
    medium: 48,
    large: 64
  };

  const characters = {
    native: {
      icon: User,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-600",
      label: "The Native Speaker",
      description: "J.P. Morgan"
    },
    tourist: {
      icon: BookOpen,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      borderColor: "border-orange-600",
      label: "The Translator",
      description: "Other Major Banks"
    }
  };

  const character = characters[type];
  const Icon = character.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col items-center ${className}`}
    >
      <div
        className={`
          ${sizes[size]}
          ${character.bgColor}
          ${character.borderColor}
          border-4 rounded-full
          flex items-center justify-center
          shadow-lg
        `}
      >
        <Icon
          size={iconSizes[size]}
          className={character.color}
          strokeWidth={2}
        />
      </div>
      {showLabel && (
        <div className="text-center mt-3">
          <p className="font-ui font-bold text-lg">{character.label}</p>
          <p className="font-ui text-sm text-gray-600">{character.description}</p>
        </div>
      )}
    </motion.div>
  );
};

export default CharacterAvatar;
