import Navbar from "../components/NavBar";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6">
            <span className="fs-4 me-3">Account Information</span>
          </div>
          <div class="col-sm-6">
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
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
          <div className="col-sm-6">
            <span className="fs-4 me-3">Profile</span>
          </div>
          <div class="col-sm-6">
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
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
          <div className="col-sm-6">
            <span className="fs-4 me-3">Delete Account</span>
          </div>
          <div class="col-sm-6">
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-danger">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
