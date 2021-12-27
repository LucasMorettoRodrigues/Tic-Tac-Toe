const createPlayer = (name, marker) => {
    return {name, marker}
}

const gameBoard = (() => {
    let board = []
    const units = Array.from(document.querySelectorAll('#unit'))

    function computerPlay() {
        let n = Math.floor(Math.random() * 9)
        if (board[n] === 'O' || board[n] === 'X') {
            computerPlay()
        } else {
            play(units[n], n)
        }
    }

    units.forEach((unit, index) => unit.addEventListener('click', () => play(unit, index)))

    function play(unit, index) {
        unit.style.pointerEvents = 'none'
        console.log(game.currentPlayer.marker)
        unit.textContent = game.currentPlayer.marker
        board[index] = game.currentPlayer.marker
        game.spots--
        console.log(game.spots)
        if (game.checkWinner()){
            console.log(game.currentPlayer.name + ' win the game!!!')
        } else if (game.checkDraw(game.spots)) {
            console.log('Draw!!!')
        } else {
            game.nextPlayer()
            if (game.currentPlayer.name === 'Robot') {
                computerPlay()
            }
        }
    }
    return {board}
})()

const game = (() => {
    const playerOne = createPlayer('Thomas', 'X')
    const playerTwo = createPlayer('Robot', 'O')

    let currentPlayer = playerOne
    let spots = 9

    function nextPlayer() {
        this.currentPlayer === playerOne ? this.currentPlayer = playerTwo : this.currentPlayer = playerOne
    }

    function checkWinner() {
        if ((gameBoard.board[0] === this.currentPlayer.marker && gameBoard.board[4] === this.currentPlayer.marker && gameBoard.board[8] === this.currentPlayer.marker)  ||
            (gameBoard.board[2] === this.currentPlayer.marker && gameBoard.board[4] === this.currentPlayer.marker && gameBoard.board[6] === this.currentPlayer.marker)  ||
            (gameBoard.board[0] === this.currentPlayer.marker && gameBoard.board[1] === this.currentPlayer.marker && gameBoard.board[2] === this.currentPlayer.marker) ||
            (gameBoard.board[3] === this.currentPlayer.marker && gameBoard.board[4] === this.currentPlayer.marker && gameBoard.board[5] === this.currentPlayer.marker) ||
            (gameBoard.board[6] === this.currentPlayer.marker && gameBoard.board[7] === this.currentPlayer.marker && gameBoard.board[8] === this.currentPlayer.marker) ||
            (gameBoard.board[0] === this.currentPlayer.marker && gameBoard.board[3] === this.currentPlayer.marker && gameBoard.board[6] === this.currentPlayer.marker) ||
            (gameBoard.board[1] === this.currentPlayer.marker && gameBoard.board[4] === this.currentPlayer.marker && gameBoard.board[7] === this.currentPlayer.marker) ||
            (gameBoard.board[2] === this.currentPlayer.marker && gameBoard.board[5] === this.currentPlayer.marker && gameBoard.board[8] === this.currentPlayer.marker)) {
            return true
        }
    }

    function checkDraw(spots) {
        if (spots === 0){
            return true
        } 
    }

    return {currentPlayer, nextPlayer, spots, checkWinner, checkDraw}
})()




