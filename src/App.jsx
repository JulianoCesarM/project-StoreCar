import { useState } from "react"
import "./App.css"
import Header from "./components/Header/main"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className="text-3xl font-bold underline">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <Header />
      <div className="">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
