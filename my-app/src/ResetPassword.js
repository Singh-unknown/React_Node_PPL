import React from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: this.props.match.params.Email,
      message:"",
      Password:""
        };
  }
  submitFunction = event => {
    event.preventDefault();
    if(event.target.Pass1.value == event.target.Pass2.value){
    var SendData = {
      email:this.state.Email,
      password:event.target.Pass1.value
    }
    axios.post("http://localhost:8081/ResetPass_get", SendData).then(res => {
    console.log("res at forgot pass :-  :- ", res.data);
    this.setState({message:res.data});
     });
    }
    else{
        let ShowDs = "Password Does Not Match"
        this.setState({Password:ShowDs});
    }
    event.target.Pass1.value = null;
    event.target.Pass2.value = null;
  };
  RemoveFunction = event =>{
      event.preventDefault();
      let ShowDs = "";
      this.setState({Password:ShowDs})
  }
  render() {
    if(this.state.message == "Password Updated"){
      console.log("... ",this.state.message)
      alert("password is updated secussfully!!");
      return(
        <Redirect to="/" />
      )
    }else{
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
            {/* <div id="LogOutId" className="info_div1" style={{marginRight:"-100px", marginTop:"-30px"}}><Link to="/"><button style={{backgroundColor:"orange",textShadow:"0 0 3px #ff0000, 0 0 5px #0000ff" , color:"pink",border:"none", fontSize:"20px", padding:"5px"}}>Logout!</button></Link>
            </div>    */}
          </div>
        </div>
      </div>

        {/* <div className="popup_sec" id="pop_forgt">
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
        </div> */}
        <div className="container">
          <div className="content">
            <div className="content_rgt">
              <div className="register_sec">
                  <h1>{this.state.Password}{this.state.message}</h1>
                <h1>Reset Password</h1>
                <form onSubmit={this.submitFunction}>
                  <ul>
                    <li><span>Enter New Password</span>
                    <input type="password" name="Pass1" placeholder="Enter Password" onClick = {this.RemoveFunction} required /><br></br>
                      <span>Re Enter Password</span>
                      <input
                        type="password"
                        placeholder="Re Enter Password"
                        name="Pass2"
                        onClick = {this.RemoveFunction}
                        required
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
              <img src="/images/img_9.png" alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
    );
      }
  }
}
export default ResetPassword;
