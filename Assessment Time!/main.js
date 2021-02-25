// 1. --------COMPLETE VARIABLE AND FUNCTION DEFINITION----------

var customName = document.getElementById('customname'); //GETTING THE ID ELEMENT OF INPUT FIELD"<input id="customname" type="text" placeholder="">""


var randomize = document.querySelector('.randomize'); // VAR RANDOMIZE = GETTING THE CLASS OF BUTTON BY THE DOM QUERY SELECTOR

var story = document.querySelector('.story'); //VAR STORY = WILL HOLD THE CLASS OF THE "P" ATTRIBUTE  EX.GIVEN <p class="story"></p>

function randomValueFromArray(array) { //CREATING FUNCTION WHICH IMPORTS MATH LIB.

    var randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
}

//2.----- RAW TEXT STRINGS------

//VAR story WILL HOLD THE  VAR storyText if executed. 
var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

//VAR insertX will hold a strings of array, same as follows.
var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];

var insertY = ['the soup kitchen', 'Disneyland', 'the White House'];

var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];


//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
//RANDOMIZE ADDEVENTLISTENER WHEN EVER THE BUTTON IS CLICK
randomize.addEventListener('click', result);

function result() { //CREATING ANOTHER FUNCTION AGAIN FOR DISPLAYING TEXT / STORY

    var newStory = storyText;// HERE newStory will be hold also the value of storyText.

    var xItem = randomValueFromArray(insertX); // Var xItem will hold var inxertX and randomly remove some of the strings in array.

    var yItem = randomValueFromArray(insertY); //SAME AS ABOVE

    var zItem = randomValueFromArray(insertZ);  //SAME AS ABOVE

    // here we call replace twice to replace ':insertx'
    // with 'xItem' because each call replace exactly on occurene of ':insertx'
    // and we have two of them in 'newStory'.

    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    if (customName.value !== '') { //IF CustomName or the input holder is not equal to empty string"".
        var name = customName.value; //var name will store the input value of customName
        newStory = newStory.replace('Bob', name); //new Story will replace the default name Bob to the new input name.
    }

    if (document.getElementById("uk").checked) { //IF UK RADIO BUTTON IS CHECKED
        var weight = Math.round(300 / 14) + ' stones';
        var temperature = Math.round((94 - 32) * 1.8) + ' centigrade';
        newStory = newStory.replace('300 pounds', weight);
        newStory = newStory.replace('94 fahrenheit', temperature);
    }

    story.textContent = newStory; //THE TEXTCONTENT OR THE DISPLAY TEXT OF THE story WILL CHANGE TO newStory content.
    story.style.visibility = 'visible'; // The element or textcontent is visible. This is default
}






