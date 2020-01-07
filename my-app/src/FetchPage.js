import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import axios from "axios";
class FetchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      age: ""
    };
    this.submitFunction = this.submitFunction.bind(this);
  }
  submitFunction = event => {
    this.setState({
      firstName: event.target.firstName1.value,
      age: event.target.age1.value
    });
    event.preventDefault();
    const datas = {
      firstName: event.target.firstName1.value,
      age: event.target.age1.value
    };
    axios.post("http://localhost:8081/fetch_get", datas).then(res => {
      console.log("the Data That You Want to Get Is :- ");
      console.log(res.data);
    });
    event.target.firstName1.value = null;
    event.target.age1.value = null;
    alert("Data is Submitted Secussfully...");
  };
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
              <p>This Page Is For Fetch Or Show The Data...!!---.....</p>
              <label>First Name :- </label>
              <input
                type="text"
                name="firstName1"
                placeholder="First Name "
                required
              ></input>
              <br></br>
              <br></br>
              <label>Enter Age :- </label>
              <input
                type="number"
                name="age1"
                placeholder="Age"
                required
              ></input>
              <br></br>
              <br></br>
            </div>
            <div className="subClass">
              <button>Click Meee...</button>
            </div>
          </form>
          <div className="subClass2">
            <ShowFunction fname={this.state.firstName} age={this.state.age} />
          </div>
        </div>
      </div>
    );
  }
}
const ShowFunction = props => {
  return (
    <div>
      <h4>FirstName is :- {props.fname}</h4>
      <h4>Age is :- {props.age}</h4>
    </div>
  );
};
export default FetchPage;
