import NewCars from "./Cars/Novos"
import UsedCars from "./Cars/Usados"

export default function BodyContent() {
  return (
    <>
      <div className="w-4/5 mt-8 m-auto flex flex-col gap-10">
        <NewCars />
        <UsedCars />
      </div>
    </>
  )
}
