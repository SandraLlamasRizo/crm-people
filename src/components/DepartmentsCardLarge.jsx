import { useNavigate } from "react-router";


// Los nombres de los departamentos:
const nombresPersonalizados = {
    direccion: 'Dirección',
    diseño: 'Diseño',
    desarrollo: 'Desarrollo',
    recursoshumanos: 'Recursos Humanos',
};

// HE PUESTO ICONOS DEL MISMO ESTILO:
const departamentosImagenes = {
    direccion: '/DepartamentoDireccion.svg',
    diseño: '/DepartamentoDiseno.svg',
    desarrollo: '/DepartamentoDesarrollo.svg',
    recursoshumanos: '/Departamentorrhh.svg',
};


function DepartmentCardLarge({ departamento, datos }) {
    const navigate = useNavigate();

    const handleClick = () => {
    navigate(`/dashboard/departments/${departamento}`)
    }
    

    return (
        <div className="max-w-[500px] w-full h-[300px] rounded-lg shadow-xl overflow-hidden p-4 flex flex-col justify-between relative bg-white mx-auto">
            <div>
                <figure>
                    <img
                        className="w-[100px] h-[100px] mx-auto"
                        // src={departamentosImagenes[departamento] || '/default.png'}  porqué es '/default.png'?? No encuentro ese archivo... LO HE BORRADO 
                        src={departamentosImagenes[departamento]}
                        alt="Icono de Departamento"
                    />
                </figure>
                <h3 className="text-xl font-semibold text-gray-700 mb-1">
                    {nombresPersonalizados[departamento] || departamento}
                </h3>
                <h4 className="text-md text-gray-500 mb-3">
                    Número de Empleados: {datos?.totalEmpleados || 'N/A'}
                </h4>
                <div className="flex gap-2">
                    <h5 className="text-sm text-blue-600 font-medium bg-[#E1F0FF] px-3 py-1 rounded-full">
                        Salario medio: {datos?.medioSalario ? `${datos.medioSalario} €` : 'N/A'}
                    </h5>
                    <h5 className="text-sm text-blue-600 font-medium bg-[#E1F0FF] px-3 py-1 rounded-full">
                        Salario total: {datos?.totalSalario ? `${datos.totalSalario} €` : 'N/A'}
                    </h5>
                </div>
            </div>

            <div className="absolute bottom-4 right-4 flex flex-col items-end">
                <a className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer" onClick={handleClick}>
                        Ver más detalles
                </a>
            </div>
        </div>
    );
}

export default DepartmentCardLarge;
