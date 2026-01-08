// src/hierarchy/AddElementModal.tsx
import { useState } from "react";

interface Props {
  parentType: "SYSTEM" | "SUBSYSTEM" | "COMPONENT";
}

export function AddElementModal({ parentType }: Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  function allowedTypes() {
    if (parentType === "SYSTEM") return ["SUBSYSTEM"];
    if (parentType === "SUBSYSTEM") return ["COMPONENT"];
    return [];
  }

  function handleAdd() {
    alert("Element creation requested. Backend will validate.");
    setOpen(false);
  }

  return (
    <div style={{ marginTop: "16px" }}>
      {allowedTypes().length > 0 && (
        <button onClick={() => setOpen(true)}>+ Add Child Element</button>
      )}

      {open && (
        <div style={{ border: "1px solid #000", padding: "16px" }}>
          <h3>Add Element</h3>

          <div>
            <label>Name</label>
            <br />
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div style={{ marginTop: "12px" }}>
            <label>Type</label>
            <br />
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">-- Select --</option>
              {allowedTypes().map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginTop: "16px" }}>
            <button disabled={!name || !type} onClick={handleAdd}>
              Add
            </button>
            <button onClick={() => setOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
