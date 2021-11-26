// ex1
function findEven(number) {
  for (let i = 4; i <= number; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

// ex2
let div = document.getElementById("bai2");
function changeColor() {
  div.style.backgroundColor = "black";
}
function changeToPink() {
  div.style.backgroundColor = "pink";
}

// ex3
function numberOneTriangle() {
  for (let a = 0; a < 5; a++) {
    for (let b = 0; b <= a; b++) {
      document.writeln(1);
    }
    document.writeln("<br>");
  }
}

// ex4

function clock() {
  let gio = document.getElementById("hour");
  let phut = document.getElementById("minutes");
  let giay = document.getElementById("seconds");
  let demgio = new Date().getHours();
  let demphut = new Date().getMinutes();
  let demgiay = new Date().getSeconds();
  gio.innerHTML = demgio + " : ";
  phut.innerHTML = demphut + " : ";
  giay.innerHTML = demgiay;
  if (demgio < 10) {
    gio.innerHTML = "0" + demgio + " : ";
  }
  if (demphut < 10) {
    phut.innerHTML = "0" + demphut + " : ";
  }
  if (demgiay < 10) {
    giay.innerHTML = "0" + demgiay;
  }
}
setInterval("clock()", 1000);
