// src/pages/AcercaDe.jsx

// 1. Importamos nuestro nuevo componente Contador
import Contador from '../components/Contador';

function AcercaDe() {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Acerca de Este Proyecto</h1>

            <p className="text-center mt-4 text-gray-700">
                Esta es una aplicación de práctica para aprender los fundamentos de React.
            </p>

            {/* Aquí integramos y renderizamos el componente Contador */}
            <Contador />

        </div>
    );
}

export default AcercaDe;