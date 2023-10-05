import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState('') 

  const clear = () => {
    setResult('')
  }

  const backspace = () => {
    setResult(result.slice(0, - 1))
  }

  const handleclick = (e) => {
    setResult(result.concat(e.target.name))
  }

  const calculate = () => {
    try{
      setResult(eval(result).toString())
    } catch (err){
      setResult('Error')
    }
  }

  return (
    <div className='calculator'>

      <div className='calculator_container'>
        <form action="">
          <input className='result' type="text" value={result}  />
        </form>

        <div className='keypad'>
          <button className='button_keypad btn' onClick={clear}>C</button>
          <button className='button_keypad btn' onClick={handleclick} name='/'>/</button>
          <button className='button_keypad btn' onClick={handleclick} name='*'>x</button>
          <button className='button_keypad btn' onClick={backspace}><i className='bx bx-left-arrow-alt'></i></button>
          <button className='button_keypad' onClick={handleclick} name='7'>7</button>
          <button className='button_keypad' onClick={handleclick} name='8'>8</button>
          <button className='button_keypad' onClick={handleclick} name='9'>9</button>
          <button className='button_keypad btn' onClick={handleclick} name='-'>-</button>
          <button className='button_keypad' onClick={handleclick} name='4'>4</button>
          <button className='button_keypad' onClick={handleclick} name='5'>5</button>
          <button className='button_keypad' onClick={handleclick} name='6'>6</button>
          <button className='button_keypad btn' onClick={handleclick} name='+'>+</button>
          <button className='button_keypad' onClick={handleclick} name='1'>1</button>
          <button className='button_keypad' onClick={handleclick} name='2'>2</button>
          <button className='button_keypad' onClick={handleclick} name='3'>3</button>
          <button className='button_keypad btn' onClick={handleclick} name='%'>%</button>
          <button className='button_keypad' onClick={handleclick} name='0'>0</button>
          <button className='button_keypad' onClick={handleclick} name='.'>.</button>
          <button className='button_keypad btn' onClick={calculate} id='result'>=</button>
        </div>
      </div>

        
      
    </div>
  )
}

export default App
