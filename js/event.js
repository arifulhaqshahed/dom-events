function makeRed(){
    document.body.style.backgroundColor = 'yellow';
}


const blueButton = document.getElementById('blue-button');
blueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

const greenButton = document.getElementById('green-button');
greenButton.onclick = function(){
    document.body.style.backgroundColor = 'green';
}

// handle event by using addEventListener
/* const chocolateButton = document.getElementById('chocolate-button');
chocolateButton.addEventListener('click', makeChocolate);
function makeChocolate(){
    document.body.style.backgroundColor = 'chocolate';
} */

document.getElementById('chocolate-button').addEventListener('click' , function(){
    document.body.style.backgroundColor = 'chocolate';
})