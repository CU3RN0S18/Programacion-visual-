// src/App.jsx

import './App.css';
import Navbar from './components/Navbar'; // <-- 1. IMPORTA TU COMPONENTE

function App() {
  return (
    <> {/* Usamos un fragmento <>...</> para devolver múltiples elementos */}

      <Navbar /> {/* <-- 2. AÑADE EL COMPONENTE AQUÍ */}

      {/* Contenido de tu página */}
      <div className="p-4">
        <h1 className="text-3xl font-bold underline">
          Hello world
        </h1>
        <p className="mt-4">Este es el contenido de mi página, debajo de la barra de navegación.</p>
      </div>

    </>
  );
}

export default App;