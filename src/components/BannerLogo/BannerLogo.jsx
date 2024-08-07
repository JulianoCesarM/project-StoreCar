import { useEffect, useState } from "react"
import * as images from "/src/assets/imagens"

export default function BannerLogo() {
  const [backgroundIndex, setBackgroundIndex] = useState(0)
  const backgrounds = Object.values(images)
  const [isTransitioning, setIsTransitioning] = useState(false)
  let changeBackgroundBannerColor = useState("")
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true)

      setTimeout(() => {
        setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length)
        setIsTransitioning(false)
      }, 300) // Tempo de transição em milissegundos
    }, 5000)

    return () => clearInterval(intervalId)
  }, [backgrounds.length])

  const currentBackground = backgrounds[backgroundIndex]
  if (currentBackground == "/ImageBannerLogo/Aston-Martin-Logo-1984.png") {
    changeBackgroundBannerColor =
      "bg-gradient-to-r from-transparent to-gray-900"
  }
  if (currentBackground == "/ImageBannerLogo/Ferrari-Logo-2010.png") {
    changeBackgroundBannerColor =
      "bg-gradient-to-r from-yellow-400 via-gray-950 to-red-600"
  }
  if (currentBackground == "/ImageBannerLogo/Porsche-Logo.png") {
    changeBackgroundBannerColor =
      "bg-gradient-to-r from-red-600 via-gray-950 to-amber-600"
  }
  console.log(currentBackground)
  return (
    <>
      <div
        className={`${changeBackgroundBannerColor}  transform transition-transform duration-500 ${
          isTransitioning ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div
          className={`h-80`}
          style={{
            backgroundImage: `url(${currentBackground})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </>
  )
}
