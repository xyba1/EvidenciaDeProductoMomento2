import { useState } from "react" // 1. Importamos useState
import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoContact from "../components/InfoContact"

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        asunto: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const noRefrescar = (e) => {
        e.preventDefault(); // 
        
        // Guardamos el objeto convertido a texto (JSON)
        localStorage.setItem("contacto_usuario", JSON.stringify(formData));
        
        alert("¡Datos guardados en localStorage!");
        console.log("Datos guardados:", formData);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <h3 className="text-center pt-40 font-bold text-4xl">CONTACTO</h3>
            <h5 className="text-center pt-5 text-xl">¿Tienes alguna pregunta? Nos encantaría escucharte</h5>
            
            <main className="flex-grow flex flex-row items-start justify-center gap-6 pt-10 pb-20 px-4">
                {/* Columna de Información */}
                <div className="flex flex-col gap-6 pt-10">
                    <InfoContact titulo="Dirección" linea1="Calle Urban Style 123" linea2="28001 Madrid, España" />
                    <InfoContact titulo="TELÉFONO" linea1="+34 91 123 45 67" linea2="" />
                    <InfoContact titulo="EMAIL" linea1="info@urbanthreads.com" />
                    <InfoContact titulo="HORARIO" linea1="Lun - Vie: 9:00 - 18:00" linea2="Sáb: 10:00 - 14:00" />
                </div>

                {/* Columna del Formulario */}
                <div className="bg-white p-8 border border-gray-200 rounded-sm px-20">
                    <h3 className="text-xl font-bold text-[#0f172a] uppercase tracking-wider mb-6">Envíanos un mensaje</h3>

                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
                        <p className="text-amber-700 text-xs">
                            <span className="font-bold">Demo:</span> Los datos se guardarán en tu navegador.
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={noRefrescar}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Nombre</label>
                                <input name="nombre" onChange={handleChange} type="text" className="w-full border border-gray-200 p-2 focus:outline-none focus:border-[#0f172a]" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Apellidos</label>
                                <input name="apellidos" onChange={handleChange} type="text" className="w-full border border-gray-200 p-2 focus:outline-none focus:border-[#0f172a]" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Email</label>
                            <input name="email" onChange={handleChange} type="email" className="w-full border border-gray-200 p-2 focus:outline-none focus:border-[#0f172a]" />
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Asunto</label>
                            <select name="asunto" onChange={handleChange} className="w-full border border-gray-200 p-2 focus:outline-none focus:border-[#0f172a] text-gray-400">
                                <option value="">Selecciona un asunto</option>
                                <option value="Soporte">Soporte</option>
                                <option value="Ventas">Ventas</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Mensaje</label>
                            <textarea name="mensaje" onChange={handleChange} rows="4" className="w-full border border-gray-200 p-2 focus:outline-none focus:border-[#0f172a]"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-[#0f172a] text-white font-bold py-3 text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Contact;