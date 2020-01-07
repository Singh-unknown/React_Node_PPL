import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class ForgotPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: ""
    };
  }
  submitFunction = event => {
    this.setState({
      Email: event.target.Email1.value
    });
    event.preventDefault();
    const tempdata = {
      Email: event.target.Email1.value
    };
    //axios.post("http://localhost:8081/login_get", tempdata).then(res => {
    //console.log(res.data);
    // }
    // });
    event.target.Email1.value = null;
  };
  render() {
    return (
      <div>
        {
          // <meta charSet="utf-8" />
          // <title>Forgot Password</title>
          // <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
          // <link
          //   href="css/bootstrap-responsive.css"
          //   rel="stylesheet"
          //   type="text/css"
          // />
        }
        <div className="popup_sec" id="pop_forgt">
          <div className="clos_btn">
            <img src="images/clos.png" alt="" id="clos_pop" />
          </div>
          <div className="pop_hdr">
            A mail has been send to your e-mail Id for Reset Password Link
          </div>
          <div className="man_contnt">
            <span>Please Check Your Mail Box!</span>
            <input type="submit" defaultValue="Ok" />
          </div>
        </div>
        <div className="container">
          <div className="content">
            <div className="content_rgt">
              <div className="register_sec">
                <h1>Forgot Password</h1>
                <form onSubmit={this.submitFunction}>
                  <ul>
                    <li>
                      <span>Enter E-mail ID</span>
                      <input
                        type="email"
                        placeholder="User@gmail.com"
                        name="Email1"
                      />
                    </li>
                    <li>
                      <input type="submit" defaultValue="Submit" />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            <div className="content_lft">
              <h1>Welcome from PPL!</h1>
              <p className="discrptn">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.{" "}
              </p>
              <img src="images/img_9.png" alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ForgotPass;
