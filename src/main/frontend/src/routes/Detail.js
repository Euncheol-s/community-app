import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Detail() {
  const number = useParams();
  /*
     글 번호를 url로 넘겨 받아 데이터베이스에서 해당 글 번호에 대한 디테일 페이지를 보여줌
     파일이 있는데 이미지 파일이면 이미지를 보여주고 이미지 파일이 아닌 그 외에 파일이면 다운로드로 나타냄
  */
  const title = "title";
  const author = "author";
  const date = "yyyy. mm. dd. AM hh:mm:ss";
  const contents = "contents";

  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div class="card">
          <div className="card-header d-flex justify-content-between">
            <h5>{title}</h5>
            <span>
              작성자: {author} 작성일: {date}
            </span>
          </div>
          <div class="card-body">
            <p class="card-text">{contents}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
