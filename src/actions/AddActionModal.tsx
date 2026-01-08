import { useState } from "react";

export function AddActionModal() {
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState("");

  return (
    <div>
      <button onClick={() => setOpen(true)}>+ Add Action</button>

      {open && (
        <div>
          <input
            placeholder="Action description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button disabled={!desc}>Save</button>
          <button onClick={() => setOpen(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}