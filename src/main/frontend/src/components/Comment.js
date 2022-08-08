import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

function Comment() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/board").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const author = "author";
  const board_date = "yyyy. mm. dd. AM hh:mm:ss";
  const contents = "contents";
  const userImage =
    "https://cdn.pixabay.com/photo/2015/11/06/11/43/businessman-1026415__340.jpg";
  const history = useHistory();
  const onCreating = () => {
    axios
      .post("http://localhost:8080/api/comment/insert", {})
      .then(history.push(window.location.pathname));
  };
  const onDeleting = () => {};

  return (
    <>
      {/*작성된 댓글을 보여주는 부분*/}
      <div className="container">
        <h4>Comment</h4>
        {posts.map(({ author, contents, board_date }) => (
          <div>
            <div className="container d-flex mt-3">
              <img
                src={userImage}
                alt="user"
                style={{
                  width: "50px",
                  height: "50px",
                  "border-radius": "50%",
                }}
              />
              <div className="container d-flex flex-column">
                <b>{author}</b>
                <p>{contents}</p>
                <span>{moment(board_date).format("YYYY.MM.DD HH:mm:ss")}</span>
              </div>
            </div>
            <div className="container d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-danger"
                onClick={onDeleting}
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
        ></textarea>
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

export default Comment;
