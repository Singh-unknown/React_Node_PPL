var mongoose = require("mongoose");
var schema = mongoose.Schema({
  Username: String,
  Password: String,
  Email: String,
  FirstName: String,
  LastName: String
});
module.exports = mongoose.model("Newmodels", schema);
