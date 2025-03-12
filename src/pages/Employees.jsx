import EmployeeCardLarge from "../components/EmployeeCardLarge";

function Employees() {

    return <>
        <div className="container">
            <h2 className="px-4 py-2 text-xl md:text-2xl font-bold">Gestiona tus empleados</h2>
            <div className="flex flex-row items-center">
                <div className="flex-1 pl-4">
                   <h6 className="text-md md:text-md">Empleados(0)</h6>
                </div>
            
                <div className="flex-2 flex flex-col-reverse lg:flex-row gap-2 items-end lg:items-center justify-end mr-4">
                    <label htmlFor="numItems" className="hidden md:inline min-w-[152px] text-sm md:text-md text-gray-800 font-medium">Empleados por pagina: </label>
                    <select name="numItems" id="" className="px-3 py-1 ml-auto md:ml-0 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                    <button className="flex-1 btn btn-light md:min-w-[195px] max-w-[195px] rounded-full px-4 py-2 text-white text-sm md:text-lg  bg-[#457FBF]"><i class="bi bi-plus"></i> Añadir empleado</button>
                </div>
                    
            </div>
            <div className="flex flex-col w-full">
                <EmployeeCardLarge />
                <EmployeeCardLarge />
                <EmployeeCardLarge />
                <EmployeeCardLarge />
                <EmployeeCardLarge/>
            </div>
            <div className="flex flex-col-reverse gap-4 md:flex-row items-center justify-between p-4 ">
                <span className="text-gray-700 text-sm">
                 Mostrando <strong>5</strong> de <strong>50</strong> elementos
                </span>
                <div className="flex gap-2">
                    <button className="buttonInactive min-w-[140px]"
                    disabled> ◀ Anterior </button>
                    <button className="buttonPrincipal min-w-[140px]"
                    >Siguiente  ▶ </button>
                </div>
            </div>
        </div>

    </>
    
}

export default Employees;