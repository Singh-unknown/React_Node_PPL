import React from "react";
//import axios from "axios";
import { Link } from "react-router-dom";
class Renderpagethird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    console.log("props of 2 page ", this.props);
  }
  render() {
    return (
      <div>
        <div>
          <Link to="/">
            <h1>1</h1>
          </Link>
        </div>
        <div>
          <Link to="/2">
            <h1>2</h1>
          </Link>
        </div>

        <div>
          <Link to="/3">
            <h1>3</h1>
          </Link>
        </div>
        <div>
          <h1>Second Page</h1>
        </div>
      </div>
    );
  }
}
export default Renderpagethird;
