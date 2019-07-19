//Mad Libs JS



var btnCreate = document.getElementById('btnCreate');
btnCreate.addEventListener('click', function () { createMadLib(); }, false);

function createMadLib() {
    var tbForeignCountry = document.getElementById('tbForeignCountry').value;
    var tbAdjective = document.getElementById('tbAdjective').value;
    var tbAnimal = document.getElementById('tbAnimal').value;
    var tbVerb = document.getElementById('tbVerb').value;
    var tbPlace = document.getElementById('tbPlace').value;
    var tbTypeLiquid = document.getElementById('tbTypeLiquid').value;
    var madString = `If you are traveling in ${tbForeignCountry} and find yourself having to cross a piranha-filled river, here’s ` +
    `how to do it safely. Piranhas are more ${tbAdjective} during the day, so cross the river at night. Avoid` +
    ` areas with netted ${tbAnimal} traps – piranhas may be waiting there looking to ${tbVerb} them! Piranhas are` +
    ` attracted to fresh ${tbTypeLiquid} and will migrate to it as often as possible. Whatever you do, if you` +
    ` have an open wound, try to find another way to get back to the ${tbPlace}.`

    var madLibResults = document.getElementById('madLibResults');
    madLibResults.textContent = madString;
}


//------Multiples-----///

var multiples = document.getElementById('multiples');
for (var i = 1; i <= 4; i++) {
    multiples.innerHTML += (i * 7) + '<br/>';
    //innerHTML is a potential security risk. Do NOT render HTML from any source you do not have direct control over
}

//--------------Celcius Converter-----------------//


var btnCelcius = document.getElementById('btnCelcius');
var btnFarenhiet = document.getElementById('btnFarenhiet');

btnCelcius.addEventListener('click', function () { convertToC(); }, false);
btnFarenhiet.addEventListener('click', function () { convertToF(); }, false);

//create function for conversions
function convertToF() {
    var tbFarenhietDegrees = document.getElementById('tbFarenhietDegrees').value;
    var conversionResultsC = document.getElementById('conversionResultsF');
    conversionResultsC.innerHTML = (((tbFarenhietDegrees - 32) * 5) / 9) + "&deg; C";
}
function convertToC() {
    var tbCelciusDegrees = document.getElementById('tbCelciusDegrees').value;
        var mathToF = tbCelciusDegrees * 9 / 5 + 32;
        var conversionResultsF = document.getElementById('conversionResultsC');
        conversionResultsF.innerHTML = mathToF + "&deg; F";
}


//------------Area Calculators--------------------//
var calculate = document.getElementById('calculate');
calculate.addEventListener('click', function () { calcSquareArea(); }, false);

var calculateTriangle = document.getElementById('calculateTriangle');
calculateTriangle.addEventListener('click', function () { calcTriangleArea(); }, false);

var calculateCircle = document.getElementById('calculateCircle');
calculateCircle.addEventListener('click', function () { calcCircleArea(); }, false);

var calcRing = document.getElementById('calcRing');
calcRing.addEventListener('click', function () { calcRingArea(); }, false);

function calcSquareArea() {
    var tbHeightSquare = document.getElementById('tbHeightSquare').value;
    var tbWidthSquare = document.getElementById('tbWidthSquare').value;

    var areaSquare = document.getElementById('areaSquare');
    areaSquare.textContent = (tbHeightSquare * tbWidthSquare);
}

function calcTriangleArea() {
    var tbHeightSquare = document.getElementById('tbHeightSquare').value;
    var tbWidthSquare = document.getElementById('tbWidthSquare').value;

    var areaTriangle = document.getElementById('areaTriangle');
    areaTriangle.textContent = (tbHeightSquare * tbWidthSquare) / 2;
}

function calcCircleArea() {
    var tbRadius = document.getElementById('tbRadius').value;

    var areaCircle = document.getElementById('areaCircle');
    areaCircle.textContent = 3.14 * tbRadius * tbRadius;
}

//-----------Ring Area-----------// Button currently doesn't work unsure why
function calcRingArea() {
    var tbRadius = document.getElementById('tbRadius').value;
    var tbInnerRad = document.getElementById('tbInnerRad').value;
    var areaCircle = document.getElementById('areaCircle');
    var areaRing = document.getElementById('areaRing');
    var bigCirc = 3.14 * tbRadius * tbRadius;
    var smallCirc = 3.14 * tbInnerRad * tbInnerRad;
    areaRing.textContent = bigCirc - smallCirc;
}

//----------Change Lab------------//

//Button workings
var change = document.getElementById('change');
change.addEventListener('click', function () { returned(); }, false);

function returned() {
    var totalMoney = document.getElementById('totalMoney').value;
    var changeReturn = document.getElementById('changeReturn');
    totalMoney = (totalMoney * 100)
    var quarters = Math.trunc(totalMoney / 25);
    totalMoney = (totalMoney) % 25;
    var dimes = Math.trunc(totalMoney / 10);
    totalMoney = (totalMoney) % 10;
    var nickles = Math.trunc(totalMoney / 5);
    totalMoney = (totalMoney) % 5;
    var penny = Math.round(totalMoney);
    if (Math.round(totalMoney % 5) == 5) {
        nickles++;
        penny -= 5;
    }
    //var quarters = Math.floor((totalMoney * 100) / 25);
    //var dimes = Math.floor(((totalMoney * 100) % 25) / 10);
    //console.log(totalMoney);
    //var nickles = Math.floor((((totalMoney * 100) % 25) % 10) / 5);
    //var penny = Math.round((((totalMoney % 25) % 10) % 5) / 1);

    changeReturn.innerHTML = 'You have ' + quarters + ' quarters, ' + dimes + ' dimes, ' + nickles + ' nickles, and ' + penny + ' pennies';
}



//--------------Calculator Basic--------------//
var add = document.getElementById('add');
add.addEventListener('click', function () {
    var firstNum = parseFloat(document.getElementById('firstNum').value);
    var secondNum = parseFloat(document.getElementById('secondNum').value);
    var value = document.getElementById('value');
    value.textContent = firstNum + secondNum;
}, false);
var subtract = document.getElementById('subtract');
subtract.addEventListener('click', function () {
    var firstNum = parseFloat(document.getElementById('firstNum').value);
    var secondNum = parseFloat(document.getElementById('secondNum').value);
    var value = document.getElementById('value');
    value.textContent = firstNum - secondNum;
}, false);
var division = document.getElementById('division');
division.addEventListener('click', function () {
    var firstNum = parseFloat(document.getElementById('firstNum').value);
    var secondNum = parseFloat(document.getElementById('secondNum').value);
    var value = document.getElementById('value');
    value.textContent = firstNum / secondNum;
}, false);
var multiply = document.getElementById('multiply');
multiply.addEventListener('click', function () {
    var firstNum = parseFloat(document.getElementById('firstNum').value);
    var secondNum = parseFloat(document.getElementById('secondNum').value);
    var value = document.getElementById('value');
    value.textContent = firstNum * secondNum;
}, false);

//----------------Calculator Advanced-----------------//
//Declared and initialized all the elements from HTML to JS and added button function
var added = document.getElementById('added');
added.addEventListener('click', function () { calculation('+'); }, false);
var subtracted = document.getElementById('subtracted');
subtracted.addEventListener('click', function () { calculation('-'); }, false);
var divided = document.getElementById('divided');
divided.addEventListener('click', function () { calculation('&#247;'); }, false);
var multiplied = document.getElementById('multiplied');
multiplied.addEventListener('click', function () { calculation('*'); }, false);

//create function for values and switch statement for the cases
function calculation(op) {
    var firstNumb = parseFloat(document.getElementById('firstNumb').value);
    var secondNumb = parseFloat(document.getElementById('secondNumb').value);
    var values = document.getElementById('values');
    //var operations = new Array(added, subtracted, divided, multiplied);  Not all operations work, still working on a fix
    //switch statement--when written like this only the first added work
    switch (op) {
        case '+':
            values.textContent = firstNumb + secondNumb;
            break;

        case '-':
            values.textContent = firstNumb - secondNumb;
            break;

        case '&#247;':
            values.textContent = firstNumb / secondNumb;
            break;

        case '*':
            values.textContent = firstNumb * secondNumb;
            break;

        default:
            values.textContent = 'Try again';
            break;
    }

}