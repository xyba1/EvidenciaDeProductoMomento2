import './Cards.css'
const CardsProducts = ({ titulo, descripcion, valor }) => {
  return (
    <div className="bg-white block max-w-[300px] border border-gray-200 rounded-sm shadow-sm overflow-hidden w-[250px]">
      <div className="bg-[#e5e7eb] h-64 flex items-center justify-center">
        
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 text-left">
          {titulo}
        </h3>
        <p className="descripcionProducts text-gray-700 text-sm leading-relaxed tracking-wide">
          {descripcion}
        </p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-gray-900">
            {valor}
          </span>
          <button className="bg-[#111827] text-white text-xs font-bold px-4 py-2 hover:bg-gray-800 transition-colors uppercase">
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardsProducts;