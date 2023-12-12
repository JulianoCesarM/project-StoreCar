import React from "react"
import viteLogo from "/vite.svg"
import reactLogo from "/react.svg"
export default function Footer() {
  return (
    <>
      <div className="m-8 bottom-0">
        <div className="flex justify-center flex-col">
          <h2>Tecnologias</h2>
          <div className="text-1xl font-bold underline flex gap-8">
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img
                src={reactLogo}
                className="logo tailwind"
                alt="logo tailwind"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
