import { RiskBadge } from "./RiskBadge";

interface Props {
  rpn?: number;
  riskLevel: "LOW" | "MEDIUM" | "HIGH" | "NOT_EVALUATED";
}

export function RiskResultCell({ rpn, riskLevel }: Props) {
  return (
    <div>
      <RiskBadge level={riskLevel} />
      <div>RPN: {rpn ?? "—"}</div>
    </div>
  );
}