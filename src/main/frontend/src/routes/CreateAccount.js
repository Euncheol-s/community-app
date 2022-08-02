import { useState, useEffect } from "react";

function CreateAccount() {
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
    <div className="d-flex justify-content-center align-items-center mt-5 vstack">
      <h3 className="container text-center">Sign up to Community</h3>
      <div className="card card-md w-25 shadow-sm mt-3 p-3">
        <div className="card-body">
          <form method="post" action="http://localhost:8080/api/signIn">
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
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
