function EmployeeCardLarge() {

    return <>
        <div className=" w-full h-[180px]">
        <div className="p-3 text-center bg-[#F4F9FD] hover:bg-[#d3ebff] rounded-[30px] " >
            <figure className="w-[50px] h-[50px] mx-auto "><img className="rounded-full w-full h-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_mAcrV3vVhLq6HK4c1liqGV59qhOwXdEGw&s" alt="" /></figure>
            <h3 className="nameCard">Nombre Empleado</h3>
            <h4 className="lastnameCard">Apellidos</h4>
            <h5 className="departmentCard inline-block p-1">Departamento</h5>
        </div>
    </div>
    </>
}

export default EmployeeCardLarge;