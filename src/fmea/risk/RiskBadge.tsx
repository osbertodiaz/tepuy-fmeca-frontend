interface Props {
  level: "LOW" | "MEDIUM" | "HIGH" | "NOT_EVALUATED";
}

export function RiskBadge({ level }: Props) {
  const colors: Record<string, string> = {
    LOW: "#2ecc71",
    MEDIUM: "#f39c12",
    HIGH: "#e74c3c",
    NOT_EVALUATED: "#bdc3c7",
  };

  return (
    <span style={{ backgroundColor: colors[level], color: "#fff", padding: "4px 6px" }}>
      {level.replace("_", " ")}
    </span>
  );
}