function EmpleadoCard(props) {
    return (

        // Combinamos las clases base con las que llegan en la prop "estiloExtra".
        <div className={`border-2 p-4 rounded-lg shadow-md transition-transform hover:scale-105 ${props.estiloExtra}`}>

            {/*CLASES DEL TÍTULO*/}
            {/* text-xl: Tamaño de fuente */}
            {/* font-bold: Grosor de fuente (negrita) */}
            {/* text-slate-: Color del texto */}
            <h3 className="text-xl font-bold text-slate-800">{props.nombre}</h3>

            {/* CLASES DE LA DESCRIPCIÓN /}
            {/* text-base: Tamaño de fuente normal */}
            {/* text-slate: Color del texto */}
            {/* mt-2: Margen superior para separarlo del título */}
            <p className="text-base text-slate-900 mt-2">{props.Descripcion}</p>

        </div>
    );
}

export default EmpleadoCard;