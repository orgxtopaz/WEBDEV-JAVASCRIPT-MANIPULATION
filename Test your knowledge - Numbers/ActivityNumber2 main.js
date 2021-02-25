//------------------------- ///

// Add/update your code here

//Final result should be 10.42//
let result = (7 + 13) / (9 + 7)


let result2 = 100 / (2 * 6);
console.log(result2);

resultback = result * result2; //resultback will hold the value sum of result*result2.

//resultback value will be turned into 2 decimal places and will be stored on var finalResult.
var finalResult = (resultback.toFixed(2));

console.log(finalResult);

//finalNumber values will be turn into the type of "number".
var finalNumber = (parseInt(finalResult));



//VALUE TYPE OF finalNumber number
console.log(typeof (finalNumber));

var section = document.getElementById('div');

//Don't edit the code below here!
section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Your finalResult is ${finalResult}`;
let para2 = document.createElement('p');
let finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;
section.appendChild(para1);
section.appendChild(para2);
