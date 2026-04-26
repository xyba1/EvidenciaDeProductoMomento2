import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoContact from "../components/InfoContact"

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <Header/>
        <h3 className="text-center pt-40 font-bold text-4xl">CONTACTO</h3>
        <h5 className="text-center pt-5 text-4x1">¿Tienes alguna pregunta? Nos encantaría escucharte</h5>
        <main className="flex-grow flex flex-row items-center justify-center gap-6 pt-10 pb-20 px-4">
             <main className="flex-grow flex flex-col items-center justify-center gap-6 pt-40 pb-20 px-4">
                    <InfoContact 
                        titulo="Dirección"
                        linea1="Calle Urban Style 123"
                        linea2="28001 Madrid, España"
                    />

                    <InfoContact 
                        titulo="TELÉFONO"
                        linea1="+34 91 123 45 67"
                        linea2=""
                    />

                    <InfoContact 
                        titulo="EMAIL"
                        linea1="info@urbanthreads.com"
                    />

                    <InfoContact 
                        titulo="HORARIO"
                        linea1="Lun - Vie: 9:00 - 18:00"
                        linea2="Sáb: 10:00 - 14:00"
                    />
                </main>

             <div className="bg-white p-8  border border-gray-200 rounded-sm px-20 ">
                    <h3 className="text-xl font-bold text-[#0f172a] uppercase tracking-wider mb-6">
                        Envíanos un mensaje
                    </h3>

                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
                        <p className="text-amber-700 text-xs">
                        <span className="font-bold">Demo:</span> Este es un formulario de demostración. Los mensajes no se enviarán realmente.
                        </p>
                    </div>

            <form className="space-y-4 ">
                <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Nombre</label>
                    <input type="text" className="w-full border border-gray-200 p-2 focus:outline-none focus:border-[#0f172a]" />
                </div>
                <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Apellidos</label>
                    <input type="text" className="w-full border border-gray-200 p-2 focus:outline-none focus:border-[#0f172a]" />
                </div>
                </div>

                        <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Email</label>
                        <input type="email" className="w-full border border-gray-200 p-2 focus:outline-none focus:border-[#0f172a]" />
                        </div>

                        <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Asunto</label>
                        <select className="w-full border border-gray-200 p-2 focus:outline-none focus:border-[#0f172a] text-gray-400">
                            <option>Selecciona un asunto</option>
                        </select>
                        </div>

                        <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Mensaje</label>
                        <textarea rows="4" className="w-full border border-gray-200 p-2 focus:outline-none focus:border-[#0f172a]"></textarea>
                        </div>

                        <button className="w-full bg-[#0f172a] text-white font-bold py-3 text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors">
                        Enviar Mensaje
                        </button>
            </form>
        </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Contact