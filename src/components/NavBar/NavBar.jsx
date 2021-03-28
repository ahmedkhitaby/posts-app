import { Link } from "react-router-dom";
import "./NavBar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </nav>
  );
};
export default Navbar;
