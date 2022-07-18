import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import SimpleBoard from "../components/SimpleBoard";

function Home() {
  return (
    <>
      <NavBar />
      <div className="container-md px-4 mt-5">
        <div className="row gx-5">
          <div className="col-md mb-5">
            <SimpleBoard />
          </div>
          <div className="col-md mb-5">
            <SimpleBoard />
          </div>
        </div>
        <div className="row gx-5">
          <div className="col-md mb-5">
            <SimpleBoard />
          </div>
          <div className="col-md mb-5">
            <SimpleBoard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
