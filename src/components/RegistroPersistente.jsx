import React, { useState, useEffect } from 'react';
// ¡IMPORTANTE! Importa tu componente de Resumen original
import ResumenJuego from './ResumenJuego';

// Estado inicial COMPLETO
const initialFormState = {
    nombre: '',
    email: '',
    clase: 'Guerrero',
    genero: 'Masculino',
    colorCabello: 'Negro',
    biografia: ''
};

// --- Claves para localStorage ---
const HEROES_STORAGE_KEY = 'heroes_lista_persistente';
const SELECTED_HERO_STORAGE_KEY = 'heroe_seleccionado_persistente';


function RegistroPersistente() {
    // Estado para los campos del formulario
    const [formData, setFormData] = useState(initialFormState);

    // --- LÓGICA DE PERSISTENCIA ---
    const [heroes, setHeroes] = useState(() => {
        try {
            const heroesGuardados = localStorage.getItem(HEROES_STORAGE_KEY);
            return heroesGuardados ? JSON.parse(heroesGuardados) : [];
        } catch (error) { return []; }
    });

    const [heroeSeleccionado, setHeroeSeleccionado] = useState(() => {
        try {
            const heroeGuardado = localStorage.getItem(SELECTED_HERO_STORAGE_KEY);
            return heroeGuardado ? JSON.parse(heroeGuardado) : null;
        } catch (error) { return null; }
    });

    useEffect(() => {
        localStorage.setItem(HEROES_STORAGE_KEY, JSON.stringify(heroes));
    }, [heroes]);

    useEffect(() => {
        localStorage.setItem(SELECTED_HERO_STORAGE_KEY, JSON.stringify(heroeSeleccionado));
    }, [heroeSeleccionado]);
    // --- FIN LÓGICA DE PERSISTENCIA ---


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.nombre || !formData.email) {
            alert('Nombre y Email son obligatorios.');
            return;
        }

        const newHero = { ...formData, id: Date.now() };
        setHeroes((prevHeroes) => [...prevHeroes, newHero]);
        setFormData(initialFormState);
        setHeroeSeleccionado(newHero);
    };

    const handleSelectHero = (hero) => {
        setHeroeSeleccionado(hero);
    };

    // ¡NUEVA FUNCIÓN! Requisito de la Tarea B
    const handleClearList = () => {
        setHeroes([]);
        setHeroeSeleccionado(null);
        localStorage.removeItem(HEROES_STORAGE_KEY);
        localStorage.removeItem(SELECTED_HERO_STORAGE_KEY);
    };


    return (
        <div className="max-w-7xl mx-auto text-white">
            <h2 className="text-2xl font-semibold text-center text-green-400 mb-6">
                Variante B: Registro Persistente (localStorage)
            </h2>
            <blockquote className="text-center bg-gray-800 p-4 rounded-md border-l-4 border-green-400 mb-8">
                En este apartado lo que aunque reinicies la pagina aun siga la lista de personaje que  <span className="font-bold">permanecerán</span> al refrescar.
            </blockquote>

            <div className="grid md:grid-cols-2 gap-8">

                {/* === COLUMNA IZQUIERDA: FORMULARIO COMPLETO === */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-yellow-400 mb-6">Define a tu Héroe</h3>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div>
                            <label htmlFor="nombreB" className="block text-sm font-medium text-gray-300">Nombre del Héroe:</label>
                            <input type="text" id="nombreB" name="nombre" value={formData.nombre} onChange={handleChange} className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-md" />
                        </div>

                        <div>
                            <label htmlFor="claseB" className="block text-sm font-medium text-gray-300">Clase:</label>
                            <select id="claseB" name="clase" value={formData.clase} onChange={handleChange} className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-md">
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
                            <label htmlFor="colorCabelloB" className="block text-sm font-medium text-gray-300">Color de Cabello:</label>
                            <select id="colorCabelloB" name="colorCabello" value={formData.colorCabello} onChange={handleChange} className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-md">
                                <option>Negro</option>
                                <option>Castaño</option>
                                <option>Rubio</option>
                                <option>Rojo</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="emailB" className="block text-sm font-medium text-gray-300">Email del Jugador:</label>
                            <input type="email" id="emailB" name="email" value={formData.email} onChange={handleChange} className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-md" />
                        </div>

                        {/* --- CAMPO BIOGRAFÍA (Agregado) --- */}
                        <div>
                            <label htmlFor="biografiaB" className="block text-sm font-medium text-gray-300">Biografía (Opcional):</label>
                            <textarea id="biografiaB" name="biografia" value={formData.biografia} onChange={handleChange} rows="3" className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-md"></textarea>
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
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-yellow-400">Hoja de Personajes</h3>
                            {/* ¡BOTÓN DE LIMPIAR! */}
                            {heroes.length > 0 && (
                                <button
                                    onClick={handleClearList}
                                    className="bg-red-600 text-white text-sm font-bold py-1 px-3 rounded-md hover:bg-red-700 transition-colors"
                                >
                                    Limpiar Lista
                                </button>
                            )}
                        </div>

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
                            <ResumenJuego data={heroeSeleccionado} />
                        ) : (
                            <p className="text-gray-400">Completa y envía el formulario o selecciona un héroe de la lista.</p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RegistroPersistente;