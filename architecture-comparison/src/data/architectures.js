export const architecturesData = {
  legacy: {
    id: 'legacy',
    name: 'Spaghetti Architecture',
    era: 'Post-2008 Financial Crisis',
    subtitle: 'Before CDM - The Problem',
    color: 'legacy',
    layers: [
      {
        id: 'regulators',
        name: 'Regulators',
        elements: [
          { icon: '🇺🇸', label: 'US Regulator', sublabel: 'Format A' },
          { icon: '🇪🇺', label: 'EU Regulator', sublabel: 'Format B' },
          { icon: '🇯🇵', label: 'Asia Regulator', sublabel: 'Format C' },
        ],
        issues: ['Multiple conflicting requirements', 'Different formats'],
      },
      {
        id: 'translation',
        name: 'Translation Chaos',
        elements: [
          { label: 'Many-to-many mappings' },
          { label: 'Constant manual reconciliation' },
        ],
        issues: ['Expensive', 'Error-prone', 'Chaotic'],
      },
      {
        id: 'booking',
        name: 'Legacy Booking Systems',
        elements: [
          { label: 'Proprietary formats' },
          { label: 'Inconsistent definitions' },
        ],
        issues: ['No standardization'],
      },
      {
        id: 'source',
        name: 'Trade Source',
        elements: [
          { icon: '📝', label: 'Original trade data' },
        ],
        issues: [],
      },
    ],
    metrics: {
      cost: { value: 'High', level: 'bad', icon: '💰💰💰' },
      debt: { value: 'Accumulating', level: 'bad', icon: '❌' },
      lineage: { value: 'Obscured', level: 'bad', icon: '❌' },
      consistency: { value: 'At Risk', level: 'bad', icon: '❌' },
      futureReady: { value: 'No', level: 'bad', icon: '❌' },
      maintenance: { value: 'Very High', level: 'bad', icon: '❌' },
    },
  },
  native: {
    id: 'native',
    name: 'Native CDM Adoption',
    bank: 'J.P. Morgan',
    subtitle: 'Think in CDM - The Native Speaker',
    strategy: 'Born as CDM',
    color: 'native',
    layers: [
      {
        id: 'source',
        name: 'Trade Source',
        elements: [
          { icon: '📝', label: 'Trade Input', sublabel: 'Born as CDM Object' },
        ],
        benefits: ['Native CDM at source', 'When trade happens, it IS a CDM object'],
      },
      {
        id: 'golden',
        name: 'Golden Source',
        elements: [
          { icon: '💎', label: 'CDM Booking System', sublabel: 'Single Source of Truth' },
        ],
        benefits: ['No translation needed', 'Standardized CDM objects'],
      },
      {
        id: 'processing',
        name: 'Internal Processing',
        elements: [
          { label: 'Risk Engine', sublabel: 'Reads CDM Object' },
          { label: 'CCAR/Capital Planning', sublabel: 'Reads CDM Object' },
          { label: 'Trade Reporting', sublabel: 'Reads CDM Object' },
        ],
        benefits: ['All systems read SAME object', 'Clean data flow'],
      },
      {
        id: 'reporting',
        name: 'Regulatory Reporting',
        elements: [
          { icon: '🇺🇸', label: 'CFTC', sublabel: 'Trade Reporting' },
          { icon: '🏦', label: 'Federal Reserve', sublabel: 'CCAR/FR Y-14' },
          { icon: '🌍', label: 'Other Regulators' },
        ],
        benefits: ['One Truth - Semantic consistency', 'All from same CDM object'],
      },
      {
        id: 'future',
        name: 'Future Use Cases',
        elements: [
          { icon: '🤖', label: 'AI/ML', status: 'ready', sublabel: 'Clean, consistent data' },
          { icon: '⛓️', label: 'Blockchain/DLT', status: 'ready', sublabel: 'Direct integration' },
          { icon: '📊', label: 'Advanced Analytics', status: 'ready', sublabel: 'No overhead' },
        ],
        benefits: ['Native compatibility', 'Future-ready'],
      },
    ],
    metrics: {
      cost: { value: 'High Upfront', level: 'neutral', icon: '💰💰💰' },
      debt: { value: 'Paid Down', level: 'good', icon: '✅' },
      lineage: { value: 'Perfect', level: 'good', icon: '✅' },
      consistency: { value: 'Guaranteed', level: 'good', icon: '✅' },
      futureReady: { value: 'Yes', level: 'good', icon: '✅' },
      maintenance: { value: 'Low', level: 'good', icon: '✅' },
    },
  },
  translator: {
    id: 'translator',
    name: 'Translation Layer Approach',
    banks: ['Bank of America', 'Citi', 'Goldman Sachs', 'BNP Paribas'],
    subtitle: 'Use CDM as Dictionary - The Translator',
    strategy: 'Translate to CDM',
    color: 'translator',
    layers: [
      {
        id: 'source',
        name: 'Trade Source',
        elements: [
          { icon: '📝', label: 'Trade Input', sublabel: 'Proprietary format' },
        ],
        issues: ['Legacy format', 'Old internal language'],
      },
      {
        id: 'legacy-systems',
        name: 'Legacy Booking Systems',
        elements: [
          { icon: '🏛️', label: 'Decades-old Systems', sublabel: 'Kept intact - no rebuild' },
        ],
        issues: ['Multiple internal representations', 'Proprietary formats'],
      },
      {
        id: 'translation',
        name: 'Translation Layer (ROSETTA STONE)',
        elements: [
          { icon: '🗺️', label: 'Translation Map / Vendor Layer' },
        ],
        issues: ['Critical dependency', 'Permanent maintenance burden', 'Breaks when rules change'],
      },
      {
        id: 'reporting',
        name: 'Regulatory Reporting Paths',
        elements: [
          { label: 'Path A: Trade Reporting', sublabel: 'Map → CDM → CFTC' },
          { label: 'Path B: CCAR Reporting', sublabel: 'Map → Proprietary → Fed' },
        ],
        issues: ['Two Truths Problem', 'Contradictory data', 'Operating in silos'],
      },
      {
        id: 'future',
        name: 'Future Use Cases',
        elements: [
          { icon: '🤖', label: 'AI/ML', status: 'limited', sublabel: 'Context lost in translation' },
          { icon: '⛓️', label: 'Blockchain/DLT', status: 'not-ready', sublabel: 'Need another layer' },
          { icon: '📊', label: 'Analytics', status: 'limited', sublabel: 'Data quality limited' },
        ],
        issues: ['Not future-ready', 'Needs new translation layers'],
      },
    ],
    metrics: {
      cost: { value: 'Low Initial', level: 'neutral', icon: '💰' },
      debt: { value: 'Accumulating', level: 'bad', icon: '❌' },
      lineage: { value: 'Obscured', level: 'bad', icon: '❌' },
      consistency: { value: 'At Risk', level: 'bad', icon: '❌' },
      futureReady: { value: 'No', level: 'bad', icon: '❌' },
      maintenance: { value: 'High', level: 'bad', icon: '❌' },
    },
  },
};

export const calloutBoxes = {
  rosettaStone: {
    type: 'warning',
    icon: '⚠️',
    title: 'THE ROSETTA STONE TRAP',
    content: [
      'When a bank relies on a translation layer:',
      '• Permanent dependency on a map',
      '• Every regulatory change breaks the map',
      '• Every internal update breaks the map',
      '• Constantly fixing and maintaining',
      '• Data lineage is obscured',
      '',
      '"If a regulator asks \'Where did this number come from?\'"',
      'JPM: Points to the trade itself',
      'Peers: Must dig through translation logic"',
    ],
  },
  twoTruths: {
    type: 'warning',
    icon: '⚠️',
    title: 'THE TWO TRUTHS PROBLEM',
    content: [
      'Trade Reporting team → Maps data → CDM → CFTC',
      'CCAR team → Maps SAME data → Different format → Fed',
      '',
      'Result: Bank reports contradictory data',
      '• Fed sees one number for capital risk',
      '• CFTC sees different number for trade transparency',
      '• Thousands of hours reconciling differences',
    ],
    example: {
      trade: 'Interest Rate Swap - Notional Amount',
      path1: { label: 'CFTC sees', value: '$101M', map: 'Map A' },
      path2: { label: 'Fed sees', value: '$100M', map: 'Map B' },
    },
  },
  oneTruth: {
    type: 'success',
    icon: '✅',
    title: 'THE ONE TRUTH ADVANTAGE',
    content: [
      'Golden Source: Trade as CDM object',
      'Trade Reporting: Reads CDM object',
      'CCAR/Risk: Reads SAME CDM object',
      '',
      'Result: Semantic consistency across enterprise',
      '• Definition changes → Auto-updates all reports',
      '• No mapping divergence',
      '• Perfect data lineage',
    ],
  },
};

export const glossary = {
  'CDM': 'Common Domain Model - ISDA\'s standardized data model for derivatives',
  'CCAR': 'Comprehensive Capital Analysis and Review - Federal Reserve stress test',
  'FR Y-14': 'Federal Reserve reporting form for capital planning',
  'CFTC': 'Commodity Futures Trading Commission - US derivatives regulator',
  'DLT': 'Distributed Ledger Technology - Blockchain and similar technologies',
  'Golden Source': 'Single authoritative source of data truth in an organization',
  'Data Lineage': 'The ability to trace data from its origin through transformations',
  'Notional Amount': 'The nominal or face value used to calculate payments in derivatives',
  'Translation Layer': 'Software that maps data between different formats or standards',
  'Semantic Consistency': 'Data having the same meaning across different systems',
};
