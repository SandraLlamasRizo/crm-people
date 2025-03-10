import DeparmentCardSmall from "../components/DepartmentsCardSmall";
import EmployeeCardSmall from "../components/EmployeeCardSmall";

function Dashboard() {
    return (
        <div className="container mx-auto p-6">
            {/* Sección de Bienvenida */}
            <div className="mb-6">
                <h6 className="welcomeBackH6">Bienvenido de nuevo, usuario</h6>
                <h3 className="homeH3">Inicio</h3>
            </div>

            {/* Sección de Empleados (Ocupará todo el ancho en pantallas grandes), en mobile se mostrara en una sola columna */}

            <div className="p-6 shadow-lg mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-2xl font-bold text-gray-800">Empleados</h4>
                    <a
                        href="/employees"
                        className="text-blue-500 no-underline hover:underline text-sm"
                    >
                        Ver todos los empleados
                    </a>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 gap-y-10 sm:gap-y-6 pt-4 pb-6 px-6">
                    <div className="mb-4">
                        <EmployeeCardSmall />
                    </div>
                    <div className="mb-4">
                        <EmployeeCardSmall />
                    </div>
                    <div className="sm:block hidden">
                        <EmployeeCardSmall />
                    </div>
                    <div className="sm:block hidden">
                        <EmployeeCardSmall />
                    </div>
                    <div className="sm:block hidden">
                        <EmployeeCardSmall />
                    </div>
                    <div className="sm:block hidden">
                        <EmployeeCardSmall />
                    </div>
                    <div className="sm:block hidden">
                        <EmployeeCardSmall />
                    </div>
                    <div className="sm:block hidden">
                        <EmployeeCardSmall />
                    </div>
                    <div className="sm:block hidden">
                        <EmployeeCardSmall />
                    </div>
                    <div className="sm:block hidden">
                        <EmployeeCardSmall />
                    </div>
                    <div className="sm:block hidden">
                        <EmployeeCardSmall />
                    </div>
                    <div className="sm:block hidden">
                        <EmployeeCardSmall />
                    </div>
                </div>
            </div>
            {/* Sección de Departamentos y Rendimiento en dos columnas en pantallas grandes, en mobile se mostrara en una sola columna */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Departamentos */}
                <div className="p-6  shadow-lg mb-6">
                    <div className="flex justify-between items-center mb-4 gap-4">
                        <h4 className="text-2xl font-bold text-gray-800">Departamentos</h4>
                        <a
                            href="/departments"
                            className="text-blue-500 no-underline hover:underline text-sm"
                        >
                            Ver todos los departamentos
                        </a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div>
                            <DeparmentCardSmall />
                        </div>
                        <div className="hidden sm:block">
                            <DeparmentCardSmall />
                        </div>
                        <div className="hidden sm:block">
                            <DeparmentCardSmall />
                        </div>
                    </div>
                </div>

                {/* Rendimiento */}
                <div className="bg-white p-6 shadow-lg">
                    <h4 className="text-2xl font-bold mb-4 text-gray-800">Rendimiento</h4>
                    <p className="text-gray-600">Aquí va la gráfica</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
