import React from "react";
import SignUpPage from "./SignUpPage";
import LogInPage from "./LogInPage";
import "./Style.css";
import FetchPage from "./FetchPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DeletePage from "./DeletePage";
import UpdatePage from "./UpdatePage";
function MainPage() {
  return (
    <BrowserRouter>
      <div className="superClass">
        <Switch>
          <Route path="/" exact component={LogInPage} />
          <Route path="/Signup" component={SignUpPage} />
          <Route path="/Fetch" component={FetchPage} />
          <Route path="/Update" component={UpdatePage} />
          <Route path="/Delete" component={DeletePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default MainPage;
