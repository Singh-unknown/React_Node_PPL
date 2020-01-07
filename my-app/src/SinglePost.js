import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
var IdFromTimeline;
var i =1, j=1,k=1,l=1,m=1;
class SinglePost extends React.Component {
constructor(props){
    super(props)
    this.state={
        id:this.props.match.params.id,
        img:"",
        cat:"",
        user:"",
        defaultlike: 0,
        defaultcomment: 0,
        like:0,
        comment:0,
        userid:localStorage.getItem('id')
    }
console.log("idfromtimeline is:- ",this.props.match.params.id);
console.log("datas is:- ",this.props.location);
}
ShowImagesFunction =event => {

}
componentDidMount= () =>{
   // this.ShowImagesFunction();
   IdFromTimeline = this.props.location.aboutProps;
   console.log("..................",IdFromTimeline)
    console.log("did mount",this.props.location.aboutProps);
    console.log("ShowImagesFunction is here :-  ");
    let dataSend = {
        _id:this.state.id
    }
    console.log("id befe axios :- ",dataSend)
    
       axios.post("http://localhost:8081/SinglePostFetch_get",dataSend).then(res =>{
           console.log("res in SinglePost is:- ",res.data);
           this.setState({
                       img:res.data.dataFromDatabase[0].image,
                       cat:res.data.dataFromDatabase[0].category,
                       user: res.data.dataFromDatabase[0].user
           })
           console.log("img is is is :- ",this.state.img);
       }).catch(err => console.log(err))
      // this.LikesAtDidmount();    
}
// LikesAtDidmount = event => {
//     // event.preventDefault();
//     console.log("after didmount fetch likes:-----------------")
//      console.log("userid at single post is:- ",this.state.userid);
//      console.log("like is is like :- ",this.state.like);
//      const LikesSend = {
//          id:this.state.userid
//      }
//      axios.post("http://localhost:8081/fetchLikes_get",LikesSend).then(res => {
//          this.setState({like:res.data.dataFromDatabase[0].likes})
//          console.log("res in likes is:- ",res.data);
//          console.log("likes from db is:- ",res.data.dataFromDatabase[0].likes);
//      }).catch(err => console.log(err));
 
//  //this.setState({like:this.state.like+1})
//  console.log("likes",this.state.like);
//  }
// Likes = event => {
//    // event.preventDefault();
//     console.log("userid at single post is:- ",this.state.userid);
//     console.log("like is is like :- ",this.state.like);
//     if(m <= 2){
//     const LikesSend = {
//         id:this.state.userid,
//         likes: this.state.defaultlike++
//     }
//     axios.post("http://localhost:8081/Likes_get",LikesSend).then(res => {
//         this.setState({like:res.data.dataFromDatabase[0].likes})
//         console.log("res in likes is:- ",res.data);
//         console.log("likes from db is:- ",res.data.dataFromDatabase[0].likes);
//     }).catch(err => console.log(err));
//     m++;
//     }
// //this.setState({like:this.state.like+1})
// console.log("likes",this.state.like);
// }
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



DoComment1 = event => {
    console.log("i in DComment is:- ",i);
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
    console.log("i in DComment is:- ",j);
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
    console.log("k in DComment is:- ",k);
    if(k%2!= 0){
        document.getElementById("DoCommentId3").style.display = "block";
        k++;
    }
    else{
        document.getElementById("DoCommentId3").style.display = "none";
        k++;
    }
}
static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps is running")
    return null;
}
render(){
return (
    <div>

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
                      <li><a  onClick={this.Likes}><span className="btn_icon"><img src="/images/icon_003.png" alt="share" /></span>{this.state.like} Likes</a></li>
                      <li>
                        <a onClick={this.Comments}>
                            <span className="btn_icon">
                                <img src="/images/icon_004.png" alt="share" />
                            </span>{this.state.comment} Comments</a>
                            
                        </li>
                        <div className="cmnt_div">
                            <ChildDoComments  />
                  </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="contnt_3">
              <ul>
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
class ChildDoComments extends React.Component {
    render(){
        return(<div>
            <form id="DoOriginalComment" style={{display:"none"}} onSubmit={this.SubmitDooComment}>
                <br></br>
            <input type="text" placeholder="Add a Comment" name="doComm" className="cmnt_bx" required/>
            <br></br>
            <input type="submit" className="sub_bttn" defaultValue="Submit Comment" />
            </form>
        </div>)
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