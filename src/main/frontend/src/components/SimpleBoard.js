import {useState, useEffect} from "react";
import axios from "axios";

function SimpleBoard( type ) {
  const [board, setBoard] = useState("");
  const [frontendUrl, setFrontendUrl] = useState("");
  let backendUrl = "";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (type.type === "notice") {
      setBoard("공지사항");
      setFrontendUrl("/notice");
      backendUrl = "http://localhost:8080/api/board";
    }else if(type.type === "freeboard") {
      setBoard("자유");
      setFrontendUrl("/board/1");
      backendUrl = "http://localhost:8080/api/freeboard";
    }else if(type.type === "information") {
      setBoard("정보");
      setFrontendUrl("/board/2");
      backendUrl = "http://localhost:8080/api/information";
    }else {
      setBoard("장터");
      setFrontendUrl("/board/3");
      backendUrl = "http://localhost:8080/api/market";
    }

    axios
    .get(backendUrl)
    .then((res) => {
      setPosts(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);
  return (
    <div className="card shadow-sm">
      <div className="card-header text-center">
        <a href={frontendUrl} className="text-decoration-none text-reset"><b>{board}</b></a>
      </div>
      <div className="card-body">
        <h5 className="card-title">{board}</h5>
        {
          posts.map(({ id, title, author, board_date, recommend }) => (
            <div
              key={id}
              className="row mb-2 card d-flex flex-row p-2"
              style={{
                "backgroundColor":"lightgray",
              }}>
              <div className="col-1 text-center" id="number">
                {id}
              </div>
              <div className="col-6 ">
                <a
                  className="text-decoration-none text-reset"
                  id="title"
                  href={`${frontendUrl}/detail/${id}`}
                >
                  {title}
                </a>
              </div>
              <div className="col-3 text-center" id="author">
                {author}
              </div>
              <div className="col-2 text-center" id="recommend">
                {recommend}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SimpleBoard;
