import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css'
import { productos } from './assets/products'
import { productosYugi } from './assets/productsYugi'
import { options } from './assets/options';
import { useState } from "react";
import Swal from 'sweetalert2'
import videoPath from './assets/ternurin.mp4';

function App() {
  const particlesInit = async (main)=> {
    console.log(main);
    await loadFull(main);
  }

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const [position, setPosition] = useState({ top: "50px", left: "50px" });

  // Función para mover el botón a una posición aleatoria dentro del container
  const moveButton = () => {
    const randomX = Math.random() * 200; // Limita dentro del 80% del ancho
    const randomY = Math.random() * 400; // Limita dentro del 80% del alto
    setPosition({ top: `${randomY}px`, left: `${randomX}px` });
  };

  const dispararModal = () => {
    Swal.fire({
      title: '<h2 class="modal-title valentine-subtitle">¡Te amo Salma eres el amor de mi vida!</h2>',
      html: `
        <video width="100%" controls autoplay>
          <source src="${videoPath}" type="video/mp4">
          Tu navegador no soporta el formato de video.
        </video>
      `,
      showCloseButton: false,
      focusConfirm: false,
      allowOutsideClick: false,
      width: '80%',
      heightAuto: true,
    });
  }

  return (
    <>
      <Particles id="tsparticles" 
                 init={particlesInit} 
                 loaded={particlesLoaded}
                 options={options} />
      
      <div className="App d-flex justify-content-center align-items-center vh-100">
        <div className="container text-center">
          <div className="glassmorphism p-4">
            <h1 className="mb-3 text-white p-2 valentine-title">
              ¿Quieres ser mi Valentín? 💖
            </h1>
            <br/>
            <button className="m-3 button-valentine button-valentine-2 text-outline-bold" onClick={dispararModal}>Sí</button>
            <button className="m-3 button-valentine text-outline-bold"  style={{ 
                top: position.top, 
                left: position.left, 
                transition: "0.3s", 
                transform: "translate(-50%, -50%)" // Centra bien el botón
              }}
              onMouseEnter={moveButton} onTouchMove={moveButton} onTouchStart={moveButton} onClick={moveButton}>No</button>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default App
