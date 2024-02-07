/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

// Constants for p tag to display query selectors
const studentId = document.getElementById("studentId");
const chosenNoun1 = document.getElementById("choosenNoun1");
const chosenVerb = document.getElementById("choosenVerb");
const chosenAdjective = document.getElementById("choosenAdjective");
const chosenNoun2 = document.getElementById("choosenNoun2");
const chosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyDisplay = document.getElementById("story");

// Variables for pre-defined arrays
const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settings = ["on the moon", "on the chair", "in the spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
let countNoun1 = 0;
let countVerb = 0;
let countAdjective = 0;
let countNoun2 = 0;
let countSetting = 0;

/* Functions
-------------------------------------------------- */

// Functions to handle click event for selecting and displaying a value from their respective arrays
function noun1_on_click() {
    // Retrieve the current noun from the nouns1 array using the countNoun1 index
    const currentNoun = nouns1[countNoun1];
    // displaying content 
    chosenNoun1.textContent = currentNoun;
    // Determine if countNoun1 has reached the end of the array; if it has, reset it to 0; otherwise, increment it.
    if (countNoun1 === nouns1.length - 1) {
        countNoun1 = 0;
    } else {
        countNoun1++;
    }
}

function verb_on_click() {
    const currentVerb = verbs[countVerb];
    chosenVerb.textContent = currentVerb;

    if (countVerb === verbs.length - 1) {
        countVerb = 0;
    } else {
        countVerb++;
    }
}

function adjective_on_click() {
    const currentAdjective = adjectives[countAdjective];
    chosenAdjective.textContent = currentAdjective;

    if (countAdjective === adjectives.length - 1) {
        countAdjective = 0;
    } else {
        countAdjective++;
    }
}

function noun2_on_click() {
    const currentNoun2 = nouns2[countNoun2];
    chosenNoun2.textContent = currentNoun2;

    if (countNoun2 === nouns2.length - 1) {
        countNoun2 = 0;
    } else {
        countNoun2++;
    }
}

function setting_on_click() {
    const currentSetting = settings[countSetting];
    chosenSetting.textContent = currentSetting;

    if (countSetting === settings.length - 1) {
        countSetting = 0;
    } else {
       countSetting++;
    }
}

// function to add studentId dynamically and displaying the concatenated strings from the arrays to make a story
function playback_on_click() {
    const story = chosenNoun1.textContent + " " + chosenVerb.textContent + " " + chosenAdjective.textContent + " " + chosenNoun2.textContent + " " + chosenSetting.textContent;
    storyDisplay.textContent = story; //displaying the story 
    studentId.textContent = "Student ID: 200555884"; // giving the value of studentId to display
   
}
//
function random_on_click() {
    //using getRandomElement() functions with different parameters to get random values from arrays and generating a random story

    const randomStory = getRandomElement(nouns1) + " " + getRandomElement(verbs) + " " + getRandomElement(adjectives) + " " + getRandomElement(nouns2) + " " + getRandomElement(settings);
    storyDisplay.textContent = randomStory;
}

//function to get random values from each array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/* Event Listeners
-------------------------------------------------- */
// Event listeners to display content when buttons clicked
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);// on click event which displays studentId 
randomButton.addEventListener("click", random_on_click);
