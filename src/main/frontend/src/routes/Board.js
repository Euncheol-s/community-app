import NavBar from "../components/NavBar";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import axios from "axios";
import moment from "moment";

function Board() {
  const type = useParams();
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [board, setBoard] = useState("");
  const offset = (page - 1) * limit;

  useEffect(() => {
    type.id === "1"
      ? axios.get("http://localhost:8080/api/freeboard").then((response) => {
          setPosts(response.data);
        })
      : type.id === "2"
      ? axios.get("http://localhost:8080/api/information").then((response) => {
          setPosts(response.data);
        })
      : axios.get("http://localhost:8080/api/market").then((response) => {
          setPosts(response.data);
        });
  }, []);

  return (
    <>
      <NavBar />
      <div className="container overflow-auto">
        <div className="container mt-5 text-center">
          <h2>
            {type.id === "1" ? "자유 " : type.id === "2" ? "정보 " : "장터 "}
            게시판
          </h2>
        </div>
        <div className="container mt-5">
          <div className="row justify-content-end">
            <div className="col-2">
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
            {posts
              .slice(offset, offset + limit)
              .map(({ id, title, author, board_date, recommend }) => (
                <tr key={id}>
                  <td className="col-1 text-center" id="number">
                    {id}
                  </td>
                  <td className="col-5 ">
                    <a
                      className="text-decoration-none text-reset"
                      id="title"
                      href={`/board/${type.id}/detail/${id}`}
                    >
                      {title}
                    </a>
                  </td>
                  <td className="col-2 text-center" id="author">
                    {author}
                  </td>
                  <td className="col-2 text-center" id="board_date">
                    {moment(board_date).format("YYYY.MM.DD HH:mm:ss")}
                  </td>
                  <td className="col-2 text-center" id="recommend">
                    {recommend}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-end">
          <a href={`/board/${type.id}/write`} className="btn btn-primary">
            글 쓰기
          </a>
        </div>
        {
          <Pagination
            total={posts.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        }
      </div>
    </>
  );
}

export default Board;
