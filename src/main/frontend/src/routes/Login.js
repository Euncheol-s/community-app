import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Login() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  const onChangeId = (event) => {
    setId(event.target.value);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeNickName = (event) => {
    setNickName(event.target.value);
  };

  return (
    <form>
      <div className="d-flex justify-content-center align-items-center mt-5 vstack">
        <h3 className="container text-center">Log in to Community</h3>
        <div className="card card-md w-25 shadow-sm mt-3 p-3">
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
                    name="nickname"
                    placeholder="닉네임을 입력해주세요."
                    value={nickName}
                    onChange={onChangeNickName}
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
                    name="name"
                    placeholder="이름을 입력해주세요."
                    value={name}
                    onChange={onChangeName}
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
                    name="num"
                    placeholder="학번을 입력해주세요."
                    value={id}
                    onChange={onChangeId}
                  />
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 mx-auto mt-2">
              <button className="btn btn-success" type="submit">
                Log in
              </button>
            </div>
          </div>
        </div>
        <div className="card w-25 shadow-sm p-3 mt-3 text-center">
          <span>
            New to Community?{" "}
            <Link className="text-decoration-none" to="/create">
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
}

export default Login;
