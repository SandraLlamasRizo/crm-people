import DeparmentCardSmall from "../components/DepartmentsCardSmall";
import EmployeeCardSmall from "../components/EmployeeCardSmall";
import EmployeeCardLarge from "../components/EmployeeCardLarge";

function Dashboard() {
    return (
        <div className="mx-auto p-4 sm:p-6">
            {/* Sección de Bienvenida */}
            <div className="  mx-auto p-4  mb-4 md:ml-70 ">
                <h6 className="text-lg sm:text-xl font-semibold text-gray-600">
                    Bienvenido de nuevo, usuario
                </h6>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">Inicio</h3>
            </div>

            {/* Sección de Empleados */}
            <div className=" bg-white rounded-2xl mx-auto p-4 md:ml-70 " >
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-800">Empleados</h4>
                    <a
                        href="/employees"
                        className="no-underline hover:underline text-sm text-color-[#457FBF]" 
                    >
                        Ver todos los empleados
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-6 md:auto-rows-fr pt-2 md:pt-4 pb-4 md:pb-6 px-4 md:px-6">                    <div className="mb-2">
                        <EmployeeCardSmall />
                    </div>
                    <div className="mb-2">
                        <EmployeeCardSmall />
                    </div>
                    <div className="hidden md:block">
                        <EmployeeCardSmall />
                    </div>
                    <div className="hidden md:block">
                        <EmployeeCardSmall />
                    </div>
                    <div className="hidden lg:block">
                        <EmployeeCardSmall />
                    </div>
                    <div className="hidden lg:block">
                        <EmployeeCardSmall />
                    </div>
                    <div className="hidden lg:block">
                        <EmployeeCardSmall />
                    </div>
                    <div className="hidden lg:block">
                        <EmployeeCardSmall />
                    </div>
                    <div className="hidden lg:block">
                        <EmployeeCardSmall />
                    </div>
                    <div className="hidden lg:block">
                        <EmployeeCardSmall />
                    </div>
                    <div className="hidden lg:block">
                        <EmployeeCardSmall />
                    </div>
                    <div className="hidden lg:block">
                        <EmployeeCardSmall />
                    </div>
                </div>
            </div>


            {/* Sección de Departamentos y Rendimiento */}
            <div className="flex flex-col sm:flex-row justify-start gap-4 sm:gap-8 mt-4 sm:mt-6 md:ml-70">
                {/* Departamentos */}
                <div className="bg-white rounded-2xl p-4 sm:p-8 w-full">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-800">Departamentos</h4>
                        <a
                            href="/departments"
                            className="no-underline hover:underline text-sm text-blue-500"
                        >
                            Ver todos
                        </a>
                    </div>

                    <div className="flex flex-col gap-2 sm:gap-4">
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

                {/* Últimos Empleados */}
                <div className="bg-white rounded-2xl w-full sm:w-2/3">
                    <h4 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 p-4 sm:p-5">
                        Últimos Empleados
                    </h4>
                    <div className="gap-2 sm:gap-4 px-4 sm:px-5 pb-4 sm:pb-6">
                        <div className="mb-2">
                            <EmployeeCardLarge />
                        </div>
                        <div className="mb-2 ">
                            <EmployeeCardLarge />
                        </div>
                        <div className="mb-2 sm:block hidden">
                            <EmployeeCardLarge />
                        </div>
                        <div className="mb-2 sm:block hidden">
                            <EmployeeCardLarge />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
