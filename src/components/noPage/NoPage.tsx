import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <div className="lesson-container">
      <h4>No such page 404</h4>
      <Link to={'../'}>back to main page</Link>
    </div>
  );
}

