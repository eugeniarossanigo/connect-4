export default function ModalRules({ handleOpen }) {
  return (
    <div className='main-modal'>
      <div className='card-modal'>
        <ul>
          <li>Players must connect 4 of the same colored discs in a row to win.</li>
          <li>Only one piece is played at a time.</li>
          <li>Players can be on the offensive or defensive.</li>
          <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
          {/* <li>Players must connect 4 of the same colored discs in a row to win.</li>
          <li>Take turns dropping the checkers into the slots, only one piece is played at a time.</li>
          <li>Start from the bottom, attempting to make a horizontal, vertical, or diagonal line of 4 checkers of your color.</li>
          <li>Players can be on the offensive or defensive.</li>
          <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
          <li>Use your checkers to block your opponent's lines of 4.</li>
          <li>Tips: Make your first move in the center to give you the most possibilities.</li> */}
        </ul>
        <section>
          <img src='/row.png' alt='connect' />
          <img src='/diagonal.png' alt='connect' />
          <img src='/column.png' alt='connect' />
        </section>
        <button type='click' onClick={() => handleOpen(false)}>Ok, let's go!</button>
      </div>
    </div>
  )
}


// Players must connect 4 of the same colored discs in a row to win.
// Only one piece is played at a time.
// Players can be on the offensive or defensive.
// The game ends when there is a 4-in-a-row or a stalemate.
