// src/hierarchy/TreeNode.tsx
interface Node {
  id: string;
  name: string;
  type: "SYSTEM" | "SUBSYSTEM" | "COMPONENT";
  children: Node[];
}

interface Props {
  node: Node;
  level: number;
}

export function TreeNode({ node, level }: Props) {
  return (
    <div style={{ marginLeft: level * 16 }}>
      <div>
        <strong>{node.name}</strong> ({node.type})
      </div>

      {node.children.map((child) => (
        <TreeNode key={child.id} node={child} level={level + 1} />
      ))}
    </div>
  );
}
