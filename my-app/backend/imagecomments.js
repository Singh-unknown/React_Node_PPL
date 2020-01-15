var mongoose = require("mongoose");
var schema = mongoose.Schema({
   _id:String,
   userid:[], 
   comments:[],
   commentsResponse:[]
});
module.exports = mongoose.model("imagecomments", schema);
