import { useParams } from "react-router";
import DepartmentDetailsEach from "../components/DepartmentDetailsEach";

function DetailDepartments() {
    // Cambia 'departemento' por 'departamento'
    const { departamento } = useParams(); // Aquí debes utilizar 'departamento' si tu ruta es '/departments/:departamento'
    window.scrollTo(0, 0); 

    return (
        <>
            
            <div className="md:ml-76 mr-2 md:mr-8">
                {/* Aquí le pasas el 'departamento' al componente para cargar los detalles */}
                <DepartmentDetailsEach departamento={departamento} /> 
                
            </div>

            
        </>
    );
}

export default DetailDepartments;
