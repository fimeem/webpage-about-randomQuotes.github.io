
const quoteBox = document.getElementById("quote_box");
const colorB1 = document.getElementById("color1");
const colorB2 = document.getElementById("color2");
const colorB3 = document.getElementById("color3");
const colorB4 = document.getElementById("color4");
const quotes = [
`I'm not a great programmer; I'm just a good programmer with great habits.
― Kent Beck`,
`Talk is cheap. Show me the code.
― Linus Torvalds`,
`Programs must be written for people to read, and only incidentally for machines to execute.
― Harold Abelson`,
`Truth can only be found in one place: the code.
― Robert C`,
`Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.
― Muhammad Waseem`,
`How you look at it is pretty much how you'll see it.
― Steve Jobs`,
`The most disastrous thing that you can ever learn is your first programming language.       ― Alan Kay`,
`The most important property of a program is whether it accomplishes the intention of its user.       ― C.A.R. Hoare`,
`I am committed to push my branch to the master.
― Halgurd Hussein`,
`Coding is not just code, that is a live thing to serve everyone!
― Ming Song`,
]





function changeColor(bC, fC, fF, fS) { 
    quoteBox.style.background = bC;
    quoteBox.style.color = fC;
    quoteBox.style.fontFamily = fF;
    quoteBox.style.fontSize = fS;
} 
function generateCode(color)
{
    switch(color)
    {
        case "b1": changeColor("rgb(92, 214, 84)", "rgb(199, 28, 53)", "sans-serif", 38);
        break;
        case "b2": changeColor("rgb(247,218,69)", "rgb(199, 28, 53)","Serif" ,39);
        break;
        case "b3": changeColor("rgb(26, 47, 99)", "rgb(201, 212, 201)","Asap",41);
        break;
        case "b4": changeColor("rgb(199, 28, 53)", "rgb(201, 212, 201)","Times New Roman",42);
        break;
    }
    var randomNo = Math.floor(Math.random() * quotes.length);
    quoteBox.innerHTML = quotes[randomNo];
    console.log(randomNo);
}



//Part:2

const heroNumber = document.getElementById("tField");
const heroOption = document.getElementById("choice");
const heroButton = document.getElementById("cal_button");
const heroResult_span = document.getElementById("result");
function convert()
{
    var result = 0.0;
    if(heroOption.value === "toKg")
    {
        result = heroNumber.value *  0.4536;
    }
    else
    {
        result = heroNumber.value *  2.2046;
    }
    heroResult_span.innerHTML = ""+result;
}





//Part:3

const numberSeries = document.getElementById("input_number");
const numberSubmit = document.getElementById("number_submit");
const max = document.getElementById("max");
const min = document.getElementById("min");
const sum = document.getElementById("sum");
const average = document.getElementById("average");
const reverseSeries = document.getElementById("reverseSeries");

function calculate()
{
     var arr = numberSeries.value.split(",");
     var maximum = arr[0], minimum = arr[0], summation = 0, reverse = "";
     for(var c = 0; c < arr.length; c++)
     {
         arr[c] = parseInt(arr[c]);
         if(arr[c] > maximum)
         {
             maximum = arr[c];
         }
         if(arr[c] < minimum)
         {
             minimum = arr[c];
         }
         summation += arr[c];
         if(c == 0)
         {
            reverse = arr[c] + reverse;
         }
         else
         {
            reverse = arr[c] + "," + reverse;
         }  
     } 
     max.innerHTML = maximum;
     min.innerHTML = minimum;
     sum.innerHTML = summation;
     average.innerHTML = (summation / arr.length);
     reverseSeries.innerHTML = reverse;
}




//Part:4

const mField = document.getElementById("mField");
const mSubmit = document.getElementById("magic_submit");
const mArea = document.getElementById("mArea");
const clearArea = document.getElementById("clear");
const capital = document.getElementById("capital");
const sortArea = document.getElementById("sort");
const reverseArea = document.getElementById("reverseArea");
const strip = document.getElementById("strip");
const add = document.getElementById("add");
const shuffle = document.getElementById("shuffle");
var area = [];

function resetArea()
{
    mField.value = "";
    mArea.innerHTML = "";
}
function addToArea()
{
    if(mField==="")
    {
        area.push("\n");
    }
    else
    {
        area.push(mField.value);
    }
    resetArea();
    showTextArea();
}
function showTextArea()
{
    for(var c = 0; c < area.length; c++)
    {
        mArea.append(area[c]+"\n");
    }
}
function clearTextArea()
{
    resetArea();
    area = [];
}
function capitalize()
{
    resetArea();
    for(var c = 0; c < area.length; c++)
    {
        area[c] = area[c].toUpperCase();
    }
    showTextArea();
}
function sortTextArea()
{
    resetArea();
    area.sort();
    showTextArea();
}
function reverseTextArea()
{
    resetArea();
    area.reverse();
    showTextArea();
}
function stripBlank()
{
    resetArea();
    arr = []
    for(var c = 0; c < area.length; c++)
    {
        if(area[c] !== "")
        {
            arr.push(area[c]);
        }
    }
    area = [];
    for(var c = 0; c< arr.length; c++)
    {
        area.push(arr[c]);
    }
    showTextArea();
}
function addNumber()
{
    resetArea();
    for(var c = 0; c < area.length; c++)
    {
        var randomNo = Math.floor(Math.random() * 10);
        area[c] = randomNo + area[c];
    }
    showTextArea();
}
function shuffleArea()
{
    resetArea();
    var arr = [];
    var randArr = [];
    while(arr.length < area.length){
        var r = Math.floor(Math.random() * area.length);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    for(var c = 0; c < area.length; c++)
    {
        randArr.push(area[c]);
    }
    for(var c = 0; c < area.length; c++)
    {
        area[c] = randArr[arr[c]];
    }
    showTextArea();
}






function main()
{
    heroButton.addEventListener("click", () => convert());
    
    colorB1.addEventListener("click", () => generateCode("b1"));
    colorB2.addEventListener("click", () => generateCode("b2"));
    colorB3.addEventListener("click", () => generateCode("b3"));
    colorB4.addEventListener("click", () => generateCode("b4"));

    numberSubmit.addEventListener("click", function(e){
        e.preventDefault();
        calculate();
    });

    mSubmit.addEventListener("click", function(e){
        addToArea();
    }, false);
    clearArea.addEventListener("click", () => clearTextArea());
    capital.addEventListener("click", () => capitalize());
    sortArea.addEventListener("click", () => sortTextArea());
    reverseArea.addEventListener("click", () => reverseTextArea());
    strip.addEventListener("click", () => stripBlank());
    add.addEventListener("click", () => addNumber());
    shuffle.addEventListener("click", () => shuffleArea());
}

main();