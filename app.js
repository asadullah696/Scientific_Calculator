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
function commaAr() {
    var value = ","
    display(value)
}
function openBracket() {
    var value = "("
    display(value)
}
function closeBracket() {
    var value = ")"
    display(value)
}


function tanAr(){
    var value = document.getElementById("inputdata");
    value = value.innerText;
    document.getElementById("inputdataresult").innerText = "tan("+value+")     =>   "+Math.tan(value);
} 
function sinAr(){
    var value = document.getElementById("inputdata");
    value = value.innerText
    document.getElementById("inputdataresult").innerText = "sin("+value+")     =>   "+Math.sin(value);
}
function cosAr(){
    var value = document.getElementById("inputdata");
    value = value.innerText
    document.getElementById("inputdataresult").innerText = "cos("+value+")     =>   "+Math.cos(value);
} 
function radAr(){
    var value = document.getElementById("inputdata");
    value = value.innerText
    document.getElementById("inputdataresult").innerText = "Deg("+value+")     =>   "+(0.0174533*value)+"(Rad)";
}
function degAr(){
    var value = document.getElementById("inputdata");
    value = value.innerText
    document.getElementById("inputdataresult").innerText = "Rad("+value+")     =>   "+(57.2958*value)+"(Deg)";
}
function hypAr(){
    var value = document.getElementById("inputdata");
    value = value.innerText
    document.getElementById("inputdataresult").innerText = "Hypot("+value+")     =>   "+ Math.hypot(value) ;
}
function xPower(){
    var value = document.getElementById("inputdata");
    value = value.innerText;
    var value1 = Math.pow(value,2);
        
    document.getElementById("inputdataresult").innerHTML = value+"<sup>2</sup> => &nbsp; &nbsp; &nbsp; &nbsp;"+value1;
}
function yPower(){
    var value = document.getElementById("inputdata");
    value = value.innerText;
    var value1 = Math.pow(value,3);
        
    document.getElementById("inputdataresult").innerHTML = value+"<sup>3</sup> => &nbsp; &nbsp; &nbsp; &nbsp;"+value1;
}
function squareRoot(){
    var value = document.getElementById("inputdata");
    value = value.innerText;
    var value1 = Math.pow(value,1/2);
        
    document.getElementById("inputdataresult").innerHTML = "&radic;"+value+" =>&nbsp; &nbsp; &nbsp;"+value1;
}
function cubeRoot(){
    var value = document.getElementById("inputdata");
    value = value.innerText;
    var value1 = Math.pow(value,1/3);
        
    document.getElementById("inputdataresult").innerHTML = "&#x221B;"+value+" =>&nbsp; &nbsp; &nbsp;"+value1;
}
function logAr(){
    var value = document.getElementById("inputdata");
    value = value.innerText;
    var value1 = Math.log10(value);
    document.getElementById("inputdataresult").innerHTML = "log("+value+") =>&nbsp; &nbsp; &nbsp;"+value1;
}
function oneUpon(){
    var value = document.getElementById("inputdata");
    value = value.innerText;
    var value1 = 1/value;
    document.getElementById("inputdataresult").innerHTML = "1/"+value+" =>&nbsp; &nbsp; &nbsp;"+value1;
}
function sinhAr(){
    var value = document.getElementById("inputdata");
    value = value.innerText;
    var value1 = Math.sinh(value);
    document.getElementById("inputdataresult").innerHTML = "sinh("+value+") =>&nbsp; &nbsp; &nbsp;"+value1;
}
function coshAr(){
    var value = document.getElementById("inputdata");
    value = value.innerText;
    var value1 = Math.cosh(value);
    document.getElementById("inputdataresult").innerHTML = "cosh("+value+") =>&nbsp; &nbsp; &nbsp;"+value1;
}
function cosecAr(){
    var value = document.getElementById("inputdata");
    value = value.innerText;
    var value1 = 1/(Math.sin(value));
    document.getElementById("inputdataresult").innerText = "cosec("+value+")     =>    "+value1;
}
function secAr(){
    var value = document.getElementById("inputdata");
    value = value.innerText;
    var value1 = 1/(Math.cos(value));
    document.getElementById("inputdataresult").innerText = "sec("+value+")     =>    "+value1;
}
function cotAr(){
    var value = document.getElementById("inputdata");
    value = value.innerText;
    var value1 = 1/(Math.tan(value));
    document.getElementById("inputdataresult").innerText = "cot("+value+")     =>    "+value1;
}
function abcAr(){
    var value = document.getElementById("inputdata");
    value = value.innerText;
    var value1 = Math.abs(value);
    document.getElementById("inputdataresult").innerHTML = "|"+value+"| =>  &nbsp; &nbsp;"+value1;
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








