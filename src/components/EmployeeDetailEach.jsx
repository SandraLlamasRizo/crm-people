import React, { useEffect, useState } from 'react';
import { useOneEmployeeContext } from '../providers/EmployerProvider';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { nombresPersonalizados } from "./DepartmentsCardLarge";

function EmployeeDetailEach({ showActions = true }) {
    const [OneEmployee, setOneEmployee] = useOneEmployeeContext();
    const navigate = useNavigate();
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [randomImage, setRandomImage] = useState(null);  // Estado para la imagen aleatoria
    const [loading, setLoading] = useState(true);  // Estado de carga
    const token = localStorage.getItem('token')

    // Verifica si OneEmployee está disponible antes de renderizar.
    if (!OneEmployee) {
        return <div>Cargando...</div>;
    }

    // Función para redirigir a la página de edición.
    const handleEditClick = () => {
        navigate(`/dashboard/edit/${OneEmployee._id}`);
    }

    const handleEliminar = () => {
        eliminarEmpleado(OneEmployee._id);
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

    // useEffect para obtener la imagen aleatoria
    useEffect(() => {
        const fetchRandomImage = async () => {
            try {
                const response = await fetch(
                    `https://api.pexels.com/v1/search?query=people&per_page=5&timestamp=${new Date().getTime()}`, // Añadimos un parámetro de timestamp para evitar cache
                    {
                        headers: {
                            Authorization: 'Yyn3gO8VM4ySq0Eedoy1qNxDovlzenPyj08lqh4UYoNPJHvz3BwKkFj8',
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error('Error al obtener la imagen de Pexels');
                }

                const data = await response.json();
                const randomIndex = Math.floor(Math.random() * data.photos.length);
                setRandomImage(data.photos[randomIndex]?.src?.large); // Elegir una imagen aleatoria de las 5
                setLoading(false); // Imagen cargada, actualizar el estado de carga

            } catch (error) {
                console.error('Error al obtener la imagen:', error);
                setLoading(false); // En caso de error, también terminamos la carga
            }
        };

        fetchRandomImage();
    }, []);  // Solo se ejecuta una vez al montar el componente

    return ( <>
        
            {showSuccessModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-[#F4F9FD] bg-opacity-70 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center m-30">
                        <h1>El empleado: {OneEmployee.nombre} ha sido eliminado correctamente</h1>
                        <p className="text-gray-700 mb-4">En unos segundos te redirigiremos a Dashboard</p>
                    </div>
                </div>
            )}

            <div className='grid grid-cols-1 gap-6 py-6 px-4 items-center shadow-md rounded-2xl bg-white max-w-[90vh] text-center mx-auto'>
                {/*PERFIL */}
                <div className='flex flex-col items-center'>
                    <figure className="m-4 w-32 h-32">
                        {loading ? (
                            <div className="animate-spin w-32 h-32 border-4 border-t-[#47A7BD] border-gray-300 rounded-full"></div>
                        ) : (
                        <img
                            src={randomImage || OneEmployee.foto || '/default-avatar.png'} // Si no hay foto aleatoria, muestra la foto del empleado
                            alt="Foto de perfil"
                            className="w-full h-full rounded-full object-cover"
                        />
                        )}
                    </figure>
                    <div className="mb-4">
                        <h3 className="text-3xl font-bold text-gray-800">{OneEmployee?.nombre}</h3>
                        <h6 className="text-2xl font-bold text-gray-600">{OneEmployee?.apellidos}</h6>
                    </div>
                    
                </div>
                {/*CONTACT */}
                <div>
                <div className="mb-4 flex flex-col gap-2 content-center text-left flex-wrap">
                    <h1 className='text-xl font-bold text-gray-600 '>Información de contacto:</h1>
                        <h3 className="font-bold text-gray-600">Email</h3>
                        <p className="text-gray-500">{OneEmployee?.email}</p>
                    
                        <h3 className="font-bold text-gray-600">Teléfono</h3>
                        <p className="text-gray-500">{OneEmployee.telefono}</p>
                    </div>
                </div>
                {/*INFO COMPANY */}
                <div>
                <div className="mb-4 flex flex-col gap-2 content-center text-left flex-wrap">
                    <h1 className='text-xl font-bold text-gray-600'>Información de empresa:</h1>
                        <h3 className="font-bold text-gray-600">Departamento</h3>
                        <p className="text-gray-500">
                        {nombresPersonalizados[OneEmployee?.departamento] || OneEmployee?.departamento}
                        </p>
                    
                        <h3 className="font-bold text-gray-700">Salario</h3>
                        <p className="text-gray-500">{OneEmployee?.salario} €/año</p>
                    </div>
                </div>

                {showActions && (
                    <div className="flex justify-center md:justify-end gap-4">
                        <button
                            onClick={handleEditClick}
                            className="buttonPrincipal my-auto"
                        >
                            <i className="bi bi-pencil mr-2"></i>
                            Editar
                        </button>
                        <button
                            onClick={handleEliminar}
                            className="buttonPrincipalRojo my-auto"
                        >
                            <i className="bi bi-trash3 mr-2"></i>
                            Eliminar
                        </button>
                    </div>
                )}
            </div>
            
            
        </>
    )
}

export default EmployeeDetailEach;
