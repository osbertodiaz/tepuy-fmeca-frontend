import { ScaleSelect } from "./ScaleSelect";

interface ScaleOption {
  value: number;
  label: string;
}

interface Props {
  severity?: number;
  occurrence?: number;
  detection?: number;
  severityOptions: ScaleOption[];
  occurrenceOptions: ScaleOption[];
  detectionOptions?: ScaleOption[];
  disabled?: boolean;
  onChange: (values: {
    severity?: number;
    occurrence?: number;
    detection?: number;
  }) => void;
}

export function RiskRatingCell({
  severity,
  occurrence,
  detection,
  severityOptions,
  occurrenceOptions,
  detectionOptions,
  disabled,
  onChange,
}: Props) {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      <ScaleSelect
        value={severity}
        options={severityOptions}
        disabled={disabled}
        onChange={(v) => onChange({ severity: v })}
      />
      <ScaleSelect
        value={occurrence}
        options={occurrenceOptions}
        disabled={disabled || !severity}
        onChange={(v) => onChange({ occurrence: v })}
      />
      {detectionOptions && (
        <ScaleSelect
          value={detection}
          options={detectionOptions}
          disabled={disabled || !occurrence}
          onChange={(v) => onChange({ detection: v })}
        />
      )}
    </div>
  );
}