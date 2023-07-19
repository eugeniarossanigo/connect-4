import { useState } from 'react'
import './App.css'
import { TURNS } from './constants'

function App() {
  const [board, setBoard] = useState(Array(16).fill("🟢"))

  return (
    <main className='main'>
      <h1>4 IN A ROW</h1>
      <section className='board'>
        {board.map((_, index) => {
          return (
            <div key={index}>
                <span>{board[index]}</span>
            </div>
          )
        })}
      </section>
      <section className='turns'>
        <div>
          <span>{TURNS.red}</span>
        </div>
        <div>
          <span>{TURNS.green}</span>
        </div>
      </section>
    </main>
  )
}

export default App
