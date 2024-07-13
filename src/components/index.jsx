import NewCars from "./Cars/Novos"
import UsedCars from "./Cars/Usados"

export default function BodyContent() {
  return (
    <>
      {/* Ficara um switch que mudara a "pagina" de novo,usado e ofertas 
      e 
      será adicionado uma page banner onde ira passar imagens das logos do veiculos*/}
      <div className="blur-bgs flex flex-col gap-10 bg-white">
        <NewCars />
        <UsedCars />
      </div>
    </>
  )
}
