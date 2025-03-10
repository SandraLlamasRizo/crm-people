import EmployeeCardLarge from "../components/EmployeeCardLarge";

function Employees() {

    return <>
        <div className="container ">
            <div className="flex flex-row items-center md:items-start gap-4 p-8">
                <div className="flex-1 flex flex-col gap-4 mt-6 md:mt-0">
                    <h2 className="text-xl md:text-2xl font-bold">Empleados(0)</h2>
                    <h6 className="text-md md:text-xl">Gestiona tus empleados</h6>
                </div>
            
                <div className="flex-1 items-center gap-2">
                    <label htmlFor="numItems" className="text-sm md:text-md text-gray-800 font-medium">Empleados por pagina: </label>
                    <select name="numItems" id="" className="px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
                    <button className="flex-1 btn btn-light max-w-[191px] rounded-full px-4 py-2 text-white text-sm md:text-lg text-lg bg-[#457FBF]"><i class="bi bi-plus"></i> Añadir empleado</button>
            </div>
            <div className=" grid grid-cols-[repeat(3,1fr)_0.5fr] md:grid-cols-[repeat(5,1fr)_0.5fr] gap-4 p-6 bg-[#F4F9FD] h-6 m-auto items-center content-center">
                <h6 className="col-start-2 md:col-start-2 text-center ">Nombre</h6>
                <h6 className="hidden md:block md:col-start-3 text-center ">Email</h6>
                <h6 className="col-start-3 md:col-start-4 text-center ">Departamento</h6>
                <h6 className="hidden md:block md:col-start-5 text-center ">Salario</h6>
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
                    <button className="px-3 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 transition"
                    disabled> ◀ </button>
                    <button className="px-3 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300  transition"
                    >  ▶ </button>
                </div>
            </div>
        </div>

    </>
    
}

export default Employees;