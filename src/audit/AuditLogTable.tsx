import { AuditLogRow } from "./AuditLogRow";

export function AuditLogTable() {
  const events = [
    {
      id: "e1",
      timestamp: "2026-01-10 10:00",
      user: "engineer1",
      action: "RISK_SUBMITTED",
      details: "Initial risk locked",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>User</th>
          <th>Action</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {events.map((e) => (
          <AuditLogRow key={e.id} event={e} />
        ))}
      </tbody>
    </table>
  );
}