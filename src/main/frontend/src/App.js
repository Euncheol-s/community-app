import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Home from "./routes/Home";
import Department from "./routes/Department";
import Board from "./routes/Board";
import Profile from "./routes/Profile";
import MajorInfo from "./routes/MajorInfo";
import Login from "./routes/Login";
import NoticeBoard from "./routes/NoticeBoard";
import CreateAccount from "./routes/CreateAccount";
import BoardWrite from "./routes/BoardWrite";
import NoticeWrite from "./routes/NoticeWrite";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/notice/detail/:id">
          <Detail />
        </Route>
        <Route path="/notice/write">
          <NoticeWrite />
        </Route>
        <Route path="/board/write">
          <BoardWrite />
        </Route>
        <Route path="/create">
          <CreateAccount />
        </Route>
        <Route path="/notice/:id">
          <NoticeBoard />
        </Route>
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
