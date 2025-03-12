

function EmployeeDetailEach() {
    return (
        <>

            <div className="flex items-center gap-6 p-6 shadow-md rounded-2xl bg-white">
                {/* Foto de perfil */}
                <figure>
                    <img
                        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                        alt="Foto de perfil"
                        className="w-32 h-32 rounded-full object-cover"
                    />
                </figure>

                {/* Información del empleado */}
                <div className="flex-1">
                    <div className="mb-4">
                        <h1 className="text-3xl font-bold text-gray-800">Nombre del empleado</h1>
                        <h2 className="text-2xl font-bold text-gray-600">Apellidos</h2>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-bold text-gray-700">Email</h3>
                        <p className="text-gray-500">empleado@email.com</p>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-bold text-gray-700">Departamento</h3>
                        <p className="text-gray-500">Departamento de Ejemplo</p>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-bold text-gray-700">Salario</h3>
                        <p className="text-gray-500">40,000 €/año</p>
                    </div>

                    {/* Botones de acción */}
                    <div className="flex justify-end gap-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                        >
                            Editar
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EmployeeDetailEach