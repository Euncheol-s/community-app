function Major({ collegeName, collegeImg, collegeDescription, majors }) {
  return (
    <div className="container mt-5 text-center">
      <div className="card mb-5 shadow-sm">
        <img src={collegeImg} className="card-img img-md" alt={collegeName} />
        <div className="card-body mt-3">
          <h5 className="card-title">{collegeName}</h5>
          <div className="card-text container px-5 mt-3">
            {collegeDescription}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card">
            <img
              src={majors[0][1]}
              className="card-img-top"
              alt={majors[0][0]}
            />
            <div className="card-body">
              <h5 className="card-title">{majors[0][0]}</h5>
              <div className="card-text container">{majors[0][2]}</div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <img
              src={majors[1][1]}
              className="card-img-top"
              alt={majors[1][0]}
            />
            <div className="card-body">
              <h5 className="card-title">{majors[1][0]}</h5>
              <div className="card-text container">{majors[1][2]}</div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <img
              src={majors[2][1]}
              className="card-img-top"
              alt={majors[2][0]}
            />
            <div className="card-body">
              <h5 className="card-title">{majors[2][0]}</h5>
              <div className="card-text container">{majors[2][2]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Major;
