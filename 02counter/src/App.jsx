import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  //let counter = 15;

  const addValue = () => {
    counter = counter + 1;
   if(counter > 20){
    alert("value can not be more than 20")
   } else {
     setCounter(counter);
   }
    //console.log("Value added, ", Math.random());
  }

  const removeValue = () => {
    counter = counter-1;
    if(counter < 0){
      alert("value can not be negative")
    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>React 2nd project !!</h1>
      <h2>Counter Value : {counter}
      </h2>
      <button
      onClick= {addValue}
      >Add Counter {counter} </button>
      <br />
      <button
      onClick={removeValue}
      >Remove Counter {counter}</button>
    </>
  )
}

export default App
