import { useConnection } from "@xyflow/react";

export default ({
  fromX,
  fromY,
  toX,
  toY,
}: {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
}) => {
  const { fromHandle } = useConnection();
  const id = fromHandle?.id ?? "";
  return (
    <g>
      <path
        fill="none"
        stroke={id}
        strokeWidth={1.5}
        className="bg-black border-black border-4 stroke-zinc-300 stroke-[3px]"
        d={`M${fromX},${fromY} C ${fromX} ${toY} ${fromX} ${toY} ${toX},${toY}`}
      />
    </g>
  );
};
