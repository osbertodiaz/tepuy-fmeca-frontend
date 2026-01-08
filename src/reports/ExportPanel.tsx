import { ExportChecklist } from "./ExportChecklist";
import { ExportButton } from "./ExportButton";

export function ExportPanel() {
  return (
    <div>
      <ExportChecklist />
      <ExportButton format="PDF" />
      <ExportButton format="EXCEL" />
    </div>
  );
}