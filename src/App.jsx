import "./App.css"
import Header from "./components/Header/main"
import Footer from "./components/Footer/main"
import BodyContent from "./components"
import { useEffect, useState } from "react"
import * as images from "./assets/imagens"

function App() {
  const [backgroundIndex, setBackgroundIndex] = useState(0)
  const backgrounds = Object.values(images)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true)

      setTimeout(() => {
        setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length)
        setIsTransitioning(false)
      }, 300) // Tempo de transição em milissegundos
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  const currentBackground = backgrounds[backgroundIndex]
  return (
    <div className="bg-black relative h-screen overflow-x-hidden">
      <div className="absolute inset-0">
        <div
          className={`bg-cover h-screen transform transition-transform duration-500 ${
            isTransitioning ? "translate-x-full" : "translate-x-0"
          }`}
          style={{
            backgroundImage: `url(${currentBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>
      </div>
      <div className="absolute inset-0">
        <Header />
        <BodyContent />
        <Footer />
      </div>
    </div>
  )
}

export default App
