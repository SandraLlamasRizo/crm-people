function EmployeeCardLarge() {

    return <>
        <div className="h-[180px] m-8 mr-8">
  <div className="w-full grid grid-cols-3 md:grid-cols-6 bg-[#F4F9FD] hover:bg-[#d3ebff] rounded-[30px] p-4 items-center text-center">
    
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
                
    <div><i class="hidden md:block bi bi-three-dots-vertical"></i></div>

  </div>
</div>


    </>
}

export default EmployeeCardLarge;