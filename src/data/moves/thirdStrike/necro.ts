import type { MoveList } from "../types";
export const NECRO_MOVES: MoveList = {
  "stand normals": [
    { id: "lp", name: "LP", input: "LP", type: "normal" },
    { id: "mp", name: "MP", input: "MP", type: "normal" },
    { id: "hp", name: "HP", input: "HP", type: "normal" },
    { id: "lk", name: "LK", input: "LK", type: "normal" },
    { id: "mk", name: "MK", input: "MK", type: "normal" },
    { id: "hk", name: "HK", input: "HK", type: "normal" },
  ],
  "crouch normals": [
    { id: "2lp", name: "Crouching LP", input: "2LP", type: "normal" },
    { id: "2mp", name: "Crouching MP", input: "2MP", type: "normal" },
    { id: "2hp", name: "Crouching HP", input: "2HP", type: "normal" },
    { id: "2lk", name: "Crouching LK", input: "2LK", type: "normal" },
    { id: "2mk", name: "Crouching MK", input: "2MK", type: "normal" },
    { id: "2hk", name: "Crouching HK", input: "2HK", type: "normal" },
  ],
  "jump normals": [
    { id: "jlp", name: "Jumping LP", input: "9LP", type: "normal" },
    { id: "jmp", name: "Jumping MP", input: "9MP", type: "normal" },
    { id: "jmp", name: "Jumping MP", input: "9MP", type: "normal" },
    { id: "jlk", name: "Jumping LK", input: "9LK", type: "normal" },
    { id: "jmk", name: "Jumping MK", input: "9MK", type: "normal" },
    { id: "jhk", name: "Jumping HK", input: "9HK", type: "normal" },
    { id: "jlp", name: "Neutral Jumping LP", input: "8LP", type: "normal" },
    { id: "jmp", name: "Neutral Jumping MP", input: "8MP", type: "normal" },
    { id: "jhp", name: "Neutral Jumping HP", input: "8HP", type: "normal" },
    { id: "jlk", name: "Neutral Jumping LK", input: "8LK", type: "normal" },
    { id: "jmk", name: "Neutral Jumping MK", input: "8MK", type: "normal" },
    { id: "jhk", name: "Neutral Jumping HK", input: "8HK", type: "normal" },
    { id: "jlp", name: "Back Jumping LP", input: "8LP", type: "normal" },
    { id: "jmp", name: "Back Jumping MP", input: "8MP", type: "normal" },
    { id: "jhp", name: "Back Jumping HP", input: "8HP", type: "normal" },
    { id: "jlk", name: "Back Jumping LK", input: "8LK", type: "normal" },
    { id: "jmk", name: "Back Jumping MK", input: "8MK", type: "normal" },
    { id: "jhk", name: "Back Jumping HK", input: "8HK", type: "normal" },
  ],
  universal: [
    {
      id: "shoulder_throw",
      name: "Shoulder Attack (Throw)",
      input: "LP + LK",
      type: "special",
    },
    {
      id: "back_throw",
      name: "Frankensteiner (Back Throw)",
      input: "4LP + LK",
      type: "special",
    },
    {
      id: "german_throw",
      name: "German Suplex (Back Throw)",
      input: "4LP + LK",
      type: "special",
    },
    {
      id: "uoh",
      name: "Universal Overhead",
      input: "MP + MK",
      type: "special",
    },
    {
      id: "taunt",
      name: "Taunt",
      input: "HP + HK",
      type: "special",
    },
    { id: "parry", name: "Parry", input: "6", type: "special" },
    { id: "low_parry", name: "Low Parry", input: "2", type: "special" },
    { id: "dash", name: "Dash", input: "66", type: "special" },
    { id: "backdash", name: "Backdash", input: "44", type: "special" },
    { id: "walk_forward", name: "Walk Forward", input: "6", type: "special" },
    {
      id: "walk_backwards",
      name: "Walk Backwards",
      input: "4",
      type: "special",
    },
    { id: "jump", name: "Backdash", input: "8", type: "special" },
    { id: "jump_back", name: "Jump Back", input: "7", type: "special" },
    { id: "jump_forward", name: "Jump Forward", input: "9", type: "special" },
    { id: "defense", name: "Defense", input: "4", type: "special" },
    { id: "low_defense", name: "Low Defense", input: "1", type: "special" },
  ],
  "target combos": [],
  "command normals": [
    { id: "drill_lk", name: "Drill LK", input: "j.2LK", type: "normal" },
    { id: "drill_mk", name: "Drill MK", input: "j.2MK", type: "normal" },
    { id: "drill_hk", name: "Drill HK", input: "j.2HK", type: "normal" },

    { id: "blp", name: "Back LP", input: "4LP", type: "normal" },
    { id: "bmp", name: "Back MP", input: "4MP", type: "normal" },
    { id: "bhp", name: "Back HP", input: "4HP", type: "normal" },

    { id: "blk", name: "Back LK", input: "4LK", type: "normal" },
    { id: "bmk", name: "Back MK", input: "4MK", type: "normal" },
    { id: "bhk", name: "Knee Missile", input: "4HK", type: "normal" },

    { id: "1hp", name: "Elbow Cannon", input: "1HP", type: "normal" },
  ],
  "special moves": [
    // ELECTRIC SHOCK
    {
      id: "electric_lp",
      name: "LP Electric Shock",
      input: "623LP",
      type: "special",
    },
    {
      id: "electric_mp",
      name: "MP Electric Shock",
      input: "623MP",
      type: "special",
    },
    {
      id: "electric_hp",
      name: "HP Electric Shock",
      input: "623HP",
      type: "special",
    },

    // SNAKE FANG
    {
      id: "snake_lk",
      name: "LK Snake Fang",
      input: "41236LK",
      type: "special",
    },
    {
      id: "snake_mk",
      name: "MK Snake Fang",
      input: "41236MK",
      type: "special",
    },
    {
      id: "snake_hk",
      name: "HK Snake Fang",
      input: "41236HK",
      type: "special",
    },

    // SPINNING PUNCH
    {
      id: "spinning_lp",
      name: "LP Spinning Punch",
      input: "41236LP",
      type: "special",
    },
    {
      id: "spinning_mp",
      name: "MP Spinning Punch",
      input: "41236MP",
      type: "special",
    },
    {
      id: "spinning_hp",
      name: "HP Spinning Punch",
      input: "41236HP",
      type: "special",
    },
    {
      id: "spinning_ex",
      name: "EX Spinning Punch",
      input: "41236PP",
      type: "special",
    },

    // FLYING VIPER
    {
      id: "viper_lp",
      name: "LP Flying Viper",
      input: "214LP",
      type: "special",
    },
    {
      id: "viper_mp",
      name: "MP Flying Viper",
      input: "214MP",
      type: "special",
    },
    {
      id: "viper_hp",
      name: "HP Flying Viper",
      input: "214HP",
      type: "special",
    },
    {
      id: "viper_ex",
      name: "EX Flying Viper",
      input: "214PP",
      type: "special",
    },

    // RAGING COBRA
    {
      id: "cobra_lk",
      name: "LK Raging Cobra",
      input: "214LK",
      type: "special",
    },
    {
      id: "cobra_mk",
      name: "MK Raging Cobra",
      input: "214MK",
      type: "special",
    },
    {
      id: "cobra_hk",
      name: "HK Raging Cobra",
      input: "214HK",
      type: "special",
    },
    {
      id: "cobra_ex",
      name: "EX Raging Cobra",
      input: "214KK",
      type: "special",
    },
  ],
  "super arts": [
    {
      id: "sa1",
      name: "Magnetic Storm (SA1)",
      input: "236236P",
      type: "super",
    },
    { id: "sa2", name: "Slam Dance (SA2)", input: "236236P", type: "super" },
    {
      id: "sa3",
      name: "Electric Snake (SA3)",
      input: "236236P",
      type: "super",
    },
  ],
};
