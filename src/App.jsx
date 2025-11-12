import React from 'react';
// 1. Importa tu NavBar
import NavBar from './components/NavBar'; // Lo descomenté por si lo usas
import { Routes, Route, Link } from 'react-router-dom';

// 2. Importa todas tus páginas
import Inicio from './pages/Inicio';
import AcercaDe from './pages/AcercaDe';
import Servicios from './pages/Servicios';
import Curriculum from './pages/Curriculum'; // Asegúrate que la ruta sea correcta

// 3. ¡IMPORTA LOS 2 COMPONENTES NUEVOS DE LA TAREA!
import RegistroMemoria from './components/RegistroMemoria';
import RegistroPersistente from './components/RegistroPersistente';


function App() {
  return (
    <div className="flex"> {/* Este es tu div principal */}

      {/* <NavBar /> */} {/* Tu barra de navegación (comentada en tu captura) */}

      {/* 4. ¡AGREGUÉ LA NAVEGACIÓN DE LA TAREA AQUÍ! */}
      {/* Este menú es solo para que puedas cambiar fácil entre A y B */}
      <nav className="flex flex-col w-64 h-screen bg-gray-800 p-4 text-white">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">Navegación Tarea</h2>
        <Link
          to="/variante-a"
          className="p-2 rounded-md hover:bg-blue-600"
        >
          Temporal
        </Link>
        <Link
          to="/variante-b"
          className="p-2 rounded-md hover:bg-green-600"
        >
          Permanecida
        </Link>

        <hr className="my-4 border-gray-600" />

        <h3 className="font-bold mb-2 text-gray-400">Tus Rutas</h3>
        <Link to="/" className="p-2 rounded-md hover:bg-gray-700">Inicio</Link>
        <Link to="/curriculum" className="p-2 rounded-md hover:bg-gray-700">Curriculum</Link>
        <Link to="/acerca-de" className="p-2 rounded-md hover:bg-gray-700">Acerca De</Link>
        <Link to="/servicios" className="p-2 rounded-md hover:bg-gray-700">Servicios</Link>
      </nav>

      {/* 5. CONTENIDO PRINCIPAL (Tu <main>) */}
      {/* El fondo oscuro lo puse aquí para que coincida con tu diseño */}
      <main className="flex-grow p-8 bg-gray-900 min-h-screen">
        <Routes>
          {/* Tus rutas existentes */}
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/curriculum" element={<Curriculum />} />

          {/* 6. ¡AQUÍ ESTÁN LAS RUTAS NUEVAS DE LA TAREA! */}
          <Route path="/variante-a" element={<RegistroMemoria />} />
          <Route path="/variante-b" element={<RegistroPersistente />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;