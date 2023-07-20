import { WINNER_COMBOS } from '../constants';

export const checkWinner = (board, array) => {
    for (let combo of WINNER_COMBOS(array)) {
        const [a, b, c, d] = combo
        if (board[a] !== 'black' && board[a] === board[b] && board[a] === board[c] && board[a] === board[d]) {
            return board[a]
        }
    }
}

export const checkGame = (board) => {
    return board.every(slot => slot !== 'black')
}