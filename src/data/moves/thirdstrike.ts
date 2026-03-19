import { KEN_MOVES } from "./thirdStrike/ken";
import { NECRO_MOVES } from "./thirdStrike/necro";
import { RYU_MOVES } from "./thirdStrike/ryu";

export const THIRD_STRIKE_CHARACTERS_MOVELIST = {
  ryu: RYU_MOVES,
  ken: KEN_MOVES,
  necro: NECRO_MOVES,
};

export type Character = "ryu" | "ken" | "necro";
