import type { Edge, EdgeTypes } from "reactflow";
import CustomEdge from "../nodes/turbo/TurboEdge";

export const initialEdges = [
  { id: "a->c", source: "a", target: "c", animated: true },
  { id: "b->d", source: "b", target: "d" },
  { id: "c->d", source: "c", target: "d", animated: true },
  {
    id: "e11-2",
    source: "1",
    target: "2",
  },
  {
    id: "e11-3",
    source: "1",
    target: "3",
  },
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
  },
  {
    id: "e2-5",
    source: "2",
    target: "5",
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
  },
] satisfies Edge[];

export const edgeTypes = {
  turbo: CustomEdge,
  // Add your custom edge types here!
} satisfies EdgeTypes;
