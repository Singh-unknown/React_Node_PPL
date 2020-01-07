var mongoose = require("mongoose");
var schema = mongoose.Schema({
   user: String,
   email: String,
   category: String,
  image: String,
  likes:[]
});
module.exports = mongoose.model("pplmodels", schema);
