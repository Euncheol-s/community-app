import Navbar from "../components/NavBar";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="container-fluid overflow-auto">
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-4">
              <span className="fs-4 me-3">Account Information</span>
            </div>
            <div className="col-sm-8">
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
                    <div className="col">
                      <label htmlFor="major" className="form-label">
                        전공
                      </label>
                      <select
                        className="form-select form-select-lg mb-3"
                        aria-label=".form-select-lg example"
                        id="major"
                        style={{ color: "gray" }}
                      >
                        <option selected>전공을 선택해주세요</option>
                        <optgroup label="소프트웨어학부">
                          <option value="1">빅데이터전공</option>
                          <option value="2">스마트IoT전공</option>
                          <option value="3">콘텐츠IT전공</option>
                        </optgroup>
                        <optgroup label="인공지능융합학부">
                          <option value="1">AI의료융합전공</option>
                          <option value="2">AI로봇융합전공</option>
                          <option value="3">AI기술경영융합전공</option>
                        </optgroup>
                        <optgroup label="데이터사이언스학부">
                          <option value="1">데이터테크</option>
                          <option value="2">임상의학통계</option>
                          <option value="3">디지털금융정보</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                  <div
                    className="container h-50"
                    style={{ backgroundColor: "#faf9fb" }}
                  >
                    <button type="button" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </div>
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
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 mb-4">
            <hr />
          </div>
          <div className="row">
            <div className="col-sm-4">
              <span className="fs-4 me-3">Delete Account</span>
            </div>
            <div className="col-sm-8">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-danger">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
