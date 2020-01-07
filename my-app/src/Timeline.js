import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
var i=1,j=1,m=1;
var imageTempId;
class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid:localStorage.getItem('id'),
       Email: "",
       Username: "",
       Category:"",
      Filess:"",
      ReceivedData:[],
      inviteReceive:[],
      commingImage:[],
      commingIcon:[],
      SendSinglePost:[],
      like:0,
      comment:0
    };
  }
  SubmitFunction = event => {
    event.preventDefault();
    console.log("-------------------------------");
    // this.setState({
    //   Username: event.target.user.value,
    //   Email: event.target.email.value,
    //   Category:event.target.category.value,
    //   Filess: event.target.file.value
    // });
    const formData = new FormData()
   formData.append('username',event.target.user.value)
   formData.append('email',event.target.email.value)
    formData.append('category',event.target.category.value)
    formData.append('file',event.target.file.files[0])
    axios.post("http://localhost:8081/timeline_get", formData).then(res => {
      console.log("res is :- ", res.data);
      console.log("safgddsfdsafdsafdsafdsfdsfsdfdsfsf",res.data)
      var SetData = res.data.dataFromDatabase.map(data=>{return data})
        this.setState({ReceivedData:SetData});
      document.getElementById("FormId").style.display = "none";
    }).catch((err) => {console.log(err)});
    
      event.target.email.value =null;
     event.target.user.value = null;
     event.target.category.value = null;
     event.target.file.value = null;
  };
   FormFunction = () => {
     console.log("i is is:-................ ");
     if(i%2!= 0)
     {
     document.getElementById("FormId").style.display = "block";
     console.log("i in upload is :- ",i)
     i++;
     }
     else{
       document.getElementById("FormId").style.display = "none";
        i++;
      }
    };
   CategorySubmitFunction = event => {
     event.preventDefault();
     const InviteformData = new FormData()
   InviteformData.append('category',event.target.category.value)
   InviteformData.append('file',event.target.file.files[0])
   axios.post("http://localhost:8081/invite_get",InviteformData).then(res=>{
    console.log("res of Invite is :- ", res.data);
    var tempDataForInvite = res.data.dataFromDatabase.reverse().map(data => {return data})
    this.setState({inviteReceive:tempDataForInvite});
    console.log("data in invite :- ", this.state.inviteReceive)
    document.getElementById("InviteId").style.display = "none";
   }).catch((err)=>{console.log(err)})
   event.target.category.value = null;
   event.target.file.value = null;
   }
  InviteFunction = () => {
    if(j%2!= 0)
     {
     document.getElementById("InviteId").style.display = "block";
     console.log("j in upload is :- ",j)
     j++;
     }
     else{
       document.getElementById("InviteId").style.display = "none";
        j++;
      }
    
  }
  LikesAtDidmount = event => {
    // event.preventDefault();
    console.log("after didmount fetch likes:-----------------",imageTempId)
     console.log("userid at single post is:- ",this.state.userid);
     console.log("like is is like :- ",this.state.like);
     const LikesSend = {
         id:this.state.userid
     }
     axios.post("http://localhost:8081/fetchLikes_get",LikesSend).then(res => {
         this.setState({like:res.data.dataFromDatabase[0].likes,
        defaultlike:res.data.dataFromDatabase[0].likes
        })
         console.log("res in likes is:- ",res.data);
         console.log("likes from db is:- ",res.data.dataFromDatabase[0].likes);
     }).catch(err => console.log(err));
 
 //this.setState({like:this.state.like+1})
 console.log("likes",this.state.like);
 }
  LikesFunction = event => {
    imageTempId = event;
    console.log("event is-------------------------------------",event)
    console.log("like fun in timeline");
    console.log("userid at single post is:- ",this.state.userid);
    console.log("like is is like :- ",this.state.like);
    const LikesSend = {
        imageid: event,
        userid:this.state.userid 
    }
    console.log("likes before axios is:- ",LikesSend.likes)
    axios.post("http://localhost:8081/Likes_get",LikesSend).then(res => {
      console.log("#$#$#$#$#$ :- ",res.data);
      if(res.data === "Already Liked"){

      }else{
        this.setState({like:res.data[0].likes.length})
        console.log("res in likes is:- ",res.data);
      }
        console.log("likes from db is:- ",res.data[0].likes.length);
    }).catch(err => console.log(err));
    
    
//this.setState({like:this.state.like+1})
console.log("likes",this.state.like);
  }
  ShowUploadedImages = event => {
    axios.post("http://localhost:8081/uploadimages_get").then(res=>{
    console.log("res of Invite is :- ", res.data);
    var tempCommingImages = res.data.dataFromDatabase.reverse().map(data => {return data})
    this.setState({commingImage:tempCommingImages});
  });
  }
  ShowUploadInvite =event => {
    axios.post("http://localhost:8081/uploadicons_get").then(res=>{
    console.log("res of Invite when fetching icons is :- ", res.data);
    var tempCommingIcon = res.data.dataFromDatabase.map(data => {return data})
    this.setState({commingIcon:tempCommingIcon});
  });
  }
  componentDidMount = () => {
    this.ShowUploadedImages();
    this.ShowUploadInvite();
    this.LikesAtDidmount();
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="content">
            <div className="content_rgt">
              <div className="rght_btn">
                {" "}
                <span className="rght_btn_icon">
                  <img src="images/btn_iconb.png" alt="up" />
                </span>{" "}
                <span className="btn_sep">
                  <img src="images/btn_sep.png" alt="sep" />
                </span>{" "}
                <a href="#" onClick={this.FormFunction}>
                  Upload Post
                </a>{" "}
              </div>
              <div className="rght_btn">
                {" "}
                <span className="rght_btn_icon">
                  <img src="images/btn_icona.png" alt="up" />
                </span>{" "}
                <span className="btn_sep">
                  <img src="images/btn_sep.png" alt="sep" />
                </span>{" "}
                <a href="#" onClick={this.InviteFunction}>Invite Friends</a>{" "}
              </div>
              <div>
              <form id="InviteId" style={{display:"none"}} onSubmit={this.CategorySubmitFunction} encType="multipart/form-data">
                <br></br>
                <label>Category</label>
                <input type="text" name="category" placeholder="Category" /><br></br>
                <label>Icon</label>
                <input type="file" name="file" /><br></br>
                <input type="submit" value="Submit" />
              </form>
              </div>
              <div className="rght_cate">
                <div className="rght_cate_hd" id="rght_cat_bg">
                  Categories
                </div>
                <div className="rght_list">
                  <ul>
                    <li>
                      <a href="#">
                        <span className="list_icon">
                          <img src="images/icon_01.png" alt="up" />
                        </span>{" "}
                        CATS
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="list_icon">
                          <img src="images/icon_02.png" alt="up" />
                        </span>{" "}
                        Dogs
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="list_icon">
                          <img src="images/icon_03.png" alt="up" />
                        </span>{" "}
                        Birds
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="list_icon">
                          <img src="images/icon_04.png" alt="up" />
                        </span>{" "}
                        Rabbit
                      </a>
                      </li>
                    <div>
                      {this.state.inviteReceive.reverse().map((re,i )=> <InviteChild  key={i} result ={re} />)}
                      {this.state.commingIcon.reverse().map((re,i )=> <InviteChild  key={i} result ={re} />)}
                    </div>
                    <li>
                      <a href="#">
                        <span className="list_icon">
                          <img src="images/icon_05.png" alt="up" />
                        </span>{" "}
                        Others
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="rght_cate">
                <div className="rght_cate_hd" id="opn_cat_bg">
                  Featured
                </div>
                <div className="sub_dwn">
                  <div className="feat_sec">
                    <div className="feat_sec_img">
                      <img src="images/feat_img1.png" alt="image" />
                    </div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                  </div>
                  <div className="feat_sec">
                    <div className="feat_sec_img">
                      <img src="images/feat_img2.png" alt="image" />
                    </div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                    <div className="btm_rgt">
                      <div className="btm_arc">Dogs</div>
                    </div>
                  </div>
                  <div className="feat_sec">
                    <div className="feat_sec_img">
                      <img src="images/feat_img3.png" alt="image" />
                    </div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                    <div className="btm_rgt">
                      <div className="btm_arc">Rabbits</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content_lft">
              <div className="contnt_1">
                <div className="list_1">
                  <ul>
                    <li>
                      <input type="checkbox" className="chk_bx" />
                      Friends
                    </li>
                    <li>
                      <input type="checkbox" className="chk_bx" />
                      Flaged
                    </li>
                  </ul>
                </div>
                <div className="timeline_div">
                  <div className="timeline_div1">
                    <div className="profile_pic">
                      <img src="images/timeline_img1.png" />
                      <div className="profile_text">
                        <a href="#">Change Profile Pic</a>
                      </div>
                    </div>
                    <div className="profile_info">
                      <div className="edit_div">
                        <a href="#">
                          Edit <img src="images/timeline_img.png" />
                        </a>
                      </div>
                      <div className="profile_form">
                        <ul>
                          <li>
                            <div className="div_name1">Name :</div>
                            <div className="div_name2">Stefiney Gibbs</div>
                          </li>
                          <li>
                            <div className="div_name1">Sex :</div>
                            <div className="div_name2">Female</div>
                          </li>
                          <li>
                            <div className="div_name1">Description :</div>
                            <div className="div_name3">
                              This is an example of a comment. You can create as
                              many comments like this one or sub comments as you
                              like and manage all of your content inside
                              Account.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="timeline_div2">
                    <ul>
                      <li>
                        <a href="#" className="active">
                          Timeline{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">About </a>
                      </li>
                      <li>
                        <a href="#">Album</a>
                      </li>
                      <li>
                        <a href="#"> Pets</a>
                      </li>
                      <li>
                        <a href="#">My Uploads </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div style={{margin:"30px"}}>
                <br></br><br></br>
                <form id="FormId" onSubmit={this.SubmitFunction} style={{display:"none"}} encType="multipart/form-data">
                 <label>Username..</label>
                <input type="text" name="user" placeholder="Username" />
                <br></br><br></br>
                <label>Email</label>
                <input type="email" name="email" placeholder="Email.." />
                <br></br><br></br>
                <label>Category</label>
                <input type="text" name="category" placeholder="Category" />
                <br></br><br></br> 
                <label>Select File :- </label>
                <input type="file" name="file"  />
                <br></br><br></br>
                <input type="submit" value="Submit"  />
                <br></br>
                <br></br>
                </form>
              </div>
              {console.log("ffhjvjhgjk",this.state.ReceivedData)}
              <div><ul> {this.state.ReceivedData.map((res,i) => <Child key = {i} data={res} LikesFunction={this.LikesFunction} like={this.state.like}/> )} 
              {this.state.commingImage.map((res,i) => <Child key = {i} data={res} LikesFunction={this.LikesFunction} like={this.state.like}/> )}
              </ul>
              </div>

              
              <div className="contnt_2">
                <div className="div_a">
                  <div className="div_title">
                    User Interface PSD Source files Web Designing for web
                  </div>
                  <div className="btm_rgt">
                    <div className="btm_arc">Cats</div>
                  </div>
                  <div className="div_top">
                    <div className="div_top_lft">
                      <img src="images/img_6.png" />
                      Steave Waugh
                    </div>
                    <div className="div_top_rgt">
                      <span className="span_date">02 Jan 2014</span>
                      <span className="span_time">11:15am</span>
                    </div>
                  </div>
                  <div className="div_image">
                    <img src="images/lft_img.png" alt="pet" />
                  </div>
                  <div className="div_btm">
                    <div className="btm_list">
                      <ul>
                        <li>
                          <a href="#">
                            <span className="btn_icon">
                              <img src="images/icon_001.png" alt="share" />
                            </span>
                            Share
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="btn_icon">
                              <img src="images/icon_002.png" alt="share" />
                            </span>
                            Flag
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="btn_icon">
                              <img src="images/icon_003.png" alt="share" />
                            </span>
                            0 Likes
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="btn_icon">
                              <img src="images/icon_004.png" alt="share" />
                            </span>
                            4 Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contnt_2">
                <div className="div_a">
                  <div className="div_title">
                    User Interface PSD Source files Web Designing for web
                  </div>
                  <div className="btm_rgt">
                    <div className="btm_arc">Dogs</div>
                  </div>
                  <div className="div_top">
                    <div className="div_top_lft">
                      <img src="images/img_6.png" />
                      Steave Waugh
                    </div>
                    <div className="div_top_rgt">
                      <span className="span_date">02 Jan 2014</span>
                      <span className="span_time">11:15am</span>
                    </div>
                  </div>
                  <div className="div_image">
                    <img src="images/lft_img1.png" alt="pet" />
                  </div>
                  <div className="div_btm">
                    <div className="btm_list">
                      <ul>
                        <li>
                          <a href="#">
                            <span className="btn_icon">
                              <img src="images/icon_001.png" alt="share" />
                            </span>
                            Share
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="btn_icon">
                              <img src="images/icon_002.png" alt="share" />
                            </span>
                            Flag
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="btn_icon">
                              <img src="images/icon_003.png" alt="share" />
                            </span>
                            0 Likes
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="btn_icon">
                              <img src="images/icon_004.png" alt="share" />
                            </span>
                            4 Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class Child extends React.Component  {
render(){
  return (
    <div><li>
  <div className="contnt_2" > 
  <div className="div_a">
    <div className="div_title">
      User Interface PSD Source files Web Designing for web
    </div>
    <div className="btm_rgt">
      <div className="btm_arc">{this.props.data.category}</div>
    </div>
    <div className="div_top">
      <div className="div_top_lft">
        <img src="images/img_6.png" />{this.props.data.user}
      </div>
      <div className="div_top_rgt">
        <span className="span_date">02 Jan 2014 </span>
        <span className="span_time">11:15am</span>
      </div>
    </div>
    <div className="div_image">
      {//console.log("raka is a good boy",this.props.data._id)
      }
     <Link to={"/SinglePost/"+this.props.data._id} > <img src={"http://localhost:8081/"+ this.props.data.image} alt="pet" /></Link>
    </div>
    <div className="div_btm">
      <div className="btm_list">
        <ul>
          <li>
            <a href="#">
              <span className="btn_icon">
                <img src="images/icon_001.png" alt="share" />
              </span>
              Share
            </a>
          </li>
          <li>
            <a href="#">
              <span className="btn_icon">
                <img src="images/icon_002.png" alt="share" />
              </span>
              Flag
            </a>
          </li>
          <li  onClick= { () =>
            this.props.LikesFunction(this.props.data._id)} >
            <a>
              <span className="btn_icon">
                <img src="images/icon_003.png" alt="share" />
              </span>
              {this.props.like} Likes
            </a>
          </li>
          <li>
            <a >
              <span className="btn_icon">
                <img src="images/icon_004.png" alt="share" />
              </span>
              4 Comments
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</li>
</div>


)
}}
class InviteChild extends React.Component {
  render(){
    return(
      <div className="rght_list">
      <li>
      <a href="#">
        <span className="list_icon">
          <img src={"http://localhost:8081/"+ this.props.result.image} alt="up" style={{height:"30px", wigth:"15px"}}/>
        </span>{this.props.result.category}
      </a>
    </li>
    </div>
    )
  }
}
export default Timeline;
