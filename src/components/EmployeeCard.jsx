function EmployeeCard() {

    return <div className="flex gap-4">
        <div className=" p-8 text-center bg-[#62b0f0] hover:bg-[#0990fe] rounded-[30px] md:w-[300px] lg:w-[800px]" >
            <figure className="w-32 h-32 mx-auto lg:hidden"><img className="rounded-full w-full h-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_mAcrV3vVhLq6HK4c1liqGV59qhOwXdEGw&s" alt="" /></figure>
            <h3 >Nombre Empleado</h3>
            <h4>Apellidos</h4>
            <h5>Departamento</h5>
        </div>
    </div>
}

export default EmployeeCard;