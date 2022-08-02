function NavOffCanvas() {
  return (
    <>
      <button
        className="navbar-toggler me-5"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title fs-1"
            id="offcanvasWithBothOptionsLabel"
          >
            Profile
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item mb-2">
              <a className="nav-link fs-5" role="button" href="/profile">
                내 정보
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link fs-5" role="button" href="/written">
                내가 작성한 글
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link fs-5" role="button" href="/recommended">
                내가 추천한 글
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavOffCanvas;
