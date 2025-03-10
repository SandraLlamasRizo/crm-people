function EmployeeCardLarge() {

    return <>
        <div className="my-2 mx-auto">
  <div className="w-full grid grid-cols-[repeat(3,1fr)_0.5fr] md:grid-cols-[repeat(5,1fr)_0.5fr] bg-[#F4F9FD] hover:bg-[#d3ebff] rounded-[30px] p-4 items-center text-center">
    
    <figure className="w-[50px] h-[50px] mx-auto">
      <img className="rounded-full w-full h-full object-cover" 
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_mAcrV3vVhLq6HK4c1liqGV59qhOwXdEGw&s" 
           alt="" />
    </figure>

    <div>
      <h3 className="principalCard">Nombre Empleado</h3>
      <h4 className="secundarionCard">Apellidos</h4>
    </div>

    <h5 className="hidden md:block secundarionCard">Email</h5>

    <h5 className="secundarionCard">Departamento</h5>

    <h5 className="hidden md:block secundarionCard">Salario</h5>
                
    <div><i class="bi bi-three-dots-vertical"></i></div>

  </div>
</div>


    </>
}

export default EmployeeCardLarge;