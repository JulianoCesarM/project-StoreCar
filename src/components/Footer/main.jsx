import viteLogo from "/vite.svg"
import reactLogo from "/react.svg"
import tailwind from "/tailwind.svg"

export default function Footer() {
  return (
    <>
      <div className=" py-6 px-4 bg-blue-100 ">
        <div className=" w-80 m-auto ">
          <h2 className="text-2xl mb-6 text-center color-black">
            Tecnologias usadas
          </h2>
          <div className="flex justify-between items-center font-bold underline flex gap-8">
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img
                src={viteLogo}
                className="logo vite bg-cover w-40"
                alt="Vite logo"
              />
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <img
                src={reactLogo}
                className="logo react w-44"
                alt="React logo"
              />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img
                src={tailwind}
                className="logo tailwind w-50"
                alt="tailwind logo"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
