import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card';

function App() {
 useState(15);
//  let myobj={
//     username:'tauseefmalk',
//     id:'haha'
//   }
  return (
    <>
      <h1 className='bg-green-700 text-black p-4 rounded-2xl'>Tailwind Test</h1>
      <Card username='touseef' btnText='Click me'  />
      <Card username='chaiaurcode' btnText="Visit me" />
    </>
  )
}

export default App
