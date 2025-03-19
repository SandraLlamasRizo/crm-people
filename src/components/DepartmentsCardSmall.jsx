import { useNavigate } from 'react-router';

function DepartmentCardSmall({ departamento, datos }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/dashboard/departments/${departamento}`);
    };

    return (
        <div
            onClick={handleClick}
            className="w-full cursor-pointer rounded-lg shadow-lg overflow-hidden transition-transform duration-200 hover:scale-105"
        >
            <div className="p-4 bg-[#F4F9FD] hover:bg-[#d3ebff] rounded-xl transition-colors duration-300">
                {/* Nombre del departamento */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {departamento}
                </h3>

                {/* Número de empleados */}
                <h4 className="text-md text-gray-500 mb-4">
                    Número de empleados: {datos.totalEmpleados}
                </h4>

                {/* Salario total */}
                <div className="flex justify-between items-center">
                    <h5
                        className="inline-block text-sm font-medium bg-[#E1F0FF] px-3 py-1 rounded-full"
                        style={{ color: "#457FBF" }}
                    >
                        Salario total: {datos.totalSalario} €
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default DepartmentCardSmall;
