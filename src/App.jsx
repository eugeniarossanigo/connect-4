import { useState } from 'react'
import './App.css'
import { TURNS } from './constants'
import { checkWinner, checkGame } from './logic/board'

function App() {
  const [board, setBoard] = useState(Array(25).fill('black'))
  const [turn, setTurn] = useState(TURNS.red)
  const [winner, setWinner] = useState(null)

  const handleClick = (index) => {
    updateBoard(index)
  }

  const updateBoard = (index) => {
    let x = index < 20 && board[index + 5] === 'black'
    console.log(index)
    console.log(index + 5)
    if (board[index] !== 'black' || x || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.red ? TURNS.yellow : TURNS.red
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      console.log("ganó " + turn)
      setWinner(newWinner)
    } else if (checkGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='main'>
      <h1>4 IN A ROW</h1>
      <section className='board'>        
        {board.map((_, index) => {
          return (
            <div key={index} onClick={() => handleClick(index)}>
                <span className={board[index]}></span>
            </div>
          )
        })}
      </section>
      <section className='turns'>
        <div className={`${turn === TURNS.red && 'is-selected'}`}>
          <span className={TURNS.red}></span>
        </div>
        <div className={`${turn === TURNS.yellow && 'is-selected'}`}>
          <span className={TURNS.yellow}></span>
        </div>
      </section>
    </main>
  )
}

export default App
