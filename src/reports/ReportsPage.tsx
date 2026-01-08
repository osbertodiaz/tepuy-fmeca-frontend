import { ExportPanel } from "./ExportPanel";
import { ExportHistory } from "./ExportHistory";

export function ReportsPage() {
  return (
    <div>
      <h1>Reports & Export</h1>
      <ExportPanel />
      <ExportHistory />
    </div>
  );
}