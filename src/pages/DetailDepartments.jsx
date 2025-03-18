import { useParams } from "react-router";
import DepartmentDetailsEach from "../components/DepartmentDetailsEach";

function DetailDepartments() {
    // Cambia 'departemento' por 'departamento'
    const { departamento } = useParams(); // Aquí debes utilizar 'departamento' si tu ruta es '/departments/:departamento'


    return (
        <>
            <div className="md:ml-76">
                {/* Aquí le pasas el 'departamento' al componente para cargar los detalles */}
                <DepartmentDetailsEach departamento={departamento} /> 
                
            </div>

            <div>
                <a
                    href="/departments"
                    className="no-underline hover:underline text-sm bottom-4 right-4 flex flex-col items-end pr-4"
                    style={{ color: "#457FBF" }}
                >
                    Volver a departamentos
                </a>
            </div>
        </>
    );
}

export default DetailDepartments;
