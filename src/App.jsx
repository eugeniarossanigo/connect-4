import { useState } from 'react'
import './App.css'
import { TURNS } from './constants'
import { checkWinner, checkGame } from './logic/board'

function App() {
  const [board, setBoard] = useState(Array(16).fill('black'))
  //const [board, setBoard] = useState(Array(4).fill(Array(4).fill('black')))
  const [turn, setTurn] = useState(TURNS.red)
  const [winner, setWinner] = useState(null)

  const handleClick = (array, indexArray, indexItem) => {
    updateBoard(array, indexArray, indexItem)
  }

  const updateBoard = (array, indexArray, indexItem) => {
    if (board[index] !== 'black' || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.red ? TURNS.green : TURNS.red
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard, board)
    if (newWinner) {
      console.log("ganó " + turn)
      setWinner(newWinner)
    } else if (checkGame(newBoard)) {
      setWinner(false)
    }

    // if (array[indexItem] !== 'black' || winner) return
    // const newBoard = [...board]
    // const newArray = [...array]
    // newArray[indexItem] = turn
    // newBoard[indexArray] = newArray
    // console.log(newBoard)
    // setBoard(newBoard)
    // const newTurn = turn === TURNS.red ? TURNS.green : TURNS.red
    // setTurn(newTurn)

  }

  return (
    <main className='main'>
      <h1>4 IN A ROW</h1>
      <section className='board'>
        {/* {board.map((array, index) => array.map((_, i) => {
          return (
            <div key={i} onClick={() => handleClick(array, index, i)}>
                <span className={array[i]}></span>
            </div>
          )
         }))} */}
        
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
        <div className={`${turn === TURNS.green && 'is-selected'}`}>
          <span className={TURNS.green}></span>
        </div>
      </section>
    </main>
  )
}

export default App
