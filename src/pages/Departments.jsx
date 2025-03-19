import { useEffect } from "react";
import DepartmentCardLarge from "../components/DepartmentsCardLarge";
import { useEmployeesContext } from "../providers/EmployerProvider";

function Departments() {
    const [employees] = useEmployeesContext();
    useEffect(() => {
        window.scrollTo(0, 0); ;
    }, [employees]);


    //funcion para sacar departamentos con total de empleados y total salario
    const departamentos = employees.reduce((acum, empleado) => {
        const { departamento, salario } = empleado;

        if (!acum[departamento]) {
            acum[departamento] = { totalEmpleados: 0, totalSalario: 0};
        }

        acum[departamento].totalEmpleados += 1;
        acum[departamento].totalSalario += salario;
        acum[departamento].promSalario = (acum[departamento].totalSalario / acum[departamento].totalEmpleados).toFixed(2);

        return acum;

    }, {});

    //convertir departamentps en array
    const departamentosArray = Object.entries(departamentos);

    return (
        <>
            <div className="md:ml-76">
                    <h3 className="homeH3 p-4">Departamentos</h3>
                <div>
                    <a href="/dashboard"className=" no-underlinetext-sm abslute flex flex-col items-end pr-4 mr font-normal text-[#47A7BD] hover:underline">
                        Volver al Inicio
                    </a>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 pb-6 px-6 mr-6">
                    {departamentosArray.map(([departamento, datos]) => (
                        <div key={departamento} className="w-full">
                            <DepartmentCardLarge
                                departamento={departamento}
                                datos={datos} />
                        </div>
                    ))}
                </div>
            </div>


        </>
    );
}

export default Departments;
