import { useNavigate } from "react-router";


// Los nombres de los departamentos que exporto para reutilizarlos donde nos hagan falta:
export const nombresPersonalizados = {
    direccion: 'Dirección',
    diseño: 'Diseño',
    desarrollo: 'Desarrollo',
    recursoshumanos: 'Recursos Humanos',
};

// HE PUESTO ICONOS DEL MISMO ESTILO:
export const departamentosImagenes = {
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

        <div className="max-w-[500px] w-full h-auto rounded-lg shadow-xl overflow-hidden p-4 flex flex-col gap-4  bg-white mx-auto">
            <figure>
                <img
                    className="w-[100px] h-[100px] mx-auto"
                    src={departamentosImagenes[departamento]}
                    alt="Icono de Departamento"
                />
            </figure>
            <h3 className="text-center text-xl font-semibold text-[#457FBF] mb-5">
                {nombresPersonalizados[departamento] || departamento}
            </h3>
            <p className="text-center text-md text-gray-500 mb-3">
                Número de Empleados: {datos?.totalEmpleados || 'N/A'}
            </p>
            <div className="flex justify-center items-center gap-4 mb-4">
                <p className="text-sm text-blue-600 font-medium bg-[#E1F0FF] px-3 py-1 rounded-2xl w-[170px] h-[80px] flex flex-col items-center justify-center text-center">
                    <span>Salario medio:</span>
                    <span>{datos?.promSalario ? `${datos.promSalario}€` : 'N/A'}</span>
                </p>

                <p className="text-sm text-blue-600 font-medium bg-[#E1F0FF] px-3 py-1 rounded-2xl w-[170px] h-[80px] flex flex-col items-center justify-center text-center">
                    <span>Salario total:</span>
                    <span>{datos?.totalSalario ? `${datos.totalSalario}€` : 'N/A'}</span>
                </p>
            </div>

            <div className="bottom-4 right-4 flex flex-col items-end">
                <a
                    className="no-underlinetext-sm abslute flex flex-col items-end pr-4 mr font-normal hover:cursor-pointer text-[#47A7BD] hover:underline" onClick={handleClick}>
                    Ver más detalles
                </a>
            </div>
        </div>
    );
}

export default DepartmentCardLarge;
