import { useEffect, useState } from "react";

function SearchEmployeeCard({ empleado }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
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

    return <>
      <div className="my-2 mx-2">
        <div className="w-full grid grid-cols-[0.5fr_0.5fr_repeat(2,1fr)] gap-2 bg-[#F4F9FD] hover:bg-[#d3ebff] rounded-[30px] p-4 items-center text-start">

        {/* Mostrar la imagen obtenida de Pexels */}
         <figure className="flex justify-center items-center w-[30px] h-[30px] mx-auto">
            {/* <i class="bi bi-person-circle"></i> */}
            {loading ? (
                            <div className="animate-spin w-full border-4 border-t-[#47A7BD] border-gray-300 rounded-full"></div>
                        ) : error ? (
                            <p className="text-red-500 text-sm">{error}</p>
                        ) : (
                            <img
                                src={image}
                                alt="Foto de perfil"
                                className="w-full h-full rounded-full object-cover"
                            />
                        )}
         </figure>
          <h3 className="principalCard">{empleado.nombre}</h3>
          <h4 className="secundarionCard text-sm items-end">{empleado.apellidos}</h4>
          <h5 className="secundarionCard text-sm">{empleado.email}</h5>
        </div>
    </div>
    </>
    
}

export default SearchEmployeeCard;