import NavBar from "../components/NavBar";
import { useState } from "react";
import axios from "axios";

function BoardWrite() {
  const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [author, setAuthor] = useState("");
  const [files, setFiles] = useState([]);

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  const onChangeFiles = (event) => {
    setFiles(event.target.value);
  };
  return (
    <>
      <NavBar />
      <form method='post' action='http://localhost:8080/api/board/insert'>
        <div className="container mt-5 card shadow-sm">
          <div className="card-body">
            <div className="mb-5 mt-4">
              <label htmlFor="title" className="form-label">
                <h4>제목</h4>
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
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
                rows="3"
                onChange={onChangeContents}
              >
                {contents}
              </textarea>
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary">
                저장
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default BoardWrite;
