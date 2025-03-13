import React, { useState } from 'react';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex">
      {/* Sidebar fijo para pantallas grandes */}
      <div className="hidden md:flex flex-col p-5 m-5 bg-white text-gray-800 dark:text-gray-800 min-h-screen w-64 shadow-lg fixed z-50 rounded-2xl">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img
            src="./Logo_CRM.svg"
            alt="User"
            className="rounded-full w-24 h-24 mb-4"
          />
          <hr className="border-gray-400 mb-4" />
        </div>

        {/* Navigation items */}
        <ul>
          <li>
            <a
              href="/dashboard"
              className="flex items-center p-2 rounded-md text-gray-800 dark:hover:bg-gray-300">
              <i className="bi bi-house-door mr-2"></i>
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/employees"
              className="flex items-center p-2 rounded-md text-gray-800 dark:hover:bg-gray-300">
              <i className="bi bi-table mr-2"></i>
              Empleados
            </a>
          </li>
          <li>
            <a
              href="/departments"
              className="flex items-center p-2 rounded-md text-gray-800 dark:hover:bg-gray-300">
              <i className="bi bi-grid mr-2"></i>
              Departamentos
            </a>
          </li>
          <li>
            <a
              href="/oldEmployees"
              className="flex items-center p-2 rounded-md text-gray-800 dark:hover:bg-gray-300">
              <i className="bi bi-person-circle mr-2"></i>
              Antiguos Empleados
            </a>
          </li>
        </ul>

        <hr className="border-gray-300 my-4" />

        {/* Dropdown */}
        <div className="relative">

          {/* Dropdown Menu */}
          <ul>


            <p className="block px-5 py-2 text-xs text-gray-400" > Gestión de empleados</p>

            <li>
              <a
                href="/newEmployee"
                className="flex items-center p-2 rounded-md text-gray-800 dark:hover:bg-[#47A7BD]">
                <i className="bi bi-plus-circle mr-2"></i>
                Añadir empleado
              </a>
            </li>
            <li>
              <a
                href="/newEmployee"
                className="flex items-center p-2 rounded-md text-gray-800 dark:hover:bg-[#47A7BD]">
                <i className="bi bi-pencil mr-2"></i>
                Editar empleado
              </a>
            </li>
            <li>
              <a
                href="/newEmployee"
                className="flex items-center p-2 rounded-md text-gray-800 dark:hover:bg-[#47A7BD]">
                <i className="bi bi-trash mr-2"></i>
                Eliminar empleado
              </a>
            </li>

            <hr className="border-gray-300 my-4" />

            <li>
              <a className="flex items-center p-2 rounded-md text-gray-600 dark:hover:bg-gray-300" href="/ ">
                <i className="bi bi-box-arrow-left mr-2 ml-2"></i>
                Logout
              </a>
            </li>

          </ul>
        </div>
      </div>

      {/* Navbar hamburguesa para pantallas pequeñas */}
      <div className="md:hidden w-full shadow-md p-4 flex justify-between items-center">
        {/* Botón de menú hamburguesa */}
        <button onClick={toggleMenu} className="text-gray-800 dark:text-gray-800">
          <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} text-xl`}></i>
        </button>

        {/* Logo 
        <div className="flex items-center">
          <img
            src="./Logo_CRM.svg"
            alt="User"
            className="rounded-full w-12 h-12"
          />
        </div>*/}
      </div>

      {/* Menu desplegable en pantallas pequeñas */}
      {
        isMenuOpen && (
<>
          <div className=" absolute w-screen h-screen bg-[#b0adad9b] mt-15"></div>




            <div className="lg:hidden absolute top-19 left-4 mt-2 z-50 ">
              <div className="w-64 bg-white p-4 shadow-md rounded-2xl">
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 rounded-md text-gray-800 dark:hover:bg-gray-300">
                      <i className="bi bi-speedometer2 mr-2"></i>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 rounded-md text-gray-800 dark:hover:bg-gray-300">
                      <i className="bi bi-table mr-2"></i>
                      Empleados
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 rounded-md text-gray-800 dark:hover:bg-gray-300">

                      <i className="bi bi-grid mr-2"></i>
                      Departamentos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 rounded-md text-gray-800 dark:hover:bg-gray-300">
                      <i className="bi bi-person-circle mr-2"></i>
                      Antiguos Empleados
                    </a>
                  </li>
                </ul>

                <hr className="border-gray-400 my-4" />

                <div className="relative">

                  {/* Dropdown Menu */}
                  <ul>


                    <p className="block px-5 py-2 text-xs text-gray-400" > Gestión de empleados</p>

                    <li>
                      <a
                        href="/newEmployee"
                        className="flex items-center p-2 rounded-md text-gray-800 dark:hover:bg-[#47A7BD]">
                        <i className="bi bi-plus-circle mr-2"></i>
                        Añadir empleado
                      </a>
                    </li>
                    <li>
                      <a
                        href="/newEmployee"
                        className="flex items-center p-2 rounded-md text-gray-800 dark:hover:bg-[#47A7BD]">
                        <i className="bi bi-pencil mr-2"></i>
                        Editar empleado
                      </a>
                    </li>
                    <li>
                      <a
                        href="/newEmployee"
                        className="flex items-center p-2 rounded-md text-gray-800 dark:hover:bg-[#47A7BD]">
                        <i className="bi bi-trash mr-2"></i>
                        Eliminar empleado
                      </a>
                    </li>
                  

                    <hr className="border-gray-300 my-4" />

                    <li>
                      <a className="flex items-center p-2 rounded-md text-gray-500 dark:hover:bg-gray-300" href="/ ">
                        <i className="bi bi-box-arrow-left mr-2 ml-2"></i>
                        Logout
                      </a>
                    </li>

                  </ul>
                </div>
              </div>

            </div>
          </>
        )
      }
    </div>
  );
}

export default NavBar;
