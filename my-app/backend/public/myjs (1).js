var p1,
  p2,
  p11,
  z = 0,
  p3;
var tt = "STUVWXYZ";
var x1, x2, x3, x4, x5, x6, x7, x8;
x1 = tt.charAt(Math.floor(Math.random() * 8));
x2 = tt.charAt(Math.floor(Math.random() * 8));
if (x1 == x2) {
  x2 = tt.charAt(Math.floor(Math.random() * 8));
}
x3 = tt.charAt(Math.floor(Math.random() * 8));
for (let i = 0; i < 2; i++) {
  if (x1 == x3 || x2 == x3) {
    x3 = tt.charAt(Math.floor(Math.random() * 8));
  }
}
x4 = tt.charAt(Math.floor(Math.random() * 8));
for (let i = 0; i < 3; i++) {
  if (x1 == x4 || x2 == x4 || x3 == x4) {
    x4 = tt.charAt(Math.floor(Math.random() * 8));
  }
}
x5 = tt.charAt(Math.floor(Math.random() * 8));
for (let i = 0; i < 4; i++) {
  if (x1 == x5 || x2 == x5 || x3 == x5 || x4 == x5) {
    x5 = tt.charAt(Math.floor(Math.random() * 8));
  }
}
x6 = tt.charAt(Math.floor(Math.random() * 8));
for (let i = 0; i < 5; i++) {
  if (x1 == x6 || x2 == x6 || x3 == x6 || x4 == x6 || x5 == x6) {
    x6 = tt.charAt(Math.floor(Math.random() * 8));
  }
}
x7 = tt.charAt(Math.floor(Math.random() * 8));
for (let i = 0; i < 6; i++) {
  if (x1 == x7 || x2 == x7 || x3 == x7 || x4 == x7 || x5 == x7 || x6 == x7) {
    x7 = tt.charAt(Math.floor(Math.random() * 8));
  }
}
x8 = tt.charAt(Math.floor(Math.random() * 8));
for (let i = 0; i < 7; i++) {
  if (
    x1 == x8 ||
    x2 == x8 ||
    x3 == x8 ||
    x4 == x8 ||
    x5 == x8 ||
    x6 == x8 ||
    x7 == x8
  ) {
    x8 = tt.charAt(Math.floor(Math.random() * 8));
  }
}

var y = "white";
var temp = 0;
function myfun1() {
  document.getElementsByClassName("a2")[0].innerHTML = x1;
  document.getElementsByClassName("a2")[0].style.color = y;
}
function myfun2() {
  document.getElementsByClassName("a2")[1].innerHTML = x2;
  document.getElementsByClassName("a2")[1].style.color = y;
}
function myfun3() {
  document.getElementsByClassName("a2")[2].innerHTML = x3;
  document.getElementsByClassName("a2")[2].style.color = y;
}
function myfun4() {
  document.getElementsByClassName("a2")[3].innerHTML = x1;
  document.getElementsByClassName("a2")[3].style.color = y;
}
function myfun5() {
  document.getElementsByClassName("a2")[4].innerHTML = x4;
  document.getElementsByClassName("a2")[4].style.color = y;
}
function myfun6() {
  document.getElementsByClassName("a2")[5].innerHTML = x5;
  document.getElementsByClassName("a2")[5].style.color = y;
}
function myfun7() {
  document.getElementsByClassName("a2")[6].innerHTML = x6;
  document.getElementsByClassName("a2")[6].style.color = y;
}
function myfun8() {
  document.getElementsByClassName("a2")[7].innerHTML = x3;
  document.getElementsByClassName("a2")[7].style.color = y;
}
function myfun9() {
  document.getElementsByClassName("a2")[8].innerHTML = x2;
  document.getElementsByClassName("a2")[8].style.color = y;
}
function myfun10() {
  document.getElementsByClassName("a2")[9].innerHTML = x8;
  document.getElementsByClassName("a2")[9].style.color = y;
}
function myfun11() {
  document.getElementsByClassName("a2")[10].innerHTML = x5;
  document.getElementsByClassName("a2")[10].style.color = y;
}
function myfun12() {
  document.getElementsByClassName("a2")[11].innerHTML = x7;
  document.getElementsByClassName("a2")[11].style.color = y;
}
function myfun13() {
  document.getElementsByClassName("a2")[12].innerHTML = x6;
  document.getElementsByClassName("a2")[12].style.color = y;
}
function myfun14() {
  document.getElementsByClassName("a2")[13].innerHTML = x8;
  document.getElementsByClassName("a2")[13].style.color = y;
}
function myfun15() {
  document.getElementsByClassName("a2")[14].innerHTML = x7;
  document.getElementsByClassName("a2")[14].style.color = y;
}
function myfun16() {
  document.getElementsByClassName("a2")[15].innerHTML = x4;
  document.getElementsByClassName("a2")[15].style.color = y;
}

try {
  function foo() {
    for (let i = 0; i < 16; i++) {
      document.getElementsByClassName("a2")[i].style.color = "red";
    }
  }
  setTimeout(foo, 1);
  var countt = 0,
    jaz1,
    temp12 = 0;
  /* function ohh(jaz) {
    //temp++;
    jaz1 = jaz;
    if (temp12 != 0) {
      //fun1(jaz1);
      temp12 = 0;
    }
  }
  */
  var con1 = 0,
    con2 = 0,
    con3 = 0,
    con4 = 0,
    con5 = 0,
    con6 = 0,
    con7 = 0,
    con8 = 0,
    con9 = 0,
    con10 = 0,
    con11 = 0,
    con12 = 0,
    con13 = 0,
    con14 = 0,
    con15 = 0,
    con16 = 0;
  function fun1(p) {
    (con2 = 0),
      (con3 = 0),
      (con4 = 0),
      (con5 = 0),
      (con6 = 0),
      (con7 = 0),
      (con8 = 0),
      (con9 = 0),
      (con10 = 0),
      (con11 = 0),
      (con12 = 0),
      (con13 = 0),
      (con14 = 0),
      (con15 = 0),
      (con16 = 0);
    if (con1 == 0) {
      p2 = p11;
      p3 = p1;
      p1 = p;
      p11 = x1;
      z++;
      temp++;
      console.log("dsfs");
      document.getElementsByClassName("a2")[0].innerHTML = x1;
      document.getElementsByClassName("a2")[0].style.color = "white";
      ff();
      con1++;
    }
  }

  function fun2(p) {
    (con1 = 0),
      (con3 = 0),
      (con4 = 0),
      (con5 = 0),
      (con6 = 0),
      (con7 = 0),
      (con8 = 0),
      (con9 = 0),
      (con10 = 0),
      (con11 = 0),
      (con12 = 0),
      (con13 = 0),
      (con14 = 0),
      (con15 = 0),
      (con16 = 0);
    if (con2 == 0) {
      p2 = p11;
      p3 = p1;
      p1 = p;
      p11 = x2;
      z++;
      temp++;
      document.getElementsByClassName("a2")[1].innerHTML = x2;
      document.getElementsByClassName("a2")[1].style.color = "white";
      ff();
      con2++;
    }
  }
  function fun3(p) {
    (con2 = 0),
      (con1 = 0),
      (con4 = 0),
      (con5 = 0),
      (con6 = 0),
      (con7 = 0),
      (con8 = 0),
      (con9 = 0),
      (con10 = 0),
      (con11 = 0),
      (con12 = 0),
      (con13 = 0),
      (con14 = 0),
      (con15 = 0),
      (con16 = 0);
    if (con3 == 0) {
      p2 = p11;
      p3 = p1;
      p1 = p;
      p11 = x3;
      z++;
      temp++;
      document.getElementsByClassName("a2")[2].innerHTML = x3;
      document.getElementsByClassName("a2")[2].style.color = "white";
      ff();
      con3++;
    }
  }
  function fun4(p) {
    (con2 = 0),
      (con3 = 0),
      (con1 = 0),
      (con5 = 0),
      (con6 = 0),
      (con7 = 0),
      (con8 = 0),
      (con9 = 0),
      (con10 = 0),
      (con11 = 0),
      (con12 = 0),
      (con13 = 0),
      (con14 = 0),
      (con15 = 0),
      (con16 = 0);
    if (con4 == 0) {
      p2 = p11;
      p3 = p1;
      p1 = p;
      p11 = x1;
      z++;
      temp++;
      document.getElementsByClassName("a2")[3].innerHTML = x1;
      document.getElementsByClassName("a2")[3].style.color = "white";
      ff();
      con4++;
    }
  }
  function fun5(p) {
    (con2 = 0),
      (con3 = 0),
      (con4 = 0),
      (con1 = 0),
      (con6 = 0),
      (con7 = 0),
      (con8 = 0),
      (con9 = 0),
      (con10 = 0),
      (con11 = 0),
      (con12 = 0),
      (con13 = 0),
      (con14 = 0),
      (con15 = 0),
      (con16 = 0);
    if (con5 == 0) {
      p2 = p11;
      p3 = p1;
      p1 = p;
      p11 = x4;
      z++;
      temp++;
      document.getElementsByClassName("a2")[4].innerHTML = x4;
      document.getElementsByClassName("a2")[4].style.color = "white";
      ff();
      con5++;
    }
  }
  function fun6(p) {
    (con2 = 0),
      (con3 = 0),
      (con4 = 0),
      (con5 = 0),
      (con1 = 0),
      (con7 = 0),
      (con8 = 0),
      (con9 = 0),
      (con10 = 0),
      (con11 = 0),
      (con12 = 0),
      (con13 = 0),
      (con14 = 0),
      (con15 = 0),
      (con16 = 0);
    if (con6 == 0) {
      p2 = p11;
      p3 = p1;
      p1 = p;
      p11 = x5;
      z++;
      temp++;
      document.getElementsByClassName("a2")[5].innerHTML = x5;
      document.getElementsByClassName("a2")[5].style.color = "white";
      ff();
      con6++;
    }
  }
  function fun7(p) {
    (con2 = 0),
      (con3 = 0),
      (con4 = 0),
      (con5 = 0),
      (con6 = 0),
      (con1 = 0),
      (con8 = 0),
      (con9 = 0),
      (con10 = 0),
      (con11 = 0),
      (con12 = 0),
      (con13 = 0),
      (con14 = 0),
      (con15 = 0),
      (con16 = 0);
    if (con7 == 0) {
      p2 = p11;
      p3 = p1;
      p1 = p;
      p11 = x6;
      z++;
      temp++;
      document.getElementsByClassName("a2")[6].innerHTML = x6;
      document.getElementsByClassName("a2")[6].style.color = "white";
      ff();
      con7++;
    }
  }
  function fun8(p) {
    (con2 = 0),
      (con3 = 0),
      (con4 = 0),
      (con5 = 0),
      (con6 = 0),
      (con7 = 0),
      (con1 = 0),
      (con9 = 0),
      (con10 = 0),
      (con11 = 0),
      (con12 = 0),
      (con13 = 0),
      (con14 = 0),
      (con15 = 0),
      (con16 = 0);
    if (con8 == 0) {
      p2 = p11;
      p3 = p1;
      p1 = p;
      p11 = x3;
      z++;
      temp++;
      document.getElementsByClassName("a2")[7].innerHTML = x3;
      document.getElementsByClassName("a2")[7].style.color = "white";
      ff();
      con8++;
    }
  }
  function fun9(p) {
    (con2 = 0),
      (con3 = 0),
      (con4 = 0),
      (con5 = 0),
      (con6 = 0),
      (con7 = 0),
      (con8 = 0),
      (con1 = 0),
      (con10 = 0),
      (con11 = 0),
      (con12 = 0),
      (con13 = 0),
      (con14 = 0),
      (con15 = 0),
      (con16 = 0);
    if (con9 == 0) {
      p2 = p11;
      p3 = p1;
      p1 = p;
      p11 = x2;
      z++;
      temp++;
      document.getElementsByClassName("a2")[8].innerHTML = x2;
      document.getElementsByClassName("a2")[8].style.color = "white";
      ff();
      con9++;
    }
  }
  function fun10(p) {
    (con2 = 0),
      (con3 = 0),
      (con4 = 0),
      (con5 = 0),
      (con6 = 0),
      (con7 = 0),
      (con8 = 0),
      (con9 = 0),
      (con1 = 0),
      (con11 = 0),
      (con12 = 0),
      (con13 = 0),
      (con14 = 0),
      (con15 = 0),
      (con16 = 0);
    if (con10 == 0) {
      p2 = p11;
      p3 = p1;
      p1 = p;
      p11 = x8;
      z++;
      temp++;
      document.getElementsByClassName("a2")[9].innerHTML = x8;
      document.getElementsByClassName("a2")[9].style.color = "white";
      ff();
      con10++;
    }
  }
  function fun11(p) {
    (con2 = 0),
      (con3 = 0),
      (con4 = 0),
      (con5 = 0),
      (con6 = 0),
      (con7 = 0),
      (con8 = 0),
      (con9 = 0),
      (con10 = 0),
      (con1 = 0),
      (con12 = 0),
      (con13 = 0),
      (con14 = 0),
      (con15 = 0),
      (con16 = 0);
    if (con11 == 0) {
      p2 = p11;
      p3 = p1;
      p1 = p;
      p11 = x5;
      z++;
      temp++;
      document.getElementsByClassName("a2")[10].innerHTML = x5;
      document.getElementsByClassName("a2")[10].style.color = "white";
      ff();
      con11++;
    }
  }
  function fun12(p) {
    (con2 = 0),
      (con3 = 0),
      (con4 = 0),
      (con5 = 0),
      (con6 = 0),
      (con7 = 0),
      (con8 = 0),
      (con9 = 0),
      (con10 = 0),
      (con11 = 0),
      (con1 = 0),
      (con13 = 0),
      (con14 = 0),
      (con15 = 0),
      (con16 = 0);
    if (con12 == 0) {
      p2 = p11;
      p3 = p1;
      p1 = p;
      p11 = x7;
      z++;
      temp++;
      document.getElementsByClassName("a2")[11].innerHTML = x7;
      document.getElementsByClassName("a2")[11].style.color = "white";
      ff();
      con12++;
    }
  }
  function fun13(p) {
    (con2 = 0),
      (con3 = 0),
      (con4 = 0),
      (con5 = 0),
      (con6 = 0),
      (con7 = 0),
      (con8 = 0),
      (con9 = 0),
      (con10 = 0),
      (con11 = 0),
      (con12 = 0),
      (con1 = 0),
      (con14 = 0),
      (con15 = 0),
      (con16 = 0);
    if (con13 == 0) {
      p2 = p11;
      p3 = p1;
      p1 = p;
      p11 = x6;
      z++;
      temp++;
      document.getElementsByClassName("a2")[12].innerHTML = x6;
      document.getElementsByClassName("a2")[12].style.color = "white";
      ff();
      con13++;
    }
  }
  function fun14(p) {
    (con2 = 0),
      (con3 = 0),
      (con4 = 0),
      (con5 = 0),
      (con6 = 0),
      (con7 = 0),
      (con8 = 0),
      (con9 = 0),
      (con10 = 0),
      (con11 = 0),
      (con12 = 0),
      (con13 = 0),
      (con1 = 0),
      (con15 = 0),
      (con16 = 0);
    if (con14 == 0) {
      p2 = p11;
      p3 = p1;
      p1 = p;
      p11 = x8;
      z++;
      temp++;
      document.getElementsByClassName("a2")[13].innerHTML = x8;
      document.getElementsByClassName("a2")[13].style.color = "white";
      ff();
      con14++;
    }
  }
  function fun15(p) {
    (con2 = 0),
      (con3 = 0),
      (con4 = 0),
      (con5 = 0),
      (con6 = 0),
      (con7 = 0),
      (con8 = 0),
      (con9 = 0),
      (con10 = 0),
      (con11 = 0),
      (con12 = 0),
      (con13 = 0),
      (con14 = 0),
      (con1 = 0),
      (con16 = 0);
    if (con15 == 0) {
      p2 = p11;
      p3 = p1;
      p1 = p;
      p11 = x7;
      temp++;
      z++;
      document.getElementsByClassName("a2")[14].innerHTML = x7;
      document.getElementsByClassName("a2")[14].style.color = "white";
      ff();
      con15++;
    }
  }
  function fun16(p) {
    (con2 = 0),
      (con3 = 0),
      (con4 = 0),
      (con5 = 0),
      (con6 = 0),
      (con7 = 0),
      (con8 = 0),
      (con9 = 0),
      (con10 = 0),
      (con11 = 0),
      (con12 = 0),
      (con13 = 0),
      (con14 = 0),
      (con15 = 0),
      (con1 = 0);
    if (con16 == 0) {
      p2 = p11;
      p3 = p1;
      p1 = p;
      p11 = x4;
      z++;
      temp++;
      document.getElementsByClassName("a2")[15].innerHTML = x4;
      document.getElementsByClassName("a2")[15].style.color = "white";
      ff();
      con16++;
    }
  }
  function ff() {
    if (temp == 20) {
      //alert("OOPS!!!!!!! YOU HAVE LOST!!!!!!!!!!");
      document.write(
        "<img src='E:lost1.jfif'; style='width:700px; height:500px; margin-left:50px;'></img>"
      );
    }

    if (z == 2) {
      function rt() {
        //alert(6);
        document.getElementsByClassName("a2")[p3 - 1].style.color = "red";
        document.getElementsByClassName("a2")[p1 - 1].style.color = "red";
        (con2 = 0),
          (con3 = 0),
          (con4 = 0),
          (con5 = 0),
          (con6 = 0),
          (con7 = 0),
          (con8 = 0),
          (con9 = 0),
          (con10 = 0),
          (con11 = 0),
          (con12 = 0),
          (con13 = 0),
          (con14 = 0),
          (con15 = 0),
          (con16 = 0),
          (con1 = 0);
      }
      //alert('ghdfthfdbgvdfg');
      if (p11 != p2) {
        setTimeout(rt, 200);
      }

      z = 0;
    }
  }
} catch (err) {
  window.alert(err);
}
