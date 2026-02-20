import type { Move } from "../types";

export const RYU_MOVES: Move[] = [
  { id: "lp", name: "Light Punch", input: "LP", type: "normal" },
  { id: "mp", name: "Medium Punch", input: "MP", type: "normal" },
  { id: "hp", name: "Heavy Punch", input: "HP", type: "normal" },
  { id: "lk", name: "Light Kick", input: "LK", type: "normal" },
  { id: "mk", name: "Medium Kick", input: "MK", type: "normal" },
  { id: "hk", name: "Heavy Kick", input: "HK", type: "normal" },
  { id: "hadoken", name: "Hadoken", input: "↓↘→ + P", type: "special" },
  { id: "shoryuken", name: "Shoryuken", input: "→↓↘ + P", type: "special" },
  {
    id: "tatsumaki",
    name: "Tatsumaki Senpukyaku",
    input: "↓↙← + K",
    type: "special",
  },
  {
    id: "denjin_hadoken",
    name: "Denjin Hadoken",
    input: "↓↘→↓↘→ + P",
    type: "super",
  },
];
