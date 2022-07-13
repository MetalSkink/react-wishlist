import './App.css'
import { productos } from './assets/products'

function App() {
  console.log("🚀 ~ file: App.jsx ~ line 3 ~ productos", productos);

  return (
    <div className="App">
      <div className="container mb-3">
        <h1 className='mb-3'>Wishlist del Xavi</h1>
        <div className="row g-2 g-lg-3">
          {
            productos.map((product,index) => (
              <div className="col-sm-12 col-md-6" key={index}>
                <div className="glassmorphism m-2">
                  <h4>{product.nombre}</h4>
                  <div className="m-3">
                    <img src={product.img} alt={product.nombre} />
                    <a href={product.buyLink} target="_blank" rel="noreferrer">
                      <button className='btn btn-primary mt-3' >Visitar</button>
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
