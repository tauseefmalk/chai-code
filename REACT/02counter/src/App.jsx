import { useState  } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter]=useState(0);

  const increment=()=>{
  console.log('clicked', counter);
  if(counter<20){
    setcounter(counter+1);
    }
    else{
    return counter
  }
  }

  const decrement=()=>{
    if (counter>0) {
    setcounter(counter-1);
    }
    else{
      return counter;
    }
}

  return (
    <>
      <h1>Touseef aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={increment}>Add value</button>
      <button onClick={decrement}>Remove value</button>
    </>
  )
}

export default App
