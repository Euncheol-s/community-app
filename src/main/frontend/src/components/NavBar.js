import NavLink from "./NavLink";
import NavOffCanvas from "./NavOffCanvas";

function NavBar() {
  return (
    <>
      <nav className="navbar bg-light p-3 shadow-sm">
        <div className="container-fluid ">
          <NavLink />
          <NavOffCanvas />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
