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
                <h6 className="text-lg sm:text-xl font-semibold text-gray-600">
                    Bienvenido de nuevo, {username}
                </h6>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">Inicio</h3>
            </div>

            {/* Sección de Empleados */}
            <div className=" bg-white rounded-2xl mx-auto p-4 md:ml-70 " >
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-800">Empleados</h4>
                    <a
                        href="dashboard/employees"
                        className="font-normal text-xs text-[#47A7BD] hover:underline"
                    >
                        Ver todos los empleados
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-6 md:grid-rows-2 md:auto-rows-fr pt-2 md:pt-4 pb-4 md:pb-6 px-4 md:px-6">
                    {employees
                        .slice(0, window.innerWidth < 768 ? 2 : 12) // Muestra 2 en móvil y 12 en escritorio
                        .map((empleado) => (
                            <EmployeeCardSmall key={empleado._id} empleado={empleado} />
                        ))}
                </div>

            </div>


            {/* Sección de Departamentos y Rendimiento */}
            <div className="flex flex-col sm:flex-row justify-start gap-4 sm:gap-8 mt-4 sm:mt-6 md:ml-70">
                {/* Departamentos */}
                <div className="bg-white rounded-2xl p-4 sm:p-8 w-full">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-800">Departamentos</h4>
                        <a
                            href="/dashboard/departments"
                            className="font-normal text-xs text-[#47A7BD] hover:underline"
                        >
                            Ver todos
                        </a>
                    </div>

                    <div className="flex flex-col gap-2 sm:gap-4">
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
                <div className="bg-white rounded-2xl w-full sm:w-2/3">
                    <h4 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 p-4 sm:p-5">
                        Últimos Empleados
                    </h4>
                    <div className="gap-2 sm:gap-4 px-4 sm:px-5 pb-4 sm:pb-6">
                        {ordenarEmpleados
                            .slice(0, window.innerWidth < 768 ? 2 : 6)  // Muestra 2 en móvil y 6 en escritorio
                            .map((empleado) => (
                            <EmployeeCardLarge key={empleado._id} empleado={empleado} />
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
