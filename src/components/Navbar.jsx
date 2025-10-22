// src/components/Navbar.jsx

import React from 'react';
// 1. Importa el componente Link
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-800 text-white w-64 h-screen p-4 flex flex-col">


            <Link to="/" className="text-white text-2xl font-bold mb-10">
                UwU
            </Link>

            <ul className="flex flex-col space-y-4">
                <li>

                    <Link to="/" className="text-gray-300 hover:text-white">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/acerca-de" className="text-gray-300 hover:text-white">
                        Contador
                    </Link>
                </li>
                <li>
                    <Link to="/servicios" className="text-gray-300 hover:text-white">
                        Eleccion de clase
                    </Link>
                </li>
                <li>
                    <Link to="/curriculum" className="text-gray-300 hover:text-white">
                        Curriculum
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;