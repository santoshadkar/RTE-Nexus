import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { rteConcepts } from './data/rte_concepts.js';
import { rteScenarios } from './data/rte_scenarios.js';
import { rteWhatIf } from './data/rte_whatif.js';
import { rteBestFirst } from './data/rte_best_first.js';

import { steConcepts } from './data/ste_concepts.js';
import { steScenarios } from './data/ste_scenarios.js';
import { steWhatIf } from './data/ste_whatif.js';
import { steBestFirst } from './data/ste_best_first.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allQuestions = [
  ...rteConcepts,
  ...rteScenarios,
  ...rteWhatIf,
  ...rteBestFirst,
  ...steConcepts,
  ...steScenarios,
  ...steWhatIf,
  ...steBestFirst
];

console.log(`Total questions loaded: ${allQuestions.length}`);

// Validation
const idSet = new Set();
let rteCount = 0;
let steCount = 0;
const archetypeCounts = {};
const categoryCounts = {};

for (const q of allQuestions) {
  if (idSet.has(q.id)) {
    throw new Error(`Duplicate ID found: ${q.id}`);
  }
  idSet.add(q.id);

  if (q.role === 'RTE') rteCount++;
  else if (q.role === 'STE') steCount++;
  else throw new Error(`Unknown role: ${q.role}`);

  archetypeCounts[q.archetype] = (archetypeCounts[q.archetype] || 0) + 1;
  categoryCounts[q.category] = (categoryCounts[q.category] || 0) + 1;

  if (!q.question || !q.answer || !q.keyTakeaway || !q.safeReference) {
    throw new Error(`Missing required fields in question: ${q.id}`);
  }
}

console.log(`RTE Count: ${rteCount}`);
console.log(`STE Count: ${steCount}`);
console.log(`Archetype Breakdown:`, archetypeCounts);
console.log(`Category Breakdown:`, categoryCounts);

const targetPath = path.resolve(__dirname, '../src/data/interviewData.js');

const fileContent = `// -------------------------------------------------------------
// Enterprise RTE & STE Master Interview Vault
// Generated: 170 High-Caliber SAFe 6.0 Interview Q&As
// 85 Release Train Engineer (RTE) + 85 Solution Train Engineer (STE)
// -------------------------------------------------------------

export const INTERVIEW_ARCHETYPES = [
  "All",
  "Concept",
  "Scenario",
  "What-If",
  "Best Approach",
  "First Approach"
];

export const INTERVIEW_ROLES = [
  "All",
  "RTE",
  "STE"
];

export const INTERVIEW_QUESTIONS = ${JSON.stringify(allQuestions, null, 2)};

export const INTERVIEW_STATS = {
  total: ${allQuestions.length},
  rteTotal: ${rteCount},
  steTotal: ${steCount},
  archetypes: ${JSON.stringify(archetypeCounts, null, 2)},
  categories: ${JSON.stringify(categoryCounts, null, 2)}
};
`;

fs.writeFileSync(targetPath, fileContent, 'utf-8');
console.log(`Successfully compiled interviewData.js at: ${targetPath}`);
