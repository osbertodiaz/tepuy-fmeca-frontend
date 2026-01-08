// src/fmea/cells/FailureModeCell.tsx

interface Props {
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
}

export function FailureModeCell({ value, disabled, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Define failure mode"
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
