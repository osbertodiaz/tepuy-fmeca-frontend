interface Props {
  value?: "C1" | "C2" | "C3";
}

export function CriticalityLabel({ value }: Props) {
  if (!value) {
    return <span style={{ color: "#999" }}>Not evaluated</span>;
  }

  return (
    <span style={{ fontWeight: "bold" }}>
      {value}
    </span>
  );
}