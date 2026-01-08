// src/projects/NewProjectModal.tsx
import { useState } from "react";

export function NewProjectModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [standard, setStandard] = useState("");

  function handleCreate() {
    // Placeholder — backend validation & creation
    alert("Project creation requested. Backend will validate and create.");
    setOpen(false);
  }

  return (
    <div>
      <button onClick={() => setOpen(true)}>+ New Project</button>

      {open && (
        <div style={{ border: "1px solid #000", padding: "16px", marginTop: "16px" }}>
          <h2>Create New Project</h2>

          <div>
            <label>Project name</label>
            <br />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div style={{ marginTop: "12px" }}>
            <label>FMEA Standard</label>
            <br />
            <select
              value={standard}
              onChange={(e) => setStandard(e.target.value)}
            >
              <option value="">-- Select standard --</option>
              <option value="IEC_60812">IEC 60812</option>
              <option value="AIAG_VDA">AIAG-VDA</option>
              <option value="MIL_STD_1629A">MIL-STD-1629A</option>
            </select>
          </div>

          <div style={{ marginTop: "16px" }}>
            <button
              disabled={!name || !standard}
              onClick={handleCreate}
            >
              Create
            </button>
            <button onClick={() => setOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
