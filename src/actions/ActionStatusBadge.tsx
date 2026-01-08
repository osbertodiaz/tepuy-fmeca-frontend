interface Props {
  status: "OPEN" | "COMPLETED";
}

export function ActionStatusBadge({ status }: Props) {
  return (
    <span style={{ fontWeight: "bold" }}>
      {status}
    </span>
  );
}