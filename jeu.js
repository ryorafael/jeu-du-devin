function askNumber() {
    let number = prompt('donnez un numéro');
    number = parseInt(number);
    return number;
}

function didIWin(givenNumber, target) {
    if (givenNumber < target) {
        alert('Plus grand');
        return false;
    } else if (givenNumber > target) {
        alert('Plus petit');
        return false;
    } else {
        alert('Bravo ! Vous avez deviné le nombre.');
        return true;
    }
}
function gamePlay() {
    const targetNumber = Math.floor(Math.random() * 51);
    let attempts = 0;

    while (true) {
        let userGuess = askNumber();
        attempts++;

        if (didIWin(userGuess, targetNumber)) {
            break; 
        }
    }
    alert('Bravo ! Vous avez deviné le nombre en ${attempts} tentatives.');
}

gamePlay();