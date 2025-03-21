import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';

function NavBar() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  // Función para cerrar el menú cuando se selecciona una opción
  const handleMenuOptionClick = () => {
    setIsMenuOpen(false); // Cierra el menú al hacer clic en una opción
  };

  return (
    <nav className="flex">
      {/* Sidebar para pantallas grandes: */}
      <div
        className="hidden md:flex flex-col p-5 bg-white text-gray-600 min-h-screen w-64 shadow-lg fixed z-50 rounded-2xl"
        style={{ marginTop: '-60px', marginBottom: '10px' }}>

        {/* Logo */}
        <div
          className="flex flex-col items-center">
          <img
            src="/Logo_CRM.svg"
            alt="logo CRM people"
            className="rounded-full w-24 h-24 mb-4"
          />
          <hr className="border-gray-300 mb-4" />
        </div>

        {/* Menú principal */}
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard"
              className="nav-link flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-300">
              <i
                className="bi bi-house-door mr-2">
              </i>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/employees"
              className="nav-link flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-300">
              <i
                className="bi bi-people mr-2">
              </i>
              Empleados
            </Link>
          </li>
          <li>
            <Link to="/dashboard/departments"
              className="nav-link flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-300">
              <i
                className="bi bi-diagram-3 mr-2">
              </i>
              Departamentos
            </Link>
          </li>
        </ul>

        <hr className="border-gray-300 my-4" />

        {/* Submenú Gestiona tus empleados: */}
        <div
          className="reative">
          <ul
            className="space-y-2">
            <p
              className="block px-5 py-2 text-xs text-gray-400" >
              ÁREA PERSONAL
            </p>
            <li>
              <Link to="/dashboard/calendar"
                className="nav-link flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-300">
                <i
                  className="bi bi-calendar4-week mr-2">
                </i>
                Agenda
              </Link>
            </li>

            <li><Link to="/dashboard/correo"
              className="nav-link flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-300">

              <i
                className="bi bi-envelope mr-2">
              </i>
              Correo
            </Link>
            </li>

            <hr className="border-gray-300 my-4" />

            <li>
              <a
                className="flex items-center p-2 rounded-md text-gray-600 hover:bg-red-400 hover:cursor-pointer hover:text-white"
                onClick={logout}>
                <i
                  className="bi bi-box-arrow-left mr-2 ml-2">
                </i>
                Cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* PANTALLAS MÓVIL */}

      {/* Menú hamburguesa: */}
      <div
        className="md:hidden w-full shadow-md pt-0 pl-4 pb-2 flex justify-between items-center">
        <button
          onClick={toggleMenu}
          className="text-gray-700">
          <i
            className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} text-xl`}>
          </i>
        </button>
      </div>

      {/* Menú principal: */}

      {isMenuOpen && (
        <>
          {/* Transparencia fondo menú ==> NO LOGRO QUE OCUPE TODA LA PANTALLA HACIA ABAJO!! */}

          <div
            className="fixed top-0 left-0 w-screen h-screen bg-[#b0adad9b] z-40"
            onClick={toggleMenu} // Cierra el menú al hacer clic en el fondo
          ></div>


          <div className="lg:hidden absolute top-19 left-4 mt-15 z-50 ">
            <div
              className="w-64 bg-white p-4 shadow-md rounded-2xl">
              <ul
                className="space-y-2">
                <li>
                  <Link to="/dashboard"
                    className="nav-link flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-300"
                    onClick={handleMenuOptionClick}>
                    <i
                      className="bi bi-house-door mr-2">
                    </i>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/employees"
                    className="nav-link flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-300"
                    onClick={handleMenuOptionClick}>
                    <i
                      className="bi bi-people mr-2">
                    </i>
                    Empleados
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/departments"
                    className="nav-link flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-300"
                    onClick={handleMenuOptionClick}>
                    <i
                      className="bi bi-diagram-3 mr-2">
                    </i>
                    Departamentos
                  </Link>
                </li>
              </ul>

              <hr className="border-gray-300 my-4" />

              <div className="relative">

                {/* Submenú área personal recursos humanos: */}
                <ul
                  className="space-y-2">
                  <p
                    className="block px-5 py-2 text-xs text-gray-400" >
                    ÁREA PERSONAL
                  </p>

                  <li>
                    <Link to="/dashboard/calendar"
                      className="nav-link flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-300"
                      onClick={handleMenuOptionClick}>
                      <i className="bi bi-calendar4-week mr-2">
                      </i>
                      Agenda
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/correo"
                      className="nav-link flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-300"
                      onClick={handleMenuOptionClick}>

                      <i className="bi bi-envelope mr-2">
                      </i>
                      Correo
                    </Link>
                  </li>


                  <hr className="border-gray-300 my-4" />

                  <li>
                    <a className="flex items-center p-2 rounded-md text-grey-800 hover:bg-red-500 hover:cursor-pointer hover:text-white"
                      onClick={logout}>
                      <i
                        className="bi bi-box-arrow-left mr-2 ml-2">
                      </i>
                      Cerrar sesión
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )
      }
    </nav>
  );
}

export default NavBar;