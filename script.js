let mainString = "",
  lastString = "",
  expFunctionKey = false,
  expButtonKey = false,
  hideCalcButton = false,
  result = "",
  currentChar = "",
  buttonValue = {
    DEL: del,
    EXP: expOpen,
    AC: accc,
    ANS: ans,
    x: multiply,
    "\u03a0": addPi,
    POW: powering,
    "=": calculate,
    "CHK":syntaxCheck2,
  };

function buttonClick(x) {
  checkCurrentChar(x);
  if (buttonValue.hasOwnProperty(x) == true) {
    buttonValue[x]();
  } else if (expFunctionKey) {
    checkExpKey(x);
  } else {
    mainString = mainString + x;
    refresh();
  }
}

function calculate() {
  alert(typeof eval(mainString));
  if (syntaxCheck(mainString)) {
    document.getElementById("resultView").innerHTML = "SYNTAX ERROR";
    return;
  }
  result = eval(mainString).toString();
  lastString = mainString + " = " + result;
  document.getElementById("lastResultView").innerHTML = lastString;
  document.getElementById("ansValue").innerHTML = "ANS value= " + result;
  mainString = "";
  document.getElementById("resultView").innerHTML = "...awaiting input";
  refresh();
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
  refresh();
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

function checkCurrentChar(x) {
  let elems = document.getElementsByClassName("hide2");
  if (["+", "-", "x", "/", "POW"].includes(x)) {
    for (var i = 0; i < elems.length; i++) {
      elems[i].disabled = true;
    }
  } else {
    for (var i = 0; i < elems.length; i++) {
      elems[i].disabled = false;
    }
  }
}

function syntaxCheck(x) {
  alert("enter syntax function");
  let wrongSyntax = [""];
  if (wrongSyntax.includes(x)) return true;
  // let error = typeof eval(x);
  // if (error==undefined) return true;

  var validCode = 1;
  try {
    eval(x); /* Code test */
  } catch (e) {
    if (e instanceof SyntaxError) {
      validCode = 0;
      console.warn("error");
    }
  } finally {
    if (validCode) {
      return;
    }
  }

  alert("syntax OK");
  return false;
}

function syntaxCheck2(){
try {
  eval(mainString);
}
catch(err) {
  alert(err);
}
}