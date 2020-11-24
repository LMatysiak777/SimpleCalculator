let mainString = "";
let lastString = "";
let expFunctionKey = false;
let expButtonKey = false;
let result = "";
let currentChar ="";

function buttonClick(x) {
   
     if (expFunctionKey == true) {       
         expFunctionKey = false;
         mainString+=x+")";
        expClose();refresh();}  else {

  if (x == "=") {
    calculate();
  } else if (x == "DEL") {
    del();
  } else if (x == "EXP") {
    expOpen();
  } else if (x == "AC") {
    accc();
  } else if (x == "ANS") {
    ans();
  } else if (x == "x") {
    multiply();
//   UTF8 CONVERSION
  } else if (x == "\u03a0") {
    addPi();
   } else if (x=="POW") {
    powering();
    }
  
  else {

    if (expFunctionKey == true) {       
        expFunctionKey = false;
        mainString+=")";
       expClose();}  
    
    mainString = mainString + x;
    refresh();

    }
  }}


function calculate() {
  document.getElementById("resultView").innerHTML = "...awaiting input";
  result = eval(mainString).toString();
  lastString = mainString + " = " + result;
  document.getElementById("lastResultView").innerHTML = lastString;
  document.getElementById("ansValue").innerHTML = "ANS value= "+result;
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
 mainString += "^";
 refresh();
}
 