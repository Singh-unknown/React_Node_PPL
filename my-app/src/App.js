import React from "react";
//import logo from "./logo.svg";
import "./App.css";
//import loginppl from "./loginppl";
import { Link } from "react-router-dom";
import axios from "axios";
//var myarray = [];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: "",
      Email: "",
      FirstName: "",
      LastName: "",
      errorMail: "",
      check: "",
      Mainh: ""
    };
  }
  submitFunction = event => {
    this.setState({
      Username: event.target.Username1.value,
      Password: event.target.Password1.value,
      Email: event.target.Email1.value,
      FirstName: event.target.FirstName1.value,
      LastName: event.target.LastName1.value,
      check: event.target.check1.value
    });
    const tempdata = {
      Username: event.target.Username1.value,
      Password: event.target.Password1.value,
      Email: event.target.Email1.value,
      FirstName: event.target.FirstName1.value,
      LastName: event.target.LastName1.value
    };
    axios.post("http://localhost:8081/process_get", tempdata).then(res => {
      console.log(res);
      if (res.data === "E-Mail Already exist!..") {
        console.log("response of the data is: -" + res.data);
        this.setState({ errorMail: res.data });
        document.getElementById("checkformail").style.backgroundColor = "red";
        document.getElementById("checkformail").placeholder =
          "E-Mail Already exist!";
      } else {
        console.log("res is :- " + res.data);
        let aa = "Signed Up!..";
        this.setState({ Mainh: aa });
      }
    });
    event.preventDefault();
    event.target.Username1.value = null;
    event.target.Password1.value = null;
    event.target.Email1.value = null;
    event.target.FirstName1.value = null;
    event.target.LastName1.value = null;
    event.target.check1.value = null;
    console.log("Data is Submitted Secussfully.....!!");
    // alert("Data Is Submitted Secussfully...!");
  };
  removeMail = event => {
    this.setState({ errorMail: null });
    document.getElementById("checkformail").style.backgroundColor = "white";
    document.getElementById("checkformail").placeholder = "Enter your Email";
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="content">
            <div className="content_rgt">
              <div className="register_sec">
                <form onSubmit={this.submitFunction}>
                  <h1>{this.state.Mainh}</h1>
                  <h1>Create An Account</h1>
                  <ul>
                    <li>
                      <span>Username</span>
                      <input
                        type="text"
                        placeholder="Enter your username"
                        name="Username1"
                      />
                    </li>
                    <li>
                      <span>Password</span>
                      <input
                        type="password"
                        name="Password1"
                        placeholder="Enter your password"
                      />
                    </li>
                    <li>
                      <span>Email</span>
                      <input
                        type="email"
                        name="Email1"
                        placeholder="Enter your email"
                        onClick={this.removeMail}
                        id="checkformail"
                      />
                    </li>
                    <li>{this.state.errorMail}</li>
                    <li>
                      <span>First Name</span>
                      <input
                        type="text"
                        name="FirstName1"
                        placeholder="Enter your first name"
                      />
                    </li>
                    <li>
                      <span>Last Name</span>
                      <input
                        type="text"
                        name="LastName1"
                        placeholder="Enter your last name"
                      />
                    </li>
                    <li>
                      <input type="checkbox" required name="check1" />I agree to
                      Term &amp; Conditions
                    </li>
                    <li>
                      <input type="submit" defaultValue="Register" />
                    </li>
                  </ul>
                </form>
                <div className="addtnal_acnt">
                  I already have an account.
                  <Link to="/">Login My Account !</Link>
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
// class Another extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};

//     console.log("Another constructor is executed.................");
//   }
//   static getDerivedStateFromProps() {
//     console.log("Another getDerivedstatefromprops is executed................");
//     return true;
//   }
//   render() {
//     return (
//       <div>
//         {console.log("Another RENDER is executed...------------------")}
//       </div>
//     );
//   }
//   componentDidMount() {
//     console.log(
//       "Another ComponentDidMount is executed............................"
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
