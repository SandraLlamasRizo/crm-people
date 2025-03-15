import React, { useEffect, useState } from 'react';

function EmployeeDetailEach() {
    const [employee, setEmployee] = useState(null);      //PROBLEMA AQUI NOS DEVUELVE LOS DATOS DE LA API DE RANDOM USER, PERO NO SE COMO AHCER PARA QUE DEVUELVA LOS DE LA OTRA API DE EMPLEADOS

    // Usamos useEffect para hacer la llamada a la API cuando el componente se monta
    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then((response) => response.json())
            .then((data) => {
                setEmployee(data.results[0]); // Guardamos la información del empleado
            })
            .catch((error) => console.error('Error fetching data: ', error));
    }, []);

    // Si no hemos cargado los datos aún, mostramos un mensaje de carga
    if (!employee) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="flex items-center gap-6 p-6 shadow-md rounded-2xl bg-white">
            {/* Foto de perfil */}
            <figure>
                <img
                    src={employee.picture.large} // Usamos la foto grande del empleado de la API
                    alt="Foto de perfil"
                    className="w-32 h-32 rounded-full object-cover"
                />
            </figure>

            {/* Información del empleado */}
            <div className="flex-1">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold text-gray-800">{employee.name.first}</h1>
                    <h2 className="text-2xl font-bold text-gray-600">{employee.name.last}</h2>
                </div>

                <div className="mb-4">
                    <h3 className="font-bold text-gray-700">Email</h3>
                    <p className="text-gray-500">{employee.email}</p>
                </div>

                <div className="mb-4">
                    <h3 className="font-bold text-gray-700">Departamento</h3>
                    <p className="text-gray-500">{employee.departamento}</p>
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
    );
}

export default EmployeeDetailEach;
