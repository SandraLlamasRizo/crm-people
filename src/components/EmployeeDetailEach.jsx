import React, { useEffect, useState } from 'react';
import { useOneEmployeeContext } from '../providers/EmployerProvider';

function EmployeeDetailEach({ employeeId, showActions = true }) {
    const [employee, setEmployee] = useState(null);//PROBLEMA AQUI NOS DEVUELVE LOS DATOS DE LA API DE RANDOM USER, PERO NO SE COMO AHCER PARA QUE DEVUELVA LOS DE LA OTRA API DE EMPLEADOS
    const [OneEmployee, setOneEmployee ] = useOneEmployeeContext();
    
    console.log(OneEmployee)

    // Usamos useEffect para hacer la llamada a la API cuando el componente se monta
    // useEffect(() => {
    //     fetch('https://randomuser.me/api/')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setEmployee(data.results[0]); // Guardamos la información del empleado
    //         })
    //         .catch((error) => console.error('Error fetching data: ', error));
    // }, []);

    // Si no hemos cargado los datos aún, mostramos un mensaje de carga
    // if (!employee) {
    //     return <div>Cargando...</div>;
    // }

    return (
        <div className="flex items-center gap-6 p-6 shadow-md rounded-2xl bg-white">
            {/* Foto de perfil */}
            <figure>
                <img
                    //src={employee.picture.large} // Usamos la foto grande del empleado de la API
                    alt="Foto de perfil"
                    className="w-32 h-32 rounded-full object-cover"
                />
            </figure>

            {/* Información del empleado */}
            <div className="flex-1">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold text-gray-800">{OneEmployee.nombre}</h1>
                    <h2 className="text-2xl font-bold text-gray-600">{OneEmployee.apellidos}</h2>
                </div>

                <div className="mb-4">
                    <h3 className="font-bold text-gray-700">Email</h3>
                    <p className="text-gray-500">{OneEmployee.email}</p>
                </div>

                <div className="mb-4">
                    <h3 className="font-bold text-gray-700">Telefono</h3>
                    <p className="text-gray-500">{OneEmployee.telefono}</p>
                </div>

                <div className="mb-4">
                    <h3 className="font-bold text-gray-700">Departamento</h3>
                    <p className="text-gray-500">{OneEmployee.departamento}</p>
                </div>

                <div className="mb-4">
                    <h3 className="font-bold text-gray-700">Salario</h3>
                    <p className="text-gray-500">{OneEmployee.salario} €/año</p>
                </div>

                {/* Botones de acción, que solo se mostrarán si showActions es true: */}
                {showActions && (
                    <div className="flex justify-end gap-4">

                        <a
                            href="/dashboard/edit/:employeeId"
                            className="buttonPrincipal buttonPrincipal:hover"
                        >
                            <i className="bi bi-pencil mr-2"></i>
                            Editar
                        </a>
                        <a
                            href="/*"
                            className="w-auto bg-[#cc2c2c] text-white rounded-full px-6 py-3 hover:bg-[#a21e1e] transition"
                        >
                            <i className="bi bi-trash3 mr-2"></i>
                            Eliminar
                        </a>
                        {/* TENEMOS QUE PONER UN AVISO PARA CONFIRMAR QUE SE QUIERE ELIMINAR EL EMPLEADO Y YA eliminarlo de la API!!! */}
                    </div>
                )}

            </div>
        </div>
    );
}

export default EmployeeDetailEach;
