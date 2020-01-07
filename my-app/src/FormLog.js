import React from "react";
import "./FormStyle.css";
import SendData from "./SendData";
class FormLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: ""
    };
    this.changeFunction = this.changeFunction.bind(this);
    this.changeFun = this.changeFun.bind(this);
  }
  changeFunction = event => {
    this.setState({ Email: event.target.value });
  };
  changeFun = event => {
    this.setState({ Password: event.target.value });
  };
  submitFunction = event => {
    alert("You have Done----");
  };
  render() {
    return (
      <div className="abc">
        <div className="abcd">-------Log in form-----------</div>

        <form action="#" className="second" onSubmit={this.submitFunction}>
          <div>
            <label>Enter Email :- </label>
            <input
              type="email"
              value={this.state.Email}
              onChange={this.changeFunction}
              placeholder="Email I'D"
              className="subabc"
              required
            ></input>
            <br></br>
            <label>Enter Password :- </label>
            <input
              type="password"
              value={this.state.Password}
              onChange={this.changeFun}
              placeholder="Password"
              className="subabc"
              pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one uppercase,lowercase letter and at least 8 characters"
              required
            ></input>
          </div>
          <button className="abcd">Login......</button>
        </form>
        <SendData Email={this.state.Email} Password={this.state.Password} />
      </div>
    );
  }
}

export default FormLog;
