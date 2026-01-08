import { ActionStatusBadge } from "./ActionStatusBadge";

interface Props {
  action: {
    description: string;
    owner: string;
    dueDate: string;
    status: "OPEN" | "COMPLETED";
  };
}

export function ActionRow({ action }: Props) {
  return (
    <tr>
      <td>{action.description}</td>
      <td>{action.owner}</td>
      <td>{action.dueDate}</td>
      <td><ActionStatusBadge status={action.status} /></td>
    </tr>
  );
}