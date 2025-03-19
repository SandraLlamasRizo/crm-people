import { useEffect, useState } from "react";
import EmployeeCardLarge from "../components/EmployeeCardLarge";
import { useEmployeesContext } from "../providers/EmployerProvider";
import { Link, useNavigate } from "react-router";

function Employees() {
  const [employees] = useEmployeesContext();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); ;
  }, [employees]);

  // estado para paginado:
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Filtrar empleados:
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = employees.slice(indexOfFirstItem, indexOfLastItem);
  let showingItems = Math.min(indexOfLastItem, employees.length);

  // Total de paginas:
  const totalPages = Math.ceil(employees.length / itemsPerPage);

  // Cambiar pagina:
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0); 
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0); 
    }
  };

  // Cambiar numero de empleado por pagina:
  const handleItemsPerPage = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Volver a la primera página al cambiar el número de empleados por página
  };

  // Boton para añadir empleado
  const handleAddEmployee = () => {
    navigate("/dashboard/newemployee"); // Asegúrate de que la ruta sea la correcta
  };

  return (
    <>
      <h3 className="homeH3 p-4 md:ml-76">Empleados</h3>
      <div>
        <a href="/dashboard"className=" no-underlinetext-sm abslute flex flex-col items-end pr-4 mr font-normal text-[#47A7BD] hover:underline">
          Volver al Inicio
        </a>
      </div>
      <div className="container">
        <h2 className="px-4 py-2 text-xl md:text-2xl font-bold text-gray-600">
          Gestiona tus empleados
        </h2>
        <div className="flex flex-row items-center my-2">
          <div className="flex-1 pl-4">
            <h6 className="text-lg md:text-md text-gray-600">
              Empleados({employees.length})
            </h6>
          </div>

          <div className="flex-2 flex flex-col-reverse lg:flex-row gap-2 items-end lg:items-center justify-end mr-4">
            <label
              htmlFor="numItems"
              className="hidden md:inline min-w-[152px] text-sm md:text-md text-gray-600 font-medium"
            >
              Empleados por pagina:{" "}
            </label>
            <select
              name="numItems"
              id="numItems"
              className="px-3 py-1 ml-auto md:ml-0 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-full transition text-gray-600"
              value={itemsPerPage}
              onChange={handleItemsPerPage}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            <button
              className="flex-1 btn btn-light min-w-[70px] md:min-w-[195px] max-w-[195px] rounded-full px-4 py-2 text-white text-sm md:text-lg bg-[#457FBF] cursor-pointer hover:bg-[#2A5885] transition"
              onClick={handleAddEmployee}
            >
              <i className="bi bi-plus "></i>{" "}
              <span className="hidden md:inline">Añadir empleado</span>
            </button>
          </div>
        </div>
        {/* Aquí añadimos el link para editar los datos del empleado: */}
        <div className="flex flex-col w-full gap-4 p-4">
          {currentItems.map((empleado) => (
            <div key={empleado._id}>
              {empleado._id ? (
                <>
                  <EmployeeCardLarge empleado={empleado} />
                  {/* NO SE SI DEJAR EL BOTÓN EN ESTA PARTE O EN LA EmployeeCardLarge.jsx:
                  
                   <button
                    onClick={() => navigate(`/dashboard/edit/${empleado._id}`)} // Aquí se corrigió el espacio entre `$` y `{empleado._id}`
                    className="buttonPrincipal buttonPrincipal:hover"
                  >
                    Editar
                  </button> */}
                </>
              ) : (
                <p>Error: El empleado no tiene ID</p>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col-reverse gap-4 md:flex-row items-center justify-between p-4 ">
          <span className="text-gray-700 text-sm">
            Mostrando <strong>{showingItems}</strong> de{" "}
            <strong>{employees.length}</strong> elementos
          </span>
          <div className="flex gap-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="buttonPrincipal disabled:opacity-50 min-w-[140px] disabled:pointer-events-none"
            >
              ◀ Anterior{" "}
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="buttonPrincipal min-w-[140px] disabled:opacity-50 disabled:pointer-events-none"
            >
              Siguiente ▶{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employees;
