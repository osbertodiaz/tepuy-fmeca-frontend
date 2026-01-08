// src/fmea/FMEATableRow.tsx
import { FunctionCell } from "./cells/FunctionCell";
import { FailureModeCell } from "./cells/FailureModeCell";
import { EffectCell } from "./cells/EffectCell";
import { CauseCell } from "./cells/CauseCell";
import { RiskRatingCell } from "./risk/RiskRatingCell";
import { RiskResultCell } from "./risk/RiskResultCell";
import { ResidualRiskPanel } from "./residual/ResidualRiskPanel";

export function FMEATableRow({ value }: any) {
  return (
    <tr>
      <td><FunctionCell /></td>
      <td><FailureModeCell /></td>
      <td><EffectCell /></td>
      <td><CauseCell /></td>

      <td>
        <RiskRatingCell />
      </td>

      <td>
        <RiskResultCell riskLevel="NOT_EVALUATED" />
      </td>

      <td>
        <ResidualRiskPanel
          actionsCompleted={false}
          scaleOptions={{ severity: [], occurrence: [], detection: [] }}
          onChange={() => {}}
        />
      </td>

      <td>
        Actions pending
      </td>
    </tr>
  );
}
