import NavBar from "../components/NavBar";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function NoticeWrite() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [files, setFiles] = useState([]);
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
  const onClick = () => {
    axios
      .post("http://localhost:8080/api/board/insert", {
        title: { title },
        content: { contents },
        //file: {files},
      })
      .then(history.push("/notice"))
      .catch((error) => {
        console.log(error);
        history.push("/notice");
      });
  };
  return (
    <>
      <NavBar />
      <div className="container mt-5 card shadow-sm p-4">
        <div className="mb-5">
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
            {contents}
          </textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary" onClick={onClick}>
            저장
          </button>
        </div>
      </div>
    </>
  );
}

export default NoticeWrite;
