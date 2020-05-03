
// I used this for inspiration on how to solve this task:
// https://stackoverflow.com/questions/4784595/how-to-replace-several-words-in-javascript

function replaceTheWord() {
    const newWords = document.querySelector(".about").innerHTML;
    const bananaWords = newWords.replace(/The/g, "Banana").replace(/the\b/g, "banana");
    
    const words = bananaWords;
    document.querySelector(".about").innerHTML = words;
};

setTimeout(replaceTheWord, 3000);
