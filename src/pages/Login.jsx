import Header from '../components/Header'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import '../App.css'

const Login = () => {

     return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center">
        <section className=" section1 pt-50  bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#111111]">
          <h1 className="tituloPrincipal text-6xl font-black text-white text-center">
            ESTILO URBANO </h1><br />
            <h1 className="tituloPrincipal text-6xl font-black text-[#F4C021] text-center">
            REDEFINIDO</h1>
          <br />
            <p className="pt-10  text-center text-white ">Descubre nuestra colección exclusiva de ropa urbana minimalista</p>

            <button className="block mx-auto mt-8 bg-[#f2a900] text-black font-bold px-10 py-4">
            EXPLORAR COLECCIÓN
          </button>
        </section>

        <section className="flex-grow pt-22 flex flex-row items-center justify-center md:grid-cols-2 ">
            <Cards 
              titulo="DISEÑO ÚNICO"
              descripcion="Piezas exclusivas con estética urbana y minimalista"
            />
            <Cards 
              titulo="CALIDAD PREMIUM"
              descripcion="Materiales seleccionados para máxima durabilidad"
            />
            <Cards 
              titulo="ENVÍO RÁPIDO"
              descripcion="Recibe tus prendas favoritas en tiempo récord"
            />
        </section>
    </main>
 
     <Footer />
  </div>
  )
}
  

export default Login