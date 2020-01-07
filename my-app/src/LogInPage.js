import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import axios from "axios";

class LogInPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      Password: "",
      errorPass: "",
      errorMail: ""
    };
  }
  submitFunction = event => {
    this.setState({
      email: event.target.email1.value,
      Password: event.target.Password1.value
    });
    event.preventDefault();
    const tempdata = {
      email: event.target.email1.value,
      Password: event.target.Password1.value
    };
    axios.post("http://localhost:8081/login_get", tempdata).then(res => {
      console.log(res.data);
      if (res.data === "You Have Secussfully Loged In......") {
        console.log(res.data);
        alert(res.data);
      } else if (res.data === "E-Mail Does Not Exist..") {
        this.setState({ errorMail: res.data });
      } else {
        this.setState({ errorPass: res.data });
      }
    });
    event.target.email1.value = null;
    event.target.Password1.value = null;
    alert("Data Is Submitted Secussfully...!");
  };
  RemoveError = event => {
    this.setState({ errorPass: null, errorMail: null });
  };

  // Now we are going to render means displaying the data-------------

  render() {
    return (
      <div className="superClass">
        <div className="mHeading">
          <button className="Heading">
            <Link to="/" className="subHeading">
              Login..
            </Link>
          </button>
          <button className="Heading">
            <Link to="/Signup" className="subHeading">
              Signup..
            </Link>
          </button>
          <button className="Heading">
            <Link to="/Fetch" className="subHeading">
              Fetch..
            </Link>
          </button>
          <button className="Heading">
            <Link to="/Update" className="subHeading">
              Update..
            </Link>
          </button>
          <button className="Heading">
            <Link to="/Delete" className="subHeading">
              Delete..
            </Link>
          </button>
        </div>
        <div className="mainClass">
          <form onSubmit={this.submitFunction}>
            <div className="subClass">
              <p>--LogInPage Enter the details given below!!....</p>
              <label>Enter mail:- </label>
              <input
                type="email"
                name="email1"
                placeholder="Email I'D"
                required
                onClick={this.RemoveError}
              ></input>
              <p className="subClass3">{this.state.errorMail}</p>
              <br></br>
              <label>Password :- </label>
              <input
                type="password"
                name="Password1"
                pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="must have a small and capital latter and 8 digits"
                placeholder="Password"
                required
                onClick={this.RemoveError}
              ></input>
              <p className="subClass3">{this.state.errorPass}</p>
            </div>
            <div className="subClass">
              <button>Click Me..!..</button>
            </div>
          </form>
          <div className="subClass2">
            <ShowFunction
              mail={this.state.email}
              password={this.state.Password}
            />
          </div>
        </div>
      </div>
    );
  }
}
const ShowFunction = props => {
  return (
    <div>
      <h4>Email I'D is :- {props.mail}</h4>
      <h4>Password is :- {props.password}</h4>
    </div>
  );
};

export default LogInPage;
