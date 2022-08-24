import NavBar from "../components/NavBar";
import { useState,useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

function NoticeWrite() {
  const number = useParams();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [files, setFiles] = useState([]);
  const history = useHistory();


  useEffect(() => {
          axios.get(`http://localhost:8080/api/board/${number.id}`)
          .then((res) => {
            setTitle(res.data.title);
            setContents(res.data.content);
          })
          .catch((err) => {
            console.log(err);
          })
  }, [])
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
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", contents);

    axios
      .post(`http://localhost:8080/api/board/${number.id}/edit`, formData)
      .then((res) => {
        console.log(res);
        history.push("/notice");
      })
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

export default NoticeWrite;
