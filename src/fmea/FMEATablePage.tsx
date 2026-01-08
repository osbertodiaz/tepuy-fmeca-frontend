// src/fmea/FMEATablePage.tsx
import { useParams } from "react-router-dom";
import { FMEATableContainer } from "./FMEATableContainer";

export function FMEATablePage() {
  const { projectId } = useParams();

  return (
    <div style={{ padding: "24px" }}>
      <h1>FMEA / FMECA</h1>

      <p>
        <strong>Project:</strong> {projectId}
      </p>

      <FMEATableContainer projectId={projectId!} />
    </div>
  );
}
