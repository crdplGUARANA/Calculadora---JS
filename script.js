function takeValue(x) {
    console.log("Hhoifsd")
    console.log(x)
    document.getElementById('Result').innerHTML += x;
}

function clearInput() {
    document.getElementById('Result').innerHTML = "";
}

function calculateResult() {
    var result = eval(document.getElementById('Result').innerHTML);
    document.getElementById('Result').innerHTML = result;
}


var zero = document.getElementById('zero');
var one = document.getElementById('um');
var two = document.getElementById('dois');
var three = document.getElementById('tres');
var four = document.getElementById('quatro');
var five = document.getElementById('cinco');
var six = document.getElementById('seis');
var seven = document.getElementById('sete');
var eight = document.getElementById('oito');
var nine = document.getElementById('nove');

var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var divide = document.getElementById('divide');
var multiply = document.getElementById('multiply');
var equal = document.getElementById('equal');
var deleteN = document.getElementById('Delete');
var coma = document.getElementById('coma');






zero.addEventListener("click", function(){
    takeValue(0);
})
um.addEventListener("click", function(){
    takeValue(1);
})
dois.addEventListener("click", function(){
    takeValue(2);
})
tres.addEventListener("click", function(){
    takeValue(3);
})
quatro.addEventListener("click", function(){
    takeValue(4);
})
cinco.addEventListener("click", function(){
    takeValue(5);
})
seis.addEventListener("click", function(){
    takeValue(6);
})
sete.addEventListener("click", function(){
    takeValue(7);
})
oito.addEventListener("click", function(){
    takeValue(8);
})
nove.addEventListener("click", function(){
    takeValue(9);
})
plus.addEventListener("click", function(){
    takeValue("+");
})
minus.addEventListener("click", function(){
    takeValue("-");
})
multiply.addEventListener("click", function(){
    takeValue("*");
})
divide.addEventListener("click", function(){
    takeValue("/");
})
coma.addEventListener("click", function(){
    takeValue(".");
})

equal.addEventListener("click", function(){
    calculateResult();
})

deleteN.addEventListener("click", function(){
    clearInput()
})