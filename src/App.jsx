// src/App.jsx

import Navbar from "./components/Navbar";
// 1. Importa los componentes de React Router
import { Routes, Route } from 'react-router-dom';

// 2. Importa todas tus páginas
import Inicio from './pages/Inicio';
import AcercaDe from './pages/AcercaDe';
import Servicios from './pages/Servicios';
import Curriculum from './pages/Curriculum'; // Asegúrate que la ruta sea correcta

function App() {
  return (
    <div className="flex">
      {/* La barra de navegación siempre estará visible */}
      <Navbar />

      {/* El contenido principal cambiará según la ruta */}
      <main className="flex-grow p-8">
        {/* 3. Aquí definimos qué componente mostrar para cada ruta */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/curriculum" element={<Curriculum />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;