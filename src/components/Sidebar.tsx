import { Target, Sword, HelpCircle, Info } from "lucide-react";
import { THIRD_STRIKE_SITUATIONS } from "../data/situations";
import { THIRD_STRIKE_CONDITIONS } from "../data/conditions";
import { THIRD_STRIKE_MOVES } from "../data/moves/thirdstrike";
import type { DragEvent, ReactNode } from "react";
import type { Move } from "../data/moves/types";

const onDragStart = (
  event: DragEvent,
  nodeType: string,
  label: string,
  input?: string,
) => {
  event.dataTransfer.setData(
    "application/reactflow",
    JSON.stringify({ nodeType, label, input }),
  );
  event.dataTransfer.effectAllowed = "move";
};

const Category = ({
  name,
  icon,
  items,
  hoverBorderColor,
  nodeType,
}: {
  name: string;
  icon: ReactNode;
  items: string[];
  hoverBorderColor: string;
  nodeType: string;
}) => {
  return (
    <>
      <h2 className="font-bold  tracking-[0.2em] text-zinc-500 flex items-center gap-1 uppercase">
        {icon}
        {name}
      </h2>
      <div className="flex flex-col gap-2">
        {items.map((item) => {
          return (
            <div
              key={item}
              draggable
              className={`bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm py-2 px-3 rounded-sm
                                ${hoverBorderColor} transition-colors cursor-grab`}
              onDragStart={(e) => onDragStart(e, nodeType, item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
};

const CategoryMoves = ({ name, icon }: { name: string; icon: ReactNode }) => {
  return (
    <>
      <h2 className="font-bold  tracking-[0.2em] text-zinc-500 flex items-center gap-1 uppercase">
        {icon}
        {name}
      </h2>
      <div className="flex flex-col gap-2">
        {THIRD_STRIKE_MOVES.ryu.map((e: Move) => {
          return (
            <div
              key={e.name}
              draggable
              className="bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm py-2 px-3 rounded-sm
                                hover:border-violet-500/50 transition-colors cursor-grab flex flex-col"
              onDrag={(e: DragEvent<HTMLDivElement>) => {
                e.preventDefault();
              }}
            >
              <span>{e.name}</span>
              <span className="text-sm text-zinc-500 font-mono">{e.input}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

const Sidebar = () => {
  return (
    <aside
      className="max-w-96 w-72 bg-zinc-950 h-screen flex flex-col p-4 font-inter overflow-auto
            border-r border-zinc-800"
    >
      <div className="flex flex-col text-xs gap-2">
        <Category
          name="situations"
          icon={<Target size={14} />}
          items={THIRD_STRIKE_SITUATIONS}
          hoverBorderColor="hover:border-emerald-500/50"
          nodeType="situation"
        />
        <CategoryMoves name="Moves" icon={<Sword size={14} />} />
        <Category
          name="conditions"
          icon={<HelpCircle size={14} />}
          items={THIRD_STRIKE_CONDITIONS}
          hoverBorderColor="hover:border-amber-500/50"
          nodeType="condition"
        />
      </div>
      <div className="text-xs flex flex-col p-2 border border-zinc-800 bg-zinc-900/50 rounded-sm mt-6 gap-2">
        <div className="uppercase text-zinc-500 flex items-center gap-1 text-xs font-bold tracking-wide">
          <Info size={14} />
          <span>how to use</span>
        </div>
        <p className="text-zinc-400 leading-relaxed">
          Drag blocks onto the canvas to build your flowchart. Connect nodes to
          create logic. Use the Export button to save as image.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
