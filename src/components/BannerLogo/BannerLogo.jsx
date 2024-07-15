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
  }, [])

  const currentBackground = backgrounds[backgroundIndex]
  if (currentBackground == "/ImageBannerLogo/Aston-Martin-Logo-1984.png") {
    changeBackgroundBannerColor =
      "bg-gradient-to-r from-transparent to-gray-900"
  }
  if (currentBackground == "/ImageBannerLogo/Ferrari-Logo-2010.png") {
    changeBackgroundBannerColor =
      "bg-gradient-to-r from-yellow-500 via-gray-950 to-red-500"
  }
  console.log(currentBackground)
  return (
    <>
      <div
        className={`${changeBackgroundBannerColor} h-80 overflow-x-hidden p-4`}
      >
        <div
          className={` h-full transform transition-transform duration-500 ${
            isTransitioning ? "translate-x-full" : "translate-x-0"
          }`}
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
