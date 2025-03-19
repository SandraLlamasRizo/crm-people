import { useNavigate } from "react-router";
import { nombresPersonalizados, departamentosImagenes } from "./DepartmentsCardLarge";



function DeparmentCardSmall({ departamento, datos }) {
    const navigate = useNavigate();

    // Maneja el clic para navegar al detalle del departamento
    const handleClick = () => {
        navigate(`/dashboard/departments/${departamento}`);
    };

    return (
        <div
            onClick={handleClick}
            className="grid grid-cols-3 items-center my-2 mx-2 cursor-pointer overflow-hidden transition-transform duration-200 hover:scale-105 bg-[#F4F9FD] hover:bg-[#d3ebff] rounded-lg shadow-xl p-4"
        >
            <div
                className="flex flex-col items-center">

                <figure className="">
                    <img
                        className="w-[60px] h-[60px] object-cover"
                        src={departamentosImagenes[departamento]}
                        alt="Icono de Departamento"
                    />
                </figure>

                <h3 className="text-center text-[#457FBF] font-semibold text-xl">
                    {nombresPersonalizados[departamento] || departamento}
                </h3>

            </div>
            <h4 className="text-gray-500 text-sm mb-2">
                Número de Empleados: {datos?.totalEmpleados || 'N/A'}
            </h4>
            <h5 className="bg-[#E3F2FD] text-[#47A7BD] text-sm px-3 py-1 rounded-md">
                Salario total: {datos?.totalSalario ? `${datos.totalSalario} €` : 'N/A'}
            </h5>
        </div>

    );
}


export default DeparmentCardSmall;
