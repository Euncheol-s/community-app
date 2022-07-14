import { Link } from "react-router-dom";
import Majors from "./Majors";

function College() {
  const college = [
    ["소프트웨어학부", "빅데이터전공 스마트IoT전공 컨텐츠IT전공"],
    ["인공지능융합학부", "AI의료융합전공 AI로봇융합전공 AI기술경영융합전공"],
    ["데이터사이언스학부", "데이터테크 임상의학통계 디지털금융정보"],
  ];
  return (
    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
      {college.map((c) => (
        <li key={c[0]} className="nav-item mb-1 ps-4">
          <Link
            className="nav-link anchor"
            data-bs-toggle="collapse"
            aria-expanded="false"
            role="button"
            aria-controls={"#" + c[0]}
            to={"#" + c[0]}
          >
            {c[0]}
          </Link>
          <div className="collapse" id={c[0]}>
            <Majors college={c[1]} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default College;
