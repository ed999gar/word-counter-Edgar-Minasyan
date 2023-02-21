var divBackground = document.getElementById("div1");

function changeColor() {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    divBackground.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
}

function inputFunction() {
    let inputValue = document.getElementById("myInput").value;
    let letterCount = inputValue.replace(/[^a-zA-Z]/g, '').length;
    let wordArray = inputValue.split(" ");
    let sentenceCount = inputValue.split(/(?<![.?!])\s+(?=[A-Z])/).filter((sentence) => sentence.trim() !== '');  

    let wordCount = 0;
    for(word of wordArray) {
        if(/[a-zA-Z0-9]/.test(word))
            wordCount += 1;
    }

    document.getElementById("letters").innerHTML = "Letter count: " + letterCount;
    document.getElementById("words").innerHTML = "Word count: " + wordCount;




    console.log(sentenceCount.length);
}