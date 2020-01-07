var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var urlencodedparser = bodyparser.urlencoded({ extended: true });
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/nodedb");
app.use(express.static("public"));
app.use(bodyparser.json());
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/" + "one.html");
});
app.post("/process_get", urlencodedparser, function(req, res) {
  var Schema = new mongoose.Schema({
    fname: String,
    lname: String,
    age: Number,
    mail: String,
    number: String,
    file: String,
    file1: String,
    password: String
  });
  var usermodels = mongoose.model("usermodels", Schema);
  var data = new usermodels(req.body);
  data
    .save()
    .then(item => {
      res.send(req.body);
    })
    .catch(err => {
      if (err) {
        res.send(err);
      }
    });
});
app.listen(8081, () => {
  console.log("Server is running at http://127.0.0.1:8081");
});
