let mainString = "";
let lastString = "";
let functionKey = false; 
let result = "";

function buttonClick(x) {
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
  } else {mainString = mainString + x; refresh();
 
}}

function calculate() {
   
  document.getElementById("resultView").innerHTML = eval(mainString); 
  result = (eval(mainString).toString());
  lastString=mainString+" = "+result;
  document.getElementById("lastResultView").innerHTML = lastString;
  mainString=(eval(mainString).toString());
  // refresh();
}

function del() {
  mainString = mainString.slice(0, -1);
  document.getElementById("resultView").innerHTML = mainString;
}

function expOpen() {
  mainString = mainString + " **10^";
  refresh();
 document.getElementByClass("hide").style.display = 'none';
 alert();
 

}

function expClose() {
  functionKey = true;
}

function refresh() {
    document.getElementById("resultView").innerHTML= mainString;
}

function accc() {
  mainString = "";
  refresh();
}

function ans(){
 mainString=mainString+result;
 refresh();
}