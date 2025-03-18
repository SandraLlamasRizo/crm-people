import React, { useEffect, useState } from 'react';
import { useOneEmployeeContext } from '../providers/EmployerProvider';

function EmployeeDetailEach({ employeeId, showActions = true }) {
    const [photo, setPhoto] = useState(null);
    const [OneEmployee] = useOneEmployeeContext();

    console.log(OneEmployee);

    // Llamada a la API de Pexels para obtener una foto de perfil
    const fetchImage = async () => {
        try {
            const response = await fetch(
                `https://api.pexels.com/v1/search?query=people&per_page=5`,
                {
                    headers: {
                        Authorization: 'Yyn3gO8VM4ySq0Eedoy1qNxDovlzenPyj08lqh4UYoNPJHvz3BwKkFj8',
                    },
                }
            );
            const data = await response.json();
            if (data.photos && data.photos.length > 0) {
                setPhoto(data.photos[0]?.src?.large); // Coge la primera foto disponible
            }
        } catch (error) {
            console.error('Error fetching photo: ', error);
        }
    };

    useEffect(() => {
        fetchImage(); // Llamamos a la función al montar el componente
    }, []);

    if (!photo) {
        return <div>Cargando foto...</div>;
    }

    return (
        <div className="flex items-center gap-6 p-6 shadow-md rounded-2xl bg-white">
            {/* Foto de perfil */}
            <figure>
                <img
                    src={photo}
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
                    <p className="text-gray-500">{OneEmployee?.telefono}</p>
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
                        <a
                            href={`/dashboard/edit/${employeeId}`}
                            className="buttonPrincipal hover:opacity-90 transition"
                        >
                            <i className="bi bi-pencil mr-2"></i>
                            Editar
                        </a>
                        <button
                            onClick={() => confirm('¿Seguro que quieres eliminar este empleado?')}
                            className="w-auto bg-[#cc2c2c] text-white rounded-full px-6 py-3 hover:bg-[#a21e1e] transition"
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
