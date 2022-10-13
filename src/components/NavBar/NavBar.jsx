import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <header className="App-header">
      <Link id="link" to="/starship-list"> Start Wars Startships</Link>
    </header>
  );
}

export default NavBar;