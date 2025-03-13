import React, { useEffect, useState } from 'react';

function EmployeeCardLarge() {
  const [employee, setEmployee] = useState(null);

  // Usamos el hook useEffect para obtener los datos cuando el componente se monta
  useEffect(() => {
    // Realizamos la llamada a la API de randomuser.me
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => {
        // Guardamos la imagen de la persona en el estado
        setEmployee(data.results[0]);
      })
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  // Si no se han cargado los datos del empleado, mostramos un loader o algo similar
  if (!employee) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="my-2 mx-2">
      <div className="w-full grid grid-cols-[repeat(3,1fr)_0.5fr] gap-2 md:grid-cols-[repeat(5,1fr)_0.5fr] bg-[#F4F9FD] hover:bg-[#d3ebff] rounded-[30px] p-4 items-center align-middle text-center">

        {/* Mostrar la imagen del empleado */}
        <figure className="mx-auto flex justify-center items-center w-[50px] h-[50px]">
          <img
            src={employee.picture.thumbnail} // Usamos la imagen de la API
            alt="Empleado"
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </figure>

        {/* Información del empleado */}
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
