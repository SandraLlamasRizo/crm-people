import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useOneEmployeeContext } from '../providers/EmployerProvider';

function EmployeeCardLarge({ empleado, propCompact }) {

  const [image, setImage] = useState(null);
  const apiKey = 'Yyn3gO8VM4ySq0Eedoy1qNxDovlzenPyj08lqh4UYoNPJHvz3BwKkFj8';
  const navigate = useNavigate();
  const [, setOneEmployee] = useOneEmployeeContext();
  const [isCompact, setIsCompact] = useState(propCompact ?? (window.innerWidth < 768));
  const token = localStorage.getItem('token');

  const gridClass = isCompact
    ? "grid-cols-[repeat(3,1fr)_0.5fr]"  // 3 columnas + icono
    : "grid-cols-[repeat(5,1fr)_0.5fr]"; // 5 columnas + icono
  
  useEffect(() => {
    const handleResize = () => {
      if (propCompact === undefined) {
        setIsCompact(window.innerWidth < 768);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [propCompact]); // Se ejecuta cada vez que cambia propCompact



  const fetchOneEmployee = async (id) => {
    const config = {
      headers: {
        'Authorization': token
      }
    };
    try {
      const { data } = await axios.get(`https://crm-empleados.onrender.com/api/empleados/${id}`, config);
      console.log("Datos recibidos desde la API:", data);
      setOneEmployee(data);
      navigate(`/dashboard/employees/${id}`);
    } catch (error) {
      console.log("Error al cargar los empleados", error);
    }
  };

    // Ruta relativa (si estás dentro de /dashboard)
    const handleClick = (id) => {
        fetchOneEmployee(id)
    };

  useEffect(() => {
    fetch('https://api.pexels.com/v1/curated?per_page=5', {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.photos && data.photos.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.photos.length);
          setImage(data.photos[randomIndex].src.large);
        } else {
          console.error('No se encontraron fotos en Pexels.');
        }
      })
      .catch((error) => console.error('Error fetching image from Pexels: ', error));
  }, []);

  if (!image) {
    return <div>Cargando...</div>;
  }

  return (
    <div
      onClick={() => handleClick(empleado._id)}
      className="my-2 mx-2 cursor-pointer transition duration-200 ease-in-out"
    >
      <div className={`w-full grid ${gridClass} bg-[#F4F9FD] hover:bg-[#d3ebff] rounded-lg shadow-xl p-4 items-center text-center h-[120px]`}>
        {/* Imagen del empleado */}
        <figure className="flex justify-center items-center w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] mx-auto">
          <img
            src={image}
            alt="Empleado"
            className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] rounded-full object-cover"
          />
        </figure>

        {/* Información */}
        <div className="gap-2 text-gray-600">
          <h3 className="principalCard">{empleado.nombre}</h3>
          <h4 className="secundarionCard">{empleado.apellidos}</h4>
        </div>

        {!isCompact && <h5 className="secundarionCard text-gray-600">{empleado.email}</h5>}
        <h5 className="secundarionCard text-gray-600">{empleado.departamento}</h5>
        {!isCompact && <h5 className="secundarionCard text-gray-600">{empleado.salario + '€'}</h5>}

        <div className='hover:cursor-pointer'>
          
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCardLarge;
