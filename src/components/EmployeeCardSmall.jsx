import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function EmployeeCardSmall({ empleado }) {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // ✅ Ruta relativa (si estás dentro de /dashboard)
    const handleClick = () => {
        if (empleado._id)
            navigate(`/dashboard/employees/${empleado._id}`)
        else {
            navigate(`/notfound`)
        }
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

                // ✅ Seleccionamos una foto aleatoria
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
        <div className="flex gap-4 w-[174px] h-[180px]">
            <div onClick={handleClick} className="cursor-pointer">
                <div className="w-full p-3 text-center bg-[#F4F9FD] hover:bg-[#d3ebff] rounded-[30px] shadow-md transition duration-200 ease-in-out">
                    <figure className="flex justify-center items-center">
                        {loading ? (
                            <div className="animate-spin w-8 h-8 border-4 border-t-[#47A7BD] border-gray-300 rounded-full"></div>
                        ) : error ? (
                            <p className="text-red-500 text-sm">{error}</p>
                        ) : (
                            <img
                                src={image}
                                alt="Foto de perfil"
                                className="w-16 h-16 rounded-full object-cover"
                            />
                        )}
                    </figure>
                    <h3 className="principalCard pb-2 font-semibold text-gray-800">
                        {empleado.nombre}
                    </h3>
                    <h4 className="secundarioCard pb-3 text-gray-600">
                        {empleado.apellidos}
                    </h4>
                    <h5 className="terciarioBorderCard inline-block p-1 bg-[#E3F2FD] text-[#47A7BD] rounded-md">
                        {empleado.departamento}
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default EmployeeCardSmall;
