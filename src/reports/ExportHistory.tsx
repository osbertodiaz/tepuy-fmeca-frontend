export function ExportHistory() {
  const history = [
    { id: "x1", format: "PDF", user: "engineer1", date: "2026-01-10" }
  ];

  return (
    <div>
      <h3>Export History</h3>
      <ul>
        {history.map(h => (
          <li key={h.id}>
            {h.format} by {h.user} on {h.date}
          </li>
        ))}
      </ul>
    </div>
  );
}