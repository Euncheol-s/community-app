import NavBar from "../components/NavBar";
import { useParams, useHistory } from "react-router-dom";

import Comment from "../components/Comment";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

function Detail() {
  const number = useParams();
  const history = useHistory();
  /*
     글 번호를 url로 넘겨 받아 데이터베이스에서 해당 글 번호에 대한 디테일 페이지를 보여줌
     파일이 있는데 이미지 파일이면 이미지를 보여주고 이미지 파일이 아닌 그 외에 파일이면 다운로드로 나타냄
     로그인을 하지 않으면 글을 볼 수 없게 하고 본인이 작성한 글만 수정, 삭제할 수 있도록 함.
     예외적으로 관리자 등급을 갖고 있는 사용자는 삭제 가능하도록.
  */
  const [list, setList] = useState([]);
  const [isNotice, setIsNotice] = useState(false);
  const [boardType, setBoardType] = useState("");
  const [board, setBoard] = useState("");

  useEffect(() => {
    setIsNotice(window.location.pathname.split("/")[1] === "notice");
    setBoardType(window.location.pathname.split("/")[4]);
    setBoard(()=> {
       if(boardType === "1") {return "freeboard";}
       else if(boardType === "2") {return "information";}
       else {return "market";}
    });
    console.log(isNotice);
    if(isNotice) {
        axios
          .get(`http://localhost:8080/api/board/${number.id}`)
          .then((response) => {
            setList(response.data);
        });
    } else {
        axios
            .get(`http://localhost:8080/api/${board}/${number.id}`)
            .then((response) => {
                setList(response.data)
        });
    }
  }, [boardType]);
  const date = moment(list.board_date).format("YYYY.MM.DD HH:mm:ss");
  const userImage =
    "https://cdn.pixabay.com/photo/2015/11/06/11/43/businessman-1026415__340.jpg";

  const onEditing = (event) => {};
<<<<<<< HEAD
  const onDeleting = (event) => {
    if(isNotice) {
        axios.get(`/api/board/${number.id}/delete`)
        .then(history.push("/notice"))
        .catch((err) => {
            console.log(err);
            history.push("/notice")
        });
        }
    };
=======
  const onDeleting = () => {
    axios
      .get(`http://localhost:8080/api/board/${number.id}/delete`)
      .then((res) => {
        console.log(res);
        history.push("/notice");
      })
      .catch((error) => {
        console.log(error);
        history.push("/notice");
      });
  };
>>>>>>> f20d88759fa9f2d97f3f5d43a1ae0139d2540b56

  return (
    <>
      <NavBar />
      <div className="container overflow-auto mt-5 mb-5">
        <div className="card mx-5">
          <div className="card-body">
            <div className="container mt-3 mb-4">
              <h3>{list.title}</h3>
            </div>
            <div className="container d-flex justify-content-between mb-5">
              <div className="container d-flex flex-row">
                <img
                  src={userImage}
                  alt="user"
                  style={{
                    width: "50px",
                    height: "50px",
                    "borderRadius": "50%",
                  }}
                ></img>
                <div className="container d-flex flex-column">
                  <b>{list.author}</b>
                  <span>{date}</span>
                </div>
              </div>
              <div className="container d-flex justify-content-end">
                추천수: {list.recommend}
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
              <p className="card-text">{list.content}</p>
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
