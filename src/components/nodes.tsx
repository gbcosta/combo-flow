import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Target, HelpCircle, Sword } from "lucide-react";
import { memo } from "react";

export type NodeData = {
  label: string;
  input?: string;
};

export const SituationNode = memo(
  ({ data, selected }: NodeProps<Node<NodeData>>) => {
    return (
      <div
        className={`outline-2 ${selected ? "outline-pink-400" : "outline-emerald-400"} py-2
                px-4 rounded-md bg-zinc-900 min-w-37.5 flex flex-col`}
      >
        <span
          className="text-[10px] text-emerald-400 font-bold uppercase flex gap-2 
                tracking-wider"
        >
          <Target size={14} className="text-emerald-400" />
          situation
        </span>
        <div className="h-px bg-emerald-400/40 mt-1" />
        <span className="text-zinc-200 font-medium text-sm text-left ">
          {data.label}
        </span>
        <Handle
          type="source"
          position={Position.Bottom}
          style={{
            width: "12px",
            height: "12px",
            border: "2px #000",
          }}
        />
      </div>
    );
  },
);

export const CondiditionNode = memo(
  ({ data, selected }: NodeProps<Node<NodeData>>) => {
    return (
      <div
        className={`outline-2 ${selected ? "outline-pink-400" : "outline-amber-400"} py-3 px-4
                rounded-full bg-zinc-900 min-w-30 flex flex-col aspect-square justify-center items-center gap-1`}
      >
        <HelpCircle size={14} className="text-amber-400" />
        <span className="text-zinc-200 font-semibold text-xs text-left">
          {data.label}
        </span>
        <Handle
          type="target"
          position={Position.Top}
          style={{
            width: "12px",
            height: "12px",
            border: "2px #000",
          }}
        />
        <Handle
          type="source"
          position={Position.Left}
          id={"yes"}
          style={{
            width: "12px",
            height: "12px",
            border: "2px #000",
          }}
          className="flex justify-center items-center"
        >
          <div
            className="text-emerald-400 uppercase font-bold tracking-tight text-xs absolute
                    right-4"
          >
            yes
          </div>
        </Handle>
        <Handle
          type="source"
          id={"no"}
          position={Position.Right}
          style={{
            width: "12px",
            height: "12px",
            border: "2px #000",
          }}
          className="flex justify-center items-center"
        >
          <div
            className="text-red-400 uppercase font-bold tracking-tight text-xs absolute
                    left-4"
          >
            NO
          </div>
        </Handle>
      </div>
    );
  },
);

export const MoveNode = memo(
  ({ data, selected }: NodeProps<Node<NodeData>>) => {
    return (
      <div
        className={`outline-2 ${selected ? "outline-pink-400" : "outline-violet-500"} py-2 px-4 rounded-md bg-zinc-900 min-w-37.5
            flex flex-col`}
      >
        <span
          className="text-[10px] text-violet-400 font-bold uppercase flex gap-2 
                tracking-wider"
        >
          <Sword size={14} className="text-violet-400" />
          Action
        </span>
        <div className="h-px bg-violet-400/40 mt-1" />
        <span className="text-zinc-200 font-medium text-sm text-left ">
          {data.label}
        </span>
        <span className="text-zinc-600 font-medium text-xs text-left ">
          {data.input}
        </span>
        <Handle
          type="target"
          position={Position.Top}
          style={{
            width: "12px",
            height: "12px",
            border: "2px #000",
          }}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          style={{
            width: "12px",
            height: "12px",
            border: "2px #000",
          }}
        />
      </div>
    );
  },
);
