import { Link } from "react-router-dom";

function NavLink() {
  return (
    <ul className="nav container-md px-4">
      <Link className="navbar-brand me-5" to="/">
        Big Data Community
      </Link>
      <li className="nav-item dropdown me-4">
        <Link
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          to="#"
          role="button"
          aria-expanded="false"
        >
          학생회 소개
        </Link>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="/council">
              학생회 소개
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/notice">
              공지사항
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown me-4">
        <Link
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          to="#"
          role="button"
          aria-expanded="false"
        >
          게시판
        </Link>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="/board/1">
              자유 게시판
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/board/2">
              정보 게시판
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/board/3">
              장터 게시판
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default NavLink;
