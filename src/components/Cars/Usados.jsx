export default function UsedCars() {
  let item = [
    {
      nome: "Aventador",
      modelo: "Lamborghini",
      img: "https://revistacarro.com.br/wp-content/uploads/2021/07/Aventador-Ultimae_5-1280x768.jpg",
    },
  ]
  return (
    <>
      <div className="blur-bgs p-4 rounded shadow-inner shadow-md ">
        <h1 className="text-2xl mb-2 ">Carros Usados</h1>
        <div className="flex flex-wrap justify-center gap-3">
          {item.map((items) => (
            <div key={items.nome} className="blur-bg p-6 rounded-md ">
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
