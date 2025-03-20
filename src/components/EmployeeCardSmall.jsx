import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useOneEmployeeContext } from '../providers/EmployerProvider';
import axios from 'axios';
import { nombresPersonalizados } from './DepartmentsCardLarge';

function EmployeeCardSmall({ empleado }) {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [, setOneEmployee] = useOneEmployeeContext();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const fetchOneEmployee = async (id) => {
        try {
            const { data } = await axios.get(
                `https://crm-empleados.onrender.com/api/empleados/${id}`,
                {
                    headers: { Authorization: token }
                }
            );
            setOneEmployee(data);
            navigate(`/dashboard/employees/${id}`);
        } catch (error) {
            console.error("Error al cargar los empleados:", error);
        }
    };

    const handleClick = () => {
        fetchOneEmployee(empleado._id);
    };

    useEffect(() => {
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

                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }

                const data = await response.json();

                // Seleccionamos una foto aleatoria
                const randomIndex = Math.floor(Math.random() * data.photos.length);
                setImage(data.photos[randomIndex]?.src?.large);
            } catch (error) {
                console.error('Error al obtener la imagen:', error);
                setError('No se pudo cargar la imagen');
            } finally {
                setLoading(false);
            }
        };

        fetchImage();
    }, []);

    return (
        <div className="w-[160px] h-[180px] mx-auto">
            <div
                onClick={handleClick}
                className="cursor-pointer transition duration-200 ease-in-out"
            >
                <div className="w-full h-full p-3 text-center bg-[#F4F9FD] hover:bg-[#d3ebff] rounded-[30px] shadow-md flex flex-col items-center  transition-transform duration-200 hover:scale-115">
                    <figure className="w-16 h-16 flex justify-center items-center mb-2">
                        {loading ? (
                            <div className="animate-spin w-8 h-8 border-4 border-t-[#47A7BD] border-gray-300 rounded-full"></div>
                        ) : error ? (
                            <p className="text-red-500 text-sm">{error}</p>
                        ) : (
                            <img
                                src={image}
                                alt={`Foto de perfil de ${empleado.nombre} ${empleado.apellidos}`}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                        )}
                    </figure>
                    <h3 className="text-gray-600 font-semibold text-lg">
                        {empleado.nombre}
                    </h3>
                    <h4 className="text-gray-600 text-sm mb-2">
                        {empleado.apellidos}
                    </h4>
                    <span className="bg-[#E3F2FD] text-[#47A7BD] text-sm px-3 py-1 rounded-md">
                        {nombresPersonalizados[empleado.departamento] || empleado.departamento}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default EmployeeCardSmall;
