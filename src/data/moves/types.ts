export interface Move {
  id: string;
  name: string;
  input: string;
  type: "normal" | "special" | "super";
}

export interface MoveList {
  "stand normals": Move[];
  "command normals": Move[];
  "jump normals": Move[];
  "crouch normals": Move[];
  universal: Move[];
  "target combos": Move[];
  "special moves": Move[];
  "super arts": Move[];
}
