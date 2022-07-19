import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Home from "./routes/Home";
import Department from "./routes/Department";
import Board from "./routes/Board";
import Profile from "./routes/Profile";
import MajorInfo from "./routes/MajorInfo";
import Login from "./routes/Login";

function App() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    axios
      .get("/api/hello")
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(hello);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/board/:id">
          <Board />
        </Route>
        <Route path="/major/:id">
          <MajorInfo />
        </Route>
        <Route path="/department">
          <Department />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
