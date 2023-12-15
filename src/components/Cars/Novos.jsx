export default function NewCars() {
  let item = [
    {
      nome: "SF90 Stradale",
      modelo: "Ferrari",
      img: "https://cdn.motor1.com/images/mgl/qkk7zv/s3/novitec-ferrari-sf90-stradale-2022.jpg",
    },
  ]
  return (
    <>
      <div className="blur-bgs p-4 rounded shadow-inner shadow-md new">
        <h1 className="text-2xl mb-2">Carros Novos</h1>
        <div className="flex flex-wrap justify-center gap-3 ">
          {item.map((items) => (
            <div key={items.nome} className=" ">
              <p>Nome: {items.nome}</p>
              <p>Modelo: {items.modelo}</p>
              <img src={items.img} alt={items.nome} className="w-80 h-44" />
              <button className="text-2xl w-full h-12 bg-orange-400 ">
                {"<icon>"}Comprar
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
