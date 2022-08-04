import NavBar from "../components/NavBar";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import axios from "axios";

function Board() {
  const type = useParams();
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [board, setBoard] = useState("");
  const offset = (page - 1) * limit;

  /*const obj = [
    {
      id: 1,
      title: "안녕하세요.",
      content: "반갑습니다.",
      author: "홍길동",
      board_date: "2022-07-20",
      recommend: 0,
    },
    {
      id: 2,
      title: "질문이 있습니다.",
      content: "안녕",
      author: "홍길동",
      board_date: "2022-07-20",
      recommend: 0,
    },
    {
      id: 3,
      title: "님들 그거 암?",
      content: "미안하다, 어그로 좀 끌어봤다.",
      author: "홍길동",
      board_date: "2022-07-20",
      recommend: 0,
    },
  ];*/
  useEffect(() => {
        type.id === "1"
          ? setBoard("freeboard")
          : type.id === "2"
          ? setBoard("information")
          : setBoard("market");
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8080/api/${board}").then((response) => {
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
            {/*obj
              .slice(offset, offset + limit)
              .map(({ id, title, author, board_date, recommend }) => (
                <tr key={id}>
                  <td className="col-1 text-center" id="number">
                    {id}
                  </td>
                  <td className="col-5 ">
                    <Link
                      className="text-decoration-none text-reset"
                      id="title"
                      to={`/board/${type.id}/detail/${id}`}
                    >
                      {title}
                    </Link>
                  </td>
                  <td className="col-2 text-center" id="author">
                    {author}
                  </td>
                  <td className="col-2 text-center" id="board_date">
                    {board_date}
                  </td>
                  <td className="col-2 text-center" id="recommend">
                    {recommend}
                  </td>
                </tr>
              ))*/}
            {posts
              .slice(offset, offset + limit)
              .map(({ id, title, author, board_date, recommend }) => (
                <tr key={id}>
                  <td className="col-1 text-center" id="number">
                    {id}
                  </td>
                  <td className="col-5 ">
                    <Link
                      className="text-decoration-none text-reset"
                      id="title"
                      to={`/board/${type.id}/detail/${id}`}
                    >
                      {title}
                    </Link>
                  </td>
                  <td className="col-2 text-center" id="author">
                    {author}
                  </td>
                  <td className="col-2 text-center" id="board_date">
                    {board_date}
                  </td>
                  <td className="col-2 text-center" id="recommend">
                    {recommend}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-end">
          <Link to={`/board/${type.id}/write`} className="btn btn-primary">
            글 쓰기
          </Link>
        </div>
        {/*<Pagination
          total={obj.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />*/}
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
