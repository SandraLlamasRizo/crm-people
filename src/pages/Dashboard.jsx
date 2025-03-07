import EmployeeCard from "../components/EmployeeCard";

function Dashboard() {
    return (
        <div className="container mx-auto p-6">

            {/* Sección de Bienvenida */}
            <div className="mb-6">
                <h6 className="welcomeBackH6">Bienvenido de nuevo, usuario</h6>
                <h3 className="homeH3">Inicio</h3>
            </div>

            {/* Sección de Empleados (Ocupará todo el ancho en pantallas grandes), en mobile se mostrara en una sola columna */}
            <div className="bg-white p-6 border rounded-lg shadow-md mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-2xl font-bold text-gray-800">Empleados</h4>
                    <a href="/employees" className="text-decoration-none text-blue-500 no-underline hover:underline text-sm">
                        Ver todos los empleados
                    </a>
                </div>


            </div>

            {/* Sección de Departamentos y Rendimiento en dos columnas en pantallas grandes, en mobile se mostrara en una sola columna */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">



                {/* Departamentos */}
                <div className="bg-white p-6 border rounded-lg shadow-md relative">
                    <div className="flex justify-between items-center mb-4 gap-4">
                        <h4 className="text-2xl font-bold text-gray-800">Departamentos</h4>
                        <a href="/departments" className="text-blue-500 text-decoration-none no-underline hover:underline text-sm">
                            Ver todos los departamentos
                        </a>
                    </div>

                    <div className="space-y-4">
                        <section className="p-4 border rounded-lg shadow-sm">
                            <h5 className="text-lg font-semibold text-gray-700">Desarrollo</h5>
                            <p className="text-gray-500">Nº Empleados: {/* Aquí puedes mostrar el contador */}</p>
                        </section>
                        <section className="p-4 border rounded-lg shadow-sm">
                            <h5 className="text-lg font-semibold text-gray-700">Marketing</h5>
                            <p className="text-gray-500">Nº Empleados: {/* Aquí puedes mostrar el contador */}</p>
                        </section>
                        <section className="p-4 border rounded-lg shadow-sm">
                            <h5 className="text-lg font-semibold text-gray-700">Recursos Humanos</h5>
                            <p className="text-gray-500">Nº Empleados: {/* Aquí puedes mostrar el contador */}</p>
                        </section>
                    </div>
                </div>


                {/* Rendimiento */}
                <div className="bg-white p-6 border rounded-lg shadow-md">
                    <h4 className="text-2xl font-bold mb-4 text-gray-800">Rendimiento</h4>
                    <p className="text-gray-600">Aquí va la gráfica</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
