import React, { useState } from 'react';

// --- Datos de las Clases ---
// Esto es como tu array de "juegos" de antes.
const classesData = [
    {
        id: 'warrior',
        name: 'Guerrero',
        description: 'Maestro de las armas. Fuerte, resistente y un líder nato en la batalla cuerpo a cuerpo.',
        icon: 'fas fa-khanda', // Icono de Font Awesome
        color: 'bg-red-900/50 border-red-500',
    },
    {
        id: 'mage',
        name: 'Mago',
        description: 'Dominador de las artes arcanas. Canaliza energías místicas para destruir a sus enemigos desde la distancia.',
        icon: 'fas fa-wand-sparkles',
        color: 'bg-blue-900/50 border-blue-500',
    },
    {
        id: 'rogue',
        name: 'Pícaro',
        description: 'Experto en el sigilo y el engaño. Ataca desde las sombras y desaparece sin dejar rastro.',
        icon: 'fas fa-mask',
        color: 'bg-gray-800/60 border-gray-500',
    },
];

// --- Componente Reutilizable para la Tarjeta de Clase ---
// Este es el equivalente a tu componente <ToggleSeccion> o <CookieRecipe>.
// Muestra la información de una clase y nos dice cuándo se hace clic en ella.
function ClassCard({ classInfo, onSelect }) {
    return (
        <div
            onClick={() => onSelect(classInfo)}
            className={`cursor-pointer rounded-lg p-6 text-center border-2 backdrop-blur-sm transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-400/20 ${classInfo.color}`}
        >
            <i className={`${classInfo.icon} text-6xl text-amber-300 mb-4`}></i>
            <h3 className="text-2xl font-bold text-amber-200 mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                {classInfo.name}
            </h3>
            <p className="text-stone-300 text-sm">{classInfo.description}</p>
        </div>
    );
}

// --- Componente para el Modal de Confirmación ---
// Este es tu nuevo componente <Modal>. Recibe la clase seleccionada y una función para cerrarse.
function ClassDetailModal({ selectedClass, onClose }) {
    if (!selectedClass) return null; // No mostrar nada si no hay clase seleccionada

    return (
        // El fondo oscuro que cierra el modal al hacer clic
        <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            onClick={onClose}
        >
            {/* El contenido del modal, que evita que el clic se propague al fondo */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-lg p-8 rounded-xl border-4 backdrop-blur-md shadow-lg shadow-amber-500/30 text-white ${selectedClass.color}`}
            >
                <i className={`${selectedClass.icon} text-7xl text-amber-300 mb-5`}></i>
                <h2 className="text-4xl font-bold mb-3" style={{ fontFamily: 'Cinzel, serif' }}>
                    {selectedClass.name}
                </h2>
                <p className="text-stone-200 mb-8">{selectedClass.description}</p>

                <div className="flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="py-2 px-6 font-bold rounded-lg bg-stone-700/50 hover:bg-stone-600/50 transition-colors"
                    >
                        Volver
                    </button>
                    <button
                        onClick={onClose} // En un juego real, esto confirmaría la selección
                        className="py-2 px-6 font-bold rounded-lg bg-amber-500 text-stone-900 hover:bg-amber-400 transition-colors"
                    >
                        Confirmar Clase
                    </button>
                </div>

                {/* Botón de cierre "X" */}
                <button onClick={onClose} className="absolute top-4 right-4 text-2xl hover:text-amber-300 transition-colors">
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </div>
    );
}

// --- Componente Principal ---
// Este es tu componente App, ahora con la temática del juego.
const App = () => {
    // 1. ESTADO: ¿Está el modal abierto? Es igual que tu `[modal, setModal]`
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 2. ESTADO: ¿Qué clase hemos seleccionado? Necesitamos guardar esta información.
    const [selectedClass, setSelectedClass] = useState(null);

    // Función para manejar la selección de una clase
    const handleSelectClass = (classData) => {
        setSelectedClass(classData); // Guardamos la clase en el estado
        setIsModalOpen(true);      // Abrimos el modal
    };

    // Función para cerrar el modal
    const handleCloseModal = () => {
        setIsModalOpen(false); // Cerramos el modal
    };

    return (
        // Un div para el fondo y las fuentes del juego
        <div className="bg-stone-900 min-h-screen text-amber-50" style={{ fontFamily: 'Lora, serif' }}>
            {/* Cargamos las fuentes y los iconos necesarios */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Lora&display=swap" rel="stylesheet" />

            {/* BARRA DE NAVEGACIÓN: Es como tu barra naranja de "Aldo's recipes" */}
            <header className="py-5 text-center bg-black/30 backdrop-blur-sm">
                <h1 className="text-4xl font-bold tracking-widest text-amber-300" style={{ fontFamily: 'Cinzel, serif' }}>
                    CREADOR DE HÉROES
                </h1>
            </header>

            {/* CONTENIDO PRINCIPAL: Es el equivalente a tu <CookieRecipe /> */}
            <main className="max-w-4xl mx-auto p-8">
                <h2 className="text-3xl text-center font-bold mb-8 text-amber-200">Elige tu camino, aventurero</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {classesData.map((classInfo) => (
                        <ClassCard
                            key={classInfo.id}
                            classInfo={classInfo}
                            onSelect={handleSelectClass} // Al hacer clic, se llama a esta función
                        />
                    ))}
                </div>
            </main>

            {/* MODAL: Se muestra condicionalmente, igual que en tu código original */}
            {isModalOpen && <ClassDetailModal selectedClass={selectedClass} onClose={handleCloseModal} />}
        </div>
    );
};

export default App;