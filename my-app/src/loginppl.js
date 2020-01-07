import React from "react";
import axios from "axios";
import { Link ,Redirect} from "react-router-dom";
//import Timeline from "./Timeline";
class loginppl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: "",
      errorMail: "",
      errorPass: "",
      Mainh: "",
      checker:""
    };
  }
  submitFunction = event => {
    this.setState({
      Email: event.target.Email1.value,
      Password: event.target.Password1.value
    });
    event.preventDefault();
    const tempdata = {
      Email: event.target.Email1.value,
      Password: event.target.Password1.value
    };
    axios.post("http://localhost:8081/login_get", tempdata).then(res => {
      console.log("comming data is:-",res.data);
      localStorage.setItem('id', res.data.id);
      if (res.data.ss === "You Have Secussfully Loged In......") {
        console.log(res.data);
        let aa = "Loged In!..";
        this.setState({ Mainh: aa });
        // alert(res.data);
      } else if (res.data === "E-Mail Does Not Exist..") {
        this.setState({ errorMail: res.data });
      } else {
        this.setState({ errorPass: res.data });
      }
    });
    event.target.Email1.value = null;
    event.target.Password1.value = null;
    //alert("Data Is Submitted Secussfully...!");
  };
  RemoveError = event => {
    this.setState({ errorPass: null, errorMail: null });
  };

  render() {
    if(this.state.Mainh === "Loged In!.."){
      return(<Redirect to="/Timeline" />);
    }
    else {
    return (
      <div >
        <div className="container">
          <div className="content">
            <div className="content_rgt">
              <div className="login_sec">
                <h1>{this.state.Mainh}</h1>
                <h1>Log In</h1>
                <form onSubmit={this.submitFunction}>
                  <ul>
                    <li>
                      <span>Email-ID</span>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        onClick={this.RemoveError}
                        name="Email1"
                        required
                      />
                    </li>
                    <li>{this.state.errorMail}</li>
                    <li>
                      <span>Password</span>
                      <input
                        type="password"
                        name="Password1"
                        placeholder="Enter your password"
                        onClick={this.RemoveError}
                        required
                      />
                    </li>
                    <li>{this.state.errorPass}</li>
                    <li>
                      <input type="checkbox" required />
                      Remember Me
                    </li>
                    <li>
                      <input type="submit" defaultValue="Log In" />
                      <Link to="/Forgotpass">Forgot Password</Link>
                    </li>
                  </ul>
                </form>
                <div className="addtnal_acnt">
                  I do not have any account yet.
                  <Link to="/Signup">Create My Account Now !</Link>
                </div>
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
}
export default loginppl;
