import EmployeeDetailEach from "../components/EmployeeDetailEach";



function DetailEmployee() {

    return (
        <>

            <div className="container mx-auto">
                <EmployeeDetailEach />

            </div>
            <div>
                <a
                    href="/departments"
                    className="text-blue-500 no-underline hover:underline text-sm bottom-4 right-4 flex flex-col items-end pr-4"
                >
                    Volver a los empleados
                </a>
            </div>
        </>
    )
}

export default DetailEmployee;