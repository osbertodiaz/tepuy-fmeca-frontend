import { ActionRow } from "./ActionRow";
import { AddActionModal } from "./AddActionModal";

export function ActionList() {
  const actions = [
    {
      id: "a1",
      description: "Improve lubrication plan",
      owner: "Maintenance Lead",
      dueDate: "2026-03-01",
      status: "OPEN",
    },
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Owner</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {actions.map((a) => (
            <ActionRow key={a.id} action={a} />
          ))}
        </tbody>
      </table>

      <AddActionModal />
    </div>
  );
}