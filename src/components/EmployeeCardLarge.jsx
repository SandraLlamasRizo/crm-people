import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useOneEmployeeContext } from '../providers/EmployerProvider';

function EmployeeCardLarge({ empleado }) {

  const [image, setImage] = useState(null);
  const apiKey = 'Yyn3gO8VM4ySq0Eedoy1qNxDovlzenPyj08lqh4UYoNPJHvz3BwKkFj8';
  const navigate = useNavigate();
  const [, setOneEmployee] = useOneEmployeeContext();
  const token = localStorage.getItem('token');

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

  const handleClick = (id) => {
    fetchOneEmployee(id);
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
      <div className="w-full grid grid-cols-[repeat(3,1fr)_0.5fr] md:grid-cols-[repeat(5,1fr)_0.5fr] bg-[#F4F9FD] hover:bg-[#d3ebff] rounded-[30px] p-4 items-center text-center h-[120px]">
        {/* Imagen del empleado */}
        <figure className="flex justify-center items-center w-[50px] h-[50px] mx-auto">
          <img
            src={image}
            alt="Empleado"
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </figure>

        {/* Información */}
        <div className="gap-2">
          <h3 className="principalCard">{empleado.nombre}</h3>
          <h4 className="secundarionCard">{empleado.apellidos}</h4>
        </div>

        <h5 className="hidden md:block secundarionCard">{empleado.email}</h5>
        <h5 className="secundarionCard">{empleado.departamento}</h5>
        <h5 className="hidden md:block secundarionCard">{empleado.salario + '€'}</h5>
      </div>
    </div>
  );
}

export default EmployeeCardLarge;
