// src/pages/Inicio.jsx

import React, { useState } from 'react';
import ToggleSeccion from '../components/ToggleSeccion';

function Inicio() {
    const juegos = [
        { id: 1, titulo: "VALORANT", descripcion: "Un juego de estrategias con bandos y desativacion", className: "bg-red-500 border-red-900" },
        { id: 2, titulo: "Rainbow six", descripcion: "Un juego de estrategias de agentes", className: "bg-gray-300 border-gray-500" },
        { id: 3, titulo: "Ark survival", descripcion: "Juego de mundo abierto de sobrevivir...", className: "bg-green-500 border-green-800" },
        { id: 4, titulo: "Seven day today", descripcion: "Juego de mundo abierto de sobrevivir...", className: "bg-rose-300 border-rose-500" }
    ];

    // 1. El estado ahora guardará el texto que escribas. Lo llamamos 'textoInput'.
    const [textoInput, setTextoInput] = useState('');

    return (
        <>
            <h1 className="text-4xl font-bold text-center mb-4">
                hola
            </h1>

            {/* 2. El input controlado. Su valor y su cambio están ligados al estado. */}
            <div className="mb-4 px-4">
                <input
                    type="text"
                    placeholder="Escribe algo aquí..."
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={textoInput}
                    onChange={(e) => setTextoInput(e.target.value)}
                />
            </div>

            {/* texto del estado en tiempo real */}
            {/* Solo se muestra el recuadro si has escrito algo. */}
            {textoInput && (
                <div className="mb-8 px-4">
                    <p className="p-4 bg-gray-100 border border-gray-200 rounded-lg">
                        <span className="font-semibold">Juego favoritos:</span> {textoInput}
                    </p>
                </div>
            )}

            {/* 4. La lista de juegos  */}
            <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8">
                {juegos.map((juego) => (
                    <ToggleSeccion
                        key={juego.id}
                        title={juego.titulo}
                        className={`p-4 border-2 ${juego.className}`}
                    >
                        <p className="mt-2 font-sans">
                            {juego.descripcion}
                        </p>
                    </ToggleSeccion>
                ))}
            </div>
        </>
    );
}

export default Inicio;