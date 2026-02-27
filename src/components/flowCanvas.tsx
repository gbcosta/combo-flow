import {
  ReactFlow,
  Background,
  Controls,
  Panel,
  type Edge,
  type Node,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Trash2 } from "lucide-react";
import { useRef } from "react";
import { CondiditionNode, SituationNode, MoveNode } from "./nodes";

const nodeTypes = {
  situation: SituationNode,
  condition: CondiditionNode,
  move: MoveNode,
};

const initialNodes: Node[] = [
  {
    id: "1",
    type: "condition",
    data: { label: "Opponent in Corner" },
    position: { x: 250, y: 50 },
  },
  {
    id: "2",
    type: "situation",
    data: { label: "Opponent in Corner" },
    position: { x: 500, y: 50 },
  },
  {
    id: "3",
    type: "move",
    data: { label: "Opponent in Corner", input: "↓↙← + K" },
    position: { x: 700, y: 50 },
  },
];

const initialEdges: Edge[] = [];
const FlowCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const clearCanvas = () => {
    setNodes([]);
    setEdges([]);
  };

  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  return (
    <div className="h-screen grow" ref={reactFlowWrapper}>
      <ReactFlow
        colorMode={"dark"}
        fitView
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls position="bottom-left" />
        <Panel
          position="top-left"
          className="backdrop-blur bg-zinc-900/80 flex flex-col border border-zinc-800 p-4
                    rounded-md uppercase font-black"
        >
          <h1 className="text-xl flex gap-2 items-center font-inter italic">
            <span className="text-emerald-500">combo</span>
            <span className="text-zinc-100">flow</span>
          </h1>
          <p className="font-inter text-zinc-500 text-xs font-black mt-1 tracking-widest">
            Fighting Game Strategy Builder
          </p>
        </Panel>
        <Panel position="top-right" className="flex gap-2">
          <button
            className="flex bg-emerald-600 text-zinc-100 py-2 px-4 gap-2 text-sm font-bold rounded-lg
                        items-center cursor-pointer hover:bg-emerald-500 transition-all"
          >
            <Trash2 size={16} />
            Export PNG
          </button>
          <button
            className="flex bg-zinc-800 text-zinc-100 py-2 px-4 gap-2 text-sm font-bold rounded-lg
                        items-center cursor-pointer hover:bg-rose-600 transition-all"
            onClick={clearCanvas}
          >
            <Trash2 size={16} />
            Clear
          </button>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default FlowCanvas;
