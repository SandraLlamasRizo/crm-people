import { useEffect } from "react";
import DepartmentCardLarge from "../components/DepartmentsCardLarge";
import { useEmployeesContext } from "../providers/EmployerProvider";

function Departments() {
    const [employees] = useEmployeesContext();
    useEffect(() => {
        console.log("empleados actualizados", employees);
    }, [employees]);


    //funcion para sacar departamentos con total de empleados y total salario
    const departamentos = employees.reduce((acum, empleado) => {
        const { departamento, salario } = empleado;

        if (!acum[departamento]) {
            acum[departamento] = { totalEmpleados: 0, totalSalario: 0 };
        }

        acum[departamento].totalEmpleados += 1;
        acum[departamento].totalSalario += salario;

        return acum;
    }, {});

    //convertir departamentps en array
    const departamentosArray = Object.entries(departamentos);
    console.log(departamentosArray)

    return (
        <>
            <div>
                <h3 className="homeH3 md:ml-76 ">Departamentos</h3>
            </div>
            <div>
                <a
                    href="/dashboard"
                    className=" no-underline hover:underline text-sm abslute flex flex-col items-end pr-4" style={{ color: "#457FBF" }}
                >
                    Volver al Inicio
                </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4 pb-6 px-6 mr-2 md:ml-70">
                {departamentosArray.map(([departamento, datos]) => (
                    <div key={departamento} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                        <DepartmentCardLarge
                            departamento={departamento}
                            datos={datos} />
                    </div>
                ))}
            </div>


        </>
    );
}

export default Departments;
