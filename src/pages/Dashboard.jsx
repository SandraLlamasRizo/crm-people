import DeparmentCardSmall from "../components/DepartmentsCardSmall";
import EmployeeCardSmall from "../components/EmployeeCardSmall";
import EmployeeCardLarge from "../components/EmployeeCardLarge";


function Dashboard() {
    return (
        <div className="mx-auto p-6">
            {/* Sección de Bienvenida */}
            <div className="mb-6 md:ml-70">
                <h6 className="welcomeBackH6">Bienvenido de nuevo, usuario</h6>
                <h3 className="homeH3">Inicio</h3>
            </div>

            {/* Sección de Empleados (Ocupará todo el ancho en pantallas grandes), en mobile se mostrara en una sola columna */}

            <div className="container">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-2xl font-bold text-gray-800">Empleados</h4>
                    <a
                        href="/employees"
                        className="no-underline hover:underline text-sm " style={{ color: "#457FBF" }}
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
            <div className="md:flex justify-start gap-8 sm:gap-4">
                {/* Departamentos */}
                <div className="md:ml-70 bg-white rounded-2xl p-8 ">
                    <div className="flex justify-between items-center mb-4 md:gap-70">
                        <h4 className="text-2xl font-bold text-gray-800">Departamentos</h4>
                        <a
                            href="/departments"
                            className="no-underline hover:underline text-sm" style={{ color: "#457FBF" }}>
                            Ver Todos </a>
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

                {/* Ultimos Empleados */}
                <div className="bg-white rounded-2xl w-full mr-12">
                    <h4 className="text-2xl font-bold mb-4 text-gray-800 p-5">Ultimos Empleados</h4>
                    <div className="gap-4 pr-4 pl-4 pb-4 ">

                        <div className="mb-4">
                            <EmployeeCardLarge />
                        </div>
                        <div className="mb-4">
                            <EmployeeCardLarge />
                        </div>
                        <div className="mb-4 sm:block">
                            <EmployeeCardLarge />
                        </div>
                        <div className="mb-4 sm:block">
                            <EmployeeCardLarge />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;
