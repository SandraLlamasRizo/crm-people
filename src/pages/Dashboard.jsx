import React from 'react';

function NavBar() {
    return (
        <div className="fixed top-0 left-0 h-screen w-64 bg-white dark:bg-gray-200 text-gray-800 dark:text-gray-800 p-4 shadow-lg">
            {/* Logo */}
            <div className="flex flex-col items-center">
                <img
                    src="./public/Logo_CRM.svg"
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

            <hr className="border-gray-400 my-4" />

            {/* Dropdown */}
            <div className="relative">
                <button className="flex items-center space-x-2 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md p-2 w-full">
                    <img
                        src="https://github.com/mdo.png"
                        alt="User"
                        className="rounded-full w-8 h-8"
                    />
                    <span className="font-medium dark:text-gray-800">usuario</span>
                </button>

                {/* Dropdown Menu */}
                <ul className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-400 rounded-md shadow-lg overflow-hidden text-sm">
                    <li>
                        <a className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-800 dark:hover:bg-gray-600" href="#">
                            Crear nuevo empleado
                        </a>
                    </li>
                    <li>
                        <a className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-800 dark:hover:bg-gray-600" href="#">
                            Recuperar empleador
                        </a>
                    </li>
                    <li>
                        <a className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-800 dark:hover:bg-gray-600" href="#">
                            Editar empleado
                        </a>
                    </li>
                    <li>
                        <a className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-800 dark:hover:bg-gray-600" href="#">
                            Eliminar empleado
                        </a>
                    </li>
                    <li><hr className="border-gray-300 dark:border-gray-600" /></li>
                    <li>
                        <a className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-800 dark:hover:bg-gray-600" href="#">
                            Login user
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
