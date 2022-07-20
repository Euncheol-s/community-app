import NavBar from "../components/NavBar";
import Notices from "../components/Notices";
import { Link, useParams } from "react-router-dom";

function NoticeBoard() {
  const id = useParams();
  return (
    <>
      <NavBar />
      <div className="container overflow-auto justify-content-center">
        <div className="container mt-5 text-center">
          <h2>
            {id.id === "1"
              ? "소프트웨어학부 "
              : id.id === "2"
              ? "인공지능융합학부 "
              : "데이터사이언스학부 "}
            공지사항
          </h2>
        </div>
        <div className="container mt-5">
          <div className="row justify-content-end">
            <div className="col-1">
              <select
                className="form-select form-select-md"
                aria-label=".form-select-sm example"
              >
                <option selected>선택</option>
                <option value="1">제목</option>
                <option value="2">작성자</option>
              </select>
            </div>
            <div className="col-3">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <table className="table container mt-3">
          <thead>
            <tr className="text-center table-active">
              <th scope="col" className="col-1">
                번호
              </th>
              <th scope="col" className="col-5 ">
                제목
              </th>
              <th scope="col" className="col-2 ">
                작성자
              </th>
              <th scope="col" className="col-2 ">
                작성일
              </th>
              <th scope="col" className="col-2">
                추천수
              </th>
            </tr>
          </thead>
          <tbody>
            <Notices />
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <div className="d-flex justify-content-center">
            <ul class="pagination">
              <li class="page-item">
                <Link class="page-link" to="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  1
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  2
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  3
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NoticeBoard;
