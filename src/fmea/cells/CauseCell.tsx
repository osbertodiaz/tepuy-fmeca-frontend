// src/fmea/cells/CauseCell.tsx

interface Props {
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
}

export function CauseCell({ value, disabled, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Define cause (why does it fail?)"
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
