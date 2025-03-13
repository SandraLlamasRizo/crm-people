function SearchEmployeeCard({empleado}) {

    return <>
        <div className="my-2 mx-2">
      <div className="w-full grid grid-cols-[0.5fr_repeat(3,1fr)] gap-2 bg-[#F4F9FD] hover:bg-[#d3ebff] rounded-[30px] p-4 items-start align-middle text-center">

        {/* Mostrar la imagen obtenida de Pexels */}
        <figure className="flex justify-center items-center w-[50px] h-[50px] mx-auto">
          <i class="bi bi-person-circle"></i>
        </figure>
        <h3 className="principalCard">{empleado.nombre}</h3>
        <h4 className="secundarionCard text-sm">{empleado.apellidos}</h4>
        <h5 className="secundarionCard text-sm">{empleado.email}</h5>
      </div>
    </div>
    </>
    
}

export default SearchEmployeeCard;