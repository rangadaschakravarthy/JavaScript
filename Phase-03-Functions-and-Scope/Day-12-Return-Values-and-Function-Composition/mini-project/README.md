# Day 12 Mini-Project — Data Processing Pipeline

## 1. Overview
The **Data Processing Pipeline** is a multi-stage text and data transformation application demonstrating pure function composition (Sanitize -> Validate -> Transform -> Format).

## 2. Pipeline Stages
1. `validateInput(str)`: Ensures input is non-empty string.
2. `normalizeText(str)`: Trims whitespace and converts to lowercase.
3. `calculateWordMetrics(str)`: Computes word count and character count.
4. `formatPipelineReport(metrics)`: Returns formatted HTML/CLI summary string.

## 3. How to Run
- **Browser**: Open `index.html`.
- **Node.js**: Run `node script.js`.
