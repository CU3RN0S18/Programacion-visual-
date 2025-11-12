import React, { useState } from 'react';
// ¡IMPORTANTE! Importa tu componente de Resumen original
import ResumenJuego from './ResumenJuego';

// Estado inicial COMPLETO (como en tu FormularioJuego)
const initialFormState = {
    nombre: '',
    email: '',
    clase: 'Guerrero',
    genero: 'Masculino', // Valor inicial para radio
    colorCabello: 'Negro',
    biografia: ''
};

function RegistroMemoria() {
    // Estado para los campos del formulario
    const [formData, setFormData] = useState(initialFormState);

    // Estado para la lista de héroes (Requisito Tarea A)
    const [heroes, setHeroes] = useState([]);

    // Estado para saber qué héroe está seleccionado
    const [heroeSeleccionado, setHeroeSeleccionado] = useState(null);

    // Manejador de cambios en los inputs (funciona para todos)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Manejador del envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.nombre || !formData.email) {
            alert('Nombre y Email son obligatorios.');
            return;
        }

        const newHero = { ...formData, id: Date.now() };
        setHeroes((prevHeroes) => [...prevHeroes, newHero]); // Guarda en la lista
        setFormData(initialFormState); // Limpia el formulario
        setHeroeSeleccionado(newHero); // Selecciona el nuevo
    };

    // Función para manejar el clic en la lista
    const handleSelectHero = (hero) => {
        setHeroeSeleccionado(hero);
    };

    return (
        <div className="max-w-7xl mx-auto text-white">
            <h2 className="text-2xl font-semibold text-center text-blue-400 mb-6">
                Variante A: Registro en Memoria (useState)
            </h2>
            <blockquote className="text-center bg-gray-800 p-4 rounded-md border-l-4 border-blue-400 mb-8">
                Aqui se guarda hasta que <span className="font-bold">reinicies se</span> eliminara.
            </blockquote>

            <div className="grid md:grid-cols-2 gap-8">

                {/* === COLUMNA IZQUIERDA: FORMULARIO COMPLETO === */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-yellow-400 mb-6">Define a tu Héroe</h3>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div>
                            <label htmlFor="nombreA" className="block text-sm font-medium text-gray-300">Nombre del Héroe:</label>
                            <input type="text" id="nombreA" name="nombre" value={formData.nombre} onChange={handleChange} className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-md" />
                        </div>

                        <div>
                            <label htmlFor="claseA" className="block text-sm font-medium text-gray-300">Clase:</label>
                            <select id="claseA" name="clase" value={formData.clase} onChange={handleChange} className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-md">
                                <option>Guerrero</option>
                                <option>Mago</option>
                                <option>Pícaro</option>
                            </select>
                        </div>

                        {/* --- CAMPO GÉNERO (Agregado) --- */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300">Género:</label>
                            <div className="flex gap-4 mt-1">
                                <label className="flex items-center">
                                    <input type="radio" name="genero" value="Masculino" checked={formData.genero === 'Masculino'} onChange={handleChange} className="mr-2" />
                                    Masculino
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="genero" value="Femenino" checked={formData.genero === 'Femenino'} onChange={handleChange} className="mr-2" />
                                    Femenino
                                </label>
                            </div>
                        </div>

                        {/* --- CAMPO COLOR CABELLO (Agregado) --- */}
                        <div>
                            <label htmlFor="colorCabelloA" className="block text-sm font-medium text-gray-300">Color de Cabello:</label>
                            <select id="colorCabelloA" name="colorCabello" value={formData.colorCabello} onChange={handleChange} className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-md">
                                <option>Negro</option>
                                <option>Castaño</option>
                                <option>Rubio</option>
                                <option>Rojo</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="emailA" className="block text-sm font-medium text-gray-300">Email del Jugador:</label>
                            <input type="email" id="emailA" name="email" value={formData.email} onChange={handleChange} className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-md" />
                        </div>

                        {/* --- CAMPO BIOGRAFÍA (Agregado) --- */}
                        <div>
                            <label htmlFor="biografiaA" className="block text-sm font-medium text-gray-300">Biografía (Opcional):</label>
                            <textarea id="biografiaA" name="biografia" value={formData.biografia} onChange={handleChange} rows="3" className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-md"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-md hover:bg-yellow-600 transition-colors">
                            Forjar Héroe
                        </button>
                    </form>
                </div>

                {/* === COLUMNA DERECHA: LISTA Y RESUMEN === */}
                <div className="space-y-8">

                    {/* --- SECCIÓN LISTADO (Requisito Tarea) --- */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-yellow-400 mb-6">Hoja de Personajes (Haz clic para seleccionar)</h3>
                        {heroes.length === 0 ? (
                            <p className="text-gray-400">Aún no has forjado ningún héroe.</p>
                        ) : (
                            <ul className="space-y-2 max-h-48 overflow-y-auto"> {/* Limité la altura */}
                                {heroes.map((hero) => (
                                    <li
                                        key={hero.id}
                                        className={`p-3 rounded-md cursor-pointer transition-all ${heroeSeleccionado?.id === hero.id ? 'bg-yellow-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                                        onClick={() => handleSelectHero(hero)}
                                    >
                                        <p className="font-bold">{hero.nombre}</p>
                                        <p className="text-sm text-gray-300">{hero.clase}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* --- SECCIÓN RESUMEN (Tu Idea) --- */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-yellow-400 mb-6">Resumen en vivo</h3>
                        {heroeSeleccionado ? (
                            // ¡Aquí reutilizamos tu componente ResumenJuego!
                            <ResumenJuego data={heroeSeleccionado} />
                        ) : (
                            <p className="text-gray-400">Completa y envía el formulario para ver aquí los detalles de tu héroe.</p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RegistroMemoria;