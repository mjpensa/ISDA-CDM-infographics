# The Tale of Two Banking Strategies - ISDA CDM Narrative Timeline

An interactive, story-driven React application that presents the ISDA CDM (Common Domain Model) adoption story as a compelling narrative timeline, comparing J.P. Morgan's "Native Speaker" approach with other banks' "Translator" strategy.

## 🎯 Overview

This infographic uses metaphors, characters, and visual storytelling to make complex banking technology accessible to executive and non-technical audiences. Through five narrative chapters, it explores the strategic divergence between different CDM adoption approaches and their implications for the future of finance.

## 📖 The Story

### Chapter 1: The Tower of Babel (The Problem)
Post-2008 crisis chaos and the birth of the ISDA CDM as a common language for financial reporting.

### Chapter 2: The Fork in the Road (The Strategic Choice)
- **Path A - The Native Speaker:** J.P. Morgan's native CDM adoption
- **Path B - The Translator:** Peer banks' translation layer approach

### Chapter 3: The Rosetta Stone Trap (The Hidden Risk)
The dangerous dependency on translation layers and the never-ending cycle of maintenance.

### Chapter 4: The Upstream Ripple Effect (The Hidden Consequences)
- **Two Truths Problem:** How translation layers create contradictory data
- **One Truth Advantage:** JPM's semantic consistency across all reporting

### Chapter 5: The Future (Tomorrow's Digital Economy)
How native adoption positions JPM for blockchain and AI while peers struggle with additional translation layers.

### Summary
Key takeaways and the strategic question: Will you learn the language or rely on a dictionary?

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

```bash
# Navigate to the project directory
cd narrative-timeline

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview
```

## 🎨 Tech Stack

- **Framework:** React 18+ with Vite
- **Styling:** Tailwind CSS with custom design system
- **Animations:** Framer Motion for smooth, performant animations
- **Icons:** Lucide React for UI elements
- **State Management:** Zustand for lightweight state management
- **Typography:** Inter (UI) and Merriweather (narrative text)

## ✨ Features

### Interactive Navigation
- **Progress Bar:** Visual indicator showing current chapter and overall progress
- **Scroll-based Navigation:** Smooth scrolling between chapters
- **Keyboard Navigation:**
  - Arrow keys (↑/↓ or ←/→): Navigate between chapters
  - Home: Jump to beginning
  - End: Jump to summary

### Visual Storytelling
- Custom SVG illustrations for each chapter
- Character avatars (Native Speaker and Tourist)
- Animated diagrams showing data flow differences
- Color-coded chapters with distinct visual themes

### Accessibility
- Full ARIA labels for screen readers
- Keyboard navigation support
- Respects `prefers-reduced-motion` setting
- High contrast text and backgrounds
- Semantic HTML structure

### Performance
- Intersection Observer for efficient scroll tracking
- GPU-accelerated animations
- Optimized SVG components
- Lazy rendering with Framer Motion

## 🎨 Design System

### Color Palette by Chapter

**Chapter 1 - Problem (Dark Gray/Red)**
- Represents crisis and chaos
- Visualizes fragmented systems

**Chapter 2 - Choice (Blue/Orange Split)**
- Blue: JPM's native path
- Orange: Peers' translation path

**Chapter 3 - Warning (Orange/Yellow)**
- Warning colors for the Rosetta Stone Trap
- Alert indicators for breaking points

**Chapter 4 - Divergence (Split: Blue-Green vs Orange-Red)**
- JPM success gradient (blue to green)
- Peers struggle gradient (orange to red)

**Chapter 5 - Future (Blue/Green)**
- Digital future aesthetic
- Success and readiness themes

### Typography

**Narrative Text:**
- Font: Georgia/Merriweather (serif)
- Size: 18-20px
- Usage: Story content, quotes

**UI Elements:**
- Font: Inter (sans-serif)
- Weights: Regular (400), Medium (500), SemiBold (600), Bold (700)
- Usage: Titles, labels, buttons

## 📱 Responsive Design

The application is fully responsive:
- **Desktop:** Optimized for large screens with side-by-side comparisons
- **Tablet:** Adapted layouts for medium screens
- **Mobile:** Vertical stacking with touch-friendly navigation

## 🧪 Testing

To verify the application works correctly:

1. **Visual Check:** Scroll through all chapters and ensure illustrations load
2. **Keyboard Navigation:** Test arrow keys, Home, and End keys
3. **Responsiveness:** Resize browser window to test different viewports
4. **Accessibility:** Use a screen reader to test ARIA labels
5. **Performance:** Check animations are smooth (60fps)

## 📂 Project Structure

```
narrative-timeline/
├── src/
│   ├── components/
│   │   ├── chapters/           # Individual chapter components
│   │   ├── shared/             # Reusable components
│   │   └── illustrations/      # SVG illustration components
│   ├── data/
│   │   └── chapters.js         # Chapter content data
│   ├── store/
│   │   └── useStore.js         # Zustand state management
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # React entry point
│   └── index.css               # Tailwind + custom styles
├── public/                     # Static assets
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🎯 Target Audience

This infographic is designed for:
- C-suite executives
- Board members
- Business strategists
- Non-technical stakeholders
- Anyone interested in banking technology strategy

## 💡 Key Metaphors

- **Tower of Babel:** Post-crisis regulatory fragmentation
- **Native Speaker vs Tourist:** Native adoption vs translation layer
- **Rosetta Stone Trap:** Translation layer dependency
- **Fork in the Road:** Strategic choice point
- **Rocket vs Car:** Future readiness comparison

## 🔧 Customization

### Updating Content

Edit `src/data/chapters.js` to modify:
- Chapter narratives
- Section content
- Comparison data
- Summary takeaways

### Styling

Modify `tailwind.config.js` for:
- Color schemes
- Typography
- Spacing
- Animations

### Illustrations

SVG components in `src/components/illustrations/` can be customized to match your brand or add new visuals.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is part of the ISDA CDM research and visualization initiative.

## 🤝 Contributing

To contribute:
1. Review the narrative content for accuracy
2. Test across different devices and browsers
3. Suggest improvements to visual storytelling
4. Report bugs or accessibility issues

## 📞 Support

For questions or issues, please refer to the ISDA CDM documentation or contact the project maintainers.

---

**Built with ❤️ to make complex banking technology accessible to everyone**
