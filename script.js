const signal = 'X'
const a = []

const units = document.querySelectorAll('#unit')
const unitsArray = Array.from(units)

unitsArray.forEach(unit => unit.addEventListener('click', () => play(unit)))

function play(unit) {
    let index = unitsArray.indexOf(unit)
    if (a[index] !== signal && a[index] !== 'O') {
        unit.textContent = signal
        a[index] = signal
        console.log(endGame(a))
        computerPlay()
    }  
} 

function computerPlay() {
    let n = Math.floor(Math.random() * 9)
    if (a[n] === signal || a[n] === 'O') {
        computerPlay()
    } else {
        a[n] = "O"
        unitsArray[n].textContent = 'O'
    }
}

function endGame(a) {
    if (a[0] === signal && a[4] === signal && a[8] === signal) {
        return 'You win'
    } else if (a[2] === signal && a[4] === signal && a[6] === signal) {
        return 'You win'
    }
    
    for (let i = 0; i < 9; i++) {
        if (a[i] === signal && a[i+3] === signal && a[i+6] === signal) {
            return 'You win'
        } else if (a[i] === signal && a[i+1] === signal && a[i+2] === signal) {
            return 'You win'
        } else if (a[i] === signal && a[i+1] === signal && a[i+2] === signal) {
            return 'You win'
        }
    }
}


