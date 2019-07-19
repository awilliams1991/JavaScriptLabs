//Alert is a JavaScript method build into browsers that causes a popup box but you cannot style this popup

//alert("JavaScript is working!");
//Single Line comments
/*
Multi line comments. 

JavaScript modifies the document object model (DOM)

    JavaScript was created to make web pages more interactive. However, today it has progressed into being fully
    functioning front end frameworks. 

    JS is object oriented
        - The HTML elements we interact with are now JS objects. 
        - These objects have properties that come in name/value pairs
        - HTML elements can have classes. The list of classes is a property of the object. You can cycle through all of 
          the classes becuase they are in an array.
        - React to events (button clicks, keystrokes, and page load)
        - Methods or functions can be created to define how to interact with an object. 

    JS IS NOT TYPE-SAFE
       - variables are declared with the var datatype 
       - behind the scenes JS will try to determine what the primitive data type is..
       - How Equality is determined in JS
            - Abstract equality 
                - An attempt to resolve the data type via coercion is made before comparing two variables.
                - EX: "1" == 1 -> true (in C# is false) comparing values not datatype
           - Strict Equality
                - both the value and the type are compared
                - EX: "1" === 1 -> false

    No server-side debugging--have to debug using the inspector
        - We will use the console in the inspector to debug
*/

//Not type safe
var frenchToast = 10;
console.log(frenchToast);
/*
    console.log() is similar to Console.WriteLine() and it only shows up in the console inspector.
*/

frenchToast = 'yummy!';
console.log(frenchToast);
//We changed datatypes on the fly. No extra work needed. 
//For strings, you can use single or double quotes. If try to do math with string get a NaN error(not a number) and JS will quit
//running

//Update the copyright date with the current year dynamically through JS
//still working with static webpages because not connected to a database--a true full stack webpage is dynamic
var today = new Date();
//getYear() -> the current year minus 1900

var year = today.getFullYear();

//easiest way to access HTML element is to use its ID
var copyright = document.getElementById('copyright');
//We can assign an elements textContent, which will replace the text inside of an element.
copyright.textContent = year;

//-------Arrays-------//
var colors = ['White', 'Green', 'Black', 'Blue', 'Orange', 'Red', 'Purple'];
colors.push('lemonchiffon');
//LIFO -> Last in Frist Out
//To add items to an array, use .push()
//To remove the last item from the array use .pop()
//JS arrays do NOT have a set size
//Use zero based indexes.

var yourcolor = document.getElementById('yourcolor');
yourcolor.textContent = colors[4];
yourcolor.style.color = colors[4];
yourcolor.style.fontWeight = 'bold';

//-------Functions-----//
//Functions are preceeded with the keyword Function and are names in camelCase
//Functions WILL NOT run until they are called upon in reaction to an event
function getFavoriteColor() {
    //get user input
    var favColor = document.getElementById('tbFavColor');

    //access to the output span tag
    var favColorResult = document.getElementById('favColorResult');

    //print a message to the span and change the text color
    favColorResult.style.color = favColor.value;
    favColorResult.textContent = favColor.value + ' is my favorite color.';
}


/*
    Mini-lab
    assume a gallon of water weighs 8.33 lbs. Allow a user to enter a number of gallons. Upon clicking a button display the total 
    weight of water. Put your code from the water lab in a functionutilize the onClick method for activating the function.
*/

function getGallonsPossessed() {
    //get user input
    var userGallons = document.getElementById('userGallons');

    //access to output span tag
    var weighsPounds = document.getElementById('weighsPounds');

    //print user gallons and weight of gallons. each weighs 8.33lbs
    weighsPounds.textContent = 'Your water weighs ' + (userGallons.value * 8.33) + ' pounds';
}

//Event Handlers can be used to wire up JS functions to HTML buttons within JS files rather than using the onclick event
//in the HTML file
var colorBtn = document.getElementById('btnFavColor');
colorBtn.addEventListener('click', function () {
    getFavoriteColor();
}, false);

//--------Looping------//
//Looping and branching also exist in JS. Syntax is the same for the for loop, while loop, do while loop, and if and switch
//Use a loop to count to 10
//Instead of using the textContent property, we can use innerHTML to output HTML elements to the screen.

var countItOut = document.getElementById('countItOut');
for (var i = 0; i <= 10; i++) {
    countItOut.innerHTML += i + '<br/>';
    //innerHTML is a potential security risk. Do NOT render HTML from any source you do not have direct control over
}


function getMilestone() {
    //get the input with the id of currentAge
    var currentAge = document.getElementById('tbCurrentAge').value;
    //get the output with the id of ageResults
    var ageResults = document.getElementById('ageResults');
    //Switch to check for Milestones
    switch (currentAge) {
        case "5":
            ageResults.textContent = "You start school this year.";
            break;

        case "13":
            ageResults.textContent = "You are a teenager this year.";
            break;

        case "16":
            ageResults.textContent = "Watch out world this kid can drive.";
            break;

        case "18":
            ageResults.textContent = "Go VOTE!";
            break;

        case "55":
            ageResults.textContent = "You are eligible for AARP. Congrats";
            break;

        default:
            ageResults.textContent = "Sorry, there is nothing important going on right now.";
            break;

    }
}

//MINI Lab
//Please create an event Listener that calls the getMIleston() when a user clicks the button with the id of btnMilestone
var btnMilestone = document.getElementById('btnMilestone');
btnMilestone.addEventListener('click', function () { getMilestone(); }, false);


function getListMilestones() {
    var currentAge = document.getElementById('tbCurrentAge').value;
    var ageResults = document.getElementById('ageResults');
    var strListMilestones = "";

    if (currentAge < 5) {
        ageResults.innerHTML = "<em>You are just a tot. There are no milestones for you yet.</em>"
    } else {
        //mini lab
        //using if/else create a list of milestones to return to the user. The milestones should be in a UL
        //The user will type in their age and then click the Milestone List button
        //This function should be triggered with an EventListener

        strListMilestones += "<em>Here are the milestones you have passed: </em><ul>";
        if (currentAge >= 5) { strListMilestones += "<li><em>Age 5: Start School</em></li>"; }
        if (currentAge >= 13) { strListMilestones += "<li><em>Age 13: Become Teenager</em></li>"; }
        if (currentAge >= 16) { strListMilestones += "<li><em>Age 16: Start Driving</em></li>"; }
        if (currentAge >= 18) { strListMilestones += "<li><em>Age 18: VOTE!!!</em></li>"; }
        if (currentAge >= 55) { strListMilestones += "<li><em>Age 55: Joined AARP</em></li>"; }
        strListMilestones += "</ul>";
        ageResults.innerHTML = strListMilestones;
    }
   
}

var btnListMilestones = document.getElementById('btnListMilestones');
btnListMilestones.addEventListener('click', function () { getListMilestones(); }, false);