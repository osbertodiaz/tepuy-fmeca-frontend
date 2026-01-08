interface ScaleOption {
  value: number;
  label: string;
}

interface Props {
  value?: number;
  options: ScaleOption[];
  disabled?: boolean;
  onChange: (value: number) => void;
}

export function ScaleSelect({ value, options, disabled, onChange }: Props) {
  return (
    <select
      value={value ?? ""}
      disabled={disabled}
      onChange={(e) => onChange(Number(e.target.value))}
    >
      <option value="">--</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.value} – {opt.label}
        </option>
      ))}
    </select>
  );
}