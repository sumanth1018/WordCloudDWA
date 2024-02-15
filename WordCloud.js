let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainerE1 = document.getElementById("wordsContainer");
let userInputE1 = document.getElementById("userInput");
let addBtnB1 = document.getElementById("addBtn");
let errorMsgE1 = document.getElementById("errorMsg");

let errormsg = "Please a enter a word";

function addWordToWordClould(word) {
    let randomFontSize = Math.ceil(Math.random() * 65) + "px";
    let wordElement = document.createElement("span");
    wordElement.classList.add("word");
    wordElement.textContent = word;
    wordElement.style.fontSize = randomFontSize;
    wordsContainerE1.appendChild(wordElement);
}
for (let eachWord of wordCloud) {
    addWordToWordClould(eachWord);
}

addBtnB1.onclick = function() {
    let userInputValue = userInputE1.value;
    if (userInputValue !== "") {
        addWordToWordClould(userInputValue);
        userInputE1.value = "";
        errorMsgE1.textContent = "";
    } else {
        errorMsgE1.textContent = errormsg;
        errorMsgE1.classList.add("error-msg");
    }
};