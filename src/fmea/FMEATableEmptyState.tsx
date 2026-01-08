import React from "react";

export const FMEATableEmptyState: React.FC = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center", color: "#666" }}>
      <h3>No failure modes defined</h3>
      <p>
        Add system elements and failure modes to start the FMEA / FMECA analysis.
      </p>
    </div>
  );
};
