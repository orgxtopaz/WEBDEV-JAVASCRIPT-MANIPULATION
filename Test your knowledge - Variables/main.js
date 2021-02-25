//     ------------Test your knowledge - Variables------------- ///

let myName = 'Chris';
let myAge = '42';
var section = document.getElementById('div');

// Don't edit the code below here!
section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para1);
section.appendChild(para2);