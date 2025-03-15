function DepartmentCardLarge({ departamento, datos }) {
    return (
        <div className="max-w-[500px] w-full h-[300px] rounded-lg shadow-xl overflow-hidden p-4 flex flex-col justify-between relative bg-white mx-auto">
            <div>
                <figure>
                    <img
                        className="w-[100px] h-[100px] mx-auto"
                        src="https://st4.depositphotos.com/12780408/26680/v/450/depositphotos_266802064-stock-illustration-marketing-department-vector-line-icon.jpg"
                        alt=""
                    />
                </figure>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {departamento}
                </h3>
                <h4 className="text-md text-gray-500 mb-3">Número de Empleados: {datos.totalEmpleados }</h4>
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
                    <a href="/dashboard/departments/:">Ver mas detalles</a>
                </h6>
            </div>
        </div>
    );
}

export default DepartmentCardLarge;
