import React from "react"

export default function Header() {
  return (
    <>
      <div className="mx-2">
        <div className="p-3 text-3xl  flex justify-between">
          <h1>Logo</h1>
          <div className="flex gap-2">
            <h1>Usado</h1>|<h1>Novo</h1>
          </div>
          <h1>Login</h1>
        </div>
      </div>
    </>
  )
}
