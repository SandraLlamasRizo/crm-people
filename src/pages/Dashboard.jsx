import DeparmentCardSmall from "../components/DepartmentsCardSmall";
import EmployeeCardSmall from "../components/EmployeeCardSmall";
import EmployeeCardLarge from "../components/EmployeeCardLarge";
import { useEmployeesContext } from "../providers/EmployerProvider";
import { useEffect } from "react";

function Dashboard() {
    const [employees] = useEmployeesContext();
    const username = localStorage.getItem('username');

  useEffect(() => {
    console.log("empleados actualizados", employees);
  }, [employees]);
    //funcion para ordenar empleados
    const ordenarEmpleados = [...employees].sort((a, b) =>b._id. localeCompare(a._id));
    //funcion para sacar departamentos con total de empleados y total salario 
    const departamentos = employees.reduce((acum, empleado) => {
        const { departamento, salario } = empleado;

        if (!acum[departamento]) {
            acum[departamento] = { totalEmpleados: 0, totalSalario: 0, medioSalario: 0 };
        }

        acum[departamento].totalEmpleados += 1;
        acum[departamento].totalSalario += salario;
       

        return acum;
    }, {});

    //calcular salario medio
   
    //convertir departamentps en array
    const departamentosArray = Object.entries(departamentos);
    console.log(departamentosArray)

    
    return (
        <div className="mx-auto p-4 sm:p-6">
            {/* Sección de Bienvenida */}
            <div className="  mx-auto p-4  mb-4 md:ml-70 ">
                <h6 className="homeH6 text-gray-600">
                    Bienvenido de nuevo, {username}
                </h6>
                <h3 className="homeH3 text-gray-800">Inicio</h3>
            </div>

            {/* Sección de Empleados */}
            <div className=" bg-white rounded-2xl mx-auto p-4 md:ml-70 " >
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-600">Empleados</h4>
                    <a
                        href="dashboard/employees"
                        className="font-normal text-[#47A7BD] hover:underline"
                    >
                        Ver todos los empleados
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:grid-rows-2 lg:auto-rows-fr pt-2 lg:pt-4 pb-4 lg:pb-6 px-4 lg:px-6">
                    {employees
                        .slice(0, window.innerWidth < 1024 ? 2 : 10) // Muestra 2 en móvil y 12 en escritorio
                        .map((empleado) => (
                            <EmployeeCardSmall key={empleado._id} empleado={empleado} />
                        ))}
                </div>

            </div>


            {/* Sección de Departamentos y Rendimiento */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 md:ml-70">
                {/* Departamentos */}
                <div className="bg-white rounded-2xl p-4 w-full">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-600">Departamentos</h4>
                        <a
                            href="/dashboard/departments"
                            className="font-normal text-[#47A7BD] hover:underline"
                        >
                            Ver todos
                        </a>
                    </div>

                    <div className="flex flex-col gap-4">
                        {departamentosArray.map(([departamento, datos]) => (
                        <DeparmentCardSmall
                            key={departamento}
                            departamento={departamento}
                            datos={datos}
                        />
                        ))}
                    </div>
                </div>

                {/* Últimos Empleados */}
                <div className="bg-white rounded-2xl p-4 w-full ">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-600">Nuevos Empleados</h4>
                        <a
                            href="/dashboard/employees"
                            className="font-normal text-[#47A7BD] hover:underline"
                        >
                            Ver todos
                        </a>
                    </div>
                    <div className="flex flex-col gap-4">
                        {ordenarEmpleados
                            .slice(0, window.innerWidth < 768 ? 2 : 5)  // Muestra 2 en móvil y 5 en escritorio
                            .map((empleado) => (
                            <EmployeeCardLarge key={empleado._id} empleado={empleado} propCompact={true}/>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
