import { useState } from 'react'
import './App.css'
import { TURNS } from './constants'
import { checkWinner, checkGame } from './logic/board'

function App() {
  // const [board, setBoard] = useState(Array(49).fill('black'))
  const [board, setBoard] = useState(() => {
    const storageBoard = window.localStorage.getItem('board')
    return storageBoard ? JSON.parse(storageBoard) : Array(49).fill('black')
  })
  // const [turn, setTurn] = useState(TURNS.red)
  const [turn, setTurn] = useState(() => {
    const storageTurn = window.localStorage.getItem('turn')
    return storageTurn ?? TURNS.red
  })
  const [winner, setWinner] = useState(null)

  const handleClick = (index) => {
    updateBoard(index)
  }

  const updateBoard = (index) => {
    let avoidSpaces = index < 42 && board[index + 7] === 'black'
    if (board[index] !== 'black' || avoidSpaces || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.red ? TURNS.yellow : TURNS.red
    setTurn(newTurn)
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(49).fill('black'))
    setWinner(null)
    setTurn(TURNS.red)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (
    <main className='main'>
      {/* <h1>CONNECT4</h1> */}
      <section className='board'>        
        {board.map((_, index) => {
          return (
            <div key={index} onClick={() => handleClick(index)}>
                <span className={board[index]}></span>
            </div>
          )
        })}
      </section>
      { winner ?
          <section className='winner'>
            <div className='is-winner'>
              <span className={`${winner}`}></span>
            </div>
            <div className='reset' onClick={resetGame}>
              <img src={`/refresh-arrow.png`}></img>
            </div> 
          </section>
          :
          <section className='turns'>
            <div className={`${turn === TURNS.red && 'is-selected'}`}>
              <span className={TURNS.red}></span>
            </div>
            <div className={`${turn === TURNS.yellow && 'is-selected'}`}>
              <span className={TURNS.yellow}></span>
            </div>
          </section>
      }
    </main>
  )
}

export default App
