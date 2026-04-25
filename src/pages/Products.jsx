import Header from '../components/Header'
import Footer from '../components/Footer'
import CardsProducts from '../components/CardsProducts'

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        
        <h3 className="text-center pt-40 font-bold text-4xl">NUESTRA COLECCIÓN</h3>
        <h5 className="text-center pt-5 text-2x1">Estilo urbano para cada ocasión</h5>
        <main className="flex-grow flex flex-wrap items-center justify-center gap-10 pt-10 pb-20 px-10">
            
            <CardsProducts 
                titulo="Camiseta Básica Urban"
                descripcion="Algodón 100% orgánico"
                valor="€29"
            />
            <CardsProducts 
                titulo="Jeans Slim Fit"
                descripcion="Denim premium stretch"
                valor="€89"
            />

            <CardsProducts 
                titulo="Sudadera Oversize"
                descripcion="Algodón French Terry"
                valor="€65"
            />
        </main>
         <main className="flex-grow flex flex-wrap items-center justify-center gap-10  pb-20 px-10">
               
            <CardsProducts 
                titulo="Chaqueta Bomber"
                descripcion="Nylon resistente al agua"
                valor="€120"
            />
            <CardsProducts 
                titulo="Gorra Snapback"
                descripcion="Bordado premium"
                valor="€35"
            />

            <CardsProducts 
                titulo="Zapatillas Urban"
                descripcion="Suela de goma antideslizante"
                valor="€95"
            />
            </main>
        
        <Footer />
    </div>
  )
}

export default Products