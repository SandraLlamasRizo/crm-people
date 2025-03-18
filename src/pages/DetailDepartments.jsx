import { useParams } from "react-router";
import DepartmentDetailsEach from "../components/DepartmentDetailsEach";

function DetailDepartments() {
    // Cambia 'departemento' por 'departamento'
    const { departamento } = useParams(); // Aquí debes utilizar 'departamento' si tu ruta es '/departments/:departamento'


    return (
        <>
            <div className="mr-2 md:mr-8 p-4">
                <a href="/dashboard/departments" className=" no-underlinetext-sm abslute flex flex-col items-end pr-4 mr font-normal text-[#47A7BD] hover:underline">
                        Volver a departamentos
                    </a>
            </div>
            <div className="md:ml-76 mr-2 md:mr-8">
                {/* Aquí le pasas el 'departamento' al componente para cargar los detalles */}
                <DepartmentDetailsEach departamento={departamento} /> 
                
            </div>

            
        </>
    );
}

export default DetailDepartments;
