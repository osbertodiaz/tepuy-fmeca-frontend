import { Link } from "react-router-dom";

export function SideNavigation() {
  return (
    <nav style={{ width: "200px", borderRight: "1px solid #ccc", padding: "8px" }}>
      <ul>
        <li><Link to="/">Projects</Link></li>
        <li><Link to="/hierarchy">Hierarchy</Link></li>
        <li><Link to="/fmea">FMEA</Link></li>
        <li><Link to="/actions">Actions</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/audit">Audit</Link></li>
      </ul>
    </nav>
  );
}