# AI Business Future Solutions
### Enterprise AI Thought Leadership Website — Built with 11ty (`@11ty/eleventy`)

A clean, modern, Markdown-driven corporate website for **AI Business Future Solutions**.

## Quick Start

```bash
# Build static production site into _site/
npm run build

# Start local 11ty development server
npm start
```

## Content Structure (`src/`)

- **Landing Page (`src/index.md`)**: Opening headline, executive intro copy, and strategic comparison table.
- **Core Capabilities (`src/pillars/*.md`)**: Modular Markdown files for the four strategic pillars.
- **Research & Infographics (`src/infographics/*.md`)**: Clean corporate SVG charts and takeaways.
- **Executive Leadership (`src/team/index.md` & `src/team/members/*.md`)**: Executive team bios and portraits.
- **Thought Leadership (`src/thought-leadership/index.md` & `src/thought-leadership/articles/*.md`)**: Executive reports and briefings.
- **Case Studies (`src/case-studies/index.md` & `src/case-studies/studies/*.md`)**: Client impact stories across banking, logistics, healthcare, and energy.

## All of this bullshit was created by AI.

Antigravity built this bunch of bullshit.
I also asked Gemini to help with the landing page:

> You are the CEO of a Fortune 500. Please create a corpspeak headline and intro paragraph for a website on the AI revolution in the business world. Use as many corp phrases as a big corp CEO would.

That created this gorgeous bunch of bullshit:

  > Leveraging Next-Gen AI Synergies to Drive Disruptive Paradigm Shifts in the Global Enterprise Ecosystem
  >
  > In today's hyper-competitive, dynamic business landscape, organizations must pivot to embrace bleeding-edge, > scalable AI solutions that seamlessly align with their core competencies. By synergizing generative machine > learning capabilities with a holistic data lake infrastructure, we are unlocking unprecedented value
  > propositions and empowering agile teams to move the needle on mission-critical KPIs. This operational pivot is not merely about optimizing bandwidth or streamlining omnichannel touchpoints; it is a strategic imperative
  > designed to future-proof our overarching architecture, synthesize actionable insights that cascade across the
  >entire value chain, and ultimately drive sustainable, bottom-line ROI while maximizing stakeholder impact from the top down.

In case you wonder, I also asked Claude:

> You are a senior consultant at one of the big companies, McKinsey, Deloitte, BCG - you know the bunch.
You are tasked with explaining why AI will shape the business landscape and what synergies and benefits but also challenges and risks AI will have for any industry and corporation. Create an article that could be posted in a newsletter or company blog, the sort that big thinktanks would expect and respond to. Create it as a markdown file, please. Include infographics, graphs, industry quotes and an exec summary.

Which lead to the bullshit mountain that can be seen in "The productivity paradox" under "Thought Leadership".
[Source file is here](/src/thought-leadership/articles/00b-the-productivity-paradox.md).