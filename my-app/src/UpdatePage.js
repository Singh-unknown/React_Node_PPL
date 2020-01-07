import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import axios from "axios";
class UpdatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      age: "",
      selection: "",
      newvalue: ""
    };
    this.submitFunction = this.submitFunction.bind(this);
  }
  submitFunction = event => {
    this.setState({
      firstName: event.target.firstName1.value,
      age: event.target.age1.value,
      selection: event.target.selection1.value,
      newvalue: event.target.newValue.value
    });
    event.preventDefault();
    const datas = {
      firstName: event.target.firstName1.value,
      age: event.target.age1.value,
      selection: event.target.selection1.value,
      newvalue: event.target.newValue.value
    };
    axios.post("http://localhost:8081/update_get", datas).then(res => {
      console.log("Data Is Updated Secussfully........!!--..");
      console.log(res.data);
    });
    event.target.firstName1.value = null;
    event.target.age1.value = null;
    event.target.selection1.value = null;
    event.target.newValue.value = null;
    alert("Data Is Submitted Secussfully .....");
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
              <p>This Page is for Updation operation..----!!!...</p>
              <p>Enter the fields for Updation...----------</p>
              <label>First Name:- </label>
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
                placeholder="Enter Age.."
                minLength="15"
                maxLength="80"
                required
              ></input>
              <br></br>
            </div>
            <div className="subClass">
              <p>Enter the New Value of The Fields..........</p>
              <br></br>
              <label>Select one Field :- </label>
              <input list="selections" name="selection1" />
              <datalist id="selections">
                <option value="firstName"> </option>
                <option value="lastName"> </option>
                <option value="age"> </option>
                <option value="email"> </option>
                <option value="Number"></option>
                <option value="Password"></option>
              </datalist>
              <br></br>
              <br></br>
              <label>Required new value:-</label>
              <input
                type="text"
                name="newValue"
                placeholder="New Value"
                required
              ></input>
              <br></br>
              <br></br>
            </div>
            <div className="subClass">
              <button>Click Me...!.</button>
            </div>
          </form>
          <div className="subClass2">
            <ShowFunction
              fname={this.state.firstName}
              age={this.state.age}
              Selection={this.state.selection}
              newValue={this.state.newvalue}
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
      <h2>First Name is :- {props.fname}</h2>
      <h2>Age is :- {props.age}</h2>
      <h2>Selected Field is :- {props.Selection}</h2>
      <h2>New Value Is :- {props.newValue}</h2>
    </div>
  );
};
export default UpdatePage;
