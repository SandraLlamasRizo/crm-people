import React, { useEffect, useState } from 'react';

function EmployeeCardLarge() {
  const [image, setImage] = useState(null); // Para la imagen de Pexels
  const apiKey = 'Yyn3gO8VM4ySq0Eedoy1qNxDovlzenPyj08lqh4UYoNPJHvz3BwKkFj8';

  // Usamos el hook useEffect para obtener la imagen cuando el componente se monta
  useEffect(() => {
    // Obtenemos una imagen aleatoria usando la API de Pexels
    fetch('https://api.pexels.com/v1/curated?per_page=5', {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.photos && data.photos.length > 0) {
          // Seleccionamos una imagen aleatoria de las fotos obtenidas
          const randomIndex = Math.floor(Math.random() * data.photos.length);
          setImage(data.photos[randomIndex].src.large);
        } else {
          console.error('No se encontraron fotos en Pexels.');
        }
      })
      .catch((error) => console.error('Error fetching image from Pexels: ', error));
  }, []);

  // Si no se ha cargado la imagen, mostramos un loader
  if (!image) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="my-2 mx-2">
      <div className="w-full grid grid-cols-[repeat(3,1fr)_0.5fr] gap-2 md:grid-cols-[repeat(5,1fr)_0.5fr] bg-[#F4F9FD] hover:bg-[#d3ebff] rounded-[30px] p-4 items-center align-middle text-center">

        {/* Mostrar la imagen obtenida de Pexels */}
        <figure className="flex justify-center items-center w-[50px] h-[50px]">
          <img
            src={image} // Usamos la imagen aleatoria obtenida de Pexels
            alt="Empleado"
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </figure>

        {/* Información restante (sin cambios) */}
        <div>
          <h3 className="principalCard">Nombre Empleado</h3>
          <h4 className="secundarionCard">Apellidos</h4>
        </div>

        <h5 className="hidden md:block secundarionCard">Email</h5>
        <h5 className="secundarionCard">Departamento</h5>
        <h5 className="hidden md:block secundarionCard">Salario</h5>

        <div>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCardLarge;
