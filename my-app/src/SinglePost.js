import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
var IdFromTimeline;
var i =1, j=1,k=1,l=1,m=1,w=1;
class SinglePost extends React.Component {
constructor(props){
    super(props);
    this.state={
        id:this.props.match.params.id,
        img:"",
        cat:"",
        user:"",
        defaultlike: 0,
        defaultcomment: 0,
        like:0,
        comment:[],
        commentRes:[],
        noOfComment:"0",
        userid:localStorage.getItem('id')
    }
}
ShowImagesFunction =event => {

}
componentDidMount= () =>{
   // this.ShowImagesFunction();
    let dataSend = {
        _id:this.state.id
    }
       axios.post("http://localhost:8081/SinglePostFetch_get",dataSend).then(res =>{
           console.log("res in SinglePost is:- ",res.data);
           this.setState({
                       img:res.data.dataFromDatabase[0].image,
                       cat:res.data.dataFromDatabase[0].category,
                       user: res.data.dataFromDatabase[0].user,
                       like:res.data.dataFromDatabase[0].likes.length
           })
           console.log("img is is is :- ",this.state.img);
       }).catch(err => console.log(err))
       this.FetchCommentFunction();  
       this.ShowResCommentFun();
}

Comments = event => {
console.log("comments")
if(l%2!= 0){
document.getElementById("DoOriginalComment").style.display = "block";
l++;
}else{
    document.getElementById("DoOriginalComment").style.display = "none";
    l++;
}

}

SubmitDooComment =event =>{
  event.preventDefault();
  let SendComment ={
    _id: this.state.id,
    userid: this.state.userid,
    CommentS : event.target.doComm.value
  }
  axios.post("http://localhost:8081/Storecomment_get", SendComment).then(res =>{
  console.log("comments is:- ",res.data);
  document.getElementById("DoOriginalComment").style.display = "none";
  this.FetchCommentFunction();
  }).catch(err => console.log(err))
  event.target.doComm.value= null;
}
FetchCommentFunction = event => {
  let CommentFetcher ={
    _id:this.state.id
  }
  axios.post("http://localhost:8081/FetchComments_get", CommentFetcher).then(res => {
    console.log("comment is fetched :- --- ", res.data);
    let ConstVarForCommeHold = res.data[0].comments.reverse().map(results => {return results})
    this.setState({comment:ConstVarForCommeHold,
      noOfComment:res.data[0].comments.length});
    console.log("@@@@@@@@@@@@@@@ ", this.state.comment)
  }).catch(err => console.log(err))
}
SubmitDoCommentRep = event =>{
  event.preventDefault();
  let CommentrepFetcher ={
    _id:this.state.id,
    commentsResponse:event.target.doCommRep.value
  }
  axios.post("http://localhost:8081/pushRepComments_get", CommentrepFetcher).then(res => {
    console.log("comment response is fetched :- --- ", res.data);
   this.ShowResCommentFun();
    document.getElementById("DoCommentId0").style.display = "none";
  }).catch(err => console.log(err))
 event.target.doCommRep.value = null;
}
ShowResCommentFun = event => {
  let FetchResComme = {
    _id:this.state.id
  }
  axios.post("http://localhost:8081/FetchCommentResponsess_get",FetchResComme).then(res =>{
   console.log("res of comm is :- === ",res.data);
   var holdrespcommis = res.data[0].commentsResponse.reverse().map(result => {return result});
   this.setState({commentRes:holdrespcommis});
  }).catch(err => console.log(err))
}
DoComment0 = event => {
  if(w%2!= 0){
      document.getElementById("DoCommentId0").style.display = "block";
      w++;
  }
  else{
      document.getElementById("DoCommentId0").style.display = "none";
      w++;
  }
}
DoComment1 = event => {
    if(i%2!= 0){
        document.getElementById("DoCommentId1").style.display = "block";
        i++;
    }
    else{
        document.getElementById("DoCommentId1").style.display = "none";
        i++;
    }
}
DoComment2 = event => {
    if(j%2!= 0){
        document.getElementById("DoCommentId2").style.display = "block";
        j++;
    }
    else{
        document.getElementById("DoCommentId2").style.display = "none";
        j++;
    }
}
DoComment3 = event => {
    if(k%2!= 0){
        document.getElementById("DoCommentId3").style.display = "block";
        k++;
    }
    else{
        document.getElementById("DoCommentId3").style.display = "none";
        k++;
    }
}
// getDerivedStateFromProps(props, state){
//     console.log("getDerivedStateFromProps is running")
//     return null;
// }

render(){
return (
    <div>
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
            <div id="LogOutId" className="info_div1" style={{marginRight:"-100px", marginTop:"-30px"}}><Link to="/"><button style={{backgroundColor:"orange",textShadow:"0 0 3px #ff0000, 0 0 5px #0000ff" , color:"pink",border:"none", fontSize:"20px", padding:"5px"}}>Logout!</button></Link>
            </div>   
          </div>
        </div>
      </div>

        <div className="container">
        <div className="content">
           <div className="content_rgt">
            <div className="rght_btn"> <span className="rght_btn_icon"><img src="/images/btn_iconb.png" alt="up" /></span> <span className="btn_sep"><img src="/images/btn_sep.png" alt="sep" /></span> <a href="#" >Upload Post</a> </div>
            <div className="rght_btn"> <span className="rght_btn_icon"><img src="/images/btn_icona.png" alt="up" /></span> <span className="btn_sep"><img src="/images/btn_sep.png" alt="sep" /></span> <a href="#">Invite Friends</a> </div>
            <div className="rght_cate">
              <div className="rght_cate_hd" id="rght_cat_bg">Categories</div>
              <div className="rght_list">
                <ul>
                  <li><a href="#"><span className="list_icon"><img src="/images/icon_01.png" alt="up" /></span> CATS</a></li>
                  <li><a href="#"><span className="list_icon"><img src="/images/icon_02.png" alt="up" /></span> Dogs</a></li>
                  <li><a href="#"><span className="list_icon"><img src="/images/icon_03.png" alt="up" /></span> Birds</a></li>
                  <li><a href="#"><span className="list_icon"><img src="/images/icon_04.png" alt="up" /></span> Rabbit</a></li>
                  <li><a href="#"><span className="list_icon"><img src="/images/icon_05.png" alt="up" /></span> Others</a></li>
                </ul>
              </div>
            </div>
            <div className="rght_cate">
              <div className="rght_cate_hd" id="opn_cat_bg">Featured</div>
              <div className="sub_dwn">
                <div className="feat_sec">
                  <div className="feat_sec_img"><img src="/images/feat_img1.png" alt="image" /></div>
                  <div className="feat_txt">Lorem Ipusum Text</div>
                </div>
                <div className="feat_sec">
                  <div className="feat_sec_img"><img src="/images/feat_img2.png" alt="image" /></div>
                  <div className="feat_txt">Lorem Ipusum Text</div>
                  <div className="btm_rgt">
                    <div className="btm_arc">Dogs</div>
                  </div>
                </div>
                <div className="feat_sec">
                  <div className="feat_sec_img"><img src="/images/feat_img3.png" alt="image" /></div>
                  <div className="feat_txt">Lorem Ipusum Text</div>
                  <div className="btm_rgt">
                    <div className="btm_arc">Rabbits</div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="content_lft">
            <div className="contnt_2">
              <div className="div_a">
                <div className="div_title">User Interface PSD Source files Web Designing for web</div>
                <div className="btm_rgt">
                  <div className="btm_arc">{this.state.cat}</div>
                </div>
                <div className="div_top">
                  <div className="div_top_lft"><img src="/images/img_6.png" />{this.state.user}</div>
                  <div className="div_top_rgt"><span className="span_date">02 Jan 2014</span><span className="span_time">11:15am</span></div>
                </div>
                <div className="div_image"><img src={"http://localhost:8081/"+ this.state.img} alt="pet" /></div>
                <div className="div_btm">
                  <div className="btm_list">
                    <ul>
                      <li><a href="#"><span className="btn_icon"><img src="/images/icon_001.png" alt="share" /></span>Share</a></li>
                      <li><a href="#"><span className="btn_icon"><img src="/images/icon_002.png" alt="share" /></span>Flag</a></li>
                      <li><a ><span className="btn_icon"><img src="/images/icon_003.png" alt="share" /></span>{this.state.like} Likes</a></li>
                      <li>
                        <a onClick={this.Comments}>
                            <span className="btn_icon">
                                <img src="/images/icon_004.png" alt="share" />
                            </span>{this.state.noOfComment} Comments</a>
                            
                        </li>
                        <div className="cmnt_div">
                      <form id="DoOriginalComment" style={{display:"none"}} onSubmit={this.SubmitDooComment}>
                          <br></br>
                      <input type="text" placeholder="Add a Comment" name="doComm" className="cmnt_bx" required/>
                      <br></br>
                      <input type="submit" className="sub_bttn" defaultValue="Submit Comment" />
                      </form>
                  </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="contnt_3">
              <ul>
              <li>
                  
                  <div >
                  {this.state.comment.map((resp , i) => <FetchCommentChild key={i} comm={resp} user={this.state.user} />)}

                    {/* This is an example of a comment. You can create as many comments like this one or sub
                    comments as you like and manage all of your content inside your Account. */}
                  </div>
                  <div>{this.state.commentRes.map((res,i) => <ChildDoMM  key={i} comres={res} user={this.state.user} />)}</div>
                  <input type="button" defaultValue="Reply" className="orng_btn" onClick={this.DoComment0}/>
                  <div className="cmnt_div">
                  <div >
                    <form id="DoCommentId0" style={{display:"none"}} onSubmit={this.SubmitDoCommentRep}>
                        <br></br>
                    <input type="text" placeholder="Add a Comment" name="doCommRep" className="cmnt_bx" />
                    <br></br>
                    <input type="submit" className="sub_bttn" defaultValue="Submit Comment" />
                    </form>
                    </div>

                  </div>
                </li>
                  
                  <li>
                  <div className="list_image">
                    <div className="image_sec"><img src="/images/post_img.png" /></div>
                    <div className="image_name">Bharat</div>
                  </div>
                  <div className="list_info">
                    This is an example of a comment. You can create as many comments like this one or sub
                    comments as you like and manage all of your content inside your Account.
                  </div>
                  <input type="button" defaultValue="Reply" className="orng_btn" onClick={this.DoComment1}/>
                  <div className="cmnt_div">
                  <ChildComment1 />
                  </div>
                </li>
                <li>
                  <div className="list_image">
                    <div className="image_sec"><img src="/images/post_img.png" /></div>
                    <div className="image_name">Bharat</div>
                  </div>
                  <div className="list_info">
                    This is an example of a comment. You can create as many comments like this one or sub
                    comments as you like and manage all of your content inside your Account.
                  </div>
                  <input type="button" defaultValue="Reply" className="orng_btn" onClick={this.DoComment2}/>
                  <div className="cmnt_div">
                    <ChildComment2 />
                 {//  <input type="text" defaultValue="Add a Comment" className="cmnt_bx" />
                   //<input type="submit" className="sub_bttn" defaultValue="Submit Comment" />
                    }</div>
                </li>
                <li>
                  <div className="list_image">
                    <div className="image_sec"><img src="/images/post_img.png" /></div>
                    <div className="image_name">Bharat</div>
                  </div>
                  <div className="list_info">
                    This is an example of a comment. You can create as many comments like this one or sub
                    comments as you like and manage all of your content inside your Account.
                  </div>
                  <input type="button" defaultValue="Reply" className="orng_btn" onClick={this.DoComment3}/>
                  <div className="cmnt_div">
                  <ChildComment3 />
                  </div>
                </li>
                {/* <li>
                  <div className="cmnt_div1">
                    <input type="text" defaultValue="Enter your Comment" className="cmnt_bx1" />
                    <input type="submit" className="sub_bttn1" defaultValue="Submit Comment" />
                  </div>
                </li> */}
              </ul>
              <div className="view_div"><a href="#">View more</a></div>
            </div>
          </div>
        </div>
      </div>
     </div>
  );
}
}
class FetchCommentChild extends React.Component {
  render(){
    return(
      <div>
            <div className="list_info" >
                <div className="list_image">
                    <div className="image_sec"><img src="/images/post_img.png" /></div>
                    <div className="image_name">{this.props.user}</div>
                  </div>
                  <div className="list_info">
                    {this.props.comm}
                    {/* This is an example of a comment. You can create as many comments like this one or sub
                    comments as you like and manage all of your content inside your Account. */}
                  </div>
                  </div>
                  
      </div>
    )
  }
}

class ChildDoMM extends React.Component {
  render() {
      return(
          <div >
              <div className="list_info" >
                <div className="list_image" style={{float:"right"}}>
                    <div className="image_sec"><img src="/images/post_img.png" /></div>
                    <div className="image_name">{this.props.user}</div>
                  </div>
                  <div className="list_info">
                    {this.props.comres}
                  </div>
                  </div>
          </div>
      )
  }
}
class ChildComment1 extends React.Component {
    render() {
        return(
            <div >
            <form id="DoCommentId1" style={{display:"none"}} onSubmit={this.SubmitDoComment}>
                <br></br>
            <input type="text" placeholder="Add a Comment" name="doComm" className="cmnt_bx" />
            <br></br>
            <input type="submit" className="sub_bttn" defaultValue="Submit Comment" />
            </form>
            </div>
        )
    }
}
class ChildComment2 extends React.Component {
    render() {
        return(
            <div >
            <form id="DoCommentId2" style={{display:"none"}} onSubmit={this.SubmitDoComment}>
                <br></br>
            <input type="text" placeholder="Add a Comment" name="doComm" className="cmnt_bx" />
            <br></br>
            <input type="submit" className="sub_bttn" defaultValue="Submit Comment" />
            </form>
            </div>
        )
    }
}
class ChildComment3 extends React.Component {
    render() {
        return(
            <div >
            <form id="DoCommentId3" style={{display:"none"}} onSubmit={this.SubmitDoComment}>
                <br></br>
            <input type="text" placeholder="Add a Comment" name="doComm" className="cmnt_bx" />
            <br></br>
            <input type="submit" className="sub_bttn" defaultValue="Submit Comment" />
            </form>
            </div>
        )
    }
}
export default SinglePost;