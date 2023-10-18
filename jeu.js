function askNumber() {
    let number = prompt('donnez un numéro');
    number = parseInt(number);
    didIWin(number);
}

function didIWin(givenNumber) {
    if (givenNumber < 22) {
        alert('Plus grand');
    } else if (givenNumber > 22) {
        alert('Plus petit');
    } else {
        alert('Bravo ! Vous avez deviné le nombre.');
    }
}

askNumber();
