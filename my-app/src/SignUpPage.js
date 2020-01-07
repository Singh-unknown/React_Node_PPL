import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import axios from "axios";
var myarray = [];
class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      Number: "",
      Password: "",
      errorMail: "",
      email1: "",
      erMail: []
    };
    this.submitFunction = this.submitFunction.bind(this);
    this.removeMail = this.removeMail.bind(this);
  }
  submitFunction = event => {
    this.setState({
      firstName: event.target.firstName1.value,
      lastName: event.target.lastName1.value,
      age: event.target.age1.value,
      email: event.target.email1.value,
      Number: event.target.Number1.value,
      Password: event.target.Password1.value
    });
    const tempdata = {
      firstName: event.target.firstName1.value,
      lastName: event.target.lastName1.value,
      age: event.target.age1.value,
      email: event.target.email1.value,
      Number: event.target.Number1.value,
      Password: event.target.Password1.value
    };
    axios.post("http://localhost:8081/process_get", tempdata).then(res => {
      console.log(res);
      if (res.data === "E-Mail Already exist!..") {
        console.log("response of the data is: -" + res.data);
        this.setState({ errorMail: res.data });
      } else {
        //alert("You Have Secussfully Signed UP!!..");
        console.log("res is :- " + res.data[0].email);
        // const listItems = res.data.map(number => (
        //   <ul>
        //     <li>{number}</li>
        //   </ul>
        // ));
        var i = 0;
        for (i = 0; i < res.data.length; i++) {
          myarray.push(res.data[i].email);
        }
        console.log("myarray is :- ", myarray);
        //console.log("len is :- ", res.data.length);
        // console.log("res issssss:-  " + listItems);
        this.setState({ erMail: myarray });
        //console.log("errerrr is:- ", this.state.erMail);
      }
    });
    event.preventDefault();
    event.target.firstName1.value = null;
    event.target.lastName1.value = null;
    event.target.age1.value = null;
    event.target.email1.value = null;
    event.target.Number1.value = null;
    event.target.Password1.value = null;
    alert("Data Is Submitted Secussfully...!");
  };
  removeMail = event => {
    this.setState({ errorMail: null });
  };
  //render ------------------------------
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
              <p>--Sign up page..!- Enter the details given below---</p>

              <label>First Name :- </label>
              <input
                type="text"
                name="firstName1"
                placeholder="First Name....."
                required
              ></input>
              <br></br>
              <br></br>
              <label>Last Name :- </label>
              <input
                type="text"
                name="lastName1"
                placeholder="Last Name....."
                required
              ></input>
              <br></br>
              <br></br>
              <label>Enter Age :- </label>
              <input
                type="number"
                name="age1"
                placeholder="Enter Age..."
                min="15"
                max="80"
                required
              ></input>
              <br></br>
              <br></br>
              <label>Enter mail:- </label>
              <input
                type="email"
                name="email1"
                placeholder="Email I'D"
                onClick={this.removeMail}
                required
              ></input>
              <p className="subClass3">{this.state.errorMail}</p>
              <br></br>
              <label>Ph.Number:- </label>
              <input
                type="text"
                name="Number1"
                placeholder="Ph. Number"
                maxLength="10"
                minLength="10"
                required
              ></input>
              <br></br>
              <br></br>
              <label> Password :- </label>
              <input
                type="password"
                name="Password1"
                pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="must have a small and capital latter and 8 digits"
                placeholder="Password"
                required
              ></input>
              <div className="subClass3">
                <MailFunction ERRMail={this.state.erMail} />
              </div>
            </div>
            <div className="subClass">
              <button>Click Me..!..</button>
            </div>
          </form>
          <div className="subClass2">
            <DisplaySomething
              fname={this.state.firstName}
              lname={this.state.lastName}
              Age={this.state.age}
              mail={this.state.email}
              number={this.state.Number}
              password={this.state.Password}
            />
          </div>
        </div>
      </div>
    );
  }
}
const DisplaySomething = props => {
  return (
    <div>
      <h4>First Name is :- {props.fname}</h4>
      <h4>Last Name is :- {props.lname}</h4>
      <h4>Age is :- {props.Age}</h4>
      <h4>Email I'D is :- {props.mail}</h4>
      <h4>Phone Number :- {props.number}</h4>
      <h4>Password :- {props.password}</h4>
    </div>
  );
};
const MailFunction = props => {
  console.log("Props IS:- ", props.ERRMail);
  return (
    <ul>
      {props.ERRMail.map((num, i) => (
        <li>{num}</li>
      ))}
    </ul>
  );
};
export default SignUpPage;
