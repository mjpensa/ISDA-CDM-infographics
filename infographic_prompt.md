# React Infographic Development Prompt

Create an interactive React-based infographic implementing the "Diverging Paths" design concept for visualizing two banking strategies for ISDA CDM adoption.

## Project Requirements

Build a modern, interactive React web application (using Vite + React) that visualizes the following narrative as an infographic.

## Design Concept: "The Diverging Paths" - Split Journey Infographic

A visually compelling split-screen design showing two parallel strategic journeys from a common starting point.

## Content to Visualize

### Introduction: The Tower of Babel (Starting Point)

**Context:** After the 2008 financial crisis, regulators worldwide demanded transparency. They asked banks to report every trade, but they didn't agree on a common language. The US wanted data in one format; Europe wanted another; Asia a third.

**Problem:** Banks built "spaghetti architecture"—a messy patchwork of systems designed to satisfy each regulator individually. It was expensive, chaotic, and prone to error.

**Solution:** The industry created the ISDA Common Domain Model (CDM): a single, digital "language" that defines exactly what a trade is, ensuring everyone means the same thing.

### The Fork in the Road (Strategic Choice)

Two distinct paths emerged for adopting the CDM:

---

### PATH A: The Native Speaker (J.P. Morgan)

**Strategy:** "Native Adoption"

**Approach:** J.P. Morgan chose the difficult path. Instead of just using the CDM to talk to regulators, they decided to think in CDM. They tore out old booking systems and replaced them with infrastructure that speaks CDM natively. When a trade happens at JPM, it is born as a CDM object.

**The Cost:**
- High upfront investment
- Requires rewriting the bank's deep internal "plumbing"

**The Reward:**
- Deleted the distinction between "internal data" and "regulatory data"
- Immune to constant costs of translation and reconciliation
- Paying down technical debt once and for all

**The Rosetta Stone Trap:** N/A - No translation layer to maintain

**Upstream Impact (CCAR, Risk & Capital):**
- "One Truth" Advantage
- Trade exists as standardized object at the source
- Golden Source → Trade Reporting → CCAR/Risk all read same CDM object
- Semantic consistency across the enterprise
- If definition changes, updates automatically for all reports

**Future Readiness:**
- **Blockchain (DLT):** Data already standardized - ready to plug directly into tokenized assets
- **AI:** Clean, consistent data ready for AI agents
- **Status:** Ready to dominate tomorrow's digital economy

---

### PATH B: The Translator (Bank of America, Citi, Others)

**Strategy:** "Limited" or "Translation Layer"

**Approach:** Most major banks chose the pragmatic path. They kept their decades-old legacy systems but built a "Translation Layer" on top. Internal systems still speak their old, proprietary language. When a regulator asks for a report, the bank pushes data through a translator to convert it into CDM.

**The Benefit:**
- Faster and cheaper today
- Don't have to rebuild core systems

**The Risk:**
- Walked into the "Rosetta Stone Trap"

**The Rosetta Stone Trap:**
- Permanent dependency on a translation map
- Every time a regulator changes a rule or the bank updates an internal system, the map breaks
- Must constantly fix and maintain this "Rosetta Stone"
- Translation layer obscures the truth - hard to trace data lineage
- If regulator asks "Where did this number come from?", must dig through translation logic

**Upstream Impact (CCAR, Risk & Capital):**
- "Two Truths" Problem
- Trade Reporting team and Capital Planning (CCAR) team operate in silos:
  - Trade Reporting: Maps raw data to CDM for CFTC
  - CCAR Reporting: Maps same raw data to different proprietary format for Fed
- If teams define "Notional Amount" or "Maturity Date" differently, bank reports contradictory data to different regulators
- Fed sees one number for capital risk; CFTC sees another
- Reconciling requires thousands of hours of manual labor
- Struggle with "mapping divergence" between departments

**Future Readiness:**
- **Blockchain (DLT):** Will need to build another translation layer, leaving them "off-chain" and slow
- **AI:** Feeding AI "translated" data which can lose context and nuance, leading to hallucinations or bad insights
- **Status:** Using CDM as a dictionary to survive today's regulations

---

## Technical Implementation Requirements

### Tech Stack
- **Framework:** React 18+ with Vite
- **Styling:** Tailwind CSS or styled-components (your choice)
- **Animations:** Framer Motion for smooth transitions and interactions
- **Icons:** React Icons or Lucide React

### Visual Structure

1. **Top Section - "The Tower of Babel" (100vh)**
   - Visual representation of post-2008 crisis chaos
   - Fragmented regulatory requirements (US, Europe, Asia flags/icons)
   - Spaghetti architecture visual
   - ISDA CDM introduction as the solution
   - Scroll indicator to move to fork

2. **Fork Section - Strategic Choice (100vh)**
   - Clear visual fork/split point
   - Two path previews with key stats:
     - PATH A: Native Adoption (J.P. Morgan)
     - PATH B: Translation Layer (Peers)
   - Interactive hover effects
   - Click/scroll to explore each path

3. **Split Journey Sections (Scrollable/Interactive)**
   - **Left Path (Blue/Green theme):** J.P. Morgan's Native Approach
     - Strategy card
     - Cost/Reward breakdown
     - "One Truth" architecture diagram
     - Future readiness indicators (AI/Blockchain badges)

   - **Right Path (Orange/Yellow theme):** Peers' Translation Approach
     - Strategy card
     - Benefit/Risk breakdown
     - "Two Truths" problem visualization
     - Rosetta Stone Trap illustration
     - Future challenges visualization

4. **Bottom Section - Future Divergence (100vh)**
   - Side-by-side comparison of future states
   - JPM: Ready for AI/Blockchain (green checkmarks, direct connections)
   - Peers: Requiring new translation layers (warning icons, indirect connections)
   - Final tagline: "Learning the language vs. Using a dictionary"

### Interactivity Features

1. **Smooth scrolling** between sections
2. **Hover effects** on path elements to reveal additional details
3. **Animated transitions** when scrolling (Framer Motion)
4. **Toggle view** to compare paths side-by-side
5. **Tooltips** on technical terms (CDM, CCAR, DLT, etc.)
6. **Progress indicator** showing position in the narrative
7. **Responsive design** (desktop-first, but mobile-friendly)

### Visual Design Guidelines

**Color Palette:**
- **Path A (Native):** Primary: #0066CC (Blue), Secondary: #00CC66 (Green), Success indicators
- **Path B (Translator):** Primary: #FF8C00 (Orange), Secondary: #FFC107 (Yellow), Warning indicators
- **Neutral:** #1F2937 (Dark gray for text), #F3F4F6 (Light gray for backgrounds)
- **Danger:** #DC2626 (Red for risks/traps)

**Typography:**
- **Headings:** Bold, modern sans-serif (Inter, Poppins, or similar)
- **Body:** Clean, readable (Inter or system fonts)
- **Code/Technical terms:** Monospace font

**Visual Elements to Include:**
- Icons for: Banks, Regulators, Translation layers, Data flow, AI, Blockchain, Checkmarks, Warning signs
- Diagrams: Architecture comparisons, Data flow arrows, Dependency chains
- Metaphor visuals: Tower of Babel, Fork in road, Rosetta Stone, Phrasebook

### File Structure

```
isda-cdm-infographic/
├── src/
│   ├── components/
│   │   ├── TowerOfBabel.jsx
│   │   ├── ForkSection.jsx
│   │   ├── PathA_Native.jsx
│   │   ├── PathB_Translator.jsx
│   │   ├── FutureDivergence.jsx
│   │   ├── ComparisonToggle.jsx
│   │   └── Tooltip.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Deliverables

1. **Fully functional React application** with all sections implemented
2. **Smooth animations and transitions** between sections
3. **Interactive elements** (hover states, tooltips, toggles)
4. **Responsive design** that works on desktop and tablet
5. **Clean, well-commented code**
6. **README** with instructions to run the project

## Getting Started

1. Set up a new Vite + React project
2. Install dependencies (Framer Motion, Tailwind CSS/styled-components, React Icons)
3. Create the component structure
4. Implement each section with the content provided
5. Add animations and interactivity
6. Test and refine

## Success Criteria

- [ ] All narrative content is clearly visualized
- [ ] Two paths are visually distinct and easy to compare
- [ ] Interactive elements enhance understanding
- [ ] Smooth, professional animations
- [ ] Responsive and performant
- [ ] Accessible (keyboard navigation, ARIA labels)

Begin by setting up the project structure and creating the basic layout. Focus on getting the visual hierarchy right before adding complex interactions.
