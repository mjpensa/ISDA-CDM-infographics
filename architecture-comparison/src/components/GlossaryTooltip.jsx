import React from 'react';
import Tooltip from './Tooltip';
import { glossary } from '../data/architectures';

const GlossaryTooltip = ({ term, children }) => {
  const definition = glossary[term];

  if (!definition) {
    return <span className="font-mono text-sm">{children || term}</span>;
  }

  return (
    <Tooltip content={definition}>
      <span className="font-mono text-sm border-b border-dotted border-gray-400 cursor-help">
        {children || term}
      </span>
    </Tooltip>
  );
};

export default GlossaryTooltip;
