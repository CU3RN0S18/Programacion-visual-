import React, { useState } from 'react';

// Ahora aceptamos una prop 'className' para personalizar el contenedor principal
function ToggleSeccion({ title, children, className = '' }) {
    const [visible, setVisible] = useState(false);

    const toggleVisibilidad = () => {
        setVisible(!visible);
    };

    // Usamos el 'className' que nos pasen en el div principal.
    // Quite los estilos fijos de borde y margen que tenía antes.
    return (
        <div className={`rounded-lg overflow-hidden ${className}`}>
            <button
                onClick={toggleVisibilidad}
                className="w-full text-left font-bold text-xl flex justify-between items-center"
            >
                <span>{title}</span>
                <span className={`transform transition-transform duration-300 ${visible ? 'rotate-180' : ''}`}>
                    ▼
                </span>
            </button>

            {visible && (
                <div className="mt-2">
                    {children}
                </div>
            )}
        </div>
    );
}

export default ToggleSeccion;