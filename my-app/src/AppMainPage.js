import React from "react";
import Loginppl from "./loginppl";
import App from "./App";
import ForgotPass from "./ForgotPass";
import resetpassword from "./ResetPassword";
import Timeline from "./Timeline";
import SinglePost from "./SinglePost";
import { BrowserRouter, Route, Switch} from "react-router-dom";
class MainPage extends React.Component {
  LogOutFunction =event => {
    console.log("logoutfun:- :- :- :- ///// ",event.target.Options)
  }
render(){
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Loginppl} />
            <Route path="/Signup" component={App} />
            <Route path="/Forgotpass" component={ForgotPass} />
            <Route path="/resetpassword/:Email" component={resetpassword} />
            <Route path="/Timeline" component={Timeline} />
            <Route path="/SinglePost/:id" component={SinglePost} />
          </Switch>
        </div>
      </BrowserRouter>
      <div className="clear" />
      <div className="footr">
        <div className="footr_lft">
          <div className="footer_div1">
            Copyright © Pet-Socail 2014 All Rights Reserved
          </div>
          <div className="footer_div2">
            <a href="#">Privacy Policy </a>|{" "}
            <a href="#"> Terms &amp; Conditions</a>
          </div>
        </div>
        <div className="footr_rgt">
          <ul>
            <li>
              <a href="#">
                <img src="/images/social_1.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/social_2.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/social_3.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/social_4.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
}

export default MainPage;
