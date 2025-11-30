import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css'
import { productos } from './assets/products'
import { options } from './assets/options';
import { ProductCard } from './components/ProductCard';

function App() {
  const particlesInit = useCallback(async (main) => {
    console.log(main);
    await loadFull(main);
  }, []);

  return (
    <>
      <Particles id="tsparticles"
        init={particlesInit}
        options={options} />
      <div className="App">
        <div className="container mb-3">
          <div className="glassmorphism m-2">
            <h1 className='mb-3 text-white p-2'>Wishlist del Xavi</h1>
          </div>
          <div className="row g-2 g-lg-3">
            {
              productos.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App