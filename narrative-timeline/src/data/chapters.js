export const chaptersData = [
  {
    id: 1,
    title: "The Tower of Babel",
    subtitle: "After the 2008 Crisis",
    theme: "problem",
    color: "gray",
    icon: "🏛️",
    bgClass: "chapter1-gradient",
    sections: [
      {
        type: "narrative",
        content: "After the 2008 financial crisis, regulators worldwide demanded transparency. They asked banks to report every trade, but they didn't agree on a common language."
      },
      {
        type: "problem-title",
        content: "The Problem:"
      },
      {
        type: "regulatory-demands",
        regions: [
          { region: "United States", demand: "We want data in Format A", flag: "🇺🇸" },
          { region: "Europe", demand: "We want data in Format B", flag: "🇪🇺" },
          { region: "Asia", demand: "We want data in Format C", flag: "🇯🇵" }
        ]
      },
      {
        type: "messy-solution",
        title: "The Messy Solution:",
        content: "Banks responded by building \"Spaghetti Architecture\" — a messy patchwork of systems designed to satisfy each regulator individually."
      },
      {
        type: "pain-points",
        title: "Pain Points:",
        points: [
          { icon: "💸", label: "Expensive", description: "Multiple systems to maintain" },
          { icon: "🔴", label: "Chaotic", description: "No coordination between systems" },
          { icon: "⚠️", label: "Error-prone", description: "Data inconsistencies everywhere" }
        ]
      },
      {
        type: "solution-emerges",
        title: "The Solution Emerges:",
        content: "To fix this, the industry created the ISDA Common Domain Model (CDM): a single, digital \"language\" that defines exactly what a trade is, ensuring everyone means the same thing when they say \"Swap\" or \"Bond.\""
      }
    ]
  },
  {
    id: 2,
    title: "The Fork in the Road",
    subtitle: "Two Paths Emerge",
    theme: "choice",
    color: "split",
    icon: "🔀",
    bgClass: "chapter2-gradient",
    sections: [
      {
        type: "narrative",
        content: "With this new common language available, a strategic divide opened up in the banking world. Two distinct paths emerged for adopting the CDM."
      },
      {
        type: "fork-visual",
        description: "A literal fork in the road, with two paths diverging"
      },
      {
        type: "dual-paths",
        pathA: {
          title: "The Native Speaker 🗣️",
          bank: "J.P. Morgan",
          strategy: "Native Adoption",
          character: "native-speaker",
          metaphor: "A person speaking their native language fluently",
          quote: "J.P. Morgan chose the difficult path. Instead of just using the CDM to talk to regulators, they decided to think in CDM.",
          explanation: "JPM is tearing out old \"booking systems\" and replacing them with infrastructure that speaks CDM natively. When a trade happens at JPM, it is born as a CDM object. It doesn't need to be translated; it already is in the correct format.",
          investment: {
            cost: {
              level: "high",
              icon: "💰💰💰",
              description: "High upfront investment. Requires rewriting the bank's deep internal \"plumbing\""
            },
            reward: {
              level: "high",
              icon: "🎯",
              description: "They effectively deleted the distinction between \"internal data\" and \"regulatory data.\" Immune to constant costs of translation. Paying down technical debt once and for all."
            }
          }
        },
        pathB: {
          title: "The Translator 📖",
          banks: ["Bank of America", "Citi", "Goldman Sachs", "BNP Paribas"],
          strategy: "Translation Layer",
          character: "tourist-phrasebook",
          metaphor: "A tourist using a phrasebook",
          quote: "Most other major banks chose the pragmatic path. They kept their decades-old legacy systems but built a 'Translation Layer' on top.",
          explanation: "Think of this like a tourist using a phrasebook. The bank's internal systems still speak their old, proprietary language. When a regulator asks for a report, the bank pushes the data through a \"translator\" (often provided by vendors) to convert it into CDM.",
          tradeoff: {
            benefit: {
              level: "low-cost",
              icon: "✅",
              description: "Faster and cheaper today. Don't have to rebuild core systems."
            },
            risk: {
              level: "high",
              icon: "⚠️",
              description: "They have walked into the \"Rosetta Stone Trap\""
            }
          }
        }
      }
    ]
  },
  {
    id: 3,
    title: "The Rosetta Stone Trap",
    subtitle: "The Hidden Risk",
    theme: "warning",
    color: "orange",
    icon: "⚠️",
    bgClass: "chapter3-gradient",
    sections: [
      {
        type: "narrative",
        content: "The research identifies a dangerous flaw in the peer strategy called The Rosetta Stone Trap."
      },
      {
        type: "trap-explanation",
        title: "The Trap Explained:",
        subtitle: "The Dependency:",
        content: "When a bank relies on a translation layer, they create a permanent dependency on a map."
      },
      {
        type: "what-breaks",
        title: "What Breaks the Map:",
        breakPoints: [
          { icon: "⚠️", text: "Regulator changes a rule → Map breaks" },
          { icon: "⚠️", text: "Bank updates an internal system → Map breaks" },
          { icon: "🔧", text: "Result: Must constantly fix and maintain this \"Rosetta Stone\"" }
        ]
      },
      {
        type: "obscured-truth",
        title: "The Obscured Truth:",
        content: "Worse, this layer obscures the truth.",
        comparison: {
          question: "If a regulator asks: \"Where did this number come from?\"",
          jpm: {
            icon: "🟢",
            role: "JPM Engineer:",
            response: "Points directly to the trade itself (instant data lineage)"
          },
          peers: {
            icon: "🟠",
            role: "Peer Engineer:",
            response: "Must dig through translation logic, often losing the data's \"lineage\" (history) in the process"
          }
        }
      },
      {
        type: "never-ending-cycle",
        title: "The Never-Ending Cycle:",
        content: "Every regulatory change or internal update requires:",
        steps: [
          "Identify what broke in the translation",
          "Update the mapping logic",
          "Test across all use cases",
          "Deploy the fix",
          "Monitor for new issues",
          "Repeat forever ♾️"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "The Upstream Ripple Effect",
    subtitle: "The Hidden Consequences",
    theme: "divergence",
    color: "split",
    icon: "🌊",
    bgClass: "bg-chapter4-bg",
    sections: [
      {
        type: "narrative",
        content: "The impact of these strategies extends far beyond simple trade reporting. It radically alters how banks handle critical upstream reporting like CCAR (Comprehensive Capital Analysis and Review), FR Y-14, and NFRR."
      },
      {
        type: "split-comparison",
        translator: {
          title: "The Translator Strategy: \"Two Truths\" Problem ⚠️",
          subtitle: "The Silo Problem:",
          content: "Banks using translation layers face a dangerous \"Two Truths\" risk because the \"Trade Reporting\" team and the \"Capital Planning\" (CCAR) team operate in silos.",
          teams: [
            {
              name: "Team 1: Trade Reporting",
              process: "Takes raw data → Maps it to CDM → Reports to CFTC",
              definition: "Defines \"Notional Amount\" using Map A logic"
            },
            {
              name: "Team 2: CCAR Reporting",
              process: "Takes the SAME raw data → Maps it to different proprietary format → Reports to Fed",
              definition: "Defines \"Notional Amount\" using Map B logic"
            }
          ],
          disaster: {
            title: "The Disaster:",
            content: "If the two teams define terms like \"Notional Amount\" or \"Maturity Date\" slightly differently in their respective translation maps, the bank reports contradictory data to different regulators."
          },
          realImpact: [
            { icon: "🏦", label: "Federal Reserve sees:", value: "$100M capital risk (from Map B)" },
            { icon: "📊", label: "CFTC sees:", value: "$101M trade transparency (from Map A)" },
            { icon: "🕐", label: "Reconciliation:", value: "Thousands of hours of manual labor" },
            { icon: "⚠️", label: "Risk:", value: "Regulatory penalties, loss of trust" }
          ]
        },
        native: {
          title: "The Native Strategy: \"One Truth\" Advantage ✅",
          subtitle: "How It Works:",
          content: "Because J.P. Morgan adopted the CDM natively, the trade exists as a standardized object at the source.",
          dataFlow: [
            { step: 1, description: "Golden Source: Trade is booked as a CDM object" },
            { step: 2, description: "Trade Reporting: System reads the CDM object" },
            { step: 3, description: "CCAR/Risk: Risk engine reads the SAME CDM object" }
          ],
          guarantee: "Even though CCAR requires different calculations than trade reporting, they both start from the exact same semantic definition of the trade.",
          advantages: [
            { icon: "✅", label: "Semantic Consistency:", description: "One definition across the enterprise" },
            { icon: "✅", label: "Auto-Update:", description: "If the definition of a \"Swap\" changes in the CDM, it updates automatically for both Trade Report and Capital Report" },
            { icon: "✅", label: "Zero Reconciliation:", description: "No mapping divergence to reconcile" },
            { icon: "✅", label: "Perfect Lineage:", description: "Every number traces back to the same source" }
          ],
          contrast: {
            jpm: "One truth, many uses",
            peers: "Many truths, constant reconciliation"
          }
        }
      }
    ]
  },
  {
    id: 5,
    title: "The Future",
    subtitle: "Tomorrow's Digital Economy",
    theme: "future",
    color: "blue-green",
    icon: "🚀",
    bgClass: "chapter5-gradient",
    sections: [
      {
        type: "narrative",
        content: "The divergence matters most for what comes next. While peers are using the CDM as a dictionary to survive today's regulations, J.P. Morgan is learning the language to dominate tomorrow's digital economy."
      },
      {
        type: "future-technologies",
        title: "The Future of Finance: Two Technologies",
        technologies: [
          {
            name: "Blockchain / DLT",
            icon: "⛓️",
            subtitle: "(Distributed Ledger Technology)",
            opportunity: "The future of finance is \"tokenized\" assets living on blockchains. These blockchains require standardized data to work.",
            pathA: {
              title: "Path A (Native) - Ready:",
              points: [
                { icon: "✅", text: "JPM's data is already standardized" },
                { icon: "✅", text: "Ready to plug directly into blockchain future" },
                { icon: "✅", text: "Can participate in tokenized asset markets immediately" },
                { icon: "🚀", text: "Status: Leading the digital economy" }
              ]
            },
            pathB: {
              title: "Path B (Translator) - Not Ready:",
              points: [
                { icon: "⚠️", text: "Peers will need to build another translation layer to connect" },
                { icon: "⚠️", text: "Leaves them \"off-chain\" and slow" },
                { icon: "⚠️", text: "Must translate legacy → CDM → Blockchain protocol" },
                { icon: "🐢", text: "Status: Playing catch-up, additional complexity" }
              ]
            }
          },
          {
            name: "Artificial Intelligence / Machine Learning",
            icon: "🤖",
            subtitle: "",
            opportunity: "AI needs clean, consistent data to provide accurate insights.",
            pathA: {
              title: "Path A (Native) - Optimized:",
              points: [
                { icon: "✅", text: "JPM's native data is ready for AI agents" },
                { icon: "✅", text: "Full context preserved (no translation loss)" },
                { icon: "✅", text: "No hallucinations from data quality issues" },
                { icon: "✅", text: "Can deploy advanced AI for risk, trading, compliance" },
                { icon: "🎯", text: "Status: AI-powered advantage" }
              ]
            },
            pathB: {
              title: "Path B (Translator) - Compromised:",
              points: [
                { icon: "⚠️", text: "Peers are feeding AI \"translated\" data" },
                { icon: "⚠️", text: "Translation can lose context and nuance" },
                { icon: "⚠️", text: "Leading to \"hallucinations\" or bad insights" },
                { icon: "⚠️", text: "AI working with second-hand data" },
                { icon: "🔴", text: "Status: Limited AI effectiveness" }
              ]
            }
          }
        ]
      },
      {
        type: "final-divergence",
        title: "The Final Divergence:",
        jpm: {
          quote: "We learned the language. Now we're ready for the future.",
          outcomes: [
            { icon: "✅", text: "Native blockchain integration" },
            { icon: "✅", text: "AI-powered everything" },
            { icon: "✅", text: "Zero additional translation overhead" },
            { icon: "✅", text: "Competitive advantage for next decade" }
          ]
        },
        peers: {
          quote: "We saved money today, but now we're stuck.",
          outcomes: [
            { icon: "⚠️", text: "Need new translation layers for every new technology" },
            { icon: "⚠️", text: "Always one step behind" },
            { icon: "⚠️", text: "Accumulating technical debt" },
            { icon: "⚠️", text: "Playing defense, not offense" }
          ]
        }
      }
    ]
  }
];

export const summaryData = {
  tagline: "While peers are using the CDM as a dictionary to survive today's regulations, J.P. Morgan is learning the language to dominate tomorrow's digital economy.",
  keyTakeaways: [
    {
      title: "Strategic Choice",
      points: [
        "Native vs Translation Layer",
        "High upfront cost vs Low initial cost",
        "Long-term advantage vs Short-term pragmatism"
      ],
      icon: "🔀"
    },
    {
      title: "Hidden Risks",
      points: [
        "Rosetta Stone Trap",
        "Two Truths Problem",
        "Obscured data lineage"
      ],
      icon: "⚠️"
    },
    {
      title: "Future Readiness",
      points: [
        "AI/Blockchain native compatibility vs New translation layers",
        "Competitive advantage vs Playing catch-up"
      ],
      icon: "🚀"
    }
  ]
};
