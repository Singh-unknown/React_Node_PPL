var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var urlencodedparser = bodyparser.urlencoded({ extended: true });
//var multer = require("multer");
app.use(express.static("public"));
//
//app.use(multer({ dest: /tmp/ }));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/" + "one.html");
});
app.post("/process_get", urlencodedparser, function(req, res) {
  data = {
    fname: req.body.fname,
    lname: req.body.lname,
    age: req.body.age,
    email: req.body.mail,
    Pnone_number: req.body.number,
    file: req.body.file,
    file1: req.body.file1,
    password: req.body.password
  };
  console.log(data);
  res.end(JSON.stringify(data));
});
app.listen(8081, () => {
  console.log("Server is running ");
});
