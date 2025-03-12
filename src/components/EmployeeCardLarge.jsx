function EmployeeCardLarge() {

    return <>
        <div className="my-2 mx-2">
  <div className="w-full grid grid-cols-[repeat(3,1fr)_0.5fr] md:grid-cols-[repeat(5,1fr)_0.5fr] bg-[#F4F9FD] hover:bg-[#d3ebff] rounded-[30px] p-4 items-center text-center">
    
    <figure className="flex justify-center items-center">
      <i className="bi bi-person-circle icon-large "></i>
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