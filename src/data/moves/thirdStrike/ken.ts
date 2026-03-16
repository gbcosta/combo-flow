import type { MoveList } from "../types";

export const KEN_MOVES: MoveList = {
  "stand normals": [
    { id: "lp", name: "Light1 Punch", input: "LP", type: "normal" },
    { id: "mp", name: "Medium Punch", input: "MP", type: "normal" },
    { id: "hp", name: "Heavy Punch", input: "HP", type: "normal" },
    { id: "lk", name: "Light Kick", input: "LK", type: "normal" },
    { id: "mk", name: "Medium Kick", input: "MK", type: "normal" },
    { id: "hk", name: "Heavy Kick", input: "HK", type: "normal" },
  ],
  "crouch normals": [
    { id: "2lp", name: "Crouch Light Punch", input: "2LP", type: "normal" },
    { id: "2mp", name: "Crouch Medium Punch", input: "2MP", type: "normal" },
    { id: "2hp", name: "Crouch Heavy Punch", input: "2HP", type: "normal" },
    { id: "2lk", name: "Crouch Light Kick", input: "2LK", type: "normal" },
    { id: "2mk", name: "Crouch Medium Kick", input: "2MK", type: "normal" },
    { id: "2hk", name: "Crouch Heavy Kick", input: "2HK", type: "normal" },
  ],
  "jump normals": [
    { id: "jlp", name: "jump Light Punch", input: "j.LP", type: "normal" },
    { id: "jmp", name: "jump Medium Punch", input: "j.MP", type: "normal" },
    { id: "jhp", name: "jump Heavy Punch", input: "j.HP", type: "normal" },
    { id: "jlk", name: "jump Light Kick", input: "j.LK", type: "normal" },
    { id: "jmk", name: "jump Medium Kick", input: "j.MK", type: "normal" },
    { id: "jhk", name: "jump Heavy Kick", input: "j.HK", type: "normal" },
  ],
  universal: [],
  "target combos": [
    { id: "hp_hk", name: "Target Combo", input: "f.5HP>5HK", type: "normal" },
  ],
  "command normals": [
    { id: "sakotsu_wari", name: "Sakotsu Wari", input: "6mp", type: "normal" },
    {
      id: "kyuubi_kudaki",
      name: "Kyuubi Kudaki",
      input: "6hp",
      type: "normal",
    },
  ],
  "special moves": [
    { id: "hadoken", name: "Hadoken", input: "236P", type: "special" },
    { id: "hadoken", name: "Hadoken", input: "236LP", type: "special" },
    { id: "hadoken", name: "Hadoken", input: "236MP", type: "special" },
    { id: "hadoken", name: "Hadoken", input: "236HP", type: "special" },
    { id: "hadoken", name: "Hadoken", input: "236EXP", type: "special" },

    { id: "shoryuken", name: "Shoryuken", input: "623P", type: "special" },
    { id: "shoryuken", name: "Shoryuken", input: "623LP", type: "special" },
    { id: "shoryuken", name: "Shoryuken", input: "623MP", type: "special" },
    { id: "shoryuken", name: "Shoryuken", input: "623HP", type: "special" },
    { id: "shoryuken", name: "Shoryuken", input: "623EXP", type: "special" },

    {
      id: "tatsumaki",
      name: "Tatsumaki Senpukyaku",
      input: "214K",
      type: "special",
    },
    {
      id: "tatsumaki",
      name: "Tatsumaki Senpukyaku",
      input: "214LK",
      type: "special",
    },
    {
      id: "tatsumaki",
      name: "Tatsumaki Senpukyaku",
      input: "214MK",
      type: "special",
    },
    {
      id: "tatsumaki",
      name: "Tatsumaki Senpukyaku",
      input: "214HK",
      type: "special",
    },
    {
      id: "tatsumaki",
      name: "Tatsumaki Senpukyaku",
      input: "214EXK",
      type: "special",
    },

    {
      id: "jtatsumaki",
      name: "Air Tatsumaki Senpukyaku",
      input: "j.214K",
      type: "special",
    },
    {
      id: "jtatsumaki",
      name: "Air Tatsumaki Senpukyaku",
      input: "j.214LK",
      type: "special",
    },
    {
      id: "jtatsumaki",
      name: "Air Tatsumaki Senpukyaku",
      input: "j.214MK",
      type: "special",
    },
    {
      id: "jtatsumaki",
      name: "Air Tatsumaki Senpukyaku",
      input: "j.214HK",
      type: "special",
    },
    {
      id: "jtatsumaki",
      name: "Air Tatsumaki Senpukyaku",
      input: "j.214EXK",
      type: "special",
    },
    {
      id: "Sokutou",
      name: "Joudan Sokutou Geri",
      input: "41236K",
      type: "special",
    },

    {
      id: "Sokutou",
      name: "Joudan Sokutou Geri",
      input: "41236LK",
      type: "special",
    },
    {
      id: "Sokutou",
      name: "Joudan Sokutou Geri",
      input: "41236MK",
      type: "special",
    },
    {
      id: "Sokutou",
      name: "Joudan Sokutou Geri",
      input: "41236HK",
      type: "special",
    },
    {
      id: "Sokutou",
      name: "Joudan Sokutou Geri",
      input: "41236EXK",
      type: "special",
    },
  ],
  "super arts": [
    {
      id: "denjin_hadoken",
      name: "Denjin Hadoken",
      input: "236236P",
      type: "super",
    },
    {
      id: "Shinkuu_hadoken",
      name: "Shinkuu Hadoken",
      input: "236236P",
      type: "super",
    },
    {
      id: "Shin_shoryuken",
      name: "Shin Shoryuken",
      input: "236236P",
      type: "super",
    },
  ],
};
