function EmployeeCardSmall() {

    return <>
    <div className="flex gap-4 w-[174px] h-[180px]">
        <div className="p-3 text-center bg-[#F4F9FD] hover:bg-[#d3ebff] rounded-[30px]" >
            <figure className="flex justify-center items-center">
                <i className="bi bi-person-circle icon-large "></i>
            </figure>
            <h3 className="principalCard pb-2">Nombre Empleado</h3>
            <h4 className="secundarioCard pb-3">Apellidos</h4>
            <h5 className="terciarioBorderCard inline-block p-1">Departamento</h5>
        </div>
        </div>
    </>
}

export default EmployeeCardSmall;