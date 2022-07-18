import { Link } from "react-router-dom";

function Notices() {
  const college = ["소프트웨어학부", "인공지능융합학부", "데이터사이언스학부"];
  return (
    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
      {college.map((c) => (
        <li key={c} className="nav-item mb-1 ps-4">
          <Link className="nav-link anchor fs-5" to={c}>
            {c}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Notices;
