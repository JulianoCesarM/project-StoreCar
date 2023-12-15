import NewCars from "./Cars/Novos"
import UsedCars from "./Cars/Usados"

export default function BodyContent() {
  return (
    <>
      <div className="blur-bgs flex flex-col gap-10 bg-white">
        <NewCars />
        <UsedCars />
      </div>
    </>
  )
}
