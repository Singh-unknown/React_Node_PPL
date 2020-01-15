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
      } else if (res.data.ss === "E-Mail Does Not Exist..") {
        this.setState({ errorMail: res.data.ss });
      } else {
        this.setState({ errorPass: res.data.ss });
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
        <meta charSet="utf-8" />
      <title>Create An Account</title>
      <link href="/css/bootstrap.css" rel="stylesheet" type="text/css" />
      <link
        href="/css/bootstrap-responsive.css"
        rel="stylesheet"
        type="text/css"
      />
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="navbar-inner">
          <div className="container">
            <button
              type="button"
              className="btn btn-navbar"
              data-toggle="collapse"
              data-target=".nav-collapse"
            >
              {" "}
              <span className="icon-bar" /> <span className="icon-bar" />{" "}
              <span className="icon-bar" />{" "}
            </button>
            <a className="brand" href>
              PPL
            </a>
            <div className="pro_info pull-right">
              <div className="pro_icn">
                <img src="/images/pic_small.png" />
              </div>
              <div className="pro_txt">
                Me
                <b className="caret" />
              </div>
              <ul
                className="dropdown-menu"
                role="menu"
                aria-labelledby="dLabel"
              >
                <li>
                  <a tabIndex={-1} href="#">
                    My Profile
                  </a>
                </li>
                <li>
                  <a tabIndex={-1} href="#">
                    Message Box
                  </a>
                </li>
                <li>
                  <a tabIndex={-1} href="#">
                    Change Language
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a tabIndex={-1} href="#">
                    <input type="text" placeholder="search" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-collapse collapse">
              <ul className="nav">
                <li className="active">
                  {" "}
                  <a href>Home</a>{" "}
                </li>
                <li className>
                  {" "}
                  <a href>E-Coupons</a>{" "}
                </li>
                <li className>
                  {" "}
                  <a href>E-Brands</a>{" "}
                </li>
                <li className>
                  {" "}
                  <a href>Resuse Market</a>{" "}
                </li>
                <li className>
                  {" "}
                  <a href>Lost and Found</a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="header_lft">
          <div className="logo">
            <a href="#">
              <img src="/images/logo.png" />
            </a>
          </div>
          <div className="navigatn">
            <ul>
              <li>
                <a href="#" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#"> E-Coupons </a>
              </li>
              <li>
                <a href="#">E-Brands </a>
              </li>
              <li>
                <a href="#"> Resuse Market </a>
              </li>
              <li>
                <a href="#"> Lost and Found</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header_rgt">
          <div className="flag_div">
            <img src="/images/flag.png" />
          </div>
          <input type="text" placeholder="Search" className="txt_box" />
          <div className="msg_box">
            <a href="#">
              <span className="msg_count">100</span>
            </a>
          </div>
          <div className="info_div">
            <div className="image_div">
              {" "}
              <img src="/images/pic.png" />{" "}
            </div>
            {/* <div className="info_div1" onClick={this.MeOptionFunction}>Me</div> */}
            <div className="info_div1" style={{marginRight:"10px"}}>Me</div>
            <div className="info_div1"  id="MeElement" style={{ marginTop:"-25px", marginRight:"-9px"}}>
           
            <select name="Options" onClick={this.LogOutFunction} style={{width:"40px", backgroundColor:"orange", border:"none", color:"white"}}>
              <option></option>
              <option value="myprofile">My Profile</option>
              <option></option>
              <option value="messagebox">Message Box</option>
              <option></option>
              <option value="logout">hhhh</option>
              <option></option>
              <option value="changelanguage">Change Language</option>
            </select>
            
            </div> 
            {/* <div id="LogOutId" className="info_div1" style={{marginRight:"-100px", marginTop:"-30px"}}><button style={{backgroundColor:"orange",textShadow:"0 0 3px #ff0000, 0 0 5px #0000ff" , color:"pink",border:"none", fontSize:"20px", padding:"5px"}}>Logout!</button>
            </div>    */}
          </div>
        </div>
      </div>

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
