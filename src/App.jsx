import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css'
import { productos } from './assets/products'
import { productosYugi } from './assets/productsYugi'
import { options } from './assets/options';

function App() {
  const particlesInit = async (main)=> {
    console.log(main);
    await loadFull(main);
  }

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <Particles id="tsparticles" 
                 init={particlesInit} 
                 loaded={particlesLoaded}
                 options={options} />
      <div className="App">
        <div className="container mb-3">
        <div className="glassmorphism m-2">
          <h1 className='mb-3 text-white p-2'>Wishlist del Xavi</h1>
        </div>
          <div className="row g-2 g-lg-3">
            {
              productos.map((product,index) => (
                <div className="col-sm-12 col-md-6" key={index}>
                  <div className="glassmorphism m-2">
                    <h4 className="text-white">{product.nombre}</h4>
                    <div className="m-3">
                      <img src={product.img} alt={product.nombre} />
                      <p>{product.note}</p>
                      {
                        product.buyLink?.length > 0 && 
                        <a href={product.buyLink} target="_blank" rel="noreferrer">
                          <button className='btn btn-primary ms-3 mt-3' >
                            Visitar 
                            <i className="fa-solid fa-shop ms-2"></i>
                          </button>
                        </a>
                      }
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
