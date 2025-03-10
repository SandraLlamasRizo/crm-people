function EmployeeCardSmall() {

    return <>
    <div className="flex gap-4 w-[174px] h-[180px]">
        <div className="p-3 text-center bg-[#F4F9FD] hover:bg-[#d3ebff] rounded-[30px]" >
            <figure className="w-[50px] h-[50px] mx-auto p-2"><img className="rounded-full w-full h-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_mAcrV3vVhLq6HK4c1liqGV59qhOwXdEGw&s" alt="" /></figure>
            <h3 className="principalCard pb-2">Nombre Empleado</h3>
            <h4 className="secundarioCard pb-3">Apellidos</h4>
            <h5 className="terciarioBorderCard inline-block p-1">Departamento</h5>
        </div>
        </div>
    </>
}

export default EmployeeCardSmall;