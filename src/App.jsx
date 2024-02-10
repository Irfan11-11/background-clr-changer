import { useState } from 'react'
import './App.css'

function App() {

  let globalc = "black"

  let [clr, setclr] = useState
    (globalc);
  function chng() {
    let colr = "red"
    setclr(colr)
  }
  function chng1() {
    let colr1 = "blue"
    setclr(colr1)
  }
  function chng2() {
    let colr2 = "green"
    setclr(colr2)
  }
  function chng3() {
    let colr7 = "Purple"
    setclr(colr7)
  }



  return (
    <div className="full-screen"
      style={{ backgroundColor: clr }}>
      <div className='center-content'> <h1>Background Color Changer</h1>
     
      <div className="box">
        <button onClick=
          {chng} className="btn
btn1">Red</button>
        <button onClick=
          {chng1}
          className="btn
btn2">Blue</button>
        <button onClick={chng2}
          className="btn
btn3">Green</button>
        <button onClick=
          {chng3}
          className="btn
btn8">Purple</button>
      </div>
    </div>
    </div>
  )
}

export default App
