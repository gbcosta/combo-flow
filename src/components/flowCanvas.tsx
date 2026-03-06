import {
  ReactFlow,
  Background,
  Controls,
  Panel,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
  reconnectEdge,
  type Edge,
  type Node,
  type Connection,
} from "@xyflow/react";
import { useCallback, useRef, useState, type DragEvent } from "react";
import { CondiditionNode, SituationNode, MoveNode } from "./nodes";
import { Trash2 } from "lucide-react";
import "@xyflow/react/dist/style.css";

const nodeTypes = {
  situation: SituationNode,
  condition: CondiditionNode,
  move: MoveNode,
};

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

const FlowCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

  const edgeReconnectSuccessful = useRef(true);

  const onDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    if (!e.dataTransfer) return;
    e.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      const data = e.dataTransfer.getData("application/reactflow");
      if (!data) return;

      const { nodeType, label, input } = JSON.parse(data);
      if (!nodeTypes) return;

      const position = reactFlowInstance.screenToFlowPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const newNode = {
        id: `node_${Math.random().toString(36).substring(2, 12)}`,
        type: nodeType,
        data: { label, input },
        position,
      };
      setNodes((nodes) => nodes.concat(newNode));
    },
    [reactFlowInstance],
  );

  const onConnect = useCallback((params: Connection) => {
    if (params.source == params.target) return;
    const edge: Edge = {
      ...params,
      id: `e-${params.source}-${params.target}-${params.sourceHandle || ""}`,
    };
    setEdges((eds) => addEdge(edge, eds));
    console.log(edges);
  }, []);

  const clearCanvas = () => {
    setNodes([]);
    setEdges([]);
  };

  const onReconnectStart = useCallback(() => {
    edgeReconnectSuccessful.current = false;
  }, []);

  const onReconnect = useCallback(
    (oldEdge: Edge, newConnection: Connection) => {
      edgeReconnectSuccessful.current = true;
      oldEdge.id = `e-${newConnection.source}-${newConnection.target}-${newConnection.sourceHandle || ""}`;
      setEdges((els) => reconnectEdge(oldEdge, newConnection, els));
    },
    [],
  );

  const onReconnectEnd = useCallback((_: any, edge: Edge) => {
    if (!edgeReconnectSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }

    edgeReconnectSuccessful.current = true;
  }, []);

  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  return (
    <div className="h-screen grow" ref={reactFlowWrapper}>
      <ReactFlowProvider>
        <ReactFlow
          colorMode={"dark"}
          fitView
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          onDragOver={onDragOver}
          onDrop={onDrop}
          onInit={setReactFlowInstance}
          onConnect={onConnect}
          onReconnectStart={onReconnectStart}
          onReconnect={onReconnect}
          onReconnectEnd={onReconnectEnd}
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
      </ReactFlowProvider>
    </div>
  );
};

export default FlowCanvas;
