import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

function BoardWrite() {
  const type = useParams();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [files, setFiles] = useState([]);
  const [board, setBoard] = useState("");
  const history = useHistory();

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  const onChangeFiles = (event) => {
    setFiles(event.target.value);
  };
  useEffect(() => {
    type.id === "1"
      ? setBoard("freeboard")
      : type.id === "2"
      ? setBoard("information")
      : setBoard("market");
  }, []);

  const onClick = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", contents);
    axios
      .post(`http://localhost:8080/api/${board}/insert`, formData)
      .then(history.push("/board/" + type.id),
            window.location.reload())
      .catch((error) => {
        console.log(error);
        history.push("/board/" + type.id);
      });
  };

  return (
    <>
      <NavBar />
      <div className="container mt-5 card shadow-sm">
        <div className="mb-5 mt-4">
          <label htmlFor="title" className="form-label">
            <h4>제목</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="제목"
            onChange={onChangeTitle}
            value={title}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="formFileMultiple" className="form-label">
            <h4>파일</h4>
          </label>
          <input
            className="form-control"
            type="file"
            id="formFileMultiple"
            multiple
            onChange={onChangeFiles}
            value={files}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="contents" className="form-label">
            <h4>내용</h4>
          </label>
          <textarea
            className="form-control"
            id="contents"
            name="content"
            rows="3"
            onChange={onChangeContents}
            value={contents}
          >
          </textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-primary" onClick={onClick}>
            저장
          </button>
        </div>
      </div>
    </>
  );
}

export default BoardWrite;
