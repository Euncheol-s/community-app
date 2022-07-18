import { Link } from "react-router-dom";

function SimpleBoard() {
  return (
    <div class="card">
      <div class="card-header">Featured</div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <Link to="#" class="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
}

export default SimpleBoard;
