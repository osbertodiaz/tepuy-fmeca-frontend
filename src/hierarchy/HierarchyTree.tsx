// src/hierarchy/HierarchyTree.tsx
import { TreeNode } from "./TreeNode";

interface Props {
  projectId: string;
}

export function HierarchyTree({ projectId }: Props) {
  // Placeholder — backend will provide real structure
  const system = {
    id: "sys-1",
    name: "Pump System",
    type: "SYSTEM",
    children: [
      {
        id: "sub-1",
        name: "Drive Assembly",
        type: "SUBSYSTEM",
        children: [
          {
            id: "cmp-1",
            name: "Bearing",
            type: "COMPONENT",
            children: [],
          },
        ],
      },
    ],
  };

  return <TreeNode node={system} level={0} />;
}
