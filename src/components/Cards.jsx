import './Cards.css'
const Cards = ({ titulo, descripcion }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-sm h-70">

      <div className="bg-[#0f172a] p-4 mb-6 flex items-center justify-center w-20 h-20">
      </div>

      <h5 className="mb-4 text-xl font-bold tracking-widest uppercase">
        {titulo}
      </h5>

      <p className=" descripcion text-gray-500 text-sm leading-relaxed tracking-wide">
        {descripcion}
      </p>

    </div>
  )
}

export default Cards