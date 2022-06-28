var inputData;
function getValue0() {
    var value = 0;
    display(value)
}
function getValue1() {
    var value = 1;
    display(value)
}
function getValue2() {
    var value = 2;
    display(value)
}
function getValue3() {
    var value = 3;
    display(value)
}
function getValue4() {
    var value = 4;
    display(value)
}
function getValue5() {
    var value = 5;
    display(value)
}
function getValue6() {
    var value = 6;
    display(value)
}
function getValue7() {
    var value = 7;
    display(value)
}
function getValue8() {
    var value = 8;
    display(value)
}
function getValue9() {
    var value = 9;
    display(value)
}
function getValueFullStop() {
    var value = ".";
    display(value)
}
function plus() {
    var value = "+"
    display(value)
}
function minus() {
    var value = "-"
    display(value)
}
function multiply() {
    var value = "*"
    display(value)
}
function divide() {
    var value = "/"
    display(value)
}
function answer() {
    var value = "="
    display(value)
}

function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}

function cos(form) {
	form.display.value = Math.cos(form.display.value);
}

function sin(form) {
	form.display.value = Math.sin(form.display.value);
}

function tan(form) {
	form.display.value = Math.tan(form.display.value);
}

function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}

function ln(form) {
	form.display.value = Math.log(form.display.value);
}

function exp(form) {
	form.display.value = Math.exp(form.display.value);
}

function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

function compute(form) {
  if (val !== 0.0) {
   var percent = form.display.value;  
   percent = pcent.substring(percent.indexOf("%")+1);
   form.display.value = parseFloat(percent)/100 * val;
    val = 0.0;
 } else 
    form.display.value = eval(form.display.value);
  }


function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}



function display(v) {
    if (v === "=") {
        inputData = document.getElementById("display")
        let data = inputData.innerText
        let total = eval(data);
        document.getElementById("inputdataresult").innerText = total
    } else {
        document.getElementById("inputdata").innerText += v
    }
}






















// function addChar(input, character) {
// 	if(input.value == null || input.value == "0")
// 		input.value = character
// 	else
// 		input.value += character
// }

// function cos(form) {
// 	form.display.value = Math.cos(form.display.value);
// }

// function sin(form) {
// 	form.display.value = Math.sin(form.display.value);
// }

// function tan(form) {
// 	form.display.value = Math.tan(form.display.value);
// }

// function sqrt(form) {
// 	form.display.value = Math.sqrt(form.display.value);
// }

// function ln(form) {
// 	form.display.value = Math.log(form.display.value);
// }

// function exp(form) {
// 	form.display.value = Math.exp(form.display.value);
// }

// function deleteChar(input) {
// 	input.value = input.value.substring(0, input.value.length - 1)
// }
// var val = 0.0;
// function percent(input) {
//   val = input.value;
//   input.value = input.value + "%";
// }

// function changeSign(input) {
// 	if(input.value.substring(0, 1) == "-")
// 		input.value = input.value.substring(1, input.value.length)
// 	else
// 		input.value = "-" + input.value
// }

// function compute(form) {
//   //if (val !== 0.0) {
//    // var percent = form.display.value;  
//    // percent = pcent.substring(percent.indexOf("%")+1);
//    // form.display.value = parseFloat(percent)/100 * val;
//     //val = 0.0;
//  // } else 
//     form.display.value = eval(form.display.value);
//   }


// function square(form) {
// 	form.display.value = eval(form.display.value) * eval(form.display.value)
// }

// function checkNum(str) {
// 	for (var i = 0; i < str.length; i++) {
// 		var ch = str.charAt(i);
// 		if (ch < "0" || ch > "9") {
// 			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
// 				&& ch != "(" && ch!= ")" && ch != "%") {
// 				alert("invalid entry!")
// 				return false
// 				}
// 			}
// 		}
// 		return true
// }