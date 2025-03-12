import EmployeeCardSmall from "./EmployeeCardSmall";

function DepartmentDetailsEach() {
    return (
        <>
            <div className="md:ml-70 mx-auto p-6">
                <h1 className="text-3xl font-bold mb-4">Nombre del departamento</h1>
                <div className="mb-6 shadow-lg">
                    <div className="flex flex-col bg-white rounded-2xl">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 px-6 pt-4">
                            Empleados
                        </h2>
                        <h5 className="text-md text-gray-500 mb-3 px-6">
                            Numero de empleados:
                        </h5>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 gap-y-10 sm:gap-y-6 pt-4 pb-6 px-6 ">
                            <div className="mb-4">
                                <EmployeeCardSmall />{" "}
                                {/* Se puede reutilizar el componente de EmployeeCardSmall, o lo mismo se tiene que hacer otro, porque sale el nombre del departamento y se va a repetir smp */}
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
                        <div className="flex justify-end mt-4 px-6 pb-4">

                         <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md w-[100px]">
                                Ver todos 
                            
                        </button>    
                        </div>
                    </div>
                </div>

                <div className="mb-6 shadow-lg bg-white rounded-2xl">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 px-6 pt-4">
                        Salarios
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 gap-y-10 sm:gap-y-6 pt-4 pb-6 px-6 justify-between">
                        <div>
                            <h3>Salario Total</h3>
                            <p>....</p>
                        </div>
                        <div>
                            <h3>Salario Promedio</h3>
                            <p>....</p>
                        </div>
                        <div>
                            <h3>Salario Máximo</h3>
                            <p> ....</p>
                        </div>
                        <div>
                            <h3>Salario Minimo</h3>
                            <p>....</p>
                        </div>
                    </div>
                </div>

             
            </div>
        </>
    );
}

export default DepartmentDetailsEach;
