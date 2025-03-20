import { useEmployeesContext } from "../providers/EmployerProvider";
import EmployeeCardSmall from "./EmployeeCardSmall";
import { nombresPersonalizados, departamentosImagenes } from "./DepartmentsCardLarge";

function DepartmentDetailsEach({ departamento }) {
    const [employees] = useEmployeesContext();

    const filteredEmployees = employees.filter((empl) => empl.departamento === departamento);
    const totalEmpleados = filteredEmployees.length;

    const calculo = filteredEmployees.reduce((acum, { salario }) => {
        acum.totalSalario += salario;
        acum.salarioMaximo = (Math.max(acum.salarioMaximo, salario)).toFixed(2);
        acum.salarioMinimo = (Math.min(acum.salarioMinimo, salario)).toFixed(2);
        return acum;
    }, { totalSalario: 0, salarioMaximo: -Infinity, salarioMinimo: Infinity });

    const promSalario = (calculo.totalSalario / totalEmpleados).toFixed(2);

    return (
        <>
            <div>
                <div
                    className="flex flex-col p-4 "
                >

                    <figure className="mx-auto ">
                        <img
                            className="w-[100px] h-[100px]"
                            src={departamentosImagenes[departamento]}
                            alt="Icono de Departamento"
                        />
                    </figure>
                    <div className="flex flex-row justify-between items-end"> <h3 className="homeH3 ">
                        {nombresPersonalizados[departamento] || departamento}
                    </h3>
                   
                        <a href="/dashboard/departments" className=" no-underlinetext-sm abslute flex flex-col items-end pr-4 mr font-normal text-[#47A7BD] hover:underline">
                            Volver 
                        </a>
                    </div>
                </div>

                <div className="mb-6 shadow-lg bg-white rounded-2xl p-2 mx-6">
                    <h2 className="px-4 py-2 text-xl md:text-2xl font-bold text-gray-600">
                        Salarios
                    </h2>

                    <div className="flex flex-wrap justify-around gap-8 gap-y-10 pt-4 pb-6 px-6 ">
                        <div className="text-sm text-[#457FBF] font-medium bg-[#E1F0FF] px-3 py-1 rounded-2xl w-[190px] h-[80px] flex flex-col items-center justify-center text-center">
                            <span className="text-xl">Salario Total:</span>
                            <span className="text-lg">{calculo.totalSalario}€</span>
                        </div>

                        <div className="text-sm text-[#457FBF] font-medium bg-[#E1F0FF] px-3 py-1 rounded-2xl w-[190px] h-[80px] flex flex-col items-center justify-center text-center">
                            <span className="text-xl">Salario Promedio:</span>
                            <span className="text-lg">{promSalario}€</span>
                        </div>

                        <div className="text-sm text-[#457FBF] font-medium bg-[#E1F0FF] px-3 py-1 rounded-2xl w-[190px] h-[80px] flex flex-col items-center justify-center text-center">
                            <span className="text-xl">Salario Máximo:</span>
                            <span className="text-lg">{calculo.salarioMaximo}€</span>
                        </div>

                        <div className="text-sm text-[#457FBF] font-medium bg-[#E1F0FF] px-3 py-1 rounded-2xl w-[190px] h-[80px] flex flex-col items-center justify-center text-center">
                            <span className="text-xl">Salario Mínimo:</span>
                            <span className="text-lg">{calculo.salarioMinimo}€</span>
                        </div>
                    </div>
                </div>




                <div className="mb-6 bg-white rounded-2xl shadow-lg p-2 mx-6">
                    <div className="flex flex-col ">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 px-6 pt-4">
                            Empleados
                        </h2>
                        <h5 className="text-md text-gray-500 mb-3 px-6">
                            Numero de empleados: {totalEmpleados}
                        </h5>
                        <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:grid-rows-2 lg:auto-rows-fr pt-2 lg:pt-4 pb-4 lg:pb-6 px-4 lg:px-6">

                            {filteredEmployees
                                 // Muestra 2 en móvil y 28 en escritorio
                                .map((empleado) => (
                                    <EmployeeCardSmall key={empleado._id} empleado={empleado} />
                                ))}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default DepartmentDetailsEach;


