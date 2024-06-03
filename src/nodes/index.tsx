import type { Node, NodeTypes } from "reactflow";
import { PositionLoggerNode } from "./PositionLoggerNode";
import { ImageNode } from "./ImageNode";
import ResizableNodeSelected from "./ResizableNodeSelected";
import CustomNode from "./CustomNode";
import FunctionIcon from "./turbo/FunctionIcon";
import { FiFile } from "react-icons/fi";
import TurboNode from "./turbo/TurboNode";

export const initialNodes = [
  {
    id: "a",
    type: "ResizableNodeSelected",
    position: { x: 100, y: 300 },
    style: {
      background: "#fff",
      border: "1px solid black",
      borderRadius: 15,
      fontSize: 12,
    },
    data: { label: "wire" },
  },
  {
    id: "b",
    type: "position-logger",
    position: { x: -100, y: 100 },
    data: { label: "drag me!" },
  },
  {
    id: "c",
    type: "image",
    position: { x: 100, y: 100 },
    data: {
      image:
        "https://fastly.picsum.photos/id/838/200/300.jpg?hmac=yns6FqTn8FmJq3qluHDmnjn6X4x-rC4lGjZVUIMknuI",
    },
  },
  {
    id: "d",
    type: "output",
    position: { x: 0, y: 200 },
    data: { label: "with React Flow" },
  },
  {
    id: "1",
    type: "custom",
    data: { name: "Jane Doe", job: "CEO", emoji: "😎" },
    position: { x: 0, y: 50 },
  },
  {
    id: "2",
    type: "custom",
    data: { name: "Tyler Weary", job: "Designer", emoji: "🤓" },

    position: { x: -200, y: 200 },
  },
  {
    id: "3",
    type: "custom",
    data: { name: "Kristi Price", job: "Developer", emoji: "🤩" },
    position: { x: 200, y: 200 },
  },
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { icon: <FunctionIcon />, title: "readFile", subline: "api.ts" },
    type: "turbo",
  },
  {
    id: "2",
    position: { x: 250, y: 0 },
    data: { icon: <FunctionIcon />, title: "bundle", subline: "apiContents" },
    type: "turbo",
  },
  {
    id: "3",
    position: { x: 0, y: 250 },
    data: { icon: <FunctionIcon />, title: "readFile", subline: "sdk.ts" },
    type: "turbo",
  },
  {
    id: "4",
    position: { x: 250, y: 250 },
    data: { icon: <FunctionIcon />, title: "bundle", subline: "sdkContents" },
    type: "turbo",
  },
  {
    id: "5",
    position: { x: 500, y: 125 },
    data: { icon: <FunctionIcon />, title: "concat", subline: "api, sdk" },
    type: "turbo",
  },
  {
    id: "6",
    position: { x: 750, y: 125 },
    data: { icon: <FiFile />, title: "fullBundle" },
    type: "turbo",
  },
] as Node[];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  image: ImageNode,
  ResizableNodeSelected: ResizableNodeSelected,
  custom: CustomNode,
  turbo: TurboNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
