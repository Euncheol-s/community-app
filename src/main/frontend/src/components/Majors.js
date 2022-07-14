import { Link } from "react-router-dom";

function Majors(college) {
  const majors = college.college.split(" ");

  return (
    <ul className="list-group list-group-horizontal">
      {majors.map((m) => (
        <li key={m} className="list-group-item border-0">
          {m.slice(m.length - 2, m.length) === "학부" ? (
            <Link className="text-decoration-none text-reset" to="/department">
              {m}
            </Link>
          ) : (
            <Link className="text-decoration-none text-reset" to="/major">
              {m}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Majors;
