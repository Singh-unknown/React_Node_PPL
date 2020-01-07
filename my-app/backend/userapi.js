var mongoDb = require("./userschema");
var pplmongoDb = require("./pplschema");
module.exports = {
  SendData: function(data) {
    return new Promise((resolve, reject) => {
      console.log("data in api................");
      mongoDb.find({ Email: data.Email }, function(err, result) {
        if (err) {
          console.log("err", err);
          reject(err);
        } else if (result.length > 0) {
          console.log("already exists", result);
          let ss = "E-Mail Already exist!..";
          resolve(ss);
        } else {
          mongoDb.create(data, function(err, result) {
            if (err) reject(err);
            else resolve(result);
          });
        }
      });
    });
  },
  LogIn: function(data) {
    return new Promise((resolve, reject) => {
      console.log("For LogIn ....");
      mongoDb.find({ Email: data.Email, Password: data.Password }, function(
        err,
        result
      ) {
        if (err) {
          console.log("err", err);
          reject(err);
        } else if (result.length > 0) {
          console.log("You Have loged in.",result[0].id);
          //let ss = "You Have Secussfully Loged In......";
          resolve(result[0].id);
          console.log("result id in loginppl is:- ",result[0].id);
        } else {
          mongoDb.find({ Email: data.Email }, function(err, result) {
            if (err) {
              console.log("error occured " + err);
              reject(err);
            } else if (result.length > 0) {
              console.log("email is exists..");
              let ss = "Password does not matched!.";
              resolve(ss);
            } else {
              console.log("Email Does Not exist.");
              let ss = "E-Mail Does Not Exist..";
              resolve(ss);
            }
          });
        }
      });
    });
  },
  FetchData: function(data) {
    return new Promise((resolve, reject) => {
      console.log("Fetching means View the data in the Data Base..");
      mongoDb.find({ firstName: data.firstName, age: data.age }, function(
        err,
        result
      ) {
        if (err) {
          console.log(err);
          reject(err);
        } else if (result.length > 0) {
          console.log("Resultant Data is matched...");
          resolve(result);
        } else {
          let ss = "Sorry The Data that You Want to Fetch Does Not Exists..";
          console.log(ss);
          resolve(ss);
        }
      });
    });
  },
  DeleteData: function(data) {
    return new Promise((resolve, reject) => {
      console.log("You are performed Deletion Operation..........!!!!--");
      mongoDb.remove({ firstName: data.firstName, age: data.age }, function(
        err,
        result
      ) {
        if (err) {
          console.log("there is an error :- " + err);
          reject(err);
        } else {
          console.log("Data is Removed Secussfully............");
          resolve(result);
        }
      });
    });
  },
  UpdateData: function(data) {
    return new Promise((resolve, reject) => {
      const Name = data.firstName;
      const Age = data.age;
      const Selection = data.selection;
      const Newvalue = data.newvalue;
      if (Selection === "age") {
        mongoDb.update(
          { firstName: Name, age: Age },
          { $set: { age: Newvalue } },
          { multi: true },
          function(err, result) {
            if (err) {
              console.log("There is an Error Occured :- " + err);
              reject(err);
            } else {
              console.log(
                "Updation Operation Has Secussfully Done.......!!---.."
              );
              resolve(result);
            }
          }
        );
      } else if (Selection === "firstName") {
        mongoDb.update(
          { firstName: Name, age: Age },
          { $set: { firstName: Newvalue } },
          { multi: true },
          function(err, result) {
            if (err) {
              console.log("There is an Error Occured :- " + err);
              reject(err);
            } else {
              console.log(
                "Updation Operation Has Secussfully Done.......!!---.."
              );
              resolve(result);
            }
          }
        );
      } else if (Selection === "lastName") {
        mongoDb.update(
          { firstName: Name, age: Age },
          { $set: { lastName: Newvalue } },
          { multi: true },
          function(err, result) {
            if (err) {
              console.log("There is an Error Occured :- " + err);
              reject(err);
            } else {
              console.log(
                "Updation Operation Has Secussfully Done.......!!---.."
              );
              resolve(result);
            }
          }
        );
      } else if (Selection === "email") {
        mongoDb.update(
          { firstName: Name, age: Age },
          { $set: { email: Newvalue } },
          { multi: true },
          function(err, result) {
            if (err) {
              console.log("There is an Error Occured :- " + err);
              reject(err);
            } else {
              console.log(
                "Updation Operation Has Secussfully Done.......!!---.."
              );
              resolve(result);
            }
          }
        );
      } else if (Selection === "Number") {
        mongoDb.update(
          { firstName: Name, age: Age },
          { $set: { Number: Newvalue } },
          { multi: true },
          function(err, result) {
            if (err) {
              console.log("There is an Error Occured :- " + err);
              reject(err);
            } else {
              console.log(
                "Updation Operation Has Secussfully Done.......!!---.."
              );
              resolve(result);
            }
          }
        );
      } else if (Selection === "file") {
        mongoDb.update(
          { firstName: Name, age: Age },
          { $set: { file: Newvalue } },
          { multi: true },
          function(err, result) {
            if (err) {
              console.log("There is an Error Occured :- " + err);
              reject(err);
            } else {
              console.log(
                "Updation Operation Has Secussfully Done.......!!---.."
              );
              resolve(result);
            }
          }
        );
      } else if (Selection === "file1") {
        mongoDb.update(
          { firstName: Name, age: Age },
          { $set: { file1: Newvalue } },
          { multi: true },
          function(err, result) {
            if (err) {
              console.log("There is an Error Occured :- " + err);
              reject(err);
            } else {
              console.log(
                "Updation Operation Has Secussfully Done.......!!---.."
              );
              resolve(result);
            }
          }
        );
      } else if (Selection === "Password") {
        mongoDb.update(
          { firstName: Name, age: Age },
          { $set: { Password: Newvalue } },
          { multi: true },
          function(err, result) {
            if (err) {
              console.log("There is an Error Occured :- " + err);
              reject(err);
            } else {
              console.log(
                "Updation Operation Has Secussfully Done.......!!---.."
              );
              resolve(result);
            }
          }
        );
      }
    });
  }
};
