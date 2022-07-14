import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";
import LogIn from "./routes/LogIn";
import SignUp from "./routes/SignUp";
import Write from "./routes/Write";
import Department from "./routes/Department";
import Major from "./routes/Major";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/major">
          <Major />
        </Route>
        <Route path="/department">
          <Department />
        </Route>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
