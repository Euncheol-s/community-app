import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Home from "./routes/Home";
import Department from "./routes/Department";
import Major from "./routes/Major";
import Board from "./routes/Board";

function App() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    axios
      .get("/api/main")
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(hello);
  return (
    <Router>
      <Switch>
        <Route path="/board">
          <Board />
        </Route>
        <Route path="/major">
          <Major />
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
