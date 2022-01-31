import './Nav.css'
import { Link, NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
      <NavLink className="navlinks" to="/add-location">Add Location </NavLink>
      <NavLink className="navlinks" to="/add-attraction">Add Attraction </NavLink>
      <NavLink className="navlinks" to="/logout">Log Out</NavLink>
  </>
)
const unauthenticatedOptions = (
  <>
      {/* <NavLink className="navlinks" to="/signup">Sign Up/Log In</NavLink> */}
      <NavLink className="navlinks" to="/login">Log In</NavLink>
  </>
)
const alwaysOptions = (
  <>
      <NavLink className="navlinks" to="/locations">Locations </NavLink>
      <NavLink className="navlinks" to="/attractions">Attractions </NavLink>
  </>
)

function Nav({user}) {
  return (
    <div className='nav-main'>
      <Link to="/" className="nav-name">SITUATER</Link>
      <div className="nav-links">
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </div>
  );
}

export default Nav;
