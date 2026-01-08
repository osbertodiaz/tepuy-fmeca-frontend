// src/fmea/cells/FunctionCell.tsx

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function FunctionCell({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Define function (what should the component do?)"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
