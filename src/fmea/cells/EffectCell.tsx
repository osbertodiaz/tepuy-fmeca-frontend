// src/fmea/cells/EffectCell.tsx

interface Props {
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
}

export function EffectCell({ value, disabled, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Define effect (what happens if it fails?)"
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
