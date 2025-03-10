import EmployeeCardLarge from "../components/EmployeeCardLarge";

function Employees() {

    return <>
        <div className="flex flex-row items-center md:items-start gap-4 p-8">
            <div className="flex-1 flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Empleados(0)</h2>
                <h6 className="text-xl">Gestiona tus empleados</h6>
            </div>
          
            <div className="flex-1 items-center gap-2">
                <label htmlFor="numItems" className="text-gray-700 dark:text-gray-500 font-medium">Elementos por pagina: </label>
                <select name="numItems" id="" className="px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
                <button className="flex-1 btn btn-light max-w-[191px] rounded-full px-4 py-2 text-white 0 text-lg bg-[#457FBF]"><i class="bi bi-plus"></i> Añadir empleado</button>
        </div>
        <div className="mx-10 grid grid-cols-[repeat(3,1fr)_0.5fr] md:grid-cols-[repeat(5,1fr)_0.5fr] gap-4 p-6 bg-[#F4F9FD] rounded-[30px] h-6 m-auto items-center content-center">
            <h6 className="col-start-2 md:col-start-2 text-center ">Nombre empleado</h6>
            <h6 className="col-start-2 md:col-start-2 text-center ">Nombre empleado</h6>
            <h6 className="col-start-3 md:col-start-4 text-center ">Departamento</h6>
            <h6 className="col-start-2 md:col-start-2 text-center ">Nombre empleado</h6>
        </div>

        <div>
            <EmployeeCardLarge/>
        </div>

        <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
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

    </>
    
}

export default Employees;