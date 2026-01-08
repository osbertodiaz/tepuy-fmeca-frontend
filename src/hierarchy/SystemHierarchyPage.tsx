// src/hierarchy/SystemHierarchyPage.tsx
import { useParams } from "react-router-dom";
import { HierarchyTree } from "./HierarchyTree";
import { ElementDetailsPanel } from "./ElementDetailsPanel";

export function SystemHierarchyPage() {
  const { projectId } = useParams();

  return (
    <div style={{ display: "flex", padding: "24px", height: "100%" }}>
      <div style={{ width: "40%", borderRight: "1px solid #ccc" }}>
        <h2>System Hierarchy</h2>
        <HierarchyTree projectId={projectId!} />
      </div>

      <div style={{ flex: 1, paddingLeft: "24px" }}>
        <ElementDetailsPanel projectId={projectId!} />
      </div>
    </div>
  );
}
