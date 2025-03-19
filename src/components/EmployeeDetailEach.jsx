import React, { useEffect, useState } from 'react';
import { useOneEmployeeContext } from '../providers/EmployerProvider';
import { useNavigate } from 'react-router';
import axios from 'axios';

function EmployeeDetailEach({ employeeId, showActions = true }) {
    const [OneEmployee, setOneEmployee] = useOneEmployeeContext();
    const navigate = useNavigate();
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const token = localStorage.getItem('token')

    // Verifica si OneEmployee está disponible antes de renderizar.
    if (!OneEmployee) {
        return <div>Cargando...</div>;
    }

    // Función para redirigir a la página de edición.
    const handleEditClick = () => {
        navigate(`/dashboard/edit/${OneEmployee._id}`);
    }

    const handleEliminar =( ) => {
        eliminarEmpleado(OneEmployee._id)
    }

    const eliminarEmpleado = async (id) => {
        const config = {
            headers: {
                'Authorization': token,
            },
        };

        try {
            const { data } = await axios.delete(`https://crm-empleados.onrender.com/api/empleados/${id}`, config);
            
            setShowSuccessModal(true);
            setTimeout(() => {
                navigate("/dashboard"); //Llevamos al usuario registrado correctamente a la página de login!
            }, 3000);
        } catch (error) {
            console.error("Error al registrar el empleado:", error);
        }
    }

    return (
        <div className="flex items-center gap-6 p-6 shadow-md rounded-2xl bg-white">
            {showSuccessModal && (
                <div className="fixed inset-0 flex items-center justify-center  bg-[#F4F9FD] bg-opacity-70 z-50">
                    <div className=" bg-white p-6 rounded-lg shadow-lg text-center m-30">
                        <h1>El empleado: {OneEmployee.nombre} ha sido eliminado correctamente</h1>
                        <p className="text-gray-700 mb-4">En unos segundos te redigiremos a Dashboard</p>
                    </div>
                </div>
            )}
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
                    <h1 className="text-3xl font-bold text-gray-800">{OneEmployee?.nombre}</h1>
                    <h2 className="text-2xl font-bold text-gray-600">{OneEmployee?.apellidos}</h2>
                </div>

                <div className="mb-4">
                    <h3 className="font-bold text-gray-700">Email</h3>
                    <p className="text-gray-500">{OneEmployee?.email}</p>
                </div>

                <div className="mb-4">
                    <h3 className="font-bold text-gray-700">Teléfono</h3>
                    <p className="text-gray-500">{OneEmployee.telefono}</p>
                </div>

                <div className="mb-4">
                    <h3 className="font-bold text-gray-700">Departamento</h3>
                    <p className="text-gray-500">{OneEmployee?.departamento}</p>
                </div>

                <div className="mb-4">
                    <h3 className="font-bold text-gray-700">Salario</h3>
                    <p className="text-gray-500">{OneEmployee?.salario} €/año</p>
                </div>

                {/* Botones de acción */}
                {showActions && (
                    <div className="flex justify-end gap-4">
                        <button
                            onClick={handleEditClick}
                            className="buttonPrincipal "
                        >
                            <i className="bi bi-pencil mr-2"></i>
                            Editar
                        </button>
                        <button
                            onClick={handleEliminar}
                            className="buttonPrincipalRojo"
                        >
                            <i className="bi bi-trash3 mr-2"></i>
                            Eliminar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default EmployeeDetailEach;
