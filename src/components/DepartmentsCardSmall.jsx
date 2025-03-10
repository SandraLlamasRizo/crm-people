function DeparmentCardSmall() {
    return (
        <div className="w-full h-[180px]  rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 bg-[#F4F9FD] hover:bg-[#d3ebff] rounded-xl transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Nombre Departamento
                </h3>
                <h4 className="text-md text-gray-500 mb-4">Número de Empleados :</h4>
                <div className="flex justify-between items-center">
                    <h5 className="inline-block text-sm text-blue-600 font-medium bg-[#E1F0FF] p-2 rounded-full">
                        Rendimiento:
                    </h5>
                </div>
            </div>
        </div>
    );
}
{
    /* Mirar estilos y probrar diferentes tamaños de pantalla */
}

export default DeparmentCardSmall;
