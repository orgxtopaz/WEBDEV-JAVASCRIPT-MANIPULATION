

//    ------------Arrays------------- ///


// Add your code here
let myArray = ["Justin Bieber", "XXXtentacion", "Juice Wrld"];
myArray.unshift("Post Malone");
myArray[0] = ("Skusta Clee");
myArray[1] = ("Restituto");



var section = document.getElementById("div");


// Don't edit the code below here!


section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Array: ${myArray}`;
section.appendChild(para1);
