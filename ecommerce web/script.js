


const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const inputField = document.querySelector(".hint span");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");


let initGame = () => {
    debugger
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join(""); 
    hintText.innerText = randomObj.hint;
    console.log(wordArray, randomObj.words);
    debugger;
}

initGame();
const checkWord = () => {
   let userWord = inputField.ariaValueMax.toLocaleLowerCase()
}
refreshBtn.addEventListener("click" , initGame);
checkBtn.addEventListener("click" , initGame);

