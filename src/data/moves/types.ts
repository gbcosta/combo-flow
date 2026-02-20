export interface Move {
  id: string;
  name: string;
  input: string;
  type: "normal" | "special" | "super";
}
