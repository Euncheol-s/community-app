import NavLink from "./NavLink";
import NavOffCanvas from "./NavOffCanvas";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar bg-light p-3 shadow-sm fixed-top">
        <div className="container-fluid ">
          <NavLink />
          <Link className="text-decoration-none text-reset" to="/login">
            로그인
          </Link>
          <NavOffCanvas />
        </div>
      </nav>
      <div className="container" style={{ height: "100px" }}></div>
    </>
  );
}

export default NavBar;
