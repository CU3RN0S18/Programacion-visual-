import React, { useState } from 'react';
import FormularioJuego from '../components/FormularioJuego';
import ResumenJuego from '../components/ResumenJuego';

function Curriculum() {
    const [submittedData, setSubmittedData] = useState(null);

    const handleDataSubmit = (data) => {
        console.log("Datos recibidos en Curriculum:", data);
        setSubmittedData(data);
    };

    return (
        // Aplicamos el fondo oscuro a toda la página
        <div className="min-h-screen bg-gray-900 text-gray-200 p-8">
            <div className="container mx-auto">

                {/* Título principal con el estilo de la imagen */}
                <h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">
                    CREADOR DE HÉROES
                </h2>
                <p className="text-xl text-center text-gray-300 mb-10">
                    Elige tu camino, aventurero
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Columna 1: Formulario */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-yellow-500">
                            Define a tu Héroe
                        </h3>
                        <FormularioJuego onFormSubmit={handleDataSubmit} />
                    </div>

                    {/* Columna 2: Resumen (Panel Lateral) */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-yellow-500">
                            Hoja de Personaje
                        </h3>
                        <ResumenJuego data={submittedData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Curriculum;