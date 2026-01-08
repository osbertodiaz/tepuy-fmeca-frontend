// src/hierarchy/ElementDetailsPanel.tsx
import { AddElementModal } from "./AddElementModal";

interface Props {
  projectId: string;
}

export function ElementDetailsPanel({ projectId }: Props) {
  // Placeholder — backend will provide selected element
  const selectedElement = {
    id: "cmp-1",
    name: "Bearing",
    type: "COMPONENT",
  };

  return (
    <div>
      <h2>Selected Element</h2>

      <p>
        <strong>Name:</strong> {selectedElement.name}
      </p>

      <p>
        <strong>Type:</strong> {selectedElement.type}
      </p>

      <p>
        <strong>Project:</strong> {projectId}
      </p>

      <AddElementModal parentType={selectedElement.type} />
    </div>
  );
}
