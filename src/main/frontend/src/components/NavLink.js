import { Link } from "react-router-dom";

function NavLink() {
  return (
    <ul className="nav container-md px-4">
      <Link className="navbar-brand me-5" to="/">
        Hallym Community App
      </Link>
      <li className="nav-item dropdown me-4">
        <Link
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          to="#"
          role="button"
          aria-expanded="false"
        >
          전공 설명
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="/major/1">
              소프트웨어학부
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/major/2">
              인공지능 융합 학부
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/major/3">
              데이터 사이언스 학부
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Separated link
            </Link>
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
          공지사항
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="/notice/1">
              소프트웨어학부
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/notice/2">
              인공지능 융합 학부
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/notice/3">
              데이터 사이언스 학부
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Separated link
            </Link>
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
            <Link className="dropdown-item" to="/board/1">
              자유 게시판
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/board/2">
              정보 게시판
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/board/3">
              장터 게시판
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Separated link
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default NavLink;
