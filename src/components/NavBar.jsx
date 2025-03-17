import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';

function NavBar() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const logout = () => {
    localStorage.removeItem('token');
    console.log("token borrado")
    navigate('/');
  }

  return (
    <nav className="flex">
      {/* Sidebar para pantallas grandes: */}
      <div
        className="hidden md:flex flex-col p-5 bg-white text-gray-800 min-h-screen w-64 shadow-lg fixed z-50 rounded-2xl"
        style={{ marginTop: '-60px', marginBottom: '10px' }}>

        {/* Logo */}
        <div
          className="flex flex-col items-center">
          <img
            src="/Logo_CRM.svg"
            alt="logo CRM people"
            className="rounded-full w-24 h-24 mb-4"
          />
          <hr className="border-gray-400 mb-4" />
        </div>

        {/* Menú principal */}
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard"
              className="nav-link flex items-center p-2 rounded-md text-gray-800 dark:hover:bg-gray-300">
              <i
                className="bi bi-house-door mr-2">
              </i>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/employees"
              className="nav-link flex items-center p-2 rounded-md text-gray-800 dark:hover:bg-gray-300">
              <i
                className="bi bi-people mr-2">
              </i>
              Empleados
            </Link>
          </li>
          <li>
            <Link to="/dashboard/departments"
              className="nav-link flex items-center p-2 rounded-md text-gray-800 dark:hover:bg-gray-300">
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
          className="relative">
          <ul
            className="space-y-2">
            <p
              className="block px-5 py-2 text-xs text-gray-400" >
              ÁREA PERSONAL
            </p>
            <li>
              <Link to="/dashboard/newEmployee"
                className="nav-link flex items-center p-2 rounded-md text-gray-800 hover:bg-gray-300">
                <i
                  className="bi bi-calendar4-week mr-2">
                </i>
                Agenda
              </Link>
            </li>

            <li><Link to="/dashboard/delete"
              className="nav-link flex items-center p-2 rounded-md text-gray-800 hover:bg-gray-300">
              <i
                className="bi bi-envelope mr-2">
              </i>
              Correo
            </Link>
            </li>
            <li>
              <Link to="/dashboard/edit"
                className="nav-link flex items-center p-2 rounded-md text-gray-800 hover:bg-gray-300">
                <i
                  className="bi bi-check2-square mr-2">
                </i>
                Tareas
              </Link>
            </li>
            <hr className="border-gray-300 my-4" />

            <li>
              <a
                className="flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-300"
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
        className="md:hidden w-full shadow-md p-4 flex justify-between items-center">
        <button
          onClick={toggleMenu}
          className="text-gray-800">
          <i
            className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} text-xl`}>
          </i>
        </button>
      </div>

      {/* Menú principal: */}git 

      {isMenuOpen && (
        <>
          {/* Transparencia fondo menú */}
          <div className="absolute w-screen h-screen bg-[#b0adad9b] mt-15"></div>

          <div className="lg:hidden absolute top-19 left-4 mt-18 z-50 ">
            <div
              className="w-64 bg-white p-4 shadow-md rounded-2xl">
              <ul
                className="space-y-2">
                <li>
                  <Link to="/dashboard"
                    className="nav-link flex items-center p-2 rounded-md text-gray-800 hover:bg-gray-300">
                    <i
                      className="bi bi-house-door mr-2">
                    </i>
                    Dashboard
                  </Link>
                </li>
git
                <li>
                  <Link to="/dashboard/employees"
                    className="nav-link flex items-center p-2 rounded-md text-gray-800 hover:bg-gray-300">
                    <i
                      className="bi bi-people mr-2">
                    </i>
                    Empleados
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/departments"
                    className="nav-link flex items-center p-2 rounded-md text-gray-800 hover:bg-gray-300">
                    <i
                      className="bi bi-diagram-3 mr-2">
                    </i>
                    Departamentos
                  </Link>
                </li>
              </ul>

              <hr className="border-gray-400 my-4" />

              <div className="relative">

                {/* Submenú Gestiona tus empleados: */}
                <ul
                  className="space-y-2">
                  <p
                    className="block px-5 py-2 text-xs text-gray-400" >
                    ÁREA PERSONAL
                  </p>

                  <li>
                    <Link to="/dashboard/newEmployee"
                      className="nav-link flex items-center p-2 rounded-md text-gray-800 dark:hover:bg-gray-300">
                      <i className="bi bi-calendar4-week mr-2">
                      </i>
                      Agenda
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/edit"
                      className="nav-link flex items-center p-2 rounded-md text-gray-800 dark:hover:bg-gray-300">
                      <i className="bi bi-envelope mr-2">
                      </i>
                      Correo
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/delete"
                      className="nav-link flex items-center p-2 rounded-md text-gray-800 dark:hover:bg-gray-300">
                      <i
                        className="bi bi-check2-square mr-2">
                      </i>
                      Tareas
                    </Link>
                  </li>

                  <hr className="border-gray-300 my-4" />

                  <li>
                    <a className="flex items-center p-2 rounded-md text-gray-600 dark:hover:bg-gray-300"
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


