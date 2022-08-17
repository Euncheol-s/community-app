import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

function BoardComment() {
  const number = useParams();
  const [list, setList] = useState([]);
  const boardType = window.location.pathname.split("/")[2];
  let board = "";

  if(boardType === "1") board = "freeboard";
  else if (boardType === "2") board = "information";
  else board = "market";

  useEffect(() => {
      axios
        .get(`http://localhost:8080/api/${board}/${number.id}/${board}comment`)
        .then((response) => {
          setList(response.data);
        });
  }, []);
  const [contents, setContents] = useState("");
  const userImage =
    "https://cdn.pixabay.com/photo/2015/11/06/11/43/businessman-1026415__340.jpg";
  const history = useHistory();

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  const onCreating = () => {
    const formData = new FormData();
    formData.append("com", contents);
    axios
      .post(`http://localhost:8080/api/${board}/${number.id}/${board}comment/insert`, formData)
      .then(history.push(window.location.reload()));
  };
  return (
    <>
      {/*작성된 댓글을 보여주는 부분*/}
      <div className="container">
        <h4>Comment</h4>
        {list.map(({ id, nickname, com, date }) => (
          <div key={id}>
            <div className="container d-flex mt-3">
              <img
                src={userImage}
                alt="user"
                style={{
                  width: "50px",
                  height: "50px",
                  "borderRadius": "50%",
                }}
              />
              <div className="container d-flex flex-column">
                <b>{nickname.nickname}</b>
                <p>{com}</p>
                <span>{moment(date).format("YYYY.MM.DD HH:mm:ss")}</span>
              </div>
            </div>
            <div className="container d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                    axios
                      .get(`http://localhost:8080/api/${board}/${board}comment/${id}/delete`)
                      .then((res) => {
                        console.log(res);
                        history.push(window.location.reload());
                      })
                      .catch((error) => {
                        console.log(error);
                        history.push(window.location.reload());
                      });
                }}
              >
                삭제
              </button>
            </div>
            <hr />
          </div>
        ))}
      </div>
      {/*댓글 작성하는 부분*/}
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: "100px" }}
          value={contents}
          onChange={onChangeContents}
        >
          {contents}
        </textarea>
        <label htmlFor="floatingTextarea2">Comments</label>
      </div>
      <div className="container d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={onCreating}
        >
          저장
        </button>
      </div>
    </>
  );
}

export default BoardComment;