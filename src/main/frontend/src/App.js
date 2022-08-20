import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Home from "./routes/Home";
import Board from "./routes/Board";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import NoticeBoard from "./routes/NoticeBoard";
import CreateAccount from "./routes/CreateAccount";
import BoardWrite from "./routes/BoardWrite";
import NoticeWrite from "./routes/NoticeWrite";
import Detail from "./routes/Detail";
import BoardDetail from "./routes/BoardDetail"
import CouncilInfo from "./routes/CouncilInfo";
import NoticeEdit from "./routes/NoticeEdit";
import BoardEdit from "./routes/BoardEdit";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/board/:type/edit/:id">
          <BoardEdit />
        </Route>
        <Route path="/notice/edit/:id">
          <NoticeEdit />
        </Route>
        <Route path="/board/:type/detail/:id">
          <BoardDetail />
        </Route>
        <Route path="/notice/detail/:id">
          <Detail />
        </Route>
        <Route path="/notice/write">
          <NoticeWrite />
        </Route>
        <Route path="/board/:id/write">
          <BoardWrite />
        </Route>
        <Route path="/create">
          <CreateAccount />
        </Route>
        <Route path="/notice">
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
        <Route path="/council">
          <CouncilInfo />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
