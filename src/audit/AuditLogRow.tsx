import { AuditEventBadge } from "./AuditEventBadge";

interface Props {
  event: {
    timestamp: string;
    user: string;
    action: string;
    details: string;
  };
}

export function AuditLogRow({ event }: Props) {
  return (
    <tr>
      <td>{event.timestamp}</td>
      <td>{event.user}</td>
      <td><AuditEventBadge action={event.action} /></td>
      <td>{event.details}</td>
    </tr>
  );
}