interface Props {
  action: string;
}

export function AuditEventBadge({ action }: Props) {
  return (
    <span style={{ fontWeight: "bold" }}>
      {action}
    </span>
  );
}