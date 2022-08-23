import { Link } from "react-router-dom";
import "MainNavigation.module.css";
function MainNavigation() {
  return (
    <div className={header}>
      <div className={logo}>Tech Slinger</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gaming">Gaming</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavigation;
