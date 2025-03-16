import { Link } from "react-router";

const departamentosImagenes = {
    direccion: '/direccion.jpg',
    diseño: '/diseno.jpg', // NO CARGA LA IMAGEN NO SE PORQUEN
    desarrollo: '/desarrolloicon.jpg',
    recursoshumanos: '/rrhhicon.png',
};

function DepartmentCardLarge({ departamento, datos }) {
    return (
        <div className="max-w-[500px] w-full h-[300px] rounded-lg shadow-xl overflow-hidden p-4 flex flex-col justify-between relative bg-white mx-auto">
            <div>
                <figure>
                    <img
                        className="w-[100px] h-[100px] mx-auto"
                        src={departamentosImagenes[departamento] || '/default.png'}
                        alt="Icono de Departamento"
                    />
                </figure>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {departamento}
                </h3>
                <h4 className="text-md text-gray-500 mb-3">
                    Número de Empleados: {datos.totalEmpleados}
                </h4>
                <div className="flex gap-2">
                    <h5 className="text-sm text-blue-600 font-medium bg-[#E1F0FF] px-3 py-1 rounded-full">
                        Salario medio: {datos.medioSalario} €
                    </h5>
                    <h5 className="text-sm text-blue-600 font-medium bg-[#E1F0FF] px-3 py-1 rounded-full">
                        Salario total: {datos.totalSalario} € 
                        
                    </h5>
                </div>
            </div>

            <div className="absolute bottom-4 right-4 flex flex-col items-end">
                <h6 className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
                    <Link to={`/dashboard/departments/${departamento}`}>
                        Ver más detalles
                    </Link>
                </h6>
            </div>
        </div>
    );
}

export default DepartmentCardLarge;
