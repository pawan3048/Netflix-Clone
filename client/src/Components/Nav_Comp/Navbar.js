import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav style={{position:'static'}}>
        <img
          src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
          alt="Netflix-logo" className="logo"/>
        <input type="search" name="search" id="search" placeholder="Search..."/>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/service">Service</NavLink>
          <NavLink to="/section">Section</NavLink>
          <NavLink to="/signin">SignIn</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <span className="login">
            <NavLink to="/login">Login</NavLink>
          </span>
          <NavLink to="/signout">SignOut</NavLink>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
