# CDM Architecture Comparison - Interactive Infographic

An interactive React application that visualizes the architectural differences between three approaches to banking trade reporting: Legacy systems, J.P. Morgan's Native CDM adoption, and Peers' Translation Layer approach.

## 🎯 Overview

This application provides a comprehensive, side-by-side comparison of different CDM (Common Domain Model) adoption strategies in the financial services industry, specifically focusing on trade reporting and regulatory compliance.

### Key Features

- **Three-Column Architecture Visualization**: Compare Legacy, Native CDM, and Translation Layer approaches
- **Interactive Data Flow Animation**: "Trace a Trade" feature shows how data moves through each architecture
- **Problem Highlighting**: Toggle to reveal issues and risks in each approach
- **Comparison Dashboard**: Interactive charts showing key metrics and performance indicators
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Glossary Tooltips**: Hover over technical terms for instant definitions
- **Special Visualizations**: The "Two Truths Problem" and "Rosetta Stone Trap" callout boxes

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation

1. **Clone the repository** (if not already in the directory):
   ```bash
   git clone <repository-url>
   cd architecture-comparison
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🏗️ Architecture & Tech Stack

### Technologies Used

- **React 18+** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Recharts** - Charts and data visualization
- **Zustand** - Lightweight state management
- **Lucide React** - Icon library

### Project Structure

```
src/
├── components/
│   ├── LegacyColumn.jsx               # Legacy architecture visualization
│   ├── NativeColumn.jsx               # J.P. Morgan Native CDM visualization
│   ├── TranslatorColumn.jsx           # Peers Translation Layer visualization
│   ├── SystemLayer.jsx                # Individual system layer component
│   ├── DataFlowArrow.jsx              # Animated data flow arrows
│   ├── MetricsCard.jsx                # Metric display cards
│   ├── ComparisonDashboard.jsx        # Charts and comparison metrics
│   ├── ControlPanel.jsx               # Interactive controls
│   ├── Tooltip.jsx                    # Reusable tooltip component
│   └── GlossaryTooltip.jsx           # Technical term tooltips
├── data/
│   └── architectures.js              # Architecture data and glossary
├── store/
│   └── useStore.js                   # Zustand state management
├── App.jsx                           # Main application component
├── main.jsx                          # Application entry point
└── index.css                         # Global styles and Tailwind imports
```

## 🎨 Key Components

### Three Architecture Columns

1. **Legacy Column**: Shows the "Spaghetti Architecture" pre-CDM with chaotic integrations
2. **Native Column**: J.P. Morgan's approach - data born as CDM objects
3. **Translator Column**: Peer banks' translation layer approach with "Rosetta Stone Trap"

### Interactive Features

- **Trace a Trade**: Animated visualization showing data flow through each architecture
- **Show/Hide Problems**: Toggle to highlight issues and risks
- **View Modes**:
  - All Three Columns (default)
  - Native vs Translator (hide legacy)
- **Comparison Dashboard**: Bar charts and radar charts comparing key metrics

### Callout Boxes

Three prominent callout boxes explain critical concepts:

1. **The Rosetta Stone Trap** (Warning - Red): Explains the permanent dependency on translation layers
2. **The Two Truths Problem** (Warning - Orange): Shows how translation layers cause data inconsistency
3. **The One Truth Advantage** (Success - Green): Highlights benefits of native CDM adoption

## 🎯 Key Concepts Visualized

### Native CDM Advantages
- Single source of truth
- Perfect data lineage
- Semantic consistency across enterprise
- Future-ready for AI/ML and blockchain
- Lower long-term maintenance

### Translation Layer Issues
- Permanent dependency on mapping layers
- "Two Truths" problem - contradictory data to regulators
- Obscured data lineage
- Breaks with every regulatory or internal change
- Not ready for future technologies

## 🎨 Color Scheme

- **Legacy**: Gray tones (#6B7280, #DC2626)
- **Native**: Blue-Green gradient (#0066CC, #10B981)
- **Translator**: Orange-Yellow (#F59E0B, #FCD34D)

## 📊 Data Flow

The application uses Zustand for state management with the following key states:

- `viewMode`: Controls which columns are visible
- `showProblems`: Toggles problem highlighting
- `isTracing`: Controls the "Trace a Trade" animation
- `traceStep`: Current step in the trace animation
- `hoveredLayer`: Tracks which layer is being hovered

## 🧪 Development

### Adding New Features

1. **New Architecture Layer**: Add to `src/data/architectures.js`
2. **New Component**: Create in `src/components/` and import in `App.jsx`
3. **New Metric**: Update the `metrics` object in architecture data
4. **New Glossary Term**: Add to `glossary` object in `architectures.js`

### Customizing Styles

The application uses Tailwind CSS with custom color schemes defined in `tailwind.config.js`. You can customize:

- Colors for each architecture type
- Fonts (Inter for sans-serif, JetBrains Mono for code)
- Breakpoints and responsive behavior
- Custom animations

## 🐛 Troubleshooting

### Common Issues

1. **Dependencies not installing**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Tailwind styles not working**: Ensure `tailwind.config.js` and `postcss.config.js` are properly configured

3. **Charts not rendering**: Check that Recharts is properly installed: `npm install recharts`

4. **Animations not smooth**: Try disabling browser extensions or check React DevTools for performance issues

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile** (< 768px): Single column, stacked layout
- **Tablet** (768px - 1024px): Two columns
- **Desktop** (> 1024px): Three columns for "All" view, two columns for comparison view
- **Large Desktop** (> 1280px): Optimized three-column layout

## 🚀 Performance Optimizations

- Lazy loading with React.lazy() for code splitting
- Framer Motion animations optimized for 60fps
- Recharts configured for efficient rendering
- Tailwind CSS purges unused styles in production
- Vite provides fast HMR in development

## 📝 License

This project is part of the ISDA CDM infographics repository.

## 🤝 Contributing

To contribute to this project:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📚 Additional Resources

- [ISDA CDM Documentation](https://www.isda.org/cdm/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Recharts Documentation](https://recharts.org/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)

## 🎓 Educational Use

This visualization is designed for:

- Technical architects evaluating CDM adoption strategies
- Engineering teams understanding implementation approaches
- Business stakeholders assessing strategic options
- Regulatory compliance teams understanding data lineage
- Students learning about financial technology architecture

---

**Built with ❤️ for the financial technology community**
