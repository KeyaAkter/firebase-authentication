import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between container mx-auto items-center py-5 border-b">
      <Link to="/" className="font-medium text-orange-500">
        Firebase Killer
      </Link>
      <ul className="links">
        <li>
          <Link to="/" className="">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="">
            About
          </Link>
        </li>
        <li>
          <Link to="/profile" className="">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/login" className="">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
