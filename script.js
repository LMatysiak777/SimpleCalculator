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
    CHK: syntaxCheck2,
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
  syntaxCheck();
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
  let emptySyntax = ["",];
  let errorMessage = "SYNTAX ERROR";
  if (emptySyntax.includes(x)) {
    mainString = errorMessage;
    refresh();
    return;
  }
  try {
    eval(mainString);
<<<<<<< HEAD
  } catch (x) {
 
    mainString = "SYNTAX ERROR";
=======
  }
  catch(x) {
    mainString="SYNTAX ERROR";
    
>>>>>>> 1568f5f0fda5e2554c13ac7d4387c6c2907edc1a
    refresh();
    mainString="" ;
  }
  return false;
}
<<<<<<< HEAD

function syntaxCheck2() {
  try {
    eval(mainString); 
    if (mainString=="") throw alert("no input");
     
  } catch (err) {
    alert(err);
  } finally {
    alert("EXPRESSION CHECK COMPLETE");
  }
}
=======
 
>>>>>>> 1568f5f0fda5e2554c13ac7d4387c6c2907edc1a
