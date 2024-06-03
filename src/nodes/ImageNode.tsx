import type { NodeProps } from "reactflow";
import { Handle, Position } from "reactflow";

export type ImageNodeData = {
  image?: string;
};

export function ImageNode({ data }: NodeProps<ImageNodeData>) {
  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className="react-flow__node-default">
      {/* <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"></iframe> */}
      {data.image && (
        <div>
          <img height={150} src={data.image} alt="Italian Trulli" />
        </div>
      )}
      {/* <ThreeDImage image={"https://skfb.ly/6zuWC"} /> */}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
