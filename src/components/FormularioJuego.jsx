import React, { useState } from 'react';

function FormularioJuego({ onFormSubmit }) {

    // estados nuevos
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        clase: 'guerrero',
        genero: '',
        colorCabello: 'negro',
        biografia: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.nombre.trim()) {
            newErrors.nombre = "El nombre es obligatorio";
        }
        if (!formData.email.trim()) {
            newErrors.email = "El email es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "El formato de email no es válido";
        }
        // 2. Validación para el nuevo campo 'genero'
        if (!formData.genero) {
            newErrors.genero = "Debes seleccionar un género";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onFormSubmit(formData);
        } else {
            console.log("Formulario con errores, no se envía.");
        }
    };

    // 3. Clases de Tailwind para los inputs (reutilizables)
    const inputStyle = "mt-1 block w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:border-yellow-500 focus:ring-yellow-500";
    const labelStyle = "block text-sm font-medium text-gray-300";
    const errorStyle = "text-red-400 text-xs mt-1";

    return (
        // 4. Estilo del formulario 
        <form onSubmit={handleSubmit} className="space-y-6 p-6 rounded-lg shadow-xl bg-gray-800">

            {/* Campo Nombre */}
            <div>
                <label htmlFor="nombre" className={labelStyle}>
                    Nombre del Héroe:
                </label>
                <input type="text" id="nombre" name="nombre"
                    value={formData.nombre} onChange={handleChange}
                    className={inputStyle}
                />
                {errors.nombre && <p className={errorStyle}>{errors.nombre}</p>}
            </div>

            {/* Campo Clase  */}
            <div>
                <label htmlFor="clase" className={labelStyle}>
                    Clase:
                </label>
                <select id="clase" name="clase"
                    value={formData.clase} onChange={handleChange}
                    className={inputStyle}
                >
                    <option value="guerrero">Guerrero</option>
                    <option value="mago">Mago</option>
                    <option value="picaro">Pícaro</option>
                </select>
            </div>

            {/* Campo Género  */}
            <div>
                <label className={labelStyle}>Género:</label>
                <div className="mt-2 flex gap-6">
                    <label className="flex items-center text-gray-300">
                        <input
                            type="radio" name="genero" value="masculino"
                            checked={formData.genero === 'masculino'}
                            onChange={handleChange}
                            className="text-yellow-500 focus:ring-yellow-600" 
                        />
                        <span className="ml-2">Masculino</span>
                    </label>
                    <label className="flex items-center text-gray-300">
                        <input
                            type="radio" name="genero" value="femenino"
                            checked={formData.genero === 'femenino'}
                            onChange={handleChange}
                            className="text-yellow-500 focus:ring-yellow-600"
                        />
                        <span className="ml-2">Femenino</span>
                    </label>
                </div>
                {errors.genero && <p className={errorStyle}>{errors.genero}</p>}
            </div>

            {/* Campo Color de Cabello  */}
            <div>
                <label htmlFor="colorCabello" className={labelStyle}>
                    Color de Cabello:
                </label>
                <select id="colorCabello" name="colorCabello"
                    value={formData.colorCabello} onChange={handleChange}
                    className={inputStyle}
                >
                    <option value="negro">Negro</option>
                    <option value="castano">Castaño</option>
                    <option value="rubio">Rubio</option>
                    <option value="pelirrojo">Pelirrojo</option>
                    <option value="blanco">Blanco / Plata</option>
                    <option value="fantasia">Fantasía (Azul, Verde, etc.)</option>
                </select>
            </div>

            {/* Campo Email  */}
            <div>
                <label htmlFor="email" className={labelStyle}>
                    Email del Jugador:
                </label>
                <input type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange}
                    className={inputStyle}
                    placeholder="tu@email.com"
                />
                {errors.email && <p className={errorStyle}>{errors.email}</p>}
            </div>

            {/* Campo Biografía */}
            <div>
                <label htmlFor="biografia" className={labelStyle}>
                    Biografía (Opcional):
                </label>
                <textarea
                    id="biografia" name="biografia" rows="4"
                    value={formData.biografia} onChange={handleChange}
                    className={inputStyle}
                    placeholder="Cuenta la historia de tu héroe..."
                />
            </div>

            {/* Botón de Submit con estilo dorado */}
            <button type="submit"
                className="w-full bg-yellow-500 text-gray-900 font-bold p-3 rounded-md hover:bg-yellow-400 transition-colors duration-200">
                Forjar Héroe
            </button>
        </form>
    );
}

export default FormularioJuego;