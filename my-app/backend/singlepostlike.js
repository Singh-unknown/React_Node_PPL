var mongoose = require("mongoose");
var schema = mongoose.Schema({
   _id:String,
   userid:String,
        likes:String 
   //comments:String
});
module.exports = mongoose.model("singlepostlike", schema);
