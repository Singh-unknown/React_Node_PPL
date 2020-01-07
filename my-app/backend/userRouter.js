var express = require("express");
var router = express.Router();
var userApi = require("./userapi");
var multer = require("multer");
var pplmongoDb = require("./pplschema");
var pplSinglePostLikemongoDb = require("./singlepostlike");
var invitepplmongoDb = require("./invitepplschema");
var bodyparser = require("body-parser");
//console.log("before storage :-    ------")
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, './uploads')
  //console.log("dffd",req.body);
},
filename: function (req, file, cb) {
  cb(null,file.originalname )
  //console.log("dffddsfdsfsfs..........",req.body);
  //console.log("file.orifdvdcx");
}
})
var upload = multer({storage: storage});

var storageinvite = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, './inviteuploads')
  //console.log("dffd",req.body);
},
filename: function (req, file, cb) {
  cb(null,file.originalname )
  //console.log("dffddsfdsfsfs..........",req.body);
  //console.log("file.orifdvdcx");
}
})
var uploadinvite = multer({storage: storageinvite});
//var temporaryvar = "";
// router.get("/start", function(req, res) {
//   res.sendFile(__dirname + "/public/" + "chooseoption.html");
// });
// router.post("/", function(req, res) {
//   temporaryvar = req.body.operation;
//   if (temporaryvar === "insert") {
//     insertfunction();
//   } else if (temporaryvar === "fetch") {
//     fetchfunction();
//   } else if (temporaryvar === "delete") {
//     deletefunction();
//   } else if (temporaryvar === "update") {
//     updatefunction();
//   } else {
//     anotherfunction();
//   }
// });

//function insertfunction() {
//router.get("/", function(req, res) {
// res.sendFile(__dirname + "/public/" + "insertdata.html");
// });
router.post("/process_get", async function(req, res) {
  try {
    let recdata = await userApi.SendData(req.body);
    //console.log(recdata);
    res.send(recdata);
  } catch (err) {
    console.error(err);
  }
});
//}
//function fetchfunction() {
//router.get("/", function(req, res) {
//res.sendFile(__dirname + "/public/" + "fetch.html");
//});
router.post("/fetch_get", async function(req, res) {
  try {
    let k = await userApi.FetchData(req.body);
    res.send(k);
  } catch (err) {
    console.log(err);
  }
});
router.post("/login_get", async function(req, res) {
  try {
    let k = await userApi.LogIn(req.body);
    //console.log("k is is is is at router for ppllogin",k)
    if(k.length > 0){
      let userDataIs = {
        ss:"You Have Secussfully Loged In......",
        id:k
      }
      //let ss = "You Have Secussfully Loged In......";
    res.send(userDataIs);
    console.log("userDataIs :-",userDataIs);
    }
  } catch (err) {
    console.log(err);
  }
});
// router.post("/timeline_get", async function(req, res) {
//   try {
//     let k = await userApi.Timeline(req.body);
//     res.send(k);
//   } catch (err) {
//     console.error(err);
//   }
// });

router.post('/invite_get', uploadinvite.single('file'),function (req, res)  {
  //console.log("File body", req.file);
  //console.log(req.file.originalname);
   try {
    const data={
      category:req.body.category,
      image:req.file.originalname
      }
    //       console.log("Entered in the timeline....");
            invitepplmongoDb.create(data, function(err, result) {
              if(result){
              invitepplmongoDb.find({},function(err, re) {
                let StatusInResult = {
                dataFromDatabase: re,
                status: "Category Inserted"
                };
                console.log("profile is :- ",StatusInResult.status);
                res.send(StatusInResult);
                })
                } else {
                let StatusInResult = {
                dataFromDatabase: result,
                status: "Error"
                };
                console.log("Error is :- ",StatusInResult);
                res.send(StatusInResult);
                }
              });
       } catch (err) {
        console.error(err);
      }
      })

      router.post('/timeline_get', upload.single('file'),function (req, res)  {
        console.log("File body", req.file);
        console.log(req.file.originalname);
         try {
          const data={
            user:req.body.username,
            email:req.body.email,
            category:req.body.category,
            image:req.file.originalname
            }
                 console.log("Entered in the timeline....");
                  pplmongoDb.create(data, function(err, result) {
                    if(result){
                    pplmongoDb.find({},function(err, re) {
                      let addStatusInResult = {
                      dataFromDatabase: re,
                      status: "Profile Inserted"
                      };
                      console.log("profile is :- ",addStatusInResult.status);
                      res.send(addStatusInResult);
                      })
                      } else {
                      let addStatusInResult = {
                      dataFromDatabase: result,
                      status: "Error"
                      };
                      console.log("Error is :- ",addStatusInResult);
                      res.send(addStatusInResult);
                      }
                    });
             } catch (err) {
              console.error(err);
            }
            })

router.post('/uploadimages_get',function (req, res)  {
  try {
      console.log("Entered in the timeline....");
       pplmongoDb.find({},function(err, re) {
        let StatusInResult = {
                      dataFromDatabase: re,
                      status: "images data fetched"
                        };
                   console.log("profile is :- ",StatusInResult.status);
                   res.send(StatusInResult);
                     })
             
             } catch (err) {
           console.error(err);
            }
           })
            
router.post('/uploadicons_get',function (req, res)  {
  try {
    console.log("Entered in the timeline....");
    invitepplmongoDb.find({},function(err, re) {
     let StatusInResult = {
       dataFromDatabase: re,
       status: "icons data fetched"
      };
    console.log("profile is :- ",StatusInResult.status);
    res.send(StatusInResult);
    })
    } catch (err) {
     console.error(err);
      }
  })
router.post('/SinglePostFetch_get', async function(req,res) {
  console.log("singlepost at userrouter is:- ",req.body);
  try {
    console.log("Entered in the timeline...." );
    pplmongoDb.find({_id:req.body},function(err, re) {
     let StatusInResult = {
       dataFromDatabase: re,
       status: "singlepost data fetched"
      };
      console.log("data fetched in singlepost:- ",re)
    console.log("profile is :- ",StatusInResult.status);
   res.send(StatusInResult);
    })
    } catch (err) {
     console.error(err);
      }
})

router.post('/fetchLikes_get', async function(req,res) {
  console.log("singlepost likes fetch at userrouter is:- ",req.body);
  try {
    console.log("Entered in the timeline...." );
    pplmongoDb.find({_id:req.body.id},function(err, re) {
     let StatusInResult = {
       dataFromDatabase: re,
       status: "singlepost data fetched for likes"
      };
      console.log("data fetched in singlepost:- ",re)
    console.log("profile is :- ",StatusInResult.status);
   res.send(StatusInResult);
    })
    } catch (err) {
     console.error(err);
      }
})

router.post('/Likes_get', async function(req,res) {
  console.log("likes of singlepost at userrouter is:- ",req.body);
  try {
    const data={
      _id:req.body.imageid,
      likes:req.body.userid
    }
    console.log("userId is",req.body.userid);
    pplmongoDb.find({_id:req.body.imageid},{likes:{$elemMatch :{$eq:req.body.userid}},_id:0}, function(err, resu){
      console.log("-..######  :- ",resu[0].likes.length);
      if(resu[0].likes.length > 0){
        console.log("res of find like in db :- ", resu);
        let ConstVarForLikesSend = "Already Liked";
        res.send(ConstVarForLikesSend);
      }
      else{
        pplmongoDb.updateOne({_id:req.body.imageid},{$push:{likes:req.body.userid}}, function (err,result){
          if(result){
            console.log(result)
            pplmongoDb.find({_id:req.body.imageid},{likes:1}, function(err,re){
              if(result){
                console.log("res is at likes on timeline at router is :- ",re[0].likes)
                console.log("likes is :-", re[0].likes.length);
                res.send(re);
              }else{
                console.log(err);
                res.send(err);
              }
            })
          }
           else{
                 console.log(err)
                  res.send(err);
          }
        })

      }
    })
    // console.log("data is:- ",data);
    // console.log("Entered in the timeline.... with Singlepost likes..",req.body.imageid);
    // //console.log("res of body of likes is:- ",req.body.likes)
    // pplmongoDb.find({_id:req.body.imageid}, function(err, result){
    //   console.log("result from db to check id is : -",result);
    //   if(result.length > 0)
    //   {
    //     console.log("----------------------------------------------------")
    //     pplmongoDb.update(({_id:req.body.imageid},{$inc:{likes:1}}), function(err, result) {
    //       console.log("result at router of singlepost like:- ",result);
    //     if(result){
    //       pplmongoDb.find({_id:req.body.imageid},function(err, re) {
    //         let addStatusInResult = {
    //         dataFromDatabase: re,
    //         status: "likes is updated.."
    //         };
    //         console.log("likes in mongodb is:- ",addStatusInResult.status);
    //         res.send(addStatusInResult);
    //         })
    //         } else {
    //         let addStatusInResult = {
    //         dataFromDatabase: result,
    //         status: "Error"
    //         };
    //         console.log("Error is :- ",addStatusInResult);
    //         res.send(addStatusInResult);
    //         }
    //       });
    //   }
    //   else{
    //     pplmongoDb.create(data, function(err, result) {
    //       console.log("result at router of singlepost like:- ",result);
    //     if(result){
    //       pplmongoDb.find({_id:req.body.imageid},function(err, re) {
    //         let addStatusInResult = {
    //         dataFromDatabase: re,
    //         status: "likes is inserted.."
    //         };
    //         console.log("likes in mongodb is:- ",addStatusInResult.status);
    //         res.send(addStatusInResult);
    //         })
    //         } else {
    //         let addStatusInResult = {
    //         dataFromDatabase: result,
    //         status: "Error"
    //         };
    //         console.log("Error is :- ",addStatusInResult);
    //         res.send(addStatusInResult);
    //         }
    //       });
    
    //   }
    // })
    } catch (err) {
     console.error(err);
      }
})



//}
//function deletefunction() {
//router.get("/", function(req, res) {
//  res.sendFile(__dirname + "/public/" + "delete.html");
 //});
router.post("/delete_get", async function(req, res) {
  try {
    let k = await userApi.DeleteData(req.body);
    res.send(k);
  } catch (err) {
    console.log(err);
  }
});
//}
//function updatefunction() {
//router.get("/", function(req, res) {
// res.sendFile(__dirname + "/public/" + "updatedata.html");
// });
router.post("/update_get", async function(req, res) {
  try {
    let k = await userApi.UpdateData(req.body);
    res.send(k);
  } catch (err) {
    console.log(err);
  }
});
//}
//function anotherfunction() {
// console.log("You have selected a wrong option-------------");
//}
module.exports = router;
