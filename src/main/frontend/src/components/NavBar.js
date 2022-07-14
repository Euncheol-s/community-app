import { Link } from "react-router-dom";
import College from "./College";

function NavBar() {
  return (
    <nav className="navbar bg-light fixed-top shadow-sm p-3 rounded">
      <div className="container-fluid">
        <Link className="navbar-brand" to="Home">
          Hallym Community App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-top h-75"
          tabIndex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title fs-1"
              id="offcanvasWithBothOptionsLabel"
            >
              Contents
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link
                  className="nav-link fs-3"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="introduction"
                  to="#introduction"
                >
                  Majors
                </Link>
                <div className="collapse" id="introduction">
                  <College />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
