import React from 'react';

// Función simple para capitalizar la primera letra
const capitalizar = (s) => s.charAt(0).toUpperCase() + s.slice(1);

function ResumenJuego({ data }) {

    // Estado inicial sin datos
    if (!data) {
        return (
            <aside className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-inner min-h-[200px]">
                <h3 className="text-lg font-semibold text-yellow-500">
                    Resumen en vivo
                </h3>
                <p className="text-gray-400 mt-2">
                    Completa y envía el formulario para ver aquí los detalles de tu héroe.
                </p>
            </aside>
        );
    }

    // Estado cuando SÍ hay datos
    return (
        // Borde dorado para destacar que está activo
        <aside className="p-6 bg-gray-800 border border-yellow-500 rounded-lg shadow-inner">
            <h3 className="text-xl font-bold text-yellow-400">
                ¡Héroe Forjado!
            </h3>
            <div className="mt-4 space-y-3 text-gray-200">
                <p>
                    <strong className="text-gray-400 w-32 inline-block">Nombre:</strong>
                    {data.nombre}
                </p>
                <p>
                    <strong className="text-gray-400 w-32 inline-block">Clase:</strong>
                    {capitalizar(data.clase)}
                </p>
                <p>
                    <strong className="text-gray-400 w-32 inline-block">Género:</strong>
                    {capitalizar(data.genero)}
                </p>
                <p>
                    <strong className="text-gray-400 w-32 inline-block">Cabello:</strong>
                    {capitalizar(data.colorCabello)}
                </p>
                <p>
                    <strong className="text-gray-400 w-32 inline-block">Email (Jugador):</strong>
                    {data.email}
                </p>
                <p>
                    <strong className="text-gray-400 w-32 inline-block">Biografía:</strong>
                    {/* Mostramos un texto alternativo si la biografía está vacía */}
                    <span className="text-gray-300 italic">
                        {data.biografia || "Sin historia definida."}
                    </span>
                </p>
            </div>
        </aside>
    );
}

export default ResumenJuego;