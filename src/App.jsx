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
    <>
      <Header />
      <div className="bg-black h-screen overflow-x-hidden">
        <div
          className={`h-full transform transition-transform duration-500 ${
            isTransitioning ? "translate-x-full" : "translate-x-0"
          }`}
          style={{
            backgroundImage: `url(${currentBackground})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        
          
        
      </div>
      <BodyContent />
      <Footer />
    </>
  )
}

export default App
