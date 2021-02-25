//    ------------------------- ///

// Add your code here
let quote = 'I dO nOT lIke gREen eGgS anD HAM';

let fixedQuote = quote.toLowerCase();

fixedQuote = fixedQuote.replace("i", fixedQuote[0].toUpperCase("i"));
finalQuote = fixedQuote.replace("green eggs and ham", "letchon ombak");

finalQuote = finalQuote.concat(".");


var section = document.getElementById("div");


// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = fixedQuote;
let para2 = document.createElement('p');
para2.textContent = finalQuote;
section.appendChild(para1);
section.appendChild(para2);




