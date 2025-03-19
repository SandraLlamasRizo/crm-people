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
    }, { totalSalario: 0, salarioMaximo: -Infinity, salarioMinimo: Infinity});

    const promSalario = (calculo.totalSalario / totalEmpleados).toFixed(2);

    return (
        <>
            <div className="mx-auto p-6">
                <figure>
                    <img
                        className="w-[100px] h-[100px]"
                        // src={departamentosImagenes[departamento] || '/default.png'}  porqué es '/default.png'?? No encuentro ese archivo... LO HE BORRADO 
                        src={departamentosImagenes[departamento]}
                        alt="Icono de Departamento"
                    />
                </figure>
                <h3 className="text-4xl font-semibold text-gray-700 p-4">
                    {nombresPersonalizados[departamento] || departamento}
                </h3>
                <div className="mb-6 shadow-lg bg-white rounded-2xl p-4">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 px-6 pt-4">
                        Salarios
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 gap-y-10 pt-4 pb-6 px-6 justify-between">
                        <div className="text-gray-500">
                            <h3>Salario Total</h3>
                            <p>{calculo.totalSalario }€</p>
                        </div>
                        <div className="text-gray-500">
                            <h3>Salario Promedio</h3>
                            <p>{promSalario }€</p>
                        </div>
                        <div className="text-gray-500">
                            <h3>Salario Máximo</h3>
                            <p> {calculo.salarioMaximo}€</p>
                        </div>
                        <div className="text-gray-500">
                            <h3>Salario Mínimo</h3>
                            <p>{calculo.salarioMinimo}€</p>
                        </div>
                    </div>
                </div>
                <div className="mb-6  bg-white rounded-2xl shadow-lg p-4">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 px-6 pt-4">
                            Empleados
                        </h2>
                        <h5 className="text-md text-gray-500 mb-3 px-6">
                            Numero de empleados: {totalEmpleados}
                        </h5>
                        <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:grid-rows-2 lg:auto-rows-fr pt-2 lg:pt-4 pb-4 lg:pb-6 px-4 lg:px-6">
                            
                            
                    {filteredEmployees
                        .slice(0, window.innerWidth < 768 ? 2 : 40) // Muestra 2 en móvil y 28 en escritorio
                        .map((empleado) => (
                            <EmployeeCardSmall key={empleado._id} empleado={empleado} />
                        ))}
                
                        </div>
                        <div className="flex justify-end mt-4 px-6 pb-4">

                            <button className="bg-[#457FBF] hover:bg-[#2664A9] hover:cursor-pointer text-white font-bold py-1 px-2 rounded-md w-[140px]">
                                
                                <a
                                    href="/dashboard/employees"
                                    className="font-normal  text-white "
                                >
                                    Ver todos los empleados
                                </a>
                            
                        </button>    
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DepartmentDetailsEach;
