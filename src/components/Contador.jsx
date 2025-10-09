// src/components/Contador.jsx

import React, { useState } from 'react';

function Contador() {
    const [count, setCount] = useState(0);

    // Función para incrementar el contador
    const incrementar = () => {
        setCount(count + 1);
    };

    // Función para restar o decrementar el contador
    const restar = () => {
        // Agregamos una condición para no tener números negativos
        if (count > 0) {
            setCount(count - 1);
        }
    };

    // Función para reiniciar el contador a cero
    const reiniciar = () => {
        setCount(0);
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center mt-8">
            <p className="text-2xl font-semibold mb-4">
                contador: <span className="text-blue-600 font-bold">{count}</span>
            </p>

            {/* Usamos un div con flexbox para alinear los botones */}
            <div className="flex justify-center items-center gap-4">

                {/* Botón de Restar === */}
                <button
                    onClick={restar}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
                >
                    Restar
                </button>

                {/* Botón de Incrementar  */}
                <button
                    onClick={incrementar}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
                >
                    Incrementar
                </button>

                {/*  Botón de Reiniciar */}
                <button
                    onClick={reiniciar}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
                >
                    Reiniciar
                </button>

            </div>
        </div>
    );
}

export default Contador;