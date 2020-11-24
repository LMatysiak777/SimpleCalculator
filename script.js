let mainString = "";
let lastString = "";
let expFunctionKey = false;
let expButtonKey = false;
let hideCalcButton = false;
let result = "";
let currentChar = "";
// let buttonValue1 = [
//   "DEL",
//   del,
//   "EXP",
//   expOpen,
//   "AC",
//   accc,
//   "ANS",
//   ans,
//   "x",
//   multiply,
//   "\u03a0",
//   addPi,
//   "POW",
//   powering,
//   "=",
//   calculate,
// ];
let buttonValue2 = {
  DEL: del,
  EXP: expOpen,
  AC: accc,
  ANS: ans,
  x: multiply,
  "\u03a0": addPi,
  POW: powering,
  "=": calculate,
};

function buttonClick(x) {
  if (buttonValue2.hasOwnProperty(x) == true) {
    buttonValue2[x]();
  } else if (expFunctionKey) {
    checkExpKey(x);
  } else {
    mainString = mainString + x;
    refresh();
  }
}

function calculate() {
  document.getElementById("resultView").innerHTML = "...awaiting input";
  result = eval(mainString).toString();
  lastString = mainString + " = " + result;
  document.getElementById("lastResultView").innerHTML = lastString;
  document.getElementById("ansValue").innerHTML = "ANS value= " + result;
  mainString = "";
}

function del() {
  mainString = mainString.slice(0, -1);
  document.getElementById("resultView").innerHTML = mainString;
}

function expOpen() {
  mainString = mainString + " *(10**";
  for (let el of document.querySelectorAll(".hide"))
    el.style.visibility = "hidden";
  expFunctionKey = true;
  refresh();
}

function expClose() {
  functionKey = true;
  for (let el of document.querySelectorAll(".hide"))
    el.style.visibility = "visible";
}

function refresh() {
  document.getElementById("resultView").innerHTML = mainString;
}

function accc() {
  mainString = "";
  document.getElementById("resultView").innerHTML = "...awaiting input";
}

function ans() {
  mainString = mainString + result;
  refresh();
}

function multiply() {
  mainString = mainString + "*";
  refresh();
}

function addPi() {
  mainString += "Math.PI";
  refresh();
}

function powering() {
  mainString += "**";
  refresh();
}

function checkExpKey(x) {
  mainString += x + ")";
  expFunctionKey = !expFunctionKey;
  expClose();
  refresh();
}
