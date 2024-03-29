import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";
import { useState } from "react";

function Profile() {
  const userImage =
    "https://cdn.pixabay.com/photo/2015/11/06/11/43/businessman-1026415__340.jpg";

  const [userImg, setUserImg] = useState(userImage);
  const onChange = function (event) {
    setUserImg(event.target.value);
  };
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-4">
            <span className="fs-4 me-3">Account Information</span>
          </div>
          <div className="col-sm-8">
            <form>
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="row row-cols-2">
                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="nickName" className="form-label">
                          닉네임
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="nickName"
                          placeholder="닉네임을 입력해주세요."
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="userName" className="form-label">
                          이름
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="userName"
                          placeholder="이름을 입력해주세요."
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="studentNum" className="form-label">
                          학번
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="studentNum"
                          placeholder="학번을 입력해주세요."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-primary">Save</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-5 mb-4">
          <hr />
        </div>
        <div className="row">
          <div className="col-sm-4">
            <span className="fs-4 me-3">Profile</span>
          </div>
          <div className="col-sm-8">
            <div className="card shadow-sm">
              <div className="card-body pt-4 ps-4">
                <h5 className="card-title">프로필 사진 변경</h5>
                <div className="container mt-4 d-flex ps-5">
                  <img
                    src={userImg}
                    alt="user"
                    style={{
                      width: "5%",
                      height: "5%",
                      "borderRadius": "50%",
                    }}
                  ></img>
                  <div className="mb-3 ms-3">
                    <input
                      className="form-control"
                      type="file"
                      id="imgFile"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-4">
          <hr />
        </div>
        <div className="row mb-5">
          <div className="col-sm-4">
            <span className="fs-4 me-3">Delete Account</span>
          </div>
          <div className="col-sm-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link to="#" className="btn btn-danger">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
