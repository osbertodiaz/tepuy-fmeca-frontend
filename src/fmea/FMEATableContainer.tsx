// src/fmea/FMEATableContainer.tsx
import { useState } from "react";
import { FMEATableHeader } from "./FMEATableHeader";
import { FMEATableEmptyState } from "./FMEATableEmptyState";
import { FMEATableRow } from "./FMEATableRow";

interface Props {
  projectId: string;
}

export function FMEATableContainer({ projectId }: Props) {
  const components = [
    { id: "cmp-1", name: "Bearing" },
    { id: "cmp-2", name: "Seal" },
  ];

  const [componentId, setComponentId] = useState("");
  const [rows, setRows] = useState<any[]>([]);

  function addRow() {
    setRows([...rows, {}]);
  }

  return (
    <div>
      <label>
        <strong>Component</strong>
      </label>
      <br />
      <select value={componentId} onChange={(e) => setComponentId(e.target.value)}>
        <option value="">-- Select component --</option>
        {components.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>

      {!componentId ? (
        <FMEATableEmptyState />
      ) : (
        <>
          <table style={{ width: "100%", marginTop: "16px" }}>
            <FMEATableHeader />
            <tbody>
              {rows.map((row, i) => (
                <FMEATableRow key={i} value={row} />
              ))}
            </tbody>
          </table>

          <button onClick={addRow} style={{ marginTop: "12px" }}>
            + Add Failure Mode
          </button>
        </>
      )}
    </div>
  );
}
