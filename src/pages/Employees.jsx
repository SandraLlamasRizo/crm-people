import EmployeeCardLarge from "../components/EmployeeCardLarge";

function Employees() {

    return <>
        <div className="flex flex-row items-center md:items-start gap-4 p-8">
            <div className="flex-1 flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Empleados(0)</h2>
                <h6 className="text-xl">Gestiona tus empleados</h6>
            </div>
                <button className="flex-1 btn btn-light max-w-[191px] rounded-full px-4 py-2 text-white 0 text-lg bg-[#457FBF]"><i class="bi bi-plus"></i> Añadir empleado</button>
        </div>
        <div className="mx-10 grid grid-cols-3 md:grid-cols-5 gap-4 p-6 bg-[#F4F9FD] rounded-[30px] h-6 m-auto items-center content-center">
            <h6 className="col-start-2 md:col-start-2 text-center ">Nombre empleado</h6>
            <h6 className="col-start-3 md:col-start-4 text-center ">Departamento</h6>
        </div>
    <div>
      <EmployeeCardLarge/>
  </div>
    </>
    
}

export default Employees;