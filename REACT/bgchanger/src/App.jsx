import { useState } from "react"


function App() {
  const [color,setcolor]=useState('lavender')
  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-2 px-2">
      <div className="flex flex-wrap bg-white p-2 rounded-full gap-3 shadow-lg">
        <button className="outline-none px-4 py-1 rounded-full"
         onClick={()=>setcolor('red')}
        style={{backgroundColor:'red'}}>Red</button>
        <button className="outline-none px-4 py-1 rounded-full shadow-lg"
        onClick={()=>setcolor('green')}
        style={{backgroundColor:'green'}}>Green</button>
        <button className="outline-none px-4 py-1 rounded-full shadow-lg"
         onClick={()=>setcolor('olive')}
        style={{backgroundColor:'olive'}}>Olive</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
         onClick={()=>setcolor('black')}
        style={{backgroundColor:'black'}}>Black</button>
      </div>
    </div>
   </div>
  )
}

export default App
