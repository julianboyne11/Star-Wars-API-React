import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="App-header">
      <Link to="/starship-list">Startship List</Link>
    </header>
  );
}

export default NavBar;