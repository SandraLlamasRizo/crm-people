import { useParams } from "react-router";
import DepartmentDetailsEach from "../components/DepartmentDetailsEach";

function DetailDepartments() {
    // Cambia 'departemento' por 'departamento'
    const { departamento } = useParams(); // Aquí debes utilizar 'departamento' si tu ruta es '/departments/:departamento'


    return (
        <>
            <div className="mr-2 md:mr-8">
                <a
                    href="/dashboard/departments"
                    className="no-underline hover:underline text-sm bottom-4 right-4 flex flex-col items-end pr-8 pt-8"
                    style={{ color: "#457FBF" }}
                >
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
