import { ScaleSelect } from "../risk/ScaleSelect";

interface Props {
  disabled: boolean;
  scaleOptions: {
    severity: { value: number; label: string }[];
    occurrence: { value: number; label: string }[];
    detection?: { value: number; label: string }[];
  };
  onChange: (values: {
    severity?: number;
    occurrence?: number;
    detection?: number;
  }) => void;
}

export function ResidualRiskRatingCell({
  disabled,
  scaleOptions,
  onChange,
}: Props) {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      <ScaleSelect
        options={scaleOptions.severity}
        disabled={disabled}
        onChange={(v) => onChange({ severity: v })}
      />
      <ScaleSelect
        options={scaleOptions.occurrence}
        disabled={disabled}
        onChange={(v) => onChange({ occurrence: v })}
      />
      {scaleOptions.detection && (
        <ScaleSelect
          options={scaleOptions.detection}
          disabled={disabled}
          onChange={(v) => onChange({ detection: v })}
        />
      )}
    </div>
  );
}