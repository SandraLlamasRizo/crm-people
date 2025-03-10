import React, { useState } from 'react';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex">
      {/* Sidebar fijo para pantallas grandes */}
      <div className="hidden lg:flex flex-col p-4 bg-white dark:bg-gray-200 text-gray-800 dark:text-gray-800 min-h-screen w-64 shadow-lg fixed z-50 rounded-lg">
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
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center p-2 rounded-md text-gray-800 dark:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-300"            >
              <i className="bi bi-house-door mr-2"></i>
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 rounded-md text-gray-800 dark:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-300"            >
              <i className="bi bi-table mr-2"></i>
              Empleados
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 rounded-md text-gray-800 dark:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-300"            >
              <i className="bi bi-grid mr-2"></i>
              Departamentos
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 rounded-md text-gray-800 dark:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-300"            >
              <i className="bi bi-person-circle mr-2"></i>
              Antiguos Empleados
            </a>
          </li>
        </ul>

        <hr className="border-gray-400 my-4" />

        {/* Dropdown */}
        <div className="relative">


          {/* Dropdown Menu */}
          <ul className="absolute mt-2 w-48 bg-white dark:bg-gray-300 rounded-md shadow-lg overflow-hidden text-sm">
            <li>
              <a className="block px-4 py-2 text-gray-800 dark:text-gray-700 hover:bg-gray-800 dark:hover:bg-[#47A7BD]" href="#">
                Crear nuevo empleado
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 text-gray-800 dark:text-gray-700 hover:bg-gray-800 dark:hover:bg-[#47A7BD]" href="#">
                Recuperar empleador
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 text-gray-800 dark:text-gray-700 hover:bg-gray-800 dark:hover:bg-[#47A7BD]" href="#">
                Editar empleado
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 text-gray-800 dark:text-gray-700 hover:bg-gray-800 dark:hover:bg-[#47A7BD]" href="#">
                Eliminar empleado
              </a>
            </li>
            <li><hr className="border-gray-300 dark:border-gray-600" /></li>
            <li>
              <a className="block px-4 py-2 text-gray-800 dark:text-gray-400 hover:bg-gray-800 dark:hover:bg-gray-500" href="#">Login user</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar hamburguesa para pantallas pequeñas */}
      <div className="lg:hidden w-full bg-white shadow-md p-4 flex justify-between items-center z-40">
        {/* Botón de menú hamburguesa */}
        <button onClick={toggleMenu} className="text-gray-800 dark:text-gray-800">
          <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} text-xl`}></i>
        </button>

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./public/Logo_CRM.svg"
            alt="User"
            className="rounded-full w-12 h-12"
          />
        </div>
      </div>

      {/* Menu desplegable en pantallas pequeñas */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="w-64 bg-white p-4 shadow-md">
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 rounded-md text-gray-800 dark:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <i className="bi bi-house-door mr-2"></i>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 rounded-md text-gray-800 dark:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <i className="bi bi-speedometer2 mr-2"></i>
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 rounded-md text-gray-800 dark:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <i className="bi bi-table mr-2"></i>
                  Empleados
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 rounded-md text-gray-800 dark:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <i className="bi bi-grid mr-2"></i>
                  Departamentos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 rounded-md text-gray-800 dark:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <i className="bi bi-person-circle mr-2"></i>
                  Antiguos Empleados
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
