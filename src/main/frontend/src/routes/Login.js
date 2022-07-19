import { Link } from "react-router-dom";

function Login() {
  return (
    <form>
      <div className="d-flex justify-content-center align-items-center mt-5 vstack">
        <h3 className="container text-center">Log in to Community</h3>
        <div className="card w-25 shadow-sm mt-3">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="nickName" className="form-label">
                    닉네임
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nickName"
                    placeholder="닉네임을 입력해주세요."
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">
                    이름
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    placeholder="이름을 입력해주세요."
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="studentNum" className="form-label">
                    학번
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="studentNum"
                    placeholder="학번을 입력해주세요."
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="major" className="form-label">
                  전공
                </label>
                <select
                  className="form-select mb-3"
                  aria-label=".form-select example"
                  id="major"
                  style={{ color: "gray" }}
                >
                  <option selected>전공을 선택해주세요</option>
                  <optgroup label="소프트웨어학부">
                    <option value="bigdata">빅데이터전공</option>
                    <option value="smartiot">스마트IoT전공</option>
                    <option value="contentsit">콘텐츠IT전공</option>
                  </optgroup>
                  <optgroup label="인공지능융합학부">
                    <option value="aimedical">AI의료융합전공</option>
                    <option value="airobot">AI로봇융합전공</option>
                    <option value="aitech">AI기술경영융합전공</option>
                  </optgroup>
                  <optgroup label="데이터사이언스학부">
                    <option value="datatech">데이터테크</option>
                    <option value="medicalstatistic">임상의학통계</option>
                    <option value="digitalfinance">디지털금융정보</option>
                  </optgroup>
                </select>
              </div>
            </div>
            <div class="d-grid gap-2 mx-auto mt-2">
              <button class="btn btn-success" type="button">
                Log in
              </button>
            </div>
          </div>
        </div>
        <div className="card w-25 shadow-sm p-3 mt-3 text-center">
          <span>
            New to Community?{" "}
            <Link style={{ "text-decoration": "none" }}>Create an account</Link>
          </span>
        </div>
      </div>
    </form>
  );
}

export default Login;
