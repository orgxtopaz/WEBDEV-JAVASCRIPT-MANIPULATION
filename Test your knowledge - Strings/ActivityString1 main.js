   //-----------Test your knowledge - Strings-------------- ///

//Add your code here//
let quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
let substring = 'green eggs and ham';

//GETTING THE LENGTH OF "quote" then stored on variable "quoteLength".
let quoteLength=(quote.length);

//FINDING THE INDEX OF "substring" IN THE "quote"
var index =quote.indexOf(substring);

console.log(index);
console.log(quoteLength);

//revisedQuote will stored the "quote" stored value starting index up to the value  that's  been stored on "substring".
let revisedQuote=quote.slice(0,index)+substring ;

//let revisedQuote=quote.slice([0],[32]) ;
console.log(revisedQuote);

var section=document.getElementById("div");



// Don't edit the code below here!
section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `The quote is ${ quoteLength } characters long.`;
let para2 = document.createElement('p');
para2.textContent = revisedQuote;
section.appendChild(para1);
section.appendChild(para2);

