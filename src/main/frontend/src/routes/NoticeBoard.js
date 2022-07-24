import NavBar from "../components/NavBar";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function NoticeBoard() {
  const id = useParams();
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/board").then((response) => {
      setList(response.data);
    });
  }, []);
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
                <option value="title">제목</option>
                <option value="author">작성자</option>
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
            <tr>
              <td className="col-1 text-center" id="number">
                {list.id}
              </td>
              <td className="col-5 ">
                <Link
                  className="text-decoration-none text-reset"
                  id="title"
                  to={`/notice/detail/${id}`}
                >
                  {list.title}
                </Link>
              </td>
              <td className="col-2 text-center" id="author">
                {list.author}
              </td>
              <td className="col-2 text-center" id="board_date">
                {list.board_date}
              </td>
              <td className="col-2 text-center" id="recommend">
                {list.recommend}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex justify-content-end">
          <Link to={`/notice/write/${id.id}`} className="btn btn-primary">
            글 쓰기
          </Link>
        </div>
        <nav aria-label="Page navigation example">
          <div className="d-flex justify-content-center">
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link" to="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#" aria-label="Next">
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