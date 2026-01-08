import { ResidualRiskRatingCell } from "./ResidualRiskRatingCell";

interface Props {
  actionsCompleted: boolean;
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

export function ResidualRiskPanel({
  actionsCompleted,
  scaleOptions,
  onChange,
}: Props) {
  return (
    <div>
      {!actionsCompleted && (
        <p style={{ color: "red" }}>
          Residual risk locked until all actions are completed.
        </p>
      )}

      <ResidualRiskRatingCell
        disabled={!actionsCompleted}
        scaleOptions={scaleOptions}
        onChange={onChange}
      />
    </div>
  );
}