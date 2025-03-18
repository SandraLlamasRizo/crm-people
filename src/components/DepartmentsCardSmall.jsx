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


function DeparmentCardSmall({ departamento, datos }) {
    const navigate = useNavigate();

    // Maneja el clic para navegar al detalle del departamento
    const handleClick = () => {
        navigate(`/dashboard/departments/${departamento}`);
    };

    return (
        <div
            onClick={handleClick}
            className="grid grid-cols-3 items-center my-2 mx-2 cursor-pointer transition duration-200 ease-in-out bg-[#F4F9FD] hover:bg-[#d3ebff] rounded-lg shadow-xl p-4"
        >
            <div
                className="flex flex-col items-center">
                
                <figure className="flex justify-center items-center mx-auto">
                    <img
                        className="w-[60px] h-[60px] rounded-full object-cover"
                        src={departamentosImagenes[departamento]}
                        alt="Icono de Departamento"
                    />
                </figure>

                <h3 className="text-[#457FBF] font-semibold text-xl">
                    {nombresPersonalizados[departamento] || departamento}
                </h3>

            </div>
            <h4 className="text-gray-500 text-sm mb-2">
                    Número de Empleados: {datos?.totalEmpleados || 'N/A'}
                </h4>
                <h5 className="text-sm text-blue-600 font-medium bg-[#E1F0FF] px-3 py-1 rounded-2xl flex items-center justify-center">
                    Salario total: {datos?.totalSalario ? `${datos.totalSalario} €` : 'No disponible'}
                </h5>
        </div>

    );
}


export default DeparmentCardSmall;
