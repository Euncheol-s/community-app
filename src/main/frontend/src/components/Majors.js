import { Link } from "react-router-dom";

function Majors(college) {
  const majors = college.college.split(" ");

  return (
    <ul className="list-group list-group-horizontal">
      {majors.map((m) => (
        <li key={m} className="list-group-item border-0">
          <Link className="text-decoration-none text-reset" to={"/major" + m}>
            {m}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Majors;
