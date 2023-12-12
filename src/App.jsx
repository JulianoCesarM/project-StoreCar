import { useState } from "react"
import "./App.css"
import Header from "./components/Header/main"
import Footer from "./components/Footer/main"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Footer />
    </>
  )
}

export default App
