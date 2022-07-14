import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./routes/Home";
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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
