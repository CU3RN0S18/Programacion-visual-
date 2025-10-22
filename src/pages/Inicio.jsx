import React, { useState } from 'react';

// Componente ToggleSeccion (definido aquí para que todo funcione)
// Este componente muestra un título y, al hacer clic, muestra u oculta su contenido.
function ToggleSeccion({ title, children, className }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`rounded-lg shadow-md cursor-pointer transition-all duration-300 ${className}`}>
            <div
                className="font-bold text-xl p-4 flex justify-between items-center text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                </span>
            </div>
            {isOpen && (
                <div className="p-4 bg-white bg-opacity-80 rounded-b-lg">
                    {children}
                </div>
            )}
        </div>
    );
}


// Componente Inicio (antes en ./pages/Inicio.jsx)

function Inicio() {
    const juegos = [
        { id: 1, titulo: "VALORANT", descripcion: "Un juego de estrategias con bandos y desactivación.", className: "bg-red-500 border-red-900" },
        { id: 2, titulo: "Rainbow Six", descripcion: "Un juego de estrategias de agentes.", className: "bg-gray-500 border-gray-700" },
        { id: 3, titulo: "Ark: Survival Evolved", descripcion: "Juego de mundo abierto de sobrevivir...", className: "bg-green-600 border-green-800" },
        { id: 4, titulo: "7 Days to Die", descripcion: "Juego de mundo abierto de sobrevivir...", className: "bg-rose-500 border-rose-700" }
    ];

    const [textoInput, setTextoInput] = useState('');

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
                Mis Juegos Favoritos
            </h1>

            <div className="mb-6 px-4">
                <input
                    type="text"
                    placeholder="Busca un juego o escribe algo..."
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={textoInput}
                    onChange={(e) => setTextoInput(e.target.value)}
                />
            </div>

            {textoInput && (
                <div className="mb-8 px-4">
                    <p className="p-4 bg-gray-100 border border-gray-200 rounded-lg">
                        <span className="font-semibold">Estás viendo:</span> {textoInput}
                    </p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                {juegos.map((juego) => (
                    <ToggleSeccion
                        key={juego.id}
                        title={juego.titulo}
                        className={juego.className}
                    >
                        <p className="mt-2 font-sans text-gray-700">
                            {juego.descripcion}
                        </p>
                    </ToggleSeccion>
                ))}
            </div>
        </div>
    );
}

// inicio de modal

function Modal({ potato }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Fondo oscuro */}
            <div className="absolute inset-0 bg-black bg-opacity-60" onClick={potato}></div>

            {/* Contenido del Modal */}
            <div className="relative bg-white w-11/12 md:max-w-md mx-auto rounded-lg shadow-xl p-8 z-10">
                <h2 className="text-2xl font-bold text-center mb-4">Iniciar Sesión</h2>
                <p className="text-center text-gray-600 mb-6">ejemplo.</p>
                <div className="flex justify-center">
                    <button
                        onClick={potato}
                        className="bg-orange-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-700 transition-colors"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}


// Componente principal App
const App = () => {
    const [modal, setModal] = useState(false);

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Barra de Navegación */}
            <div className="bg-orange-600 py-4 flex justify-center shadow-lg">
                <div className="flex justify-between items-center w-full max-w-6xl px-4 text-orange-100">
                    <div className="text-2xl font-bold">componente del modal</div>
                    <button
                        className="text-xl flex items-center justify-center p-2 rounded-md hover:bg-orange-700 transition-colors"
                        onClick={() => setModal(!modal)}
                    >

                        <i className="fa-solid fa-right-to-bracket mr-2"></i>
                        Iniciar sesion
                    </button>
                </div>
            </div>

            {/* Contenido principal (Tu componente Inicio) */}
            <div className="p-4 md:p-8">
                <Inicio />
            </div>

            {/* El Modal (se muestra si 'modal' es true) */}
            {modal && <Modal potato={() => setModal(!modal)} />}
        </div>
    );
};

export default App;