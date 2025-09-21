// src/components/Navbar.jsx

import React from 'react';

function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo o Nombre de la Marca */}
                <a href="#" className="text-white text-2xl font-bold">
                    MiLogo
                </a>

                {/* Lista de Enlaces de Navegación */}
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Acerca de
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Servicios
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;