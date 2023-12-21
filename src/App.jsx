import React,{ useState } from 'react'
import './App.css'

function App() {
  const[currentValue,setCurrentValue]=useState('');
  return (
    <div className="container">
      <div className='header'>
        CALCULATOR
      <div className="calculator">
      <form action="">
        <div className='input_text'>
          <input type="text" value={currentValue}/>
        </div>
        <div>
          <input type="button" value="AC" onClick={e => setCurrentValue('')}/>
          <input type="button" value="DE" onClick={e => setCurrentValue(currentValue.slice(0, -1))}/>
          <input type="button" value="." onClick={e => setCurrentValue(currentValue + e.target.value)}/>
          <input type="button" value="/" onClick={e => setCurrentValue(currentValue + e.target.value)}/>
        </div>
        <div>
          <input type="button" value="7" onClick={e => setCurrentValue(currentValue + e.target.value)} />
          <input type="button" value="8" onClick={e => setCurrentValue(currentValue + e.target.value)}/>
          <input type="button" value="9" onClick={e => setCurrentValue(currentValue + e.target.value)}/>
          <input type="button" value="*" onClick={e => setCurrentValue(currentValue + e.target.value)}/>
        </div>
        <div>
          <input type="button" value="4" onClick={e => setCurrentValue(currentValue + e.target.value)}/>
          <input type="button" value="5" onClick={e => setCurrentValue(currentValue + e.target.value)}/>
          <input type="button" value="6" onClick={e => setCurrentValue(currentValue + e.target.value)}/>
          <input type="button" value="+" onClick={e => setCurrentValue(currentValue + e.target.value)}/>
        </div>
        <div>
          <input type="button" value="1" onClick={e => setCurrentValue(currentValue + e.target.value)}/>
          <input type="button" value="2" onClick={e => setCurrentValue(currentValue + e.target.value)}/>
          <input type="button" value="3" onClick={e => setCurrentValue(currentValue + e.target.value)}/>
          <input type="button" value="-" onClick={e => setCurrentValue(currentValue + e.target.value)}/>
        </div>
        <div>
          <input type="button" value="00" onClick={e => setCurrentValue(currentValue + e.target.value)}/>
          <input type="button" value="0" onClick={e => setCurrentValue(currentValue + e.target.value)}/>
          <input type="button" value="=" className='equal' onClick={e => setCurrentValue(eval(currentValue))}/>
        </div>
      </form>
      </div>
      </div>

    </div>
  )
}

export default App
