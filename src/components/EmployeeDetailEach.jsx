import DeparmentCardSmall from "./DepartmentsCardSmall"

function EmployeeDetailEach() {
    return (
        <>

            <div className=" p-6 grid grid-cols-2">

                <figure>
                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Foto de perfil" className="w-32 h-32 rounded-full" />
                </figure>



                <div>
                    <div className="mb-4">
                        <h1 className="text-3xl font-bold mb-4"> Nombre del empleado</h1>
                        <h2 className="text-2xl font-bold mb-4"> Apellidos</h2>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-bold">Email</h3>
                        <p className="text-gray-500">...</p>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-bold">Departamento</h3>
                        <p className="text-gray-500">...</p>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-bold">Salario</h3>
                        <p className="text-gray-500">...</p>
                    </div>



                </div>

            </div>

        </>
    )
}

export default EmployeeDetailEach