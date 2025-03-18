import React, { useEffect, useState } from 'react';
import { useOneEmployeeContext } from '../providers/EmployerProvider';
import { useNavigate } from 'react-router';

function EmployeeDetailEach({ employeeId, showActions = true }) {
    const [OneEmployee, setOneEmployee] = useOneEmployeeContext();
    const navigate = useNavigate();

    // Verifica si OneEmployee está disponible antes de renderizar.
    if (!OneEmployee) {
        return <div>Cargando...</div>;
    }

    // Función para redirigir a la página de edición.
    const handleEditClick = () => {
        navigate(`/dashboard/edit/${OneEmployee._id}`);
    }

    return (
        <div className="flex items-center gap-6 p-6 shadow-md rounded-2xl bg-white">
            {/* Foto de perfil */}
            <figure>
                {/* Asume que OneEmployee tiene la propiedad 'foto' con la URL de la imagen */}
                <img
                    src={OneEmployee.foto || '/default-avatar.png'} // Si no hay foto, usamos una por defecto
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
                    <h3 className="font-bold text-gray-700">Teléfono</h3>
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
                        <button
                            onClick={handleEditClick}
                            className="buttonPrincipal buttonPrincipal:hover"
                        >
                            <i className="bi bi-pencil mr-2"></i>
                            Editar
                        </button>
                        <a
                            href="/*"
                            className="w-auto bg-[#cc2c2c] text-white rounded-full px-6 py-3 hover:bg-[#a21e1e] transition"
                        >
                            <i className="bi bi-trash3 mr-2"></i>
                            Eliminar
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default EmployeeDetailEach;
