var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var Mongoose = require("mongoose");
var router = require("./userRouter");
var cors = require("cors");
Mongoose.connect("mongodb://localhost:27017/nodedb", { useUnifiedTopology: true, useNewUrlParser:true});
app.use(express.static("public"));
app.use(express.static("uploads"));
app.use(express.static("inviteuploads"));
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use("/", router);
app.listen(8081, () => {
  console.log("Server is running at http://127.0.0.1:8081/");
});
