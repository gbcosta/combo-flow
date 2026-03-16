import { useState } from "react";
import FlowCanvas from "./components/flowCanvas";
import Sidebar from "./components/Sidebar";
import type { Character } from "./data/moves/thirdstrike";

function App() {
  const [character, setCharacter] = useState<Character>("ken");
  return (
    <div className="h-screen w-full font-inter flex overflow-hidden">
      <Sidebar character={character} />
      <FlowCanvas setCharacter={setCharacter} character={character} />
    </div>
  );
}

export default App;
