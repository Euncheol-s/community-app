import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import { useState } from "react";

function Detail() {
  const number = useParams();
  /*
     글 번호를 url로 넘겨 받아 데이터베이스에서 해당 글 번호에 대한 디테일 페이지를 보여줌
     파일이 있는데 이미지 파일이면 이미지를 보여주고 이미지 파일이 아닌 그 외에 파일이면 다운로드로 나타냄
     로그인을 하지 않으면 글을 볼 수 없게 하고 본인이 작성한 글만 수정, 삭제할 수 있도록 함.
     예외적으로 관리자 등급을 갖고 있는 사용자는 삭제 가능하도록.
  */
  const title = "title";
  const author = "author";
  const date = "yyyy. mm. dd. AM hh:mm:ss";
  const contents = "contents";
  const recommend = 0;
  const userImage =
    "https://cdn.pixabay.com/photo/2015/11/06/11/43/businessman-1026415__340.jpg";

  const isNotice = window.location.pathname.split("/")[1] === "notice";
  const boardType = window.location.pathname.split("/")[3];
  const [board, setBoard] = useState("");

  const onEditing = (event) => {};
  const onDeleting = (event) => {};

  return (
    <>
      <NavBar />
      <div className="container overflow-auto mt-5 mb-5">
        <div className="card mx-5">
          <div className="card-body">
            <div className="container mt-3 mb-4">
              <h3>{title}</h3>
            </div>
            <div className="container d-flex justify-content-between mb-5">
              <div className="container d-flex flex-row">
                <img
                  src={userImage}
                  alt="user"
                  style={{
                    width: "50px",
                    height: "50px",
                    "border-radius": "50%",
                  }}
                ></img>
                <div className="container d-flex flex-column">
                  <b>{author}</b>
                  <span>{date}</span>
                </div>
              </div>
              <div className="container d-flex justify-content-end">
                추천수: {recommend}
              </div>
            </div>
            {/*본인이 작성한 글이면 보이는 div*/}
            <div className="container d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-primary me-2"
                onClick={onEditing}
              >
                수정
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={onDeleting}
              >
                삭제
              </button>
            </div>
            <hr />
            <div className="container">
              <p className="card-text">{contents}</p>
            </div>
            <hr />
            <Comment />
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
