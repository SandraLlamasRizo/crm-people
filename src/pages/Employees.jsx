import EmployeeCardLarge from "../components/EmployeeCardLarge";

function Employees() {

    return <>
        <div className="container ">
            <div className="flex flex-row items-center md:items-end gap-4 p-8">
                <div className="flex-1 flex flex-col gap-4 mt-6 md:mt-0">
                     
                    <h2 className="text-xl md:text-2xl font-bold">Gestiona tus empleados</h2>
                   <h6 className="text-md md:text-md">Empleados(0)</h6>
                </div>
            
                <div className="flex-1 items-center gap-2">
                    <label htmlFor="numItems" className="text-sm md:text-md text-gray-800 font-medium">Empleados por pagina: </label>
                    <select name="numItems" id="" className="px-3 py-1 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
                    <button className="flex-1 btn btn-light max-w-[191px] rounded-full px-4 py-2 text-white text-sm md:text-lg text-lg bg-[#457FBF]"><i class="bi bi-plus"></i> Añadir empleado</button>
            </div>
            <div className="flex flex-col w-full">
                <EmployeeCardLarge />
                <EmployeeCardLarge />
                <EmployeeCardLarge />
                <EmployeeCardLarge />
                <EmployeeCardLarge/>
            </div>
            <div className="flex items-center justify-between p-4 ">
                <span className="text-gray-700 text-sm">
                 Mostrando <strong>5</strong> de <strong>50</strong> elementos
                </span>
                <div className="flex gap-2">
                    <button className="px-3 py-2 text-white bg-[#457FBF] rounded-lg hover:bg-[#457FBF] disabled:opacity-50 transition"
                    disabled> ◀ Anterior </button>
                    <button className="px-3 py-2 text-white bg-[#457FBF] rounded-lg hover:bg-[#4b7297]  transition"
                    >Siguiente  ▶ </button>
                </div>
            </div>
        </div>

    </>
    
}

export default Employees;