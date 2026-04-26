const InfoContact = ({ titulo, linea1, linea2 }) => {
  return (
       <div className="flex items-start gap-4 p-4 min-w-[300px]">
      <div className="bg-[#111827] p-4 flex items-center justify-center rounded-sm shadow-md">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
          />
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <h4 className="text-[#003d66] font-bold text-xl tracking-tight uppercase">
          {titulo}
        </h4>
        <p className="text-gray-500 text-2xl leading-tight ">
          {linea1}
        </p>
        <p className="text-gray-500 text-2xl leading-tight ">
          {linea2}
        </p>
      </div>
    </div>
  );
};


export default InfoContact;