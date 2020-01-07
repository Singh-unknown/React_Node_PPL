var mongoose = require("mongoose");
var schema = mongoose.Schema({
   category: String,
  image: String
});
module.exports = mongoose.model("invitepplmodels", schema);
