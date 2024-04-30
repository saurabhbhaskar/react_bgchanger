import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">

            <button
              onClick={() => { 
                console.log("red");
                setColor("red") }}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button 
            onClick={() => { 
              console.log("green");
              setColor("green") }}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "green"}}
            >Green</button>

            <button 
            onClick={() => { 
              console.log("blue");
              setColor("blue") }}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "blue"}}
            >Blue</button>

            <button 
            onClick={() => { 
              console.log("pink");
              setColor("pink") }}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "pink"}}
            >Pink</button>

            <button 
            onClick={() => { 
              console.log("orange");
              setColor("orange") }}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "orange"}}
            >Orange</button>

            <button 
            onClick={() => { 
              console.log("purple");
              setColor("purple") }}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "purple"}}
            >Purple</button>

            <button 
            onClick={() => { 
              console.log("grey");
              setColor("grey") }}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "grey"}}
            >Grey</button>

            <button 
            onClick={() => { 
              console.log("indigo");
              setColor("indigo") }}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "indigo"}}
            >Indigo</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App


